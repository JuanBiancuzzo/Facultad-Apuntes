<%*
    const { TAGS, DATOS_BLOQUES_MATEMATICA } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    let carpeta = tp.file.folder(true);

    let tag = `${TAGS.bloqueMatematica.self}/${tp.user.tagPorNombre(carpeta.split("/").last())}`;
    let subtemas = dv.pages(`#${tag} and #${TAGS.bloqueMatematica.subtema}`);
    let numero = 1;
    if (subtemas.length > 0) {
        numero = subtemas.map(subtema => subtema[DATOS_BLOQUES_MATEMATICA.subtema.numero]).max() + 1;
    }

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml({
        [DATOS_BLOQUES_MATEMATICA.subtema.numero]: numero,
        [DATOS_BLOQUES_MATEMATICA.subtema.tags]: [ tag, TAGS.bloqueMatematica.subtema ],
        [DATOS_BLOQUES_MATEMATICA.subtema.nota.self]: [],
    });
    tR += "---\n";
_%>