<%*
    const { 
        DIRECTORIOS: { coleccion: { self: DIRECTORIO_COLECCION, funciones: DIRECTORIO_FUNCIONES } },
        TAGS: { 
            coleccion: { funciones: TAGS_FUNCIONES },
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

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let [ LENGUAJE, LIBRERIA, MODULO ] = tp.file.title.split("-").map(text => text.trim());

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(LENGUAJE);
    let tagPath = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_PARAMETROS.lenguaje.temaInvestigacion].path);

    let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
        .map(tag => `${tag}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}/${tagPorNombre(`${LIBRERIA}/${MODULO}`)}`);
    tagPath += `/${tagPorNombre(`${LIBRERIA}/${MODULO}`)}`;

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml({
        [DATOS_PARAMETROS.funcion.tags]: [
            tagPath,
            `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.funcion}`,
            ... tagsInvestigacion,
            `${TAGS_NOTA.self}/${TAGS_NOTA.investigacion}`,
        ],
        [DATOS_PARAMETROS.funcion.firma.self]: resultado[FUNCION],
    });
    tR += "---\n";
_%>