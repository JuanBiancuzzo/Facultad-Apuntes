const ERROR_EXISTE_ARCHIVO = "Este archivo ya existe\nUsando archivo ya existente";
const SALIR = "salir";

function archivoDeNotaIgual(tp, tArchivo, titulo) {
    let posibleArchivo = tp.file.find_tfile(titulo);
    if (!posibleArchivo || posibleArchivo.stat.ctime == tArchivo.stat.ctime) return null;

    const { DATOS: { ARCHIVO: DATOS_ARCHIVO } } = tp.user.constantes();
    if (!archivoExistente[DATOS_ARCHIVO.tags] || archivoExistente[DATOS_ARCHIVO.tags].length == 0)
        return null;

    const dv = app.plugins.plugins.dataview.api;

    let archivoExistente = dv.page(posibleArchivo.file.path);
    let tagsSecciones = tp.user.tagsSeccion(tp);

    if (archivoExistente[DATOS_ARCHIVO.tags].every(tag => !tagsSecciones.include(tag)))
        return null;

    return posibleArchivo;
}

async function abrirArchivoAgregandoTags(tp, tArchivo, tagsAAgregar = []) {
    const { DATOS: { ARCHIVO: DATOS_ARCHIVO } } = tp.user.constantes();

    let path = `${tArchivo.parent.path}/${tArchivo.basename}.md`;
    let leafAUsar;

    app.workspace.iterateRootLeaves((leaf) => {
        let tArchivoActual = leaf.view.file;
        if (!tArchivoActual)
            return;

        if (tArchivoActual.path == path)
            leafAUsar = leaf;
    });

    if (!leafAUsar) leafAUsar = await app.workspace.getLeaf("tab");
    await leafAUsar.openFile(tArchivo);

    await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        let tags = frontmatter[DATOS_ARCHIVO.tags] ? frontmatter[DATOS_ARCHIVO.tags] : [];
        frontmatter[DATOS_ARCHIVO.tags] = tags.concat(tagsAAgregar).unique();
    });
}

/**
 * 
 * @param {*} tp 
 * @param {[int, bool][] | int[]} referenciasUsar 
 */
async function preguntarReferenciasUsar(tp, referenciasUsar) {
    const { SIMBOLOS, DATOS: { REFERENCIAS: DATOS_REFERENCIA } } = tp.user.constantes();
    const referencia = tp.user.referencia();

    referenciasUsar = referenciasUsar.map(elemento => {
        try {
            return [...elemento];
        } catch {
            return [elemento, false];
        }
    });

    referenciasUsar = referencia.obtenerReferencias(tp)
        .flatMap(datosReferencia => {
            let datos = referenciasUsar.find(([num, _]) => num == datosReferencia[DATOS_REFERENCIA.numReferencia]);
            if (!datos) return [];

            return [{ numero: datos[0], usado: datos[1], datos: datosReferencia }];
        })
        .sort(({ numReferencia }) => numReferencia);

    referenciasUsar = await tp.user.crearPreguntas(
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
        }, "Que referencias que quiere usar?", referenciasUsar.values,
    );

    return referenciasUsar
        .filter(({ usado }) => usado)
        .map(({ numero }) => numero.toString());
}

async function crearNotaFacultad(tp) {
    const { 
        FORMATO_DIA, DIRECTORIOS, SECCIONES, ETAPAS, TEMPLATE, 
        TAGS: { facultad: TAGS_FACULTAD, nota: TAGS_NOTA }, 
        DATOS: { 
            CARRERA: DATOS_CARRERA, MATERIA: DATOS_MATERIA, RESUMEN: DATOS_RESUMEN, ARCHIVO: DATOS_ARCHIVO 
        }, 
    } = tp.user.constantes();

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    if (carpeta.last().trim() == DIRECTORIOS.imagenes) carpeta.pop();

    let directorioActual = carpeta.join("/");
    let resumenes = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`);
    let materias = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`);
    let carreras = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera}`);

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
                carreras = dv.pages(`"${directorioActual}" and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera}`);
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

        let tagsMateria = tp.user.obtenerTag(tp, materia[DATOS_ARCHIVO.tags]).map(tag => `#${tag}`);
        resumenes = dv.pages(`(${tagsMateria.join(" or ")}) and #${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`);
        break;
    }

    let resumen = resumenes.first();
    if (resumenes.length > 1) {
        resumen = await preguntar.suggester(
            tp, ({ [DATOS_RESUMEN.parte]: parte, [DATOS_RESUMEN.nombre]: nombre }) => `${nombre} ${parte ? `parte ${parte}` : ""}`,
            resumenes.sort(resumen => parseInt(resumen[DATOS_RESUMEN.numero], 10)), "Que resumen se quiere agregar esta nota?",
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

    let posibleArchivoIgual = archivoDeNotaIgual(tp, tArchivo, titulo);
    if (posibleArchivoIgual) {
        let tagsResumen = tp.user.obtenerTag(tp, resumen[DATOS_ARCHIVO.tags]);
        await abrirArchivoAgregandoTags(tp, posibleArchivoIgual, tagsResumen);
        throw error.Quit(ERROR_EXISTE_ARCHIVO);
    }

    let referenciasResumen = resumen[DATOS_RESUMEN.referencias]
        ? resumen[DATOS_RESUMEN.referencias].map(num => parseInt(num, 10))
        : [];
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
                `${TAGS_NOTA.self}/${TAGS_NOTA.carrera}`,
            ],
        },
        carpeta: resumen.file.folder,
        titulo: titulo,
        texto: texto,
    };
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

    let referenciasResumen = resumen[DATOS_RESUMEN.referencias]
        ? resumen[DATOS_RESUMEN.referencias].map(num => parseInt(num, 10))
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

async function crearNotaProyecto(tp) {
    const { 
        MESES, FORMATO_DIA, DIRECTORIOS, SECCIONES, TAGS, 
        DATOS: { PROGRESO: DATOS_PROGRESO, PROYECTO: DATOS_PROYECTO },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    if (carpeta.last().trim() == DIRECTORIOS.imagenes) carpeta.pop();
    carpeta = carpeta.join("/");

    let proyectos = dv.pages(`"${carpeta}" and #${TAGS.proyecto.self}`);
    let proyecto;
    switch (proyectos.length) {
        case 0: throw error.Quit("No hay proyectos en este directorio");
        case 1: 
            proyecto = proyectos.first();
            break;
        default: 
            proyecto = await preguntar.suggester(
                tp, (proyecto) => proyecto.file.name, proyectos,
                "En que proyecto se quiere ingresar la nota",
                error.Quit("No se ingresó en que proyecto se tiene que ingresar")
            )
            break;
    }

    let tagsDeterminantes = proyecto[DATOS_PROYECTO.tags] ? proyecto[DATOS_PROYECTO.tags] : [];
    tagsDeterminantes = dv.array(tagsDeterminantes)
        .filter(tag => tag.startsWith(TAGS.proyecto.self))
        .map(tag => tag.replace(`${TAGS.proyecto.self}/`, ""));

    let tagProyecto;
    switch (tagsDeterminantes.first()) {
        case TAGS.proyecto.practico.self:
            tagProyecto = TAGS.proyecto.practico.general;
            break;
        case TAGS.proyecto.investigacion.self:
            tagProyecto = TAGS.proyecto.investigacion.general;
            break;
        case TAGS.proyecto.juego.self:
            tagProyecto = TAGS.proyecto.juego.general;
            break;
    }

    let fecha = tp.file.creation_date(FORMATO_DIA);
    let [ anio, mes, dia ] = fecha.split("-").map(num => parseInt(num, 10));
    dia = (dia <= 3) ? ["1ro", "2do", "3ro"][dia - 1] : dia;

    let nuevoNombre = `Nota del ${dia} de ${MESES(mes)} del ${anio}`;
    let posibleArchivoIgual = tp.file.find_tfile(`${proyecto.file.folder}/${nuevoNombre}`);
    if (posibleArchivoIgual) {
        await abrirArchivoAgregandoTags(tp, posibleArchivoIgual);
        throw error.Quit(ERROR_EXISTE_ARCHIVO);
    }

    let texto = `${"#".repeat(SECCIONES.progreso.nivel)} ${SECCIONES.progreso.texto}\n---\n`;
    texto += "<% tp.file.cursor() %>\n\n";

    return {
        metadata: {
            [DATOS_PROGRESO.dia]: fecha,
            [DATOS_PROGRESO.tags]: [
                `${tagProyecto}/${tp.user.tagPorNombre(proyecto.file.name)}`,
                `${TAGS.nota.self}/${TAGS.nota.proyecto}`,
            ],
        },
        carpeta: proyecto.file.folder,
        titulo: nuevoNombre,
        texto: texto,
    };
}

module.exports = () => ({
    notaFacultad: crearNotaFacultad,
    notaCurso: crearNotaCurso,
    notaInvestigacion: crearNotaInvestigacion,
    notaProyecto: crearNotaProyecto,
});