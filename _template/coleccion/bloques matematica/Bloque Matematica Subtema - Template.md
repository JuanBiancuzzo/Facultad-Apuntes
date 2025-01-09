<%*
    const { 
        TAGS: { coleccion: { bloqueMatematica: TAGS_MATEMATICA } }, 
        DATOS: { BLOQUES_MATEMATICA: DATOS_BLOQUES_MATEMATICA } 
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    let carpeta = tp.file.folder(true);

    let nombreTemaTag = tp.user.tagPorNombre(carpeta.split("/").last());
    let nombreSubtemaTag = tp.user.tagPorNombre(tp.file.title);

    let subtemas = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`);
    let numero = 1;
    if (subtemas.length > 0) {
        numero = subtemas.map(subtema => subtema[DATOS_BLOQUES_MATEMATICA.subtema.numero]).max() + 1;
    }

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml({
        [DATOS_BLOQUES_MATEMATICA.subtema.numero]: numero,
        [DATOS_BLOQUES_MATEMATICA.subtema.tags]: [ 
            `${TAGS_MATEMATICA.self}/${nombreTemaTag}/${nombreSubtemaTag}`, 
            `${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}/${nombreSubtemaTag}` 
        ],
        [DATOS_BLOQUES_MATEMATICA.subtema.nota.self]: [],
    });
    tR += "---\n";
_%>