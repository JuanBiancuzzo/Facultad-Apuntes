<%*
    const { 
        FORMATO_DIA, DIRECTORIOS, SECCIONES, ETAPAS, TEMPLATE, SIMBOLOS,
        TAGS: { curso: TAGS_CURSO, nota: TAGS_NOTA }, 
        DATOS: { 
            RESUMEN: DATOS_RESUMEN, ARCHIVO: DATOS_ARCHIVO, 
            REFERENCIAS: DATOS_REFERENCIA, CURSO: DATOS_MATERIA,
        } 
    } = tp.user.constantes();
    const SALIR = "salir";

    const referencia = tp.user.referencia();
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
        tp, (TIPOS_DE_DEFAULT, crearFuncion) => crearFuncion(TIPOS_DE_DEFAULT.array, () => {
            return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                numero: TIPOS_DE_DEFAULT.simple,
                datos: TIPOS_DE_DEFAULT.diccionario,
                usado: TIPOS_DE_DEFAULT.simple,
            }));
        }),
        (tp, datos, respuesta) => {
            if (respuesta == SALIR) return true;

            let datosReferencia = datos.find(({ numero }) => numero == respuesta);
            datosReferencia.usado = !datosReferencia.usado;

            return false;
        }, (tp, datos) => {
            let opciones = [], valores = [];
            for (let { numero, datos: datosReferencia, usado } of datos) {
                opciones.push(numero);
                let estado = usado ? SIMBOLOS.sacar : SIMBOLOS.agregar;
                valores.push(` ${estado} ${referencia.describir(tp, datosReferencia)}`);
            }

            opciones.push(SALIR);
            valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
            return { opciones: opciones, valores: valores };
        }, "Que referencias que quiere usar?", referenciasResumen.values,
    );

    referenciasUsar = referenciasUsar
        .filter(({ usado }) => usado)
        .map(({ numero }) => numero.toString());

    tR += "---\n";
    tR += tp.obsidian.stringifyYaml({
        [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
        [DATOS_ARCHIVO.etapa]: ETAPAS.empezado,
        [DATOS_ARCHIVO.referencias]: referenciasUsar,
        [DATOS_ARCHIVO.tags]: [
            ...tp.user.obtenerTag(tp, resumen[DATOS_ARCHIVO.tags]), 
            `${TAGS_NOTA.self}/${TAGS_NOTA.curso}`,
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