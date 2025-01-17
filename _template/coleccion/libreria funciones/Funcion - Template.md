<%*
    const { 
        DIRECTORIOS: { coleccion: { self: DIRECTORIO_COLECCION, funciones: DIRECTORIO_FUNCIONES } },
        TAGS: { 
            coleccion: TAGS_COLECCION,
            nota: TAGS_NOTA,
        },
        DATOS: { 
            INVESTIGACION: DATOS_INVESTIGACION,
            FUNCIONES: DATOS_FUNCIONES 
        },
    } = tp.user.constantes();
    const libreriaFunciones = tp.user.libreriaFunciones();
    const tagPorNombre = tp.user.tagPorNombre;
    const error = tp.user.error();
    const DATOS_LENGUAJES = DATOS_FUNCIONES.lenguaje.lenguajes;
    const [ LENGUAJE, LIBRERIA, MODULO, FUNCION ] = libreriaFunciones.estructura;

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let resultado = await tp.user.crearPreguntas(
        tp, libreriaFunciones.obtenerDefault, libreriaFunciones.actualizarDatos,
        libreriaFunciones.generarPreguntas, "Agregar función",
    );

    await libreriaFunciones.agregarDatos(tp, resultado);

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(resultado[LENGUAJE]);

    let nombreArchivo = `Función ${resultado[FUNCION][DATOS_FUNCIONES.funcion.firma.nombreFuncion]}`
    let tagPath = `${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.lenguajes[keyLenguaje]}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${TAGS_COLECCION.self}/${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_FUNCIONES.lenguaje.temaInvestigacion].path);
    let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
        .map(tag => `${tag}/${TAGS_COLECCION.funciones.lenguajes[keyLenguaje]}`);

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

    await tp.file.move(`${carpeta}/${nombreArchivo}`, tArchivo);

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml({
        [DATOS_FUNCIONES.funcion.tags]: [
            tagPath,
            `${TAGS_COLECCION.self}/${TAGS_COLECCION.funciones.self}/${TAGS_COLECCION.funciones.funcion}`,
            ... tagsInvestigacion,
            `${TAGS_NOTA.self}/${TAGS_NOTA.investigacion}`,
        ],
        [DATOS_FUNCIONES.funcion.firma.self]: resultado[FUNCION],
    });
    tR += "---\n";
_%>