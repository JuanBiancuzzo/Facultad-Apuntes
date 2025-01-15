const LENGUAJE = "Lenguaje";
const LIBRERIA = "Libreria";
const MODULO = "modulo";
const FUNCION = "funcion";

const AGREGAR = "agregar";
const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta) {
    const { 
        SIMBOLOS,
        TAGS: { coleccion: { funciones: TAGS_FUNCIONES } }, 
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
            tagAcumulado = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}`;
            librerias = dv.pages(`#${tagAcumulado} and #${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.libreria}`)
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
            tagAcumulado = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}/${tagPorNombre(datos[LIBRERIA])}`;
            modulos = dv.pages(`#${tagAcumulado} and #${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.modulo}`)
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
    const { 
        SIMBOLOS,
        TAGS: { coleccion: { funciones: TAGS_FUNCIONES } }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES } 
    } = tp.user.constantes(); 
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

async function crearArchivo(tp, nombre, carpeta, template) {
    let tCarpeta;
    try {
        tCarpeta = await app.vault.createFolder(carpeta);
    } catch {
        tCarpeta = app.vault.getAbstractFileByPath(carpeta);
    }

    new Notice("Creando...");
    console.log("Creando...");

    console.log(template, nombre, carpeta);
    console.log(tp.file.find_tfile(template));

    return await tp.file.create_new(
        tp.file.find_tfile(template),
        nombre, false, tCarpeta
    );
}

async function agregarDatos(tp, datos) {
    const { 
        TEMPLATE: { coleccion: { funciones: TEMPLATE_FUNCIONES } }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION },
        TAGS: { coleccion: { funciones: TAGS_FUNCIONES } }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const dv = app.plugins.plugins.dataview.api;

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(datos[LENGUAJE]);

    let tagLenguaje = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}`;
    let tagLibreria = `${tagLenguaje}/${tagPorNombre(datos[LIBRERIA])}`;

    let nombreLibreria = `${datos[LENGUAJE]} - ${datos[LIBRERIA]}`;
    let carpetaLibreria = `${DIR_COLECCION.self}/${DIR_COLECCION.funciones.self}/${DIR_COLECCION.funciones[keyLenguaje]}/${datos[LIBRERIA]}`;

    let libreria = dv.pages(`#${tagLibreria} and #${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.libreria}`).first();
    if (!libreria) {
        await crearArchivo(tp, nombreLibreria, carpetaLibreria, TEMPLATE_FUNCIONES.libreria);
    } else {
        carpetaLibreria = libreria.file.folder;
    }

    if (datos[MODULO]) {
        let tagModulo = `${tagLibreria}/${tagPorNombre(datos[MODULO])}`;
        let nombreModulo = `${nombreLibreria} - ${datos[MODULO]}`;
        let carpetaModulo = `${carpetaLibreria}/${datos[MODULO]}`;

        let modulos = dv.pages(`#${tagModulo} and #${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.modulo}`);
        if (!modulos.first()) {
            await crearArchivo(tp, nombreModulo, carpetaModulo, TEMPLATE_FUNCIONES.modulo);
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
    estructura: [ LENGUAJE, LIBRERIA, MODULO, FUNCION ],
});