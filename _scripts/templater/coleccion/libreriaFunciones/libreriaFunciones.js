const LENGUAJE = "Lenguaje";
const LIBRERIA = "Libreria";
const MODULO = "modulo";
const FUNCION = "funcion";

const AGREGAR = "agregar";
const SALIR = "salir";


function obtenerDefault(tp, TIPOS_DE_DEFAULT, crearFuncion) {
    return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
        [LENGUAJE]: TIPOS_DE_DEFAULT.simple,
        [LIBRERIA]: TIPOS_DE_DEFAULT.simple,
        [MODULO]: TIPOS_DE_DEFAULT.simple,
        [FUNCION]: tp.user.lenguajes().obtenerDefault(tp, null, TIPOS_DE_DEFAULT, crearFuncion),
    }));
}

async function actualizarDatos(tp, datos, respuesta) {
    const { 
        SIMBOLOS, DATOS: { FUNCIONES: DATOS_FUNCIONES },
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
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
            librerias = dv.pages(`#${tagAcumulado} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.libreria}`)
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
            modulos = dv.pages(`#${tagAcumulado} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.modulo}`)
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
                tp, preguntasLenguaje.obtenerDefault.bind(null, tp, datos[LENGUAJE]),
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
    const preguntasLenguaje = tp.user.lenguajes();

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

        opciones.push(FUNCION);
        valores.push(preguntasLenguaje.esValido(tp, datos[FUNCION], datos[LENGUAJE])
            ? ` ${SIMBOLOS.modificar} Modificar la función, donde era ${usoLenguaje.describir(tp, datos[FUNCION], datos[LENGUAJE])}`
            : ` ${SIMBOLOS.agregar} Función`
        )
    }

    if ([LENGUAJE, LIBRERIA].every(key => datos[key]) && preguntasLenguaje.esValido(tp, datos[FUNCION], datos[LENGUAJE])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

async function crearNuevaFuncion(tp) {
    const { 
        DIRECTORIOS: { coleccion: { self: DIRECTORIO_COLECCION, funciones: DIRECTORIO_FUNCIONES } },
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES }, nota: TAGS_NOTA },
        DATOS: { INVESTIGACION: DATOS_INVESTIGACION, FUNCIONES: DATOS_FUNCIONES },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;

    const dv = app.plugins.plugins.dataview.api;

    let resultado = await tp.user.crearPreguntas(
        tp, obtenerDefault.bind(null, tp), 
        actualizarDatos, generarPreguntas, "Agregar función",
    );

    await agregarDatos(tp, resultado);

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(resultado[LENGUAJE]);

    let nombreArchivo = `Función ${resultado[FUNCION][DATOS_FUNCIONES.funcion.firma.nombreFuncion]}`
    let tagPath = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_FUNCIONES.lenguaje.temaInvestigacion].path);
    let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
        .map(tag => `${tag}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}`);

    let carpeta = `${DIRECTORIO_COLECCION}/${DIRECTORIO_FUNCIONES.self}/${DIRECTORIO_FUNCIONES[keyLenguaje]}`;

    carpeta += `/${resultado[LIBRERIA]}`;
    tagPath += `/${tagPorNombre(resultado[LIBRERIA])}`;
    tagsInvestigacion = tagsInvestigacion
        .map(tag => `${tag}/${tagPorNombre(resultado[LIBRERIA])}`);

    if (resultado[MODULO]) { 
        nombreArchivo += ` del módulo ${resultado[MODULO]}`;
        carpeta += `/${resultado[MODULO]}`;
        tagPath += `/${tagPorNombre(resultado[MODULO])}`;
        tagsInvestigacion = tagsInvestigacion
            .map(tag => `${tag}/${tagPorNombre(resultado[MODULO])}`);
    }

    nombreArchivo += ` de ${resultado[LIBRERIA]} en ${resultado[LENGUAJE]}`;
    tagPath += `/${tagPorNombre(resultado[FUNCION][DATOS_FUNCIONES.funcion.firma.nombreFuncion])}`;

    return {
        metadata: {
            [DATOS_FUNCIONES.funcion.tags]: [
                tagPath,
                `${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.funcion}`,
                ...tagsInvestigacion,
                `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
            ],
            [DATOS_FUNCIONES.funcion.firma.self]: resultado[FUNCION],
        },
        carpeta: carpeta,
        titulo: nombreArchivo,
        texto: "",
    }
}

async function crearLibreria(tp, lenguaje, libreria) {
    const { 
        TEMPLATE: { coleccion: TEMPLATE_COLECCION }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION },
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES }, investigacion: TAGS_INVESTIGACION  }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES, INVESTIGACION: DATOS_INVESTIGACION },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const dv = app.plugins.plugins.dataview.api;

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(lenguaje);

    let tagPath = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}`;
    let tagFuncion = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${tagFuncion}/${TAGS_FUNCIONES.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_FUNCIONES.lenguaje.temaInvestigacion].path);

    let tags = [`${tagPath}/${tagPorNombre(libreria)}`, `${tagFuncion}/${TAGS_FUNCIONES.libreria}`];
    if (dvLenguaje) {
        let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
            .map(tag => `${tag}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}/${tagPorNombre(`${libreria}`)}`);
        
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
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES }, investigacion: TAGS_INVESTIGACION  }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES, INVESTIGACION: DATOS_INVESTIGACION },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const dv = app.plugins.plugins.dataview.api;

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(lenguaje);

    let tagPath = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}`;
    let tagFuncion = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${tagFuncion}/${TAGS_FUNCIONES.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_FUNCIONES.lenguaje.temaInvestigacion].path);

    let tags = [`${tagPath}/${tagPorNombre(`${libreria}/${modulo}`)}`, `${tagFuncion}/${TAGS_FUNCIONES.modulo}`];
    if (dvLenguaje) {
        let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
            .map(tag => `${tag}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}/${tagPorNombre(`${libreria}/${modulo}`)}`);
        
        tags.push(`${TAGS_INVESTIGACION.self}/${TAGS_INVESTIGACION.indice}`);
        tags = tags.concat(tagsInvestigacion);
    }

    let dvLibreria = dv.pages(`#${tagPath}/${tagPorNombre(libreria)} and #${tagFuncion}/${TAGS_FUNCIONES.libreria}`)
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
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const crearArchivo = tp.user.archivo();
    const dv = app.plugins.plugins.dataview.api;

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(datos[LENGUAJE]);

    let tagLenguaje = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}`;
    let tagLibreria = `${tagLenguaje}/${tagPorNombre(datos[LIBRERIA])}`;

    let libreria = dv.pages(`#${tagLibreria} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.libreria}`).first();
    if (!libreria) {
        await crearArchivo.crear(tp, () => crearLibreria(tp, datos[LENGUAJE], datos[LIBRERIA]));
    } 

    if (datos[MODULO]) {
        let tagModulo = `${tagLibreria}/${tagPorNombre(datos[MODULO])}`;
        let modulos = dv.pages(`#${tagModulo} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.modulo}`);
        if (!modulos.first()) {
            await crearArchivo.crear(tp, () => crearModulo(tp, datos[LENGUAJE], datos[LIBRERIA], datos[MODULO]));
        }
    }
}

module.exports = () => ({
    obtenerDefault: obtenerDefault,
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    crear: {
        funcion: crearNuevaFuncion,
        libreria: crearLibreria,
        modulo: crearModulo,
    },
});