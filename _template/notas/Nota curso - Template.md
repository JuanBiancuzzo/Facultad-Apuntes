<%*
    const { FORMATO_DIA, DIRECTORIOS, SECCIONES, TAGS, ETAPAS, TEMPLATE, DATOS: { 
        RESUMEN: DATOS_RESUMEN, ARCHIVO: DATOS_ARCHIVO, REFERENCIAS: DATOS_REFERENCIA
    } } = tp.user.constantes();
    const SALIR = "salir";

    const referencia = tp.user.referencia();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    let directorioCurso = DIRECTORIOS.curso;
    if (carpeta.at(1)) directorioCurso += `/${carpeta.at(1)}`;

    let cursos = dv.pages(`"${directorioCurso}" and #${TAGS.curso.self}`);
    let curso = cursos.first();
    if (cursos.length > 1) {
        curso = await preguntar.suggester(
            tp, (curso) => curso.file.name, cursos,
            "Que curso se quiere agregar esta nota?",
            error.Quit("No se ingresó en que curso se va a crear la nota")
        );
    }

    let directorioResumen = curso.file.folder;
    if (carpeta.at(2)) directorioResumen += `/${carpeta.at(2)}`;
    let resumenes = dv.pages(`"${directorioResumen}" and #${TAGS.resumenCurso}`)
        .sort(resumen => parseInt(resumen[DATOS_RESUMEN.numero], 10));
    let resumen = resumenes.first();
    if (resumenes.length > 1) {
        resumen = await preguntar.suggester(
            tp, ({ [DATOS_RESUMEN.parte]: parte, file }) => `${file.folder.split("/").pop()} ${parte ? `parte ${parte}` : ""}`, 
            resumenes, "Que tema se quiere agregar esta nota?",
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
            let tagsResumen = tp.user.obtenerTag(tp, resumen[DATOS_ARCHIVO.tags]);
            frontmatter[DATOS_ARCHIVO.tags] = tags.concat(tagsResumen.filter(tag => tags.indexOf(tag) < 0));
        });

        throw error.Quit("Este archivo ya existe\nUsando archivo ya existente");
    }

    await tp.file.move(`${resumen.file.folder}/${titulo}`, tArchivo);

    let referenciasResumen = resumen[DATOS_RESUMEN.referencias]
        ? resumen[DATOS_RESUMEN.referencias].map(num => parseInt(num, 10))
        : [];

    referenciasResumen = referencia.obtenerReferencias(tp)
        .filter(({ [DATOS_REFERENCIA.numReferencia]: numReferencia }) => referenciasResumen.includes(numReferencia))
        .sort(({ [DATOS_REFERENCIA.numReferencia]: numReferencia }) => numReferencia)
        .map(datosReferencia => ({ numero: datosReferencia[DATOS_REFERENCIA.numReferencia], datos: datosReferencia, usado: false }));

    referenciasResumen.values.push({ numero: resumen[DATOS_REFERENCIA.numReferencia], datos: resumen, usado: true });

    let referenciasUsar = await tp.user.crearPreguntas(
        tp, () => ({ uso: [] }), (tp, datos, respuesta) => {
            if (respuesta == SALIR) return true;

            let datosReferencia = datos.uso.find(({ numero }) => numero == respuesta);
            datosReferencia.usado = !datosReferencia.usado;

            return false;
        }, (tp, datos) => {
            let opciones = [], valores = [];
            for (let { numero, datos: datosReferencia, usado } of datos.uso) {
                opciones.push(numero);
                let estado = usado ? "⊖" : "⊕";
                valores.push(` ${estado} ${referencia.describir(tp, datosReferencia)}`);
            }

            opciones.push(SALIR);
            valores.push(" ↶ Confirmar datos");
            return { opciones: opciones, valores: valores };
        }, "Que referencias que quiere usar?",
        { uso: referenciasResumen.values }
    );

    referenciasUsar = referenciasUsar.uso
        .filter(({ usado }) => usado)
        .map(({ numero }) => numero.toString());

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml({
        [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
        [DATOS_ARCHIVO.etapa]: ETAPAS.empezado,
        [DATOS_ARCHIVO.referencias]: referenciasUsar,
        [DATOS_ARCHIVO.tags]: [
            ...tp.user.obtenerTag(tp, resumen[DATOS_ARCHIVO.tags]), 
            `${TAGS.nota.self}/${TAGS.nota.curso}`,
        ],
    });
    tR += "---\n";
    tR += await tp.file.include(`[[${TEMPLATE.etapa}]]`);
    tR += `\n${"#".repeat(SECCIONES.definicion.nivel)} ${SECCIONES.definicion.texto}\n---\n`;
_%>
<% tp.file.cursor() %>


<%*
    if (referenciasUsar.length > 0) {
        tR += await tp.file.include(`[[${TEMPLATE.seccionReferencia}]]`);
    }
_%>