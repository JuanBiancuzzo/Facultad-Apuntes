const CLASIFICACION = "clasificacion";
const TEMA = "tema";
const SUBTEMA = "subtema";
const NUMERO = "numero";
const NOMBRE = "nombre";
const PATH = "path";

const PATH_RELACIONADO = "pathRelacionado";
const TEMA_RELACIONADO = "tema";
const SUBTEMA_RELACIONADO = "subtema";
const BLOQUE_RELACIONADO = "bloque";

const AGREGAR = "agregar";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta) {
    const { 
        BLOQUES_MATEMATICA, SIMBOLOS,
        TAGS: { coleccion: { self: TAG_COLECCION, bloqueMatematica: TAGS_MATEMATICA } }, 
        DATOS: { BLOQUES_MATEMATICA: { tema: DATOS_TEMA, subtema: DATOS_SUBTEMA } } 
    } = tp.user.constantes(); 
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const dv = app.plugins.plugins.dataview.api;

    let salir = false;
    let temas, resultado;

    switch (respuesta) {
        case CLASIFICACION:
            datos[CLASIFICACION] = await preguntar.suggester(
                tp, (nombreBloque) => BLOQUES_MATEMATICA[nombreBloque].nombre, 
                Object.values(BLOQUES_MATEMATICA.bloques),
                "Que tipo de bloque se va a usar",
                error.Prompt("No se ingresó la clasificación")
            );
            if (datos[CLASIFICACION] == BLOQUES_MATEMATICA.bloques.demostracion) {
                datos[TEMA] = null;
                datos[SUBTEMA] = null;
                datos[NUMERO] = null;
                datos[PATH_RELACIONADO] = null;

            } else if (datos[CLASIFICACION] != BLOQUES_MATEMATICA.bloques.corolario) {
                datos[PATH_RELACIONADO] = null;
            } 
            break;

        case TEMA:
            temas = dv.pages(`#${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`);

            resultado = AGREGAR;
            if (temas.length > 0) {
                resultado = await preguntar.suggester(
                    tp, [` ${SIMBOLOS.agregar} Tema`, ...temas.map(tema => tema[DATOS_TEMA.nombre])],  
                    [ AGREGAR, ...temas.map(tema => tema[DATOS_TEMA.nombre]) ],
                    "Como se va a llamar el tema?",
                    error.Prompt("No se ingresó el tema")
                );
            }

            if (resultado == AGREGAR) {
                resultado = await preguntar.prompt(
                    tp, datos[TEMA] 
                        ? `Nuevo nombre del tema, donde antes era ${datos[TEMA]}`
                        : "Nombre del tema"
                );
            }

            datos[TEMA] = resultado;
            break;

        case SUBTEMA:
            let nombreTemaTag = tp.user.tagPorNombre(datos[TEMA]);
            let subtemas = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`);

            resultado = AGREGAR;
            if (subtemas.length > 0) {
                resultado = await preguntar.suggester(
                    tp, [` ${SIMBOLOS.agregar} Subtema`, ...subtemas.map(subtema => subtema[DATOS_SUBTEMA.nombre])],  
                    [ AGREGAR, ...subtemas.map(subtema => subtema[DATOS_SUBTEMA.nombre]) ],
                    "Como se va a llamar el subtema?",
                    error.Prompt("No se ingresó el subtema")
                );
            }

            if (resultado == AGREGAR) {
                resultado = await preguntar.prompt(
                    tp, datos[SUBTEMA] 
                        ? `Nuevo nombre del subtema, donde antes era ${datos[SUBTEMA]}`
                        : "Nombre del subtema"
                );
            }

            datos[SUBTEMA] = resultado;
            datos[NUMERO] = 1;
            if (subtemas.length > 0) {
                let subtema = subtemas.find(subtema => subtema[DATOS_SUBTEMA.nombre] == datos[SUBTEMA]);
                if (subtema) {
                    let notas = dv.array(subtema[DATOS_SUBTEMA.nota.self]);
                    datos[NUMERO] = 1;
                    if (notas.length > 0) {
                        datos[NUMERO] = notas.map(({ [DATOS_SUBTEMA.nota.numero]: numero }) => numero).max() + 1;
                    }
                }
            } 
            break;

        case PATH_RELACIONADO:
            datos[PATH_RELACIONADO] = await tp.user.crearPreguntas(
                tp, (TIPOS_DE_DEFAULT, crearFuncion) => crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                    [TEMA_RELACIONADO]: TIPOS_DE_DEFAULT.simple,
                    [SUBTEMA_RELACIONADO]: TIPOS_DE_DEFAULT.simple,
                    [BLOQUE_RELACIONADO]: TIPOS_DE_DEFAULT.simple,
                })),  actualizarDatosRelacionado, generarPreguntasRelacionado, 
                "Que bloque va a ser el que esta siendo aplicado el corolario?",
                datos[PATH_RELACIONADO] ? datos[PATH_RELACIONADO] : {}
            );
            break;

        case NOMBRE:
            datos[NOMBRE] = await preguntar.prompt(
                tp, datos[NOMBRE] 
                    ? `Nuevo nombre del bloque, donde antes era ${datos[NOMBRE]}` 
                    : "Nombre del bloque",
                error.Prompt("No se ingresó nombre del bloque")
            );
            break;

        case SALIR: 
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { SIMBOLOS, BLOQUES_MATEMATICA } = tp.user.constantes();
    let opciones = [], valores = [];

    opciones.push(CLASIFICACION);
    valores.push(datos[CLASIFICACION]
        ? ` ️${SIMBOLOS.modificar} Modificar la clasificación, donde era ${BLOQUES_MATEMATICA[datos[CLASIFICACION]].nombre}`
        : ` ${SIMBOLOS.agregar} Clasificación`
    );

    let esDemostracion = datos[CLASIFICACION] && datos[CLASIFICACION] == BLOQUES_MATEMATICA.bloques.demostracion;

    if (!esDemostracion) {
        opciones.push(TEMA);
        if (!datos[TEMA]) {
            valores.push(` ${SIMBOLOS.agregar} Tema`);
        } else {
            valores.push(` ${SIMBOLOS.modificar}️ Modificar el tema, donde era ${datos[TEMA]}`);

            opciones.push(SUBTEMA);
            valores.push(datos[SUBTEMA]
                ? ` ${SIMBOLOS.modificar} Modificar el subtema, donde era ${datos[SUBTEMA]}`
                : ` ${SIMBOLOS.agregar} Subtema`
            );
        }

        if (datos[CLASIFICACION] && datos[CLASIFICACION] == BLOQUES_MATEMATICA.bloques.corolario) {
            opciones.push(PATH_RELACIONADO);
            valores.push((datos[PATH_RELACIONADO] && datos[PATH_RELACIONADO][BLOQUE_RELACIONADO])
                ? ` ${SIMBOLOS.modificar} Modificar el subtema, donde era ${describirBloque(tp, datos[PATH_RELACIONADO][BLOQUE_RELACIONADO])}`
                : ` ${SIMBOLOS.agregar} Bloque`
            );
        }

        opciones.push(NOMBRE);
        valores.push(datos[NOMBRE]
            ? ` ${SIMBOLOS.modificar} Modificar el nombre, donde era ${datos[NOMBRE]}`
            : ` ${SIMBOLOS.agregar} (opcional) Nombre`
        );
    }

    if ( esDemostracion ||
        ([CLASIFICACION, TEMA, SUBTEMA].every(key => datos[key]) &&
        (datos[CLASIFICACION] != BLOQUES_MATEMATICA.bloques.corolario || datos[PATH_RELACIONADO] != null))
    ) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

async function actualizarDatosRelacionado(tp, datos, respuesta) {
    const { 
        TAGS: { coleccion: { self: TAG_COLECCION, bloqueMatematica: TAGS_MATEMATICA } }, 
        DATOS: { BLOQUES_MATEMATICA: { tema: DATOS_TEMA, subtema: DATOS_SUBTEMA } } 
    } = tp.user.constantes(); 
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const dv = app.plugins.plugins.dataview.api;

    let salir = false;
    let temas, resultado, nombreTemaTag, nombreSubtemaTag;

    switch (respuesta) {
        case TEMA_RELACIONADO:
            temas = dv.pages(`#${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`)
                .filter(tema => !datos[TEMA_RELACIONADO] || tema[DATOS_TEMA.nombre] != datos[TEMA_RELACIONADO][DATOS_TEMA.nombre])
                .filter(tema => {
                    let subtemas = dv.pages(`#${TAGS_MATEMATICA.self}/${tp.user.tagPorNombre(tema[DATOS_TEMA.nombre])} and #${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`);
                    return subtemas.length > 0;
                });
            resultado = temas.first();
            if (temas.length > 1) {
                resultado = await preguntar.suggester(
                    tp, (tema) => tema[DATOS_TEMA.nombre], temas,
                    "Como se llamar el tema?",
                    error.Prompt("No se ingresó el tema")
                );
            }
            datos[TEMA_RELACIONADO] = resultado;
            break;

        case SUBTEMA_RELACIONADO:
            nombreTemaTag = tp.user.tagPorNombre(datos[TEMA_RELACIONADO][DATOS_TEMA.nombre]);
            let subtemas = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`)
                .filter(subtema => !datos[SUBTEMA_RELACIONADO] || subtema[DATOS_SUBTEMA.nombre] != datos[SUBTEMA_RELACIONADO][DATOS_SUBTEMA.nombre])
                .filter(subtema => subtema[DATOS_SUBTEMA.nota.self].length > 0);

            resultado = subtemas.first();
            if (subtemas.length > 1) {
                resultado = await preguntar.suggester(
                    tp, (subtema) => subtema[DATOS_SUBTEMA.nombre], subtemas,
                    "Como se llamar el subtema?",
                    error.Prompt("No se ingresó el subtema")
                );
            }
            datos[SUBTEMA_RELACIONADO] = resultado;
            break;

        case BLOQUE_RELACIONADO:
            nombreTemaTag = tp.user.tagPorNombre(datos[TEMA_RELACIONADO][DATOS_TEMA.nombre]);
            nombreSubtemaTag = tp.user.tagPorNombre(datos[SUBTEMA_RELACIONADO][DATOS_SUBTEMA.nombre]);

            let subtema = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag}/${nombreSubtemaTag} and #${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`)
                .find(subtema => subtema[DATOS_SUBTEMA.nombre] == datos[SUBTEMA_RELACIONADO][DATOS_SUBTEMA.nombre]);
            let bloques = subtema[DATOS_SUBTEMA.nota.self]
                .sort(bloque => parseInt(bloque[DATOS_SUBTEMA.nota.numero], 10));

            resultado = bloques.first();
            if (bloques.length > 1) {
                resultado = await preguntar.suggester(
                    tp, (bloque) => describirBloque(tp, bloque),
                    bloques, "Como se llamar el bloque?",
                    error.Prompt("No se ingresó el subtema")
                );
            }
            datos[BLOQUE_RELACIONADO] = resultado;
            break;

        case SALIR: 
            salir = true;
            break;
    }

    return salir;
}

function describirBloque(tp, bloque) {
    const { BLOQUES_MATEMATICA } = tp.user.constantes();
    const DATOS_BLOQUE = tp.user.constantes().DATOS.BLOQUES_MATEMATICA.subtema.nota;
    let { [DATOS_BLOQUE.nombre]: nombre, [DATOS_BLOQUE.path]: path } = bloque;

    let id = path.split("#^").pop();
    let [reducido, numTema, numSubtema, numBloque] = id.split("-");

    let nombreTema = Object.values(BLOQUES_MATEMATICA.bloques)
        .map(nombreBloque => BLOQUES_MATEMATICA[nombreBloque])
        .find(({ reducido: reducidoActual }) => reducidoActual == reducido);

    return `${nombreTema.nombre} ${numTema}.${numSubtema}.${numBloque} ${nombre ? `(${nombre})` : ""}`;
}

function generarPreguntasRelacionado(tp, datos) {
    const { 
        SIMBOLOS, 
        DATOS: { BLOQUES_MATEMATICA: { tema: DATOS_TEMA, subtema: DATOS_SUBTEMA } } 
    } = tp.user.constantes();
    let opciones = [], valores = [];

    opciones.push(TEMA_RELACIONADO);
    if (!datos[TEMA_RELACIONADO]) {
        valores.push(` ${SIMBOLOS.agregar} Tema`);
    } else {
        valores.push(` ${SIMBOLOS.modificar}️ Modificar el tema, donde era ${datos[TEMA_RELACIONADO][DATOS_TEMA.nombre]}`);

        opciones.push(SUBTEMA_RELACIONADO);
        valores.push(datos[SUBTEMA_RELACIONADO]
            ? ` ${SIMBOLOS.modificar} Modificar el subtema, donde era ${datos[SUBTEMA_RELACIONADO][DATOS_SUBTEMA.nombre]}`
            : ` ${SIMBOLOS.agregar} Subtema`
        );
    }

    opciones.push(BLOQUE_RELACIONADO);
    valores.push(datos[BLOQUE_RELACIONADO]
        ? ` ${SIMBOLOS.modificar} Modificar el bloque, donde era ${describirBloque(tp, datos[BLOQUE_RELACIONADO])}`
        : ` ${SIMBOLOS.agregar} Bloque`
    );

    if ([TEMA_RELACIONADO, SUBTEMA_RELACIONADO, BLOQUE_RELACIONADO].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

async function crearTema(tp, tema) {
    const { 
        TAGS: { coleccion: { self: TAG_COLECCION, bloqueMatematica: TAGS_MATEMATICA } }, 
        DATOS: { BLOQUES_MATEMATICA: { tema: DATOS_TEMA } },
        DIRECTORIOS: { coleccion: DIR_COLECCION },
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    let temas = dv.pages(`#${TAG_COLECCION.self}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`);
    let numero = 1;
    if (temas.length > 0) {
        numero = temas.map(tema => tema[DATOS_TEMA.numero]).max() + 1;
    } 

    return {
        metadata: {
            [DATOS_TEMA.numero]: numero,
            [DATOS_TEMA.tags]: [
                `${TAGS_MATEMATICA.self}/${tp.user.tagPorNombre(tema)}`,
                `${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`
            ],
            [DATOS_TEMA.nombre]: tema,
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_COLECCION.bloquesMatematica}/${tema}`,
        titulo: DATOS_TEMA.obtenerTitulo(tema),
        texto: "",
    };
}

async function crearSubtema(tp, tema, subtema) {
    const { 
        TAGS: { coleccion: { self: TAG_COLECCION, bloqueMatematica: TAGS_MATEMATICA } }, 
        DATOS: { BLOQUES_MATEMATICA: { subtema: DATOS_SUBTEMA } },
        DIRECTORIOS: { coleccion: DIR_COLECCION },
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    let nombreTemaTag = tp.user.tagPorNombre(tema);
    let nombreSubtemaTag = tp.user.tagPorNombre(subtema);

    let temaDelSubtema = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`)
        .first();
    let carpeta = temaDelSubtema 
        ? temaDelSubtema.file.folder 
        : `${DIR_COLECCION.self}/${DIR_COLECCION.bloquesMatematica}/${tema}`;

    let subtemas = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`);
    let numero = 1;
    if (subtemas.length > 0) {
        numero = subtemas.map(subtema => subtema[DATOS_SUBTEMA.numero]).max() + 1;
    }

    return {
        metadata: {
            [DATOS_SUBTEMA.numero]: numero,
            [DATOS_SUBTEMA.tags]: [
                `${TAGS_MATEMATICA.self}/${nombreTemaTag}/${nombreSubtemaTag}`,
                `${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`
            ],
            [DATOS_SUBTEMA.nombre]: subtema,
            [DATOS_SUBTEMA.nota.self]: [],
        },
        carpeta: carpeta,
        titulo: DATOS_SUBTEMA.obtenerTitulo(tema, subtema),
        texto: "",
    };
}

async function agregarDatos(tp, datos) {
    const { 
        TAGS: { coleccion: { self: TAG_COLECCION, bloqueMatematica: TAGS_MATEMATICA } }, 
        DIRECTORIOS, BLOQUES_MATEMATICA, 
        DATOS: { BLOQUES_MATEMATICA: { tema: DATOS_TEMA, subtema: DATOS_SUBTEMA } } 
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;
    const crearArchivo = tp.user.archivo();

    if (datos[CLASIFICACION] == BLOQUES_MATEMATICA.bloques.demostracion) {
        return;
    }

    let tema = dv.pages(`#${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`)
        .find(tema => tema[DATOS_TEMA.nombre] == datos[TEMA]);

    let numeroTema;
    if (!tema) {
        let tTema = await crearArchivo.crear(tp, () => crearTema(tp, datos[TEMA]));
        await app.fileManager.processFrontMatter(tTema, (frontmatter) => {
            numeroTema = frontmatter[DATOS_TEMA.numero];
        });
    }
    
    let subtema = dv.pages(`#${TAGS_MATEMATICA.self}/${tp.user.tagPorNombre(datos[TEMA])} and #${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`)
        .find(subtema => subtema[DATOS_SUBTEMA.nombre] == datos[SUBTEMA]);

    let tSubtema = subtema
        ? tp.file.find_tfile(subtema.file.path)
        : await crearArchivo.crear(tp, () => crearSubtema(tp, datos[TEMA], datos[SUBTEMA]));

    await app.fileManager.processFrontMatter(tSubtema, (frontmatter) => {
        let numeroSubtema = frontmatter[DATOS_SUBTEMA.numero];
        let notas = frontmatter[DATOS_SUBTEMA.nota.self];
        if (!notas) notas = [];

        let id = `${BLOQUES_MATEMATICA[datos[CLASIFICACION]].reducido}-${numeroTema}-${numeroSubtema}-${datos[NUMERO]}`;
        let pathRelaciondo = null;
        let tituloRelaciondo = null;
        if (datos[PATH_RELACIONADO]) {
            pathRelaciondo = datos[PATH_RELACIONADO][BLOQUE_RELACIONADO][DATOS_SUBTEMA.nota.path]
            tituloRelaciondo = describirBloque(tp, datos[PATH_RELACIONADO][BLOQUE_RELACIONADO]);
        }
        notas.push({
            [DATOS_SUBTEMA.nota.numero]: datos[NUMERO],
            [DATOS_SUBTEMA.nota.nombre]: datos[NOMBRE],
            [DATOS_SUBTEMA.nota.path]: `${datos[PATH]}#^${id}`,
            [DATOS_SUBTEMA.nota.pathRelacionado]: datos[PATH_RELACIONADO]
                ? `[[${pathRelaciondo}|${tituloRelaciondo}]]`
                : null
        });

        frontmatter[DATOS_SUBTEMA.nota.self] = notas;
    });
}

function representacion(tp, datos) {
    const { 
        BLOQUES_MATEMATICA, 
        TAGS: { coleccion: { self: TAG_COLECCION, bloqueMatematica: TAGS_MATEMATICA } }, 
        DATOS: { BLOQUES_MATEMATICA: { tema: DATOS_TEMA, subtema: DATOS_SUBTEMA } } 
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    const { callout, nombre, reducido } = BLOQUES_MATEMATICA[datos[CLASIFICACION]];
    if (datos[CLASIFICACION] == BLOQUES_MATEMATICA.bloques.demostracion) {
        return `> [!${callout}]- ${nombre}\n`;
    }

    let nombreTemaTag = tp.user.tagPorNombre(datos[TEMA]);
    const tema = dv.pages(`#${TAGS_MATEMATICA.self} and #${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`)
        .find(tema => tema[DATOS_TEMA.nombre] == datos[TEMA]);

    const subtema = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAG_COLECCION}/${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`)
        .find(subtema => subtema[DATOS_SUBTEMA.nombre] == datos[SUBTEMA]);

    const numeroTema = tema[DATOS_TEMA.numero];
    const numeroSubtema = subtema[DATOS_SUBTEMA.numero];
    const numeroRepresentacion = datos[NUMERO];

    let numero = `${numeroTema}.${numeroSubtema}.${numeroRepresentacion}`;
    let nombreBloque = datos[NOMBRE] 
        ?  `(${datos[NOMBRE]})`
        : "";

    let extra = "";
    if (datos[PATH_RELACIONADO] && datos[PATH_RELACIONADO][BLOQUE_RELACIONADO]) {
        extra = ` - [[${datos[PATH_RELACIONADO][BLOQUE_RELACIONADO][DATOS_SUBTEMA.nota.path]}|${describirBloque(tp, datos[PATH_RELACIONADO][BLOQUE_RELACIONADO])}]]`;
    }

    return `> [!${callout}]+ ${nombre} ${numero} ${nombreBloque} ${extra}\n> \n^${reducido}-${numero.replaceAll(".", "-")}\n\n`;
}

module.exports = () => ({
    obtenerDefault: (TIPOS_DE_DEFAULT, crearFuncion) => crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
        [CLASIFICACION]: TIPOS_DE_DEFAULT.simple,
        [TEMA]: TIPOS_DE_DEFAULT.simple,
        [SUBTEMA]: TIPOS_DE_DEFAULT.simple,
        [NUMERO]: TIPOS_DE_DEFAULT.simple,
        [NOMBRE]: TIPOS_DE_DEFAULT.simple,
        [PATH]: TIPOS_DE_DEFAULT.simple,
        [PATH_RELACIONADO]: TIPOS_DE_DEFAULT.simple,
    })),
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    representacion: representacion,
    agregarDatos: agregarDatos,
    crear: {
        tema: crearTema,
        subtema: crearSubtema,
    },
});