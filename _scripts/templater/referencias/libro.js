const MODIFICAR_AUTORE = "modificar autores";
const ELIMINAR_AUTORE = "eliminar autores";
const MODIFICAR_CAPITULO = "modificar capitulos";
const ELIMINAR_CAPITULO = "eliminar capitulos";
const AGREGAR_EDITOR = "agregar editor";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const { 
        SIMBOLOS,
        TAGS: { coleccion: { self: TAG_COLECCION, libros: TAGS_LIBRO} },
        DATOS: { REFERENCIAS: { numReferencia: NUM_REFERENCIA, libro: DATOS_LIBRO } },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case MODIFICAR_AUTORE:
            indice = separacion[1];
            let { 
                [DATOS_LIBRO.autore.nombre]: viejoNombre,
                [DATOS_LIBRO.autore.apellido]: viejoApellido,
            } = datos[DATOS_LIBRO.autore.self][indice];

            let nuevoApellido = await preguntar.prompt(
                tp, `Nuevo apellido del autore, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del autore de forma correcta")
            );

            let nuevoNombre = await preguntar.prompt(
                tp, `Nuevo nombre del autore, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del autore de forma correcta")
            );

            datos[DATOS_LIBRO.autore.self][indice] = { 
                [DATOS_LIBRO.autore.nombre]: nuevoNombre,
                [DATOS_LIBRO.autore.apellido]: nuevoApellido,
            };
            break;

        case DATOS_LIBRO.autore.self:
            datos[DATOS_LIBRO.autore.self].push({
                [DATOS_LIBRO.autore.apellido]: await preguntar.prompt(
                    tp, "Apellido del autore",
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                ),
                [DATOS_LIBRO.autore.nombre]: await preguntar.prompt(
                    tp, "Nombre del autore",
                    error.Quit("No se ingresa el nombre del autore de forma correcta")
                ),
            });
            break;

        case ELIMINAR_AUTORE:
            datos[DATOS_LIBRO.autore.self].pop();
            break;

        case DATOS_LIBRO.titulo:
            datos[DATOS_LIBRO.titulo] = await preguntar.prompt(
                tp, datos[DATOS_LIBRO.titulo] 
                    ? `Nuevo título del libro, donde antes era ${datos[DATOS_LIBRO.titulo]}` 
                    : "Título del libro",
                error.Quit("No se ingresó nombre del libro")
            );
            break;

        case DATOS_LIBRO.subtitulo:
            datos[DATOS_LIBRO.subtitulo] = await preguntar.prompt(
                tp, datos[DATOS_LIBRO.subtitulo]
                    ? `Nuevo subtítulo del libro, donde antes era ${datos[DATOS_LIBRO.subtitulo]}`
                    : "Subtítulo del libro",
                error.Quit("No se ingresó el subtitulo del libro")
            );
            break;

        case DATOS_LIBRO.anio:
            datos[DATOS_LIBRO.anio] = await preguntar.numero(
                tp, datos[DATOS_LIBRO.anio]
                    ? `Nuevo año de publicación, donde antes era ${datos[DATOS_LIBRO.anio]}`
                    : "Año de publicación del libro",
                error.Quit("No se ingresó el año del publicación del libro")
            );
            break;

        case DATOS_LIBRO.editorial:
            const dv = app.plugins.plugins.dataview.api;
            const editoriales = dv.pages(`#${TAG_COLECCION}/${TAGS_LIBRO.self}/${TAGS_LIBRO.libro}`)
                .map(ref => ref[DATOS_LIBRO.editorial])
                .distinct();

            let respuesta = AGREGAR_EDITOR;
            if (editoriales.length > 0) {
                respuesta = await preguntar.suggester(
                    tp, [` ${SIMBOLOS.agregar} Agregar editorial`, ...editoriales], [AGREGAR_EDITOR, ...editoriales],
                    datos[DATOS_LIBRO.editorial]
                        ? `Nuevo editorial, donde antes era ${datos[DATOS_LIBRO.editorial]}`
                        : "Editorial del libro",
                    error.Quit("No se ingresó la editorial del libro")
                );
            }

            if (respuesta == AGREGAR_EDITOR) {
                respuesta = await preguntar.prompt(
                    tp, datos[DATOS_LIBRO.editorial]
                        ? `Nuevo editorial, donde antes era ${datos[DATOS_LIBRO.editorial]}`
                        : "Editorial del libro",
                    error.Quit("No se ingresó la editorial del libro")
                );
            }

            datos[DATOS_LIBRO.editorial] = respuesta;
            break;

        case DATOS_LIBRO.edicion:
            datos[DATOS_LIBRO.edicion] = await preguntar.numero(
                tp, datos[DATOS_LIBRO.edicion]
                    ? `Nueva edición, donde antes era ${datos[DATOS_LIBRO.edicion]}`
                    : "Edición del libro",
                error.Quit("No se ingresó la edición del libro, debería ser un número")
            );
            break;

        case DATOS_LIBRO.volumen:
            datos[DATOS_LIBRO.volumen] = await preguntar.numero(
                tp, datos[DATOS_LIBRO.volumen]
                    ? `Nuevo volumen, donde antes era ${datos[DATOS_LIBRO.volumen]}`
                    : "Volumen del libro",
                error.Quit("No se ingresó el volumen del libro")
            );
            break;

        case DATOS_LIBRO.url:
            datos[DATOS_LIBRO.url] = await preguntar.prompt(
                tp, datos[DATOS_LIBRO.url]
                    ? `Nuevo URL del libro, donde antes era ${datos[DATOS_LIBRO.url]}`
                    : "URL del libro",
                error.Quit("No se ingresó el url del libro")
            );
            break;

        case MODIFICAR_CAPITULO:
            indice = separacion[1];
        
        case DATOS_LIBRO.capitulo:
            let capituloPrevio, numReferencia;
            if (indice) {
                capituloPrevio = datos[DATOS_LIBRO.capitulo][indice];
                numReferencia = capituloPrevio[NUM_REFERENCIA];
            } else {
                numReferencia = seguidorRef.conseguirReferencia();
                capituloPrevio = { [NUM_REFERENCIA]: numReferencia };
            }

            let { 
                obtenerDefault: obtenerDefaultCapitulo,
                actualizarDatos: actualizarDatosCapitulo,
                generarPreguntas: generarPreguntasCapitulo,
            } = tp.user.capituloLibro();

            let capitulo = await tp.user.crearPreguntas(
                tp, obtenerDefaultCapitulo.bind(null, tp),
                (tp, datosDados, respuestaDada) => actualizarDatosCapitulo(tp, datosDados, respuestaDada, seguidorRef),
                generarPreguntasCapitulo,
                "Completar para poder ingresar un capítulo", capituloPrevio
            );
            
            if (indice) {
                datos[DATOS_LIBRO.capitulo][indice] = capitulo; 
            } else {
                datos[DATOS_LIBRO.capitulo].push(capitulo);
            }
            break;

        case ELIMINAR_CAPITULO:
            let ultimoCapitulo = datos[DATOS_LIBRO.capitulo].pop();
            seguidorRef.devolverReferencia(ultimoCapitulo[NUM_REFERENCIA]);
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { 
        SIMBOLOS, REFERENCIAS,
        DATOS: { REFERENCIAS: { libro: DATOS_LIBRO } },
    } = tp.user.constantes();
    let opciones = [];
    let valores = [];

    opciones.push(DATOS_LIBRO.titulo);
    if (datos[DATOS_LIBRO.titulo]) {
        valores.push(`️ ${SIMBOLOS.modificar}️ Modificar el nombre del libro, donde era ${datos[DATOS_LIBRO.titulo]}`);

        opciones.push(DATOS_LIBRO.subtitulo);
        valores.push(datos[DATOS_LIBRO.subtitulo]
            ? ` └-> ${SIMBOLOS.modificar}️ Modificar el nombre del libro, donde era ${datos[DATOS_LIBRO.subtitulo]}`
            : ` └-> ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Subtítulo del libro`
        );

    } else {
        valores.push(` ${SIMBOLOS.agregar} Nombre del libro`);
    }

    for (let [indice, autor] of datos[DATOS_LIBRO.autore.self].entries()) {
        let { [DATOS_LIBRO.autore.nombre]: nombre, [DATOS_LIBRO.autore.apellido]: apellido } = autor;
        opciones.push(`${MODIFICAR_AUTORE}-${indice}`);
        valores.push(`️ ️${SIMBOLOS.modificar}️ Modificar el autore ${nombre} ${apellido}`);
    }

    let cantidadAutores = datos[DATOS_LIBRO.autore.self].length;
    if (cantidadAutores == 0) {
        opciones.push(DATOS_LIBRO.autore.self);
        valores.push(` ${SIMBOLOS.agregar} Nombre del autore`);

    } else {
        let { 
            [DATOS_LIBRO.autore.nombre]: nombre, 
            [DATOS_LIBRO.autore.apellido]: apellido 
        } = datos[DATOS_LIBRO.autore.self][cantidadAutores - 1];

        opciones.push(ELIMINAR_AUTORE);
        valores.push(` ${SIMBOLOS.sacar} Eliminar ${nombre} ${apellido}`);

        opciones.push(DATOS_LIBRO.autore.self);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Nombre del autore`);
    }

    opciones.push(DATOS_LIBRO.anio);
    valores.push(datos[DATOS_LIBRO.anio]
        ? ` ️${SIMBOLOS.modificar}️ Modificar el año de publicación, donde era ${datos[DATOS_LIBRO.anio]}`
        : ` ${SIMBOLOS.agregar} Año de publicación del libro`
    );

    opciones.push(DATOS_LIBRO.editorial);
    valores.push(datos[DATOS_LIBRO.editorial]
        ? ` ️${SIMBOLOS.modificar} Modificar la editorial, donde era ${datos[DATOS_LIBRO.editorial]}`
        : ` ${SIMBOLOS.agregar} Editorial del libro`
    );

    opciones.push(DATOS_LIBRO.edicion);
    valores.push(datos[DATOS_LIBRO.edicion]
        ? ` ️${SIMBOLOS.modificar}️ Modificar la edición del libro, donde era ${datos[DATOS_LIBRO.edicion]}`
        : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Edición del libro`
    );

    opciones.push(DATOS_LIBRO.volumen);
    valores.push(datos[DATOS_LIBRO.volumen]
        ? ` ️${SIMBOLOS.modificar}️ Modificar el volumen del libro, donde era ${datos[DATOS_LIBRO.volumen]}`
        : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Volumen del libro`
    );

    opciones.push(DATOS_LIBRO.url);
    valores.push(datos[DATOS_LIBRO.url]
        ? ` ️${SIMBOLOS.modificar}️ Modificar el URL, donde era ${datos[DATOS_LIBRO.url]}`
        : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} URL del libro`
    );

    for (let [indice, infoCapitulo] of datos[DATOS_LIBRO.capitulo].entries()) {
        let capitulo = infoCapitulo;
        let representacion = tp.user.capituloLibro().describirReducido(tp, capitulo);

        opciones.push(`${MODIFICAR_CAPITULO}-${indice}`);
        valores.push(`️ ️${SIMBOLOS.modificar} Modificar el ${representacion}`);
    }

    let cantidadCapitulos = datos[DATOS_LIBRO.capitulo].length;
    if (cantidadCapitulos > 0) {
        let ultimoCapitulo = datos[DATOS_LIBRO.capitulo][cantidadCapitulos - 1];
        let representacion = tp.user.capituloLibro().describirReducido(tp, ultimoCapitulo);

        opciones.push(ELIMINAR_CAPITULO);
        valores.push(` ${SIMBOLOS.sacar} Eliminar ${representacion}`);
    }

    opciones.push(DATOS_LIBRO.capitulo);
    valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Capítulo del libro`);

    const DATOS_SIMPLES = [DATOS_LIBRO.titulo, DATOS_LIBRO.anio, DATOS_LIBRO.editorial];
    if (datos[DATOS_LIBRO.autore.self].length > 0 && DATOS_SIMPLES.every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { DATOS: { REFERENCIAS: { libro: DATOS_LIBRO } } } = tp.user.constantes();

    let autores = [];
    for (let { [DATOS_LIBRO.autore.nombre]: nombre, [DATOS_LIBRO.autore.apellido]: apellido } of datos[DATOS_LIBRO.autore.self]) {
        autores.push(`${nombre} ${apellido}`);
    }

    let nombre = datos[DATOS_LIBRO.titulo];
    if (datos[DATOS_LIBRO.subtitulo]) nombre += `: ${datos[DATOS_LIBRO.subtitulo]}`;
    if (datos[DATOS_LIBRO.volumen]) nombre += ` vol. ${datos[DATOS_LIBRO.volumen]}`;

    return `${nombre} de ${autores.join(", ")}`;
}

module.exports = () => ({
    obtenerDefault: (tp, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { REFERENCIAS: { libro: DATOS_LIBRO } } } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_LIBRO.titulo]: TIPOS_DE_DEFAULT.simple,
            [DATOS_LIBRO.subtitlo]: TIPOS_DE_DEFAULT.simple,
            [DATOS_LIBRO.autore.self]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () =>  crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                    [DATOS_LIBRO.autore.nombre]: TIPOS_DE_DEFAULT.simple,
                    [DATOS_LIBRO.autore.apellido]: TIPOS_DE_DEFAULT.simple,
                })),
            ),
            [DATOS_LIBRO.anio]: TIPOS_DE_DEFAULT.simple,
            [DATOS_LIBRO.editorial]: TIPOS_DE_DEFAULT.simple,
            [DATOS_LIBRO.edicion]: TIPOS_DE_DEFAULT.simple,
            [DATOS_LIBRO.volumen]: TIPOS_DE_DEFAULT.simple,
            [DATOS_LIBRO.url]: TIPOS_DE_DEFAULT.simple,
            [DATOS_LIBRO.capitulo]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () => tp.user.capituloLibro().obtenerDefault(tp, TIPOS_DE_DEFAULT, crearFuncion),
            ),
        }))
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});