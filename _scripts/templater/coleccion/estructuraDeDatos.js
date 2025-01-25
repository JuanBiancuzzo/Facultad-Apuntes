const MODIFICAR_ESTRUCTURA = "modificar estructura";
const ELIMINAR_ESTRUCTURA = "eliminar estructura";

const MODIFICAR_METODO = "modificar metodo";
const ELIMINAR_METODO = "eliminar metodo";

const SALIR = "salir";

async function crearEstructura(tp) {
    const {
        ETAPAS, FORMATO_DIA, SECCIONES,
        TEMPLATE: { etapa: TEMPLATE_ETAPA, coleccion: { estructuraDatos: TEMPLATE_ESTRUCTURA } }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION }, 
        DATOS: { 
            ARCHIVO: DATOS_ARCHIVO, ESTRUCTURA_DATOS: DATOS_ESTRUCTURA,
            FUNCIONES: { funcion: { firma: DATOS_FUNCION } }
        },
        TAGS: { 
            coleccion: { self: TAG_COLECCION, representante: TAG_REPRESENTANTE, estructuraDatos: TAGS_ESTRUCTURAS },
            nota: TAGS_NOTA,
        },
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    let titulo = tp.file.title;
    let datosPrevios = {
        [DATOS_ESTRUCTURA.nombre]: !titulo.startsWith("Untitle")
            ? titulo
            : null,
    };

    let datos = await tp.user.crearPreguntas(
        tp, obtenerDefault.bind(null, tp), actualizarDatos,
        generarPreguntas, "Ingresar datos de la estructura", datosPrevios
    );

    let representante = dv.pages(`#${TAG_COLECCION}/${TAG_REPRESENTANTE} and #${TAG_COLECCION}/${TAGS_ESTRUCTURAS.self}`)
        .first();

    let texto = await tp.file.include(`[[${TEMPLATE_ETAPA}]]`);
    texto += await tp.file.include(`[[${TEMPLATE_ESTRUCTURA.infoGeneral}]]`);
    texto += `\n\n${"#".repeat(SECCIONES.operaciones.nivel)} ${SECCIONES.operaciones.texto}\n---\n`;
    texto += "Vamos a ver las operaciones que deben existir para que se pueda usar esta estructura\n\n";
    for (let funcion of datos[DATOS_ESTRUCTURA.metodos]) {
        texto += `${"#".repeat(SECCIONES.metodo.nivel)} ${funcion[DATOS_FUNCION.nombreFuncion]}\n---\n`;
        // texto += await tp.file.include(`[[${TEMPLATE_ESTRUCTURA.representarMetodoDv}]]`);
        texto += "\n\n";
    }

    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.etapa]: ETAPAS.empezado,
            [DATOS_ARCHIVO.tags]: [
                ...tp.user.obtenerTag(tp, representante[DATOS_ARCHIVO.tags]),
                `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
                `${TAG_COLECCION}/${TAGS_ESTRUCTURAS.self}/${TAGS_ESTRUCTURAS.estructura}`,
            ],
            ...datos,
        },
        carpeta: representante
            ? representante.file.folder
            : `${DIR_COLECCION.self}/${DIR_COLECCION.estructuraDatos}`,
        titulo: datos[DATOS_ESTRUCTURA.nombre],
        texto: texto,
    }
}

function obtenerDefault(tp, TIPOS_DE_DEFAULT, crearFuncion) {
    const { DATOS: { ESTRUCTURA_DATOS: DATOS_ESTRUCTURA } } = tp.user.constantes();
    const infoFuncion = tp.user.funcion();
    const infoStruct = tp.user.struct();
    
    return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
        [DATOS_ESTRUCTURA.nombre]: TIPOS_DE_DEFAULT.simple,
        [DATOS_ESTRUCTURA.estructuras]: crearFuncion(
            TIPOS_DE_DEFAULT.array,
            () => infoStruct.obtenerDefault(tp, TIPOS_DE_DEFAULT, crearFuncion),
        ),
        [DATOS_ESTRUCTURA.metodos]: crearFuncion(
            TIPOS_DE_DEFAULT.array,
            () => infoFuncion.obtenerDefault(tp, TIPOS_DE_DEFAULT, crearFuncion),
        ),
    }));
}

async function actualizarDatos(tp, datos, respuesta) {
    const { DATOS: { ESTRUCTURA_DATOS: DATOS_ESTRUCTURA } } = tp.user.constantes(); 
    const infoFuncion = tp.user.funcion();
    const infoStruct = tp.user.struct();

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case DATOS_ESTRUCTURA.nombre:
            datos[DATOS_ESTRUCTURA.nombre] = await preguntar.prompt(
                tp, datos[DATOS_ESTRUCTURA.nombre]
                    ? `Nuevo nombre de la estructura, donde antes era ${datos[DATOS_ESTRUCTURA.nombre]}`
                    : "Nombre de la estructura",
                error.Quit("No se ingresó el nombre de la estructura")
            );
            break;

        case MODIFICAR_ESTRUCTURA:
            indice = separacion[1];

        case DATOS_ESTRUCTURA.estructuras: 
            let estructuraPrevia;
            if (indice) estructuraPrevia = datos[DATOS_ESTRUCTURA.estructuras][indice];

            let estructura = await tp.user.crearPreguntas(
                tp, infoStruct.obtenerDefault.bind(null, tp, null), 
                infoStruct.actualizarDatos, infoStruct.generarPreguntas,
                "Ingresar la estructura representantivo del la estructura de datos", 
                estructuraPrevia
            );

            if (indice) {
                datos[DATOS_ESTRUCTURA.estructuras][indice] = estructura; 
            } else {
                datos[DATOS_ESTRUCTURA.estructuras].push(estructura);
            }
            break;

        case ELIMINAR_ESTRUCTURA:
            datos[DATOS_ESTRUCTURA.estructuras].pop();
            break;

        case MODIFICAR_METODO:
            indice = separacion[1];

        case DATOS_ESTRUCTURA.metodos: 
            let metodoPrevio;
            if (indice) metodoPrevio = datos[DATOS_ESTRUCTURA.metodos][indice];

            let metodo = await tp.user.crearPreguntas(
                tp, infoFuncion.obtenerDefault.bind(null, tp, null), 
                infoFuncion.actualizarDatos, infoFuncion.generarPreguntas,
                "Ingresar el método del la estructura de datos", 
                metodoPrevio
            );

            if (indice) {
                datos[DATOS_ESTRUCTURA.metodos][indice] = metodo; 
            } else {
                datos[DATOS_ESTRUCTURA.metodos].push(metodo);
            }
            break;

        case ELIMINAR_METODO:
            datos[DATOS_ESTRUCTURA.metodos].pop();
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { SIMBOLOS, DATOS: { ESTRUCTURA_DATOS: DATOS_ESTRUCTURA } } = tp.user.constantes(); 
    const infoFuncion = tp.user.funcion();
    const infoStruct = tp.user.struct();

    let opciones = [], valores = [];

    opciones.push(DATOS_ESTRUCTURA.nombre);
    valores.push(datos[DATOS_ESTRUCTURA.nombre]
        ? ` ${SIMBOLOS.modificar} Modificar el nombre de la estructura, donde era ${datos[DATOS_ESTRUCTURA.nombre]}`
        : ` ${SIMBOLOS.agregar} Nombre de la estructura`
    )

    for (let [indice, estructura] of datos[DATOS_ESTRUCTURA.estructuras].entries()) {
        opciones.push(`${MODIFICAR_ESTRUCTURA}-${indice}`);
        valores.push(`️ ${SIMBOLOS.modificar} Modificar la estructura, donde es: \n\t${infoStruct.describir(tp, estructura).replaceAll("\n", "\n\t")}`);
    }

    if (datos[DATOS_ESTRUCTURA.estructuras].length > 0) {
        let ultimaEstructura = datos[DATOS_ESTRUCTURA.estructuras].last();
        opciones.push(ELIMINAR_ESTRUCTURA);
        valores.push(` ${SIMBOLOS.sacar} Eliminar la estructura, donde es: \n\t${infoStruct.describir(tp, ultimaEstructura).replaceAll("\n", "\n\t")}`);

        opciones.push(DATOS_ESTRUCTURA.estructuras);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Estructura`);

    } else {
        opciones.push(DATOS_ESTRUCTURA.estructuras);
        valores.push(` ${SIMBOLOS.agregar} Estructura`);
    }

    for (let [indice, metodo] of datos[DATOS_ESTRUCTURA.metodos].entries()) {
        opciones.push(`${MODIFICAR_METODO}-${indice}`);
        valores.push(`️ ${SIMBOLOS.modificar} Modificar el método, donde es ${infoFuncion.describir(tp, metodo)}`);
    }

    if (datos[DATOS_ESTRUCTURA.metodos].length > 0) {
        let ultimoMetodo = datos[DATOS_ESTRUCTURA.metodos].last();
        opciones.push(ELIMINAR_METODO);
        valores.push(` ${SIMBOLOS.sacar} Eliminar el método, donde es ${infoFuncion.describir(tp, ultimoMetodo)}`);

        opciones.push(DATOS_ESTRUCTURA.metodos);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Método`);

    } else {
        opciones.push(DATOS_ESTRUCTURA.metodos);
        valores.push(` ${SIMBOLOS.agregar} Método`);
    }

    if (datos[DATOS_ESTRUCTURA.nombre] && datos[DATOS_ESTRUCTURA.estructuras].length > 0 && datos[DATOS_ESTRUCTURA.metodos].length > 0) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

async function editar(tp) {

}

module.exports = () => ({
    editar: editar,
    obtenerDefault: obtenerDefault,
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    crear: {
        estructura: crearEstructura,
    },
});