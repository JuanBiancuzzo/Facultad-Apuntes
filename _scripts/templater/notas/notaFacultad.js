const ERROR_EXISTE_ARCHIVO = "Este archivo ya existe\nUsando archivo ya existente";

const CANTIDAD_MINIMA_ALIAS = 0;
const ELIMINAR_ALIAS = "eliminar alias";
const MODIFICAR_ALIAS = "modificar alias";

class NotaFacultad {
    constructor(tp, referenciasPreferidas = null, representacionPrevia = null) {
        const { SIMBOLOS, ETAPAS, DATOS: { NOTA: DATOS_NOTA } } = tp.user.constantes();
        if (!representacionPrevia) representacionPrevia = {};
        if (!referenciasPreferidas) referenciasPreferidas = [];

        this.simbolos = SIMBOLOS;
        this.etapas = ETAPAS;
        this.config = DATOS_NOTA;

        this.nombre = representacionPrevia[this.config.nombrePrincipal];
        this.etapa = representacionPrevia[this.config.etapa]
            ? representacionPrevia[this.config.etapa]
            : this.etapas.empezado;

        this.seudonimos = representacionPrevia[this.config.seudonimos]
            ? representacionPrevia[this.config.seudonimos] : [];

        let referenciasActuales = representacionPrevia[this.config.referencias];
        this.bibliografia = tp.user.seleccionarReferencias().clase(tp, referenciasActuales, referenciasPreferidas);
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        await this.bibliografia.actualizarDatos(respuestaDada, generarPreguntas, generarError);

        let [ respuesta, indice ] = respuestaDada.split("-");
        switch (respuesta) {
            case this.config.nombrePrincipal:
                this.nombre = await generarPreguntas.prompt(
                    "Nombre de la nota",
                    generarError.Quit("No se ingresó el nombre de la nota")
                );
                break;

            case this.config.etapa:
                this.etapa = await generarPreguntas.suggester(
                    [ "Sin empezar", "Empezado", "Ampliar", "Terminado" ], 
                    [ this.etapas.sinEmpezar, this.etapas.empezado, this.etapas.ampliar, this.etapas.terminado ],
                    "Ingresar la etapa que se quiere elegir",
                    generarError.Quit("No se ingresó la etapa de la nota"),
                );
                break;

            case this.config.seudonimos:
                this.seudonimos.push(await generarPreguntas.prompt(
                    "Nuevo seudonimo", generarError.Quit("No se ingresó el seudonimo"),
                ));
                break;

            case MODIFICAR_ALIAS:
                this.seudonimos[indice] = await generarPreguntas.prompt(
                    `Modificar el seudonimo ${this.seudonimos[indice]}`,
                    generarError.Quit(`No se ingresó la modificación al seudonimo: ${this.seudonimos[indice]}`),
                );
                break;

            case ELIMINAR_ALIAS:
                this.seudonimos.pop();
                break;
        }
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombrePrincipal);
        if (this.nombre) {
            valores.push(` ${this.simbolos.modificar} Modificar el nombre de la nota, donde era ${this.nombre}`);


            let mapeoEtapaTexto = {
                [this.etapas.sinEmpezar]: "Sin empezar",
                [this.etapas.empezado]: "Empezado",
                [this.etapas.ampliar]: "Ampliar",
                [this.etapas.terminado]: "Terminado",
            };

            opciones.push(this.config.etapa);
            valores.push(` ${this.simbolos.modificar} Modificar la etapa, donde era ${mapeoEtapaTexto[this.etapa]}`);

            let { opciones: opcionesBibliografia, valores: valoresBibliografia } = this.bibliografia.generarPreguntas();
            opciones = opciones.concat(opcionesBibliografia);
            valores = valores.concat(valoresBibliografia);

            for (let [indice, seudonimo] of this.seudonimos.entries()) {
                opciones.push(`${MODIFICAR_ALIAS}-${indice}`);
                valores.push(` ${this.simbolos.modificar} Modificar seudonimo, donde era ${seudonimo}`);
            }

            if (this.seudonimos.length > 0) {
                let ultimoSeudonimo = this.seudonimos.last();
                opciones.push(ELIMINAR_ALIAS);
                valores.push(` ${this.simbolos.sacar} Eliminar ${ultimoSeudonimo}`);
            }

            opciones.push(this.config.seudonimos);
            if (this.seudonimos.length < CANTIDAD_MINIMA_ALIAS) {
                valores.push(` ${this.simbolos.agregar} Agregar seudonimo`);

            } else {
                valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Agregar seudonimo`);
            }

        } else {
            valores.push(` ${this.simbolos.agregar} Nombre de la nota`);
        }

        return { opciones, valores };
    }

    esValido() {
        return this.etapa && this.nombre 
            && this.bibliografia.esValido()
            && this.seudonimos.length >= CANTIDAD_MINIMA_ALIAS;
    }

    obtenerRepresentacion() {
        return {
            [this.config.nombrePrincipal]: this.nombre,
            [this.config.etapa]: this.etapa,
            [this.config.referencias]: this.bibliografia.obtenerReferencias()
                .map(num => `${num}`),
            [this.config.seudonimos]: this.seudonimos,
        }
    }
}

async function editarNotaFacultad(tp, viejoArchivo) {
    const { 
        DATAVIEW, SECCIONES, TAGS: { facultad: TAGS_FACULTAD }, 
        DATOS: { 
            ARCHIVO: DATOS_ARCHIVO, NOTA: DATOS_NOTA, RESUMEN: DATOS_RESUMEN, 
        }, 
    } = tp.user.constantes();
	const dv = app.plugins.plugins.dataview.api;

    const preguntar = tp.user.preguntar();
    const notaTool = tp.user.nota();
    const dataview = tp.user.dataview();

    let { tArchivo, dvArchivo } = viejoArchivo;

    let tagsArchivo = dvArchivo[DATOS_ARCHIVO.tags];
    let referenciasPreferidas = dv.pages(`#${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen} and (${tagsArchivo.map(tag => `#${tag}`).join(" or ")})`)
        .flatMap(resumen => resumen[DATOS_RESUMEN.bibliografia])
        .distinct()
        .values;

    let nota = new NotaFacultad(tp, referenciasPreferidas, { [DATOS_NOTA.nombrePrincipal]: dvArchivo.file.name, ...dvArchivo });
    await preguntar.formulario(tp, nota, "Modificar la nota");

    let { [DATOS_NOTA.nombrePrincipal]: tituloNuevo, ...representacion } = nota.obtenerRepresentacion();

    let hayReferenciasViejas = dvArchivo[DATOS_NOTA.referencias]?.length > 0;
    let hayReferenciasNuevas = representacion[DATOS_NOTA.referencias].length > 0;

    let hayModificarReferencias = hayReferenciasViejas ^ hayReferenciasNuevas;
    let hayModificarEtapa = !dvArchivo[DATOS_NOTA.etapa];

    if (hayModificarReferencias || hayModificarEtapa) {
        let nuevoContenido = await app.vault.read(tArchivo);

        if (hayModificarEtapa) {
            const TEXTO_ETAPA = dataview.crearSeccion(`await dv.view("${DATAVIEW.self}/${DATAVIEW.etapa}", { etapa: dv.current()?.etapa })`);

            if (nuevoContenido.slice(0, 3) == "---") {
                // mejorar como se esta buscando, usar ragex o algo asi
                let index = nuevoContenido.slice(3).indexOf("---") + 7; // 3 del ---, 4 del ---\n
                nuevoContenido = `${nuevoContenido.slice(0, index)}${TEXTO_ETAPA}\n${nuevoContenido.slice(index)}`;
            } else {
                nuevoContenido = `${TEXTO_ETAPA}\n${nuevoContenido}`;
            }
        }

        if (hayModificarReferencias) {
            const TEXTO_REFERENCIA = `${"#".repeat(SECCIONES.referencias.nivel)} ${SECCIONES.referencias.texto}\n---\n`
                + dataview.crearSeccion(`await dv.view("${DATAVIEW.self}/${DATAVIEW.referencia.archivo}", { archivo: dv.current() });`);

            let indiceReferencias = notaTool.incluye(nuevoContenido, TEXTO_REFERENCIA);
            let hayTopicoReferencias = indiceReferencias > 0;

            if (hayReferenciasNuevas && !hayTopicoReferencias) {
                // Agregar el topico
                nuevoContenido = `${nuevoContenido}\n\n${TEXTO_REFERENCIA}`;

            } else if (!hayReferenciasNuevas && hayTopicoReferencias) {
                // Sacar el topico
                // corregir - TODO
                // nuevoContenido = nuevoContenido.slice(0, indiceReferencias - `\n\n${TEXTO_REFERENCIA}`.length);
            }
        }

        await app.vault.modify(tArchivo, nuevoContenido);
    }

    await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        for (let [key, value] of Object.entries(representacion)) {
            frontmatter[key] = value;
        }
    });

    app.commands.executeCommandById('dataview:dataview-rebuild-current-view');

    if (dvArchivo.file.name != tituloNuevo) {
        await tp.file.move(`${dvArchivo.file.folder}/${tituloNuevo}`, tArchivo);
    }
}

async function crearNotaFacultad(tp) {
    const { 
        FORMATO_DIA, DATAVIEW, DIRECTORIOS, SECCIONES, TEMPLATE, 
        TAGS: { facultad: TAGS_FACULTAD, nota: TAGS_NOTA }, 
        DATOS: { 
            CARRERA: DATOS_CARRERA, MATERIA: DATOS_MATERIA, RESUMEN: DATOS_RESUMEN, 
            ARCHIVO: DATOS_ARCHIVO, NOTA: DATOS_NOTA,
        }, 
    } = tp.user.constantes();

    const notaTool = tp.user.nota();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const dataview = tp.user.dataview();

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

    let referenciasResumen = resumen[DATOS_RESUMEN.bibliografia]
        ? resumen[DATOS_RESUMEN.bibliografia].map(num => parseInt(num, 10))
        : [];

    let tituloArchivo = tp.file.title.startsWith("Untitle") ? null : tp.file.title;
    let nota = new NotaFacultad(tp, referenciasResumen, { [DATOS_NOTA.nombrePrincipal]: tituloArchivo });
    await preguntar.formulario(tp, nota, "Crear la nota");

    let { [DATOS_NOTA.nombrePrincipal]: titulo, ...representacion } = nota.obtenerRepresentacion();

    if (notaTool.archivoDeNotaIgual(tp, tArchivo, titulo)) {
        let tagsResumen = tp.user.obtenerTag(tp, resumen[DATOS_ARCHIVO.tags]);
        await notaTool.abrirArchivoAgregandoTags(tp, posibleArchivoIgual, tagsResumen);
        throw error.Quit(ERROR_EXISTE_ARCHIVO);
    }

    let texto = `${dataview.crearSeccion(`await dv.view("${DATAVIEW.self}/${DATAVIEW.etapa}", { etapa: dv.current()?.etapa })`)}\n`;
    texto += `${"#".repeat(SECCIONES.definicion.nivel)} ${SECCIONES.definicion.texto}\n---\n`;
    texto += "<% tp.file.cursor() %>\n\n"

    if (representacion[DATOS_NOTA.referencias].length > 0) {
        texto += `${"#".repeat(SECCIONES.referencias.nivel)} ${SECCIONES.referencias.texto}\n---\n`;
        texto += dataview.crearSeccion(`await dv.view("${DATAVIEW.self}/${DATAVIEW.referencia.archivo}", { archivo: dv.current() });`);
    }

    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            ...representacion,
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

module.exports = () => ({
    clase: (tp, referenciasPreferidas, representacionPrevia = null) => new NotaFacultad(tp, referenciasPreferidas, representacionPrevia),
    crear: crearNotaFacultad,
    editar: editarNotaFacultad,
})