const CLASIFICACION = "clasificacion";
const TEMA = "tema";
const SUBTEMA = "subtema";
const NUMERO = "numero";
const NOMBRE = "nombre";
const PATH = "path";

const AGREGAR = "agregar";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta) {
    const { TAGS, BLOQUES_MATEMATICA, DATOS: { BLOQUES_MATEMATICA: DATOS_BLOQUES_MATEMATICA } } = tp.user.constantes(); 
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const dv = app.plugins.plugins.dataview.api;

    let salir = false;
    let temas, opciones, valores, resultado;

    switch (respuesta) {
        case CLASIFICACION:
            datos[CLASIFICACION] = await preguntar.suggester(
                tp, ({ nombre }) => nombre, [ BLOQUES_MATEMATICA.teorema, BLOQUES_MATEMATICA.observacion, BLOQUES_MATEMATICA.proposicion ],
                "Que tipo de bloque se va a usar",
                error.Prompt("No se ingresó la clasificación")
            );
            break;

        case TEMA:
            temas = dv.pages(`#${TAGS.bloqueMatematica.tema} and #${TAGS.bloqueMatematica.self}`);
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
            let subTemas = dv.pages(`#${TAGS.bloqueMatematica.self}/${tp.user.tagPorNombre(datos[TEMA])} and #${TAGS.bloqueMatematica.subtema}`);

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
                let subtema = subTemas.find(subtema => subtema.file.name == resultado);
                if (subtema) {
                    let notas = dv.array(subtema[DATOS_BLOQUES_MATEMATICA.subtema.nota.self]);
                    datos[NUMERO] = 1;
                    if (notas.length > 0) {
                        notas.map(({ [DATOS_BLOQUES_MATEMATICA.subtema.nota.numero]: numero }) => numero).max() + 1;
                    }
                }
            } 
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
    let opciones = [], valores = [];

    opciones.push(CLASIFICACION);
    valores.push(datos[CLASIFICACION]
        ? ` ️✏️ Modificar la clasificación, donde era ${datos[CLASIFICACION].nombre}`
        : " ⊕ Clasificación"
    );

    opciones.push(TEMA);
    if (!datos[TEMA]) {
        valores.push(" ⊕ Tema");
    } else {
        valores.push(` ️✏️ Modificar el tema, donde era ${datos[TEMA]}`);

        opciones.push(SUBTEMA);
        valores.push(datos[SUBTEMA]
            ? ` ️✏️ Modificar el subtema, donde era ${datos[SUBTEMA]}`
            : " ⊕ Subtema"
        );
    }

    opciones.push(NOMBRE);
    valores.push(datos[NOMBRE]
        ? ` ️✏️ Modificar el nombre, donde era ${datos[NOMBRE]}`
        : " ⊕ (opcional) Nombre"
    );

    if ([CLASIFICACION, TEMA, SUBTEMA].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(" ↶ Confirmar datos");
    }

    return { opciones: opciones, valores: valores };
}

async function agregarDatos(tp, datos) {
    const { TAGS, DIRECTORIOS, BLOQUES_MATEMATICA, DATOS_BLOQUES_MATEMATICA } = tp.user.constantes();

    let subtemas = dv.pages(`#${TAGS.bloqueMatematica.self}/${tp.user.tagPorNombre(datos[TEMA])} and #${TAGS.bloqueMatematica.subtema}`);

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
                tp.file.find_tfile(BLOQUES_MATEMATICA.template.tema),
                datos[TEMA], false, carpeta
            );
        } catch {
            carpeta = app.vault.getAbstractFileByPath(carpetaTema);
            numeroTema = dv.page(`${carpetaTema}/${datos[TEMA]}`)[DATOS_BLOQUES_MATEMATICA.tema.numero];
        };

        await tp.file.create_new(
            tp.file.find_tfile(BLOQUES_MATEMATICA.template.subtema),
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

        let id = `${datos[CLASIFICACION].reducido}-${numeroTema}-${numeroSubtema}-${datos[NUMERO]}`;
        notas.push({
            [DATOS_BLOQUES_MATEMATICA.subtema.nota.numero]: datos[NUMERO],
            [DATOS_BLOQUES_MATEMATICA.subtema.nota.nombre]: datos[NOMBRE],
            [DATOS_BLOQUES_MATEMATICA.subtema.nota.path]: `${datos[PATH]}#^${id}`,
        });

        frontmatter[DATOS_BLOQUES_MATEMATICA.subtema.nota.self] = notas;
    });

}

function representacion(tp, datos) {
    const { TAGS, DATOS_BLOQUES_MATEMATICA } = tp.user.constantes();
    const { callout, nombre, reducido } = datos[CLASIFICACION];

    const tema = dv.pages(`#${TAGS.bloqueMatematica.self}/${tp.user.tagPorNombre(datos[TEMA])} and #${TAGS.bloqueMatematica.tema}`)
        .first();
    const subtema = dv.pages(`#${TAGS.bloqueMatematica.self}/${tp.user.tagPorNombre(datos[TEMA])} and #${TAGS.bloqueMatematica.subtema}`)
        .find(subtema => subtema.file.name == datos[SUBTEMA]);

    const numeroTema = tema[DATOS_BLOQUES_MATEMATICA.tema.numero];
    const numeroSubtema = subtema[DATOS_BLOQUES_MATEMATICA.subtema.numero];
    const numeroRepresentacion = datos[NUMERO];

    let numero = `${numeroTema}.${numeroSubtema}.${numeroRepresentacion}`;
    let nombreBloque = datos[NOMBRE] 
        ?  `(${datos[NOMBRE]})`
        : "";

    return `> [!${callout}]+ ${nombre} ${numero} ${nombreBloque}\n> \n^${reducido}-${numero.replaceAll(".", "-")}\n\n`;
}

module.exports = () => ({
    obtenerDefault: () => ({
        [CLASIFICACION]: null,
        [TEMA]: null,
        [SUBTEMA]: null,
        [NUMERO]: null,
        [NOMBRE]: null,
        [PATH]: null,
    }),
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    representacion: representacion,
    agregarDatos: agregarDatos,
});