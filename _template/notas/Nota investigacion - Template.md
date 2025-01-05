<%*
    const { SIMBOLOS, FORMATO_DIA, DIRECTORIOS, SECCIONES, TAGS, ETAPAS, TEMPLATE, DATOS: { 
        INVESTIGACION: DATOS_INVESTIGACION, ARCHIVO: DATOS_ARCHIVO, REFERENCIAS: DATOS_REFERENCIA
    } } = tp.user.constantes();
    const SALIR = "salir";

    const referencia = tp.user.referencia();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    if (carpeta.last().trim() == DIRECTORIOS.imagenes) carpeta.pop();

    let directorioIndice = carpeta.join("/");
    let indices = dv.pages(`"${directorioIndice}" and (#${TAGS.investigacion.self} or #${TAGS.proyecto.self}/${TAGS.proyecto.investigacion.self})`)
        .filter(indice => indice.file.folder == directorioIndice);

    let indice;
    if (indices.length > 0) {
        indice = indices.first();
        if (indices.length > 1) {
            indice = await preguntar.suggester(
                tp, (indice) => indice.file.name, indices,
                "Que tema de investigación se va a ingresar la nota?",
                error.Quit("No se ingresó el tema de investigación en el cual ingresar la nota")
            )
        }

    } else {
        let largoEsperado = directorioIndice.split("/").length + 1;
        indices = dv.pages(`"${directorioIndice}" and (#${TAGS.investigacion.self} or #${TAGS.proyecto.self}/${TAGS.proyecto.investigacion.self})`)
            .filter(indice => indice.file.folder.split("/").length == largoEsperado)
            .filter(indice => {
                let tags = indice[DATOS_INVESTIGACION.tags] ? indice[DATOS_INVESTIGACION.tags] : [];
                return dv.array(tags)
                    .filter(tag => tag.startsWith(TAGS.investigacion.general))
                    .map(tag => tag.replace(`${TAGS.investigacion.general}/`, ""))
                    .some(tag => tag.split("/").length == 1);
            }).map(indice => ({
                tags: indice[DATOS_INVESTIGACION.tags]
                    .filter(tag => tag.startsWith(TAGS.investigacion.general)),
                indice: indice
            }));

        const confirmar = "confirmar";
        do {
            let valores = indices.map(({ indice }) => indice.file.name).values;
            let opciones = indices.values;
            if (indice) {
                valores.push(` ${SIMBOLOS.volver} Confirmar, usar ${indice.file.name}`);
                opciones.push(confirmar);
            }

            resultado = await preguntar.suggester(
                tp, valores, opciones,
                "Que tema de investigación se va a ingresar la nota?",
                error.Quit("No se ingresó el tema de investigación en el cual ingresar la nota")
            );

            if (resultado == confirmar)
                break;
            indice = resultado.indice;

            let indicesAgregar = {};
            for (let tag of resultado.tags) {
                largoEsperado = tag.split("/").length + 1;
                dv.pages(`#${tag} and #${TAGS.investigacion.self}`)
                    .filter(indiceNuevo => {
                        let tagsNuevos = indiceNuevo[DATOS_INVESTIGACION.tags]
                            ? indiceNuevo[DATOS_INVESTIGACION.tags]
                            : [];
                        return dv.array(tagsNuevos).some(tagNuevo => tagNuevo.startsWith(tag) && tagNuevo.split("/").length == largoEsperado);
                    })
                    .forEach(indiceNuevo => {
                        let tags = indiceNuevo.file.path in indicesAgregar
                            ? indicesAgregar[indiceNuevo.file.path].tags
                            : [];

                        let tagsNuevos = indiceNuevo[DATOS_INVESTIGACION.tags]
                            ? indiceNuevo[DATOS_INVESTIGACION.tags]
                            : [];
                        dv.array(tagsNuevos)
                            .filter(tagNuevo => tagNuevo.startsWith(tag) && tagNuevo.split("/").length == largoEsperado)
                            .forEach(tagNuevo => tags.push(tagNuevo));

                        indicesAgregar[indiceNuevo.file.path] = {
                            tags: tags,
                            indice: indiceNuevo,
                        }
                    });
            }

            indices = [];
            for (let [_, value] of Object.entries(indicesAgregar)) {
                indices.push({
                    indice: value.indice,
                    tags: value.tags.unique(),
                });
            }
            indices = dv.array(indices);

        } while (indices.length > 0);
    }

    carpeta = indice.file.folder;
    let titulo = tp.file.title;
    if (titulo.startsWith("Untitle")) {
        titulo = await preguntar.prompt(
            tp, "Nombre:", error.Prompt("No se ingresó un nombre para la nota")
        );
    }

    let paginaHecha = tp.file.find_tfile(titulo);
    if (paginaHecha && paginaHecha.stat.ctime != tArchivo.stat.ctime) {
        let path = `${paginaHecha.parent.path}/${titulo}.md`;
        let leafAUsar;

        app.workspace.iterateRootLeaves((leaf) => {
            let tArchivoActual = leaf.view.file;
            if (!tArchivoActual)
                return;

            if (tArchivoActual.path == path)
                leafAUsar = leaf;
        });

        if (!leafAUsar) leafAUsar = await app.workspace.getLeaf("tab");
        await leafAUsar.openFile(paginaHecha);

        await app.fileManager.processFrontMatter(paginaHecha, (frontmatter) => {
            let tags = frontmatter[DATOS_ARCHIVO.tags] ? frontmatter[DATOS_ARCHIVO.tags] : [];
            let tagsIndice = tp.user.obtenerTag(tp, indice[DATOS_INVESTIGACION.tags]);
            frontmatter[DATOS_ARCHIVO.tags] = tags.concat(tagsIndice.filter(tag => tags.indexOf(tag) < 0));
        });

        throw error.Quit("Este archivo ya existe\nUsando archivo ya existente");
    }

    await tp.file.move(`${indice.file.folder}/${titulo}`, tArchivo);

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml({
        [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
        [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
        [DATOS_ARCHIVO.referencias]: [],
        [DATOS_ARCHIVO.tags]: [ 
            ...tp.user.obtenerTag(tp, indice[DATOS_INVESTIGACION.tags]),
            `${TAGS.nota.self}/${TAGS.nota.investigacion}`,
        ],
    });
    tR += "---\n";
    tR += await tp.file.include(`[[${TEMPLATE.etapa}]]`);
    tR += `\n${"#".repeat(SECCIONES.definicion.nivel)} ${SECCIONES.definicion.texto}\n---\n`;
_%>
<% tp.file.cursor() %>
