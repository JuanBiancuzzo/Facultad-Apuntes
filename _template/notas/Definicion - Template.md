<%*
    const { FORMATO_DIA, SIMBOLOS, DIRECTORIOS, SECCIONES, ETAPAS, TEMPLATE, 
        TAGS: { facultad: TAGS_FACULTAD, nota: TAGS_NOTA }, 
        DATOS: { 
            CARRERA: DATOS_CARRERA, MATERIA: DATOS_MATERIA, RESUMEN: DATOS_RESUMEN, 
            ARCHIVO: DATOS_ARCHIVO, REFERENCIAS: DATOS_REFERENCIA
        }, 
    } = tp.user.constantes();
    const SALIR = "salir";

    const referencia = tp.user.referencia();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    if (carpeta.last().trim() == DIRECTORIOS.imagenes) carpeta.pop();

    let directorioActual = carpeta.join("/");
    let resumenes = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`);
    let materias = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`);
    let carreras = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera.self}`);

    while (
        (materias.length > 0 && resumenes.length > 0) || (materias.length == 0 && resumenes.length == 0)
    ) {
        if (carreras.length > 0) {
            let carrera = carreras.first();
            if (carreras.length > 1) {
                carrera = await preguntar.suggester(
                    tp, (carrera) => carrera.file.name, carreras,
                    "Que carreras se quiere agregar esta nota?",
                    error.Quit("No se ingresó en que carrera se va a crear la nota")
                );
            }

            let tagCarrera = dv.array(carrera[DATOS_CARRERA.tags] ? carrera[DATOS_CARRERA.tags] : [])
                .find(tag => tag.startsWith(TAGS_FACULTAD.carrera.self))
                .replace(`${TAGS_FACULTAD.carrera.self}/`, "");

            materias = dv.pages(`#${tagCarrera} and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`);
        }

        let materia;
        switch (materias.length) {
            case 0: 
                carpeta.pop();
                directorioActual = carpeta.join("/");
                resumenes = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`);
                materias = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`);
                carreras = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera.self}`);
                continue;

            case 1: materia = materias.first(); break;
            default: 
                materia = await preguntar.suggester(
                    tp, (materia) => materia[DATOS_MATERIA.nombre], materias.sort(materia => {
                        let materiaFinal = materia[DATOS_MATERIA.equivalencia]
                            ? dv.page(materia[DATOS_MATERIA.equivalencia].path)
                            : materia;
                        return parseFloat(materiaFinal[DATOS_MATERIA.infoCuatri].replace("C", "."))
                    }), "Que materia se quiere agregar esta nota?",
                    error.Quit("No se ingresó en que materia se va a crear la nota")
                );
        }

        let tagsMateria = tp.user.obtenerTag(tp, materia[DATOS_MATERIA.tags]).map(tag => `#${tag}`);
        resumenes = dv.pages(`(${tagsMateria.join(" or ")}) and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`);
        break;
    }

    let resumen = resumenes.first();
    if (resumenes.length > 1) {
        resumen = await preguntar.suggester(
            tp, ({ [DATOS_RESUMEN.parte]: parte, [DATOS_RESUMEN.nombre]: nombre }) => `${nombre} ${parte ? `parte ${parte}` : ""}`,
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
            `${TAGS_NOTA.self}/${TAGS_NOTA.carrera}`,
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