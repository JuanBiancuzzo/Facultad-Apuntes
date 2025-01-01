<%*
    const { TAGS, DATOS_BLOQUES_MATEMATICA } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    let carpeta = tp.file.folder(true);

    let tag = `${TAGS.bloqueMatematica.self}/${tp.user.tagPorNombre(carpeta.split("/").last())}`;
    let temas = dv.pages(`#${TAGS.bloqueMatematica.self} and #${TAGS.bloqueMatematica.tema}`);
    let numero = 1;
    if (temas.length > 0) {
        numero = temas.map(tema => tema[DATOS_BLOQUES_MATEMATICA.tema.numero]).max() + 1;
    } 

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml({
        [DATOS_BLOQUES_MATEMATICA.tema.numero]: numero,
        [DATOS_BLOQUES_MATEMATICA.tema.tags]: [ tag, TAGS.bloqueMatematica.tema ],
    });
    tR += "---\n";
_%>