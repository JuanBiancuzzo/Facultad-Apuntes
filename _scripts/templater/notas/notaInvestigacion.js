class NotaInvestigacion {
    constructor(tp, representacionPrevia = null) {}
}

async function crearNotaInvestigacion(tp) {
    const { 
        SIMBOLOS, FORMATO_DIA, DIRECTORIOS, SECCIONES, ETAPAS, TEMPLATE, 
        TAGS: { investigacion: TAGS_INVESTIGACION, proyecto: TAGS_PROYECTO, nota: TAGS_NOTA },
        DATOS: { INVESTIGACION: DATOS_INVESTIGACION, ARCHIVO: DATOS_ARCHIVO} 
    } = tp.user.constantes();
    const TAG_INDICE = `${TAGS_INVESTIGACION.self}/${TAGS_INVESTIGACION.indice}`;

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    if (carpeta.last().trim() == DIRECTORIOS.imagenes) carpeta.pop();

    let directorioIndice = carpeta.join("/");
    let indices = dv.pages(`"${directorioIndice}" and (#${TAG_INDICE} or #${TAGS_PROYECTO.self}/${TAGS_PROYECTO.investigacion.self})`)
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
        indices = dv.pages(`"${directorioIndice}" and (#${TAG_INDICE} or #${TAGS_PROYECTO.self}/${TAGS_PROYECTO.investigacion.self})`)
            .filter(indice => indice.file.folder.split("/").length == largoEsperado)
            .filter(indice => {
                let tags = indice[DATOS_INVESTIGACION.tags] ? indice[DATOS_INVESTIGACION.tags] : [];
                return dv.array(tags)
                    .filter(tag => tag.startsWith(TAGS_INVESTIGACION.self) && !tag.includes(TAGS_INVESTIGACION.indice))
                    .map(tag => tag.replace(`${TAGS_INVESTIGACION.self}/`, ""))
                    .some(tag => tag.split("/").length == 1);
            }).map(indice => {
                let tags = indice[DATOS_INVESTIGACION.tags] ? indice[DATOS_INVESTIGACION.tags] : [];
                return {
                    tags: dv.array(tags)
                        .filter(tag => tag.startsWith(TAGS_INVESTIGACION.self) && !tag.includes(TAGS_INVESTIGACION.indice)),
                    indice: indice
                };
            });

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
                dv.pages(`#${tag} and #${TAG_INDICE}`)
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

    let posibleArchivoIgual = archivoDeNotaIgual(tp, tArchivo, titulo);
    if (posibleArchivoIgual) {
        let tagsIndice = tp.user.obtenerTag(tp, indice[DATOS_INVESTIGACION.tags]);
        await abrirArchivoAgregandoTags(tp, posibleArchivoIgual, tagsIndice);
        throw error.Quit(ERROR_EXISTE_ARCHIVO);
    }

    let texto = await tp.file.include(`[[${TEMPLATE.etapa}]]`);
    texto += `\n${"#".repeat(SECCIONES.definicion.nivel)} ${SECCIONES.definicion.texto}\n---\n`;
    texto += "<% tp.file.cursor() %>\n\n";

    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
            [DATOS_ARCHIVO.referencias]: [],
            [DATOS_ARCHIVO.tags]: [
                ...tp.user.obtenerTag(tp, indice[DATOS_INVESTIGACION.tags]),
                `${TAGS_NOTA.self}/${TAGS_NOTA.investigacion}`,
            ],
        },
        carpeta: indice.file.folder,
        titulo: titulo,
        texto: texto,
    };
}

async function editarNotaInvestigacion(tp, archivo) {}

module.exports = () => ({
    clase: (tp, representacionPrevia = null) => new NotaInvestigacion(tp, representacionPrevia),
    crear: crearNotaInvestigacion,
    editar: editarNotaInvestigacion,
})