<%*
    const { FORMATO_DIA, SIMBOLOS, DIRECTORIOS, SECCIONES, TAGS, ETAPAS, TEMPLATE, DATOS: { 
        MATERIA: DATOS_MATERIA, RESUMEN: DATOS_RESUMEN, ARCHIVO: DATOS_ARCHIVO, REFERENCIAS: DATOS_REFERENCIA
    } } = tp.user.constantes();
    const SALIR = "salir";

    const referencia = tp.user.referencia();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    if (carpeta.last().trim() == DIRECTORIOS.imagenes) carpeta.pop();

    let resumenes = dv.pages(`"${carpeta.join("/")}" and #${TAGS.resumenMateria}`);
    let materias = dv.pages(`"${carpeta.join("/")}" and #${TAGS.materia}`)
        .sort(materia => {
            let materiaFinal = materia[DATOS_MATERIA.equivalencia]
                ? dv.page(materia[DATOS_MATERIA.equivalencia].path)
                : materia;
            return parseFloat(materiaFinal[DATOS_MATERIA.infoCuatri].replace("C", "."))
        });

    while ((resumenes.length > 0 && materias.length > 0) || (materias.length == 0 && resumenes.length == 0)) {
        let materia;
        switch (materias.length) {
            case 0: continue;
            case 1: materia = materias.first(); break;
            default: 
                materia = await preguntar.suggester(
                    tp, (materia) => materia.file.name, materias,
                    "Que materia se quiere agregar esta nota?",
                    error.Quit("No se ingresó en que materia se va a crear la nota")
                );
        }

        let tagDeMateria = materia[DATOS_MATERIA.tags]
            .find(tag => tag.startsWith(TAGS.materia))
            .replace(`${TAGS.materia}/`);

        let tagMateriaResumen = materia[DATOS_MATERIA.tags]
            .find(tag => !tag.startsWith(TAGS.materia) && tag.includes(tagDeMateria));

        carpeta.pop();
        resumenes = dv.pages(`#${tagMateriaResumen} and #${TAGS.resumenMateria}`);
        materias = dv.pages(`"${carpeta.join("/")}" and #${TAGS.materia}`)
            .sort(materia => {
                let materiaFinal = materia[DATOS_MATERIA.equivalencia]
                    ? dv.page(materia[DATOS_MATERIA.equivalencia].path)
                    : materia;
                return parseFloat(materiaFinal[DATOS_MATERIA.infoCuatri].replace("C", "."))
            });

    }

    let resumen = resumenes.first();
    if (resumenes.length > 1) {
        resumen = await preguntar.suggester(
            tp, ({ [DATOS_RESUMEN.parte]: parte, file }) => `${file.folder.split("/").pop()} ${parte ? `parte ${parte}` : ""}`,
            resumenes, "Que resumen se quiere agregar esta nota?",
            error.Quit("No se ingresó en que resumen se va a crear la nota")
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
                let estado = usado ? SIMBOLOS.sacar : SIMBOLOS.agregar;
                valores.push(` ${estado} ${referencia.describir(tp, datosReferencia)}`);
            }

            opciones.push(SALIR);
            valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
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
            `${TAGS.nota.self}/${TAGS.nota.carrera}`,
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