class NotaCurso {
    constructor(tp, representacionPrevia = null) {}
}

async function crearNotaCurso(tp) {
    const { 
        FORMATO_DIA, DIRECTORIOS, SECCIONES, ETAPAS, TEMPLATE, 
        TAGS: { curso: TAGS_CURSO, nota: TAGS_NOTA }, 
        DATOS: { 
            RESUMEN: DATOS_RESUMEN, ARCHIVO: DATOS_ARCHIVO, 
            REFERENCIAS: DATOS_REFERENCIA, CURSO: DATOS_MATERIA,
        } 
    } = tp.user.constantes();

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    let directorioCurso = DIRECTORIOS.curso;
    if (carpeta.at(1)) directorioCurso += `/${carpeta.at(1)}`;

    let directorioActual = carpeta.join("/");
    let resumenes = dv.pages(`"${directorioActual}" and #${TAGS_CURSO.self}/${TAGS_CURSO.resumen}`);
    let materias = dv.pages(`"${directorioActual}" and #${TAGS_CURSO.self}/${TAGS_CURSO.curso}`);

    while (
        (materias.length > 0 && resumenes.length > 0) || (materias.length == 0 && resumenes.length == 0)
    ) {
        let curos;
        switch (materias.length) {
            case 0: 
                carpeta.pop();
                directorioActual = carpeta.join("/");
                resumenes = dv.pages(`"${directorioActual}" and #${TAGS_CURSO.self}/${TAGS_CURSO.resumen}`);
                materias = dv.pages(`"${directorioActual}" and #${TAGS_CURSO.self}/${TAGS_CURSO.curso}`);
                continue;

            case 1: curos = materias.first(); break;
            default: 
                curos = await preguntar.suggester(
                    tp, (curso) => curso[DATOS_MATERIA.nombre], materias.sort(curso => curso[DATOS_MATERIA.dia]), 
                    "Que materia se quiere agregar esta nota?",
                    error.Quit("No se ingresó en que materia se va a crear la nota")
                );
        }

        let tagsCurso = tp.user.obtenerTag(tp, curos[DATOS_MATERIA.tags]).map(tag => `#${tag}`);
        resumenes = dv.pages(`(${tagsCurso.join(" or ")}) and #${TAGS_CURSO.self}/${TAGS_CURSO.resumen}`);
        break;
    }

    let resumen = resumenes.first();
    if (resumenes.length > 1) {
        resumen = await preguntar.suggester(
            tp, ({ [DATOS_RESUMEN.parte]: parte, [DATOS_RESUMEN.nombre]: nombre }) => `${nombre} ${parte ? `parte ${parte}` : ""}`, 
            resumenes.sort(resumen => resumen[DATOS_RESUMEN.numero]), "Que tema se quiere agregar esta nota?",
            error.Quit("No se ingresó en que tema se va a crear la nota")
        );
    }

    carpeta = resumen.file.folder;
    let titulo = tp.file.title;
    if (titulo.startsWith("Untitle")) {
        titulo = await preguntar.prompt(
            tp, "Nombre:", error.Prompt("No se ingresó un nombre para la nota")
        );
    }

    let posibleArchivoIgual = archivoDeNotaIgual(tp, tArchivo, titulo);
    if (posibleArchivoIgual) {
        let tagsResumen = tp.user.obtenerTag(tp, resumen[DATOS_ARCHIVO.tags]);
        await abrirArchivoAgregandoTags(tp, posibleArchivoIgual, tagsResumen);
        throw error.Quit(ERROR_EXISTE_ARCHIVO);
    }

    let referenciasResumen = resumen[DATOS_ARCHIVO.referencias]
        ? resumen[DATOS_ARCHIVO.referencias].map(num => parseInt(num, 10))
        : dv.array([]);
    referenciasResumen.values.push([resumen[DATOS_REFERENCIA.numReferencia], true]);

    let referenciasUsar = await preguntarReferenciasUsar(tp, referenciasResumen);

    let texto = await tp.file.include(`[[${TEMPLATE.etapa}]]`);
    texto += `\n${"#".repeat(SECCIONES.definicion.nivel)} ${SECCIONES.definicion.texto}\n---\n`;
    texto += "<% tp.file.cursor() %>\n\n"

    if (referenciasUsar.length > 0) {
        texto += await tp.file.include(`[[${TEMPLATE.seccionReferencia}]]`);
    }

    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.etapa]: ETAPAS.empezado,
            [DATOS_ARCHIVO.referencias]: referenciasUsar,
            [DATOS_ARCHIVO.tags]: [
                ...tp.user.obtenerTag(tp, resumen[DATOS_ARCHIVO.tags]),
                `${TAGS_NOTA.self}/${TAGS_NOTA.curso}`,
            ],
        },
        carpeta: resumen.file.folder,
        titulo: titulo,
        texto: texto,
    };
}

async function editarNotaCurso(tp, archivo) {}

module.exports = () => ({
    clase: (tp, representacionPrevia = null) => new NotaCurso(tp, representacionPrevia),
    crear: crearNotaCurso,
    editar: editarNotaCurso,
})