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
        BLOQUES_MATEMATICA, 
        TAGS: { coleccion: { bloqueMatematica: TAGS_MATEMATICA } }, 
        DATOS: { BLOQUES_MATEMATICA: DATOS_BLOQUES_MATEMATICA } 
    } = tp.user.constantes(); 
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const dv = app.plugins.plugins.dataview.api;

    let salir = false;
    let temas, opciones, valores, resultado;

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
            temas = dv.pages(`#${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`);
            opciones = [ " ⊕ Tema" ];
            valores = [ AGREGAR ];

            for (let tema of temas) {
                opciones.push(tema.file.name);
                valores.push(tema.file.name);
            }

            resultado = valores[0];
            if (opciones.length > 1) {
                resultado = await preguntar.suggester(
                    tp, opciones, valores,
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
            let subTemas = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`);

            opciones = [ " ⊕ Subtema" ]
            valores = [ AGREGAR ];

            for (let subtema of subTemas) {
                opciones.push(subtema.file.name);
                valores.push(subtema.file.name);
            }

            resultado = valores[0];
            if (opciones.length > 1) {
                resultado = await preguntar.suggester(
                    tp, opciones, valores,
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
            if (subTemas.length > 0) {
                let subtema = subTemas.find(subtema => subtema.file.name == datos[SUBTEMA]);
                if (subtema) {
                    let notas = dv.array(subtema[DATOS_BLOQUES_MATEMATICA.subtema.nota.self]);
                    datos[NUMERO] = 1;
                    if (notas.length > 0) {
                        datos[NUMERO] = notas.map(({ [DATOS_BLOQUES_MATEMATICA.subtema.nota.numero]: numero }) => numero).max() + 1;
                    }
                }
            } 
            break;

        case PATH_RELACIONADO:
            datos[PATH_RELACIONADO] = await tp.user.crearPreguntas(
                tp, () => ({
                    [TEMA_RELACIONADO]: null,
                    [SUBTEMA_RELACIONADO]: null,
                    [BLOQUE_RELACIONADO]: null,
                }), actualizarDatosRelacionado, generarPreguntasRelacionado, 
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
        TAGS: { coleccion: { bloqueMatematica: TAGS_MATEMATICA } }, 
        DATOS: { BLOQUES_MATEMATICA: DATOS_BLOQUES_MATEMATICA } 
    } = tp.user.constantes(); 
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const dv = app.plugins.plugins.dataview.api;

    let salir = false;
    let temas, resultado, nombreTemaTag, nombreSubtemaTag;

    switch (respuesta) {
        case TEMA_RELACIONADO:
            temas = dv.pages(`#${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`)
                .filter(tema => !datos[TEMA_RELACIONADO] || tema.file.name != datos[TEMA_RELACIONADO].file.name)
                .filter(tema => {
                    let subtemas = dv.pages(`#${TAGS_MATEMATICA.self}/${tp.user.tagPorNombre(tema.file.name)} and #${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`);
                    return subtemas.length > 0;
                });
            resultado = temas.first();
            if (temas.length > 1) {
                resultado = await preguntar.suggester(
                    tp, (tema) => tema.file.name, temas,
                    "Como se llamar el tema?",
                    error.Prompt("No se ingresó el tema")
                );
            }
            datos[TEMA_RELACIONADO] = resultado;
            break;

        case SUBTEMA_RELACIONADO:
            nombreTemaTag = tp.user.tagPorNombre(datos[TEMA_RELACIONADO].file.name);
            let subtemas = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`)
                .filter(subtema => !datos[SUBTEMA_RELACIONADO] || subtema.file.name != datos[SUBTEMA_RELACIONADO].file.name)
                .filter(subtema => subtema[DATOS_BLOQUES_MATEMATICA.subtema.nota.self].length > 0);

            resultado = subtemas.first();
            if (subtemas.length > 1) {
                resultado = await preguntar.suggester(
                    tp, (subtema) => subtema.file.name, subtemas,
                    "Como se llamar el subtema?",
                    error.Prompt("No se ingresó el subtema")
                );
            }
            datos[SUBTEMA_RELACIONADO] = resultado;
            break;

        case BLOQUE_RELACIONADO:
            nombreTemaTag = tp.user.tagPorNombre(datos[TEMA_RELACIONADO].file.name);
            nombreSubtemaTag = tp.user.tagPorNombre(datos[SUBTEMA_RELACIONADO].file.name);

            let subtema = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag}/${nombreSubtemaTag} and #${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`)
                .find(subtema => subtema.file.name == datos[SUBTEMA_RELACIONADO].file.name);
            let bloques = subtema[DATOS_BLOQUES_MATEMATICA.subtema.nota.self]
                .sort(bloque => parseInt(bloque[DATOS_BLOQUES_MATEMATICA.subtema.nota.numero], 10));

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
    const { SIMBOLOS } = tp.user.constantes();
    let opciones = [], valores = [];

    opciones.push(TEMA_RELACIONADO);
    if (!datos[TEMA_RELACIONADO]) {
        valores.push(` ${SIMBOLOS.agregar} Tema`);
    } else {
        valores.push(` ${SIMBOLOS.modificar}️ Modificar el tema, donde era ${datos[TEMA_RELACIONADO].file.name}`);

        opciones.push(SUBTEMA_RELACIONADO);
        valores.push(datos[SUBTEMA_RELACIONADO]
            ? ` ${SIMBOLOS.modificar} Modificar el subtema, donde era ${datos[SUBTEMA_RELACIONADO].file.name}`
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

async function agregarDatos(tp, datos) {
    const { 
        TAGS: { coleccion: { bloqueMatematica: TAGS_MATEMATICA } }, 
        DIRECTORIOS, TEMPLATE, BLOQUES_MATEMATICA, 
        DATOS: { BLOQUES_MATEMATICA: DATOS_BLOQUES_MATEMATICA } 
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    if (datos[CLASIFICACION] == BLOQUES_MATEMATICA.bloques.demostracion) {
        return;
    }

    let subtemas = dv.pages(`#${TAGS_MATEMATICA.self}/${tp.user.tagPorNombre(datos[TEMA])} and #${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`);

    const subtema = subtemas.find(subtema => subtema.file.name == datos[SUBTEMA]);
    let carpetaTema = `${DIRECTORIOS.coleccion.self}/${DIRECTORIOS.coleccion.bloquesMatematica}/${datos[TEMA]}`;

    let numeroTema = 1;
    let numeroSubtema = 1 
    if (subtemas.length > 0) {
        numeroSubtema = subtemas.map(subtema => subtema[DATOS_BLOQUES_MATEMATICA.subtema.numero]).max() + 1;
    }

    if (!subtema) {
        let carpeta;
        try {
            carpeta = await app.vault.createFolder(carpetaTema);
            await tp.file.create_new(
                tp.file.find_tfile(TEMPLATE.coleccion.bloqueMatematica.tema),
                datos[TEMA], false, carpeta
            );
        } catch {
            carpeta = app.vault.getAbstractFileByPath(carpetaTema);
            numeroTema = dv.page(`${carpetaTema}/${datos[TEMA]}`)[DATOS_BLOQUES_MATEMATICA.tema.numero];
        };

        await tp.file.create_new(
            tp.file.find_tfile(TEMPLATE.coleccion.bloqueMatematica.subtema),
            datos[SUBTEMA], false, carpeta
        );

    } else {
        numeroTema = dv.page(`${carpetaTema}/${datos[TEMA]}`)[DATOS_BLOQUES_MATEMATICA.tema.numero];
        numeroSubtema = subtema[DATOS_BLOQUES_MATEMATICA.subtema.numero];
    }


    const tSubtema = tp.file.find_tfile(`${carpetaTema}/${datos[SUBTEMA]}`);
    await app.fileManager.processFrontMatter(tSubtema, (frontmatter) => {
        let notas = frontmatter[DATOS_BLOQUES_MATEMATICA.subtema.nota.self];
        if (!notas) notas = [];

        let id = `${BLOQUES_MATEMATICA[datos[CLASIFICACION]].reducido}-${numeroTema}-${numeroSubtema}-${datos[NUMERO]}`;
        let pathRelaciondo = null;
        let tituloRelaciondo = null;
        if (datos[PATH_RELACIONADO]) {
            pathRelaciondo = datos[PATH_RELACIONADO][BLOQUE_RELACIONADO][DATOS_BLOQUES_MATEMATICA.subtema.nota.path]
            tituloRelaciondo = describirBloque(tp, datos[PATH_RELACIONADO][BLOQUE_RELACIONADO])
                .replaceAll("\\", "\\\\"); // Reemplaza \ por \\
        }
        notas.push({
            [DATOS_BLOQUES_MATEMATICA.subtema.nota.numero]: datos[NUMERO],
            [DATOS_BLOQUES_MATEMATICA.subtema.nota.nombre]: datos[NOMBRE],
            [DATOS_BLOQUES_MATEMATICA.subtema.nota.path]: `${datos[PATH]}#^${id}`,
            [DATOS_BLOQUES_MATEMATICA.subtema.nota.pathRelacionado]: datos[PATH_RELACIONADO]
                ? `[[${pathRelaciondo}|${tituloRelaciondo}]]`
                : null
        });

        frontmatter[DATOS_BLOQUES_MATEMATICA.subtema.nota.self] = notas;
    });

}

function representacion(tp, datos) {
    const { 
        BLOQUES_MATEMATICA, 
        TAGS: { coleccion: { bloqueMatematica: TAGS_MATEMATICA } }, 
        DATOS: { BLOQUES_MATEMATICA: DATOS_BLOQUES_MATEMATICA } 
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    const { callout, nombre, reducido } = BLOQUES_MATEMATICA[datos[CLASIFICACION]];
    if (datos[CLASIFICACION] == BLOQUES_MATEMATICA.bloques.demostracion) {
        return `> [!${callout}]- ${nombre}\n`;
    }

    let nombreTemaTag = tp.user.tagPorNombre(datos[TEMA]);
    const tema = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.tema}`)
        .first();
    const subtema = dv.pages(`#${TAGS_MATEMATICA.self}/${nombreTemaTag} and #${TAGS_MATEMATICA.self}/${TAGS_MATEMATICA.subtema}`)
        .find(subtema => subtema.file.name == datos[SUBTEMA]);

    const numeroTema = tema[DATOS_BLOQUES_MATEMATICA.tema.numero];
    const numeroSubtema = subtema[DATOS_BLOQUES_MATEMATICA.subtema.numero];
    const numeroRepresentacion = datos[NUMERO];

    let numero = `${numeroTema}.${numeroSubtema}.${numeroRepresentacion}`;
    let nombreBloque = datos[NOMBRE] 
        ?  `(${datos[NOMBRE]})`
        : "";

    let extra = "";
    if (datos[PATH_RELACIONADO] && datos[PATH_RELACIONADO][BLOQUE_RELACIONADO]) {
        extra = ` - [[${datos[PATH_RELACIONADO][BLOQUE_RELACIONADO][DATOS_BLOQUES_MATEMATICA.subtema.nota.path]}|${describirBloque(tp, datos[PATH_RELACIONADO][BLOQUE_RELACIONADO])}]]`;
    }

    return `> [!${callout}]+ ${nombre} ${numero} ${nombreBloque} ${extra}\n> \n^${reducido}-${numero.replaceAll(".", "-")}\n\n`;
}

module.exports = () => ({
    obtenerDefault: () => ({
        [CLASIFICACION]: null,
        [TEMA]: null,
        [SUBTEMA]: null,
        [NUMERO]: null,
        [NOMBRE]: null,
        [PATH]: null,
        [PATH_RELACIONADO]: null,
    }),
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    representacion: representacion,
    agregarDatos: agregarDatos,
});