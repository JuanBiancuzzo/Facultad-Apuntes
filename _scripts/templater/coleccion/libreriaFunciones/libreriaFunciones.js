const LENGUAJE = "Lenguaje";
const LIBRERIA = "Libreria";
const MODULO = "modulo";
const FUNCION = "funcion";

const AGREGAR = "agregar";
const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta) {
    const { 
        SIMBOLOS,
        TAGS: { coleccion: TAGS_COLECCION }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES } 
    } = tp.user.constantes(); 

    const tagPorNombre = tp.user.tagPorNombre;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const dv = app.plugins.plugins.dataview.api;

    let resultado, tagAcumulado, keyLenguaje, lenguajes, librerias, modulos;
    let salir = false;

    switch (respuesta) {
        case LENGUAJE:
            lenguajes = Object.values(DATOS_FUNCIONES.lenguaje.lenguajes);

            resultado = lenguajes.first();
            if (lenguajes.length > 1) {
                resultado = await preguntar.suggester(
                    tp, (lenguaje) => `Lenguaje ${lenguaje}`, lenguajes,
                    "Como se llama el lenguaje?",
                    error.Prompt("No se ingresó el lenguaje")
                );
            }

            datos[LENGUAJE] = resultado;
            break;

        case LIBRERIA:
            keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(datos[LENGUAJE]);
            tagAcumulado = `${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.lenguajes[keyLenguaje]}`;
            librerias = dv.pages(`#${tagAcumulado} and #${TAGS_COLECCION.self}/${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.libreria}`)
                .map(libreria => libreria[DATOS_FUNCIONES.libreria.nombre]);

            resultado = AGREGAR;
            if (librerias.length > 0) {
                resultado = await preguntar.suggester(
                    tp, [` ${SIMBOLOS.agregar} Agregar libreria`, ...librerias],
                    [AGREGAR, ...librerias], "Como se llama la libreria?",
                    error.Prompt("No se ingresó la libreria")
                );
            }

            if (resultado == AGREGAR) {
                resultado = await preguntar.prompt(
                    tp, datos[LIBRERIA] 
                        ? `Nuevo nombre de la libreria, donde antes era ${datos[LIBRERIA]}`
                        : "Nombre de la libreria"
                );
            }

            datos[LIBRERIA] = resultado;
            break;

        case MODULO:
            keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(datos[LENGUAJE]);
            tagAcumulado = `${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.lenguajes[keyLenguaje]}/${tagPorNombre(datos[LIBRERIA])}`;
            modulos = dv.pages(`#${tagAcumulado} and #${TAGS_COLECCION.self}/${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.modulo}`)
                .map(modulo => modulo[DATOS_FUNCIONES.modulo.nombre]);

            resultado = AGREGAR;
            if (modulos.length > 0) {
                resultado = await preguntar.suggester(
                    tp, [` ${SIMBOLOS.agregar} Agregar modulo`, ...modulos],
                    [AGREGAR, ...modulos], "Como se llama el módulo?",
                    error.Prompt("No se ingresó el modulo")
                );
            }

            if (resultado == AGREGAR) {
                resultado = await preguntar.prompt(
                    tp, datos[MODULO] 
                        ? `Nuevo nombre del módulo, donde antes era ${datos[MODULO]}`
                        : "Nombre del módulo"
                );
            }

            datos[MODULO] = resultado;
            break;

        case FUNCION:
            const preguntasLenguaje = tp.user.lenguajes();
            datos[FUNCION] = await tp.user.crearPreguntas(
                tp, () => preguntasLenguaje.obtenerDefault(tp),
                (tp, datosDato, respuestaDada) => preguntasLenguaje.actualizarDatos(tp, datosDato, respuestaDada, datos[LENGUAJE]), 
                (tp, datosDato) => preguntasLenguaje.generarPreguntas(tp, datosDato, datos[LENGUAJE]), 
                "Definir la función que se quiere ingresar",
                datos[FUNCION] ? datos[FUNCION] : {}
            );
            break;

        case SALIR: 
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { SIMBOLOS } = tp.user.constantes(); 
    const usoLenguaje = tp.user.lenguajes();
    let opciones = [], valores = [];

    opciones.push(LENGUAJE);
    if (!datos[LENGUAJE]) {
        valores.push(` ${SIMBOLOS.agregar} Lenguaje`);
    } else {
        valores.push(` ${SIMBOLOS.modificar} Modificar el lenguaje, donde era ${datos[LENGUAJE]}`);

        opciones.push(LIBRERIA);
        if (!datos[LIBRERIA]) {
            valores.push(` ${SIMBOLOS.agregar} Libreria`);
        } else {
            valores.push(` ${SIMBOLOS.modificar} Modificar la libreria, donde era ${datos[LIBRERIA]}`);

            opciones.push(MODULO);
            valores.push(datos[MODULO]
                ? ` ${SIMBOLOS.modificar} Modificar el modulo, donde era ${datos[MODULO]}`
                : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Modulo`
            );
        }
    }

    opciones.push(FUNCION);
    valores.push(datos[FUNCION]
        ? ` ${SIMBOLOS.modificar} Modificar la función, donde era ${usoLenguaje.describir(tp, datos[FUNCION], datos[LENGUAJE])}`
        : ` ${SIMBOLOS.agregar} Función`
    )

    if ([LENGUAJE, LIBRERIA, FUNCION].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

async function crearLibreria(tp, lenguaje, libreria) {
    const { 
        TEMPLATE: { coleccion: TEMPLATE_COLECCION }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION },
        TAGS: { coleccion:  TAGS_COLECCION, investigacion: TAGS_INVESTIGACION }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES, INVESTIGACION: DATOS_INVESTIGACION },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const dv = app.plugins.plugins.dataview.api;

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(lenguaje);

    let tagPath = `${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.lenguajes[keyLenguaje]}`;
    let tagFuncion = `${TAGS_COLECCION.self}/${TAGS_COLECCION.funciones.self}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${tagFuncion}/${TAGS_COLECCION.funciones.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_FUNCIONES.lenguaje.temaInvestigacion].path);

    let tags = [`${tagPath}/${tagPorNombre(libreria)}`, `${tagFuncion}/${TAGS_COLECCION.funciones.libreria}`];
    if (dvLenguaje) {
        let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
            .map(tag => `${tag}/${TAGS_COLECCION.funciones.lenguajes[keyLenguaje]}/${tagPorNombre(`${libreria}`)}`);
        
        tags.push(`${TAGS_INVESTIGACION.self}/${TAGS_INVESTIGACION.indice}`);
        tags = tags.concat(tagsInvestigacion);
    }

    return {
        metadata: {
            [DATOS_FUNCIONES.libreria.tags]: tags,
            [DATOS_FUNCIONES.libreria.nombre]: libreria,
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_COLECCION.funciones.self}/${DIR_COLECCION.funciones[keyLenguaje]}/${libreria}`,
        titulo: DATOS_FUNCIONES.libreria.obtenerTitulo(lenguaje, libreria),
        texto: await tp.file.include(`[[${TEMPLATE_COLECCION.funciones.libreria}]]`),
    };
}

async function crearModulo(tp, lenguaje, libreria, modulo) {
    const { 
        TEMPLATE: { coleccion: TEMPLATE_COLECCION }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION },
        TAGS: { coleccion:  TAGS_COLECCION, investigacion: TAGS_INVESTIGACION }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES, INVESTIGACION: DATOS_INVESTIGACION },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const dv = app.plugins.plugins.dataview.api;

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(lenguaje);

    let tagPath = `${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.lenguajes[keyLenguaje]}`;
    let tagFuncion = `${TAGS_COLECCION.self}/${TAGS_COLECCION.funciones.self}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${tagFuncion}/${TAGS_COLECCION.funciones.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_FUNCIONES.lenguaje.temaInvestigacion].path);

    let tags = [`${tagPath}/${tagPorNombre(`${libreria}/${modulo}`)}`, `${tagFuncion}/${TAGS_COLECCION.funciones.modulo}`];
    if (dvLenguaje) {
        let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
            .map(tag => `${tag}/${TAGS_COLECCION.funciones.lenguajes[keyLenguaje]}/${tagPorNombre(`${libreria}/${modulo}`)}`);
        
        tags.push(`${TAGS_INVESTIGACION.self}/${TAGS_INVESTIGACION.indice}`);
        tags = tags.concat(tagsInvestigacion);
    }

    let dvLibreria = dv.pages(`#${tagPath}/${tagPorNombre(libreria)} and #${tagFuncion}/${TAGS_COLECCION.funciones.libreria}`)
        .first();
    let carpetaLibreria = dvLibreria
        ? dvLibreria.file.folder
        : `${DIR_COLECCION.self}/${DIR_COLECCION.funciones.self}/${DIR_COLECCION.funciones[keyLenguaje]}/${libreria}`;

    return {
        metadata: {
            [DATOS_FUNCIONES.modulo.tags]: tags,
            [DATOS_FUNCIONES.modulo.nombre]: modulo,
        },
        carpeta: `${carpetaLibreria}/${modulo}`,
        titulo: DATOS_FUNCIONES.modulo.obtenerTitulo(lenguaje, libreria, modulo),
        texto: await tp.file.include(`[[${TEMPLATE_COLECCION.funciones.modulo}]]`),
    };
}

async function agregarDatos(tp, datos) {
    const { 
        TAGS: { coleccion: TAGS_COLECCION }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const crearArchivo = tp.user.archivo();
    const dv = app.plugins.plugins.dataview.api;

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(datos[LENGUAJE]);

    let tagLenguaje = `${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.lenguajes[keyLenguaje]}`;
    let tagLibreria = `${tagLenguaje}/${tagPorNombre(datos[LIBRERIA])}`;

    let libreria = dv.pages(`#${tagLibreria} and #${TAGS_COLECCION.self}/${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.libreria}`).first();
    if (!libreria) {
        await crearArchivo.crear(tp, () => crearLibreria(tp, datos[LENGUAJE], datos[LIBRERIA]));
    } 

    if (datos[MODULO]) {
        let tagModulo = `${tagLibreria}/${tagPorNombre(datos[MODULO])}`;
        let modulos = dv.pages(`#${tagModulo} and #${TAGS_COLECCION.self}/${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.modulo}`);
        if (!modulos.first()) {
            await crearArchivo.crear(tp, () => crearModulo(tp, datos[LENGUAJE], datos[LIBRERIA], datos[MODULO]));
        }
    }
}

module.exports = () => ({
    obtenerDefault: () => ({
        [LENGUAJE]: null,
        [LIBRERIA]: null,
        [MODULO]: null,
        [FUNCION]: null,
    }),
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    agregarDatos: agregarDatos,
    crear: {
        libreria: crearLibreria,
        modulo: crearModulo,
    },
    estructura: [ LENGUAJE, LIBRERIA, MODULO, FUNCION ],
});