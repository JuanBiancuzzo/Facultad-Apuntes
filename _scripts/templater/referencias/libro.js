const MODIFICAR_AUTORE = "modificar autores";
const ELIMINAR_AUTORE = "eliminar autores";
const MODIFICAR_CAPITULO = "modificar capitulos";
const ELIMINAR_CAPITULO = "eliminar capitulos";
const AGREGAR_EDITOR = "agregar editor";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const { salir: SALIR, libro: { 
        TITULO_OBRA, SUBTITULO_OBRA, NOMBRE_AUTORES, ANIO,
        EDITORIAL, EDICION, VOLUMEN, URL, CAPITULOS, 
    } } = tp.user.constantes().DATOS.REFERENCIAS;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case MODIFICAR_AUTORE:
            indice = separacion[1];
            let { nombre: viejoNombre, apellido: viejoApellido } = datos[NOMBRE_AUTORES][indice];

            let nuevoApellido = await preguntar.prompt(
                tp, `Nuevo apellido del autore, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del autore de forma correcta")
            );

            let nuevoNombre = await preguntar.prompt(
                tp, `Nuevo nombre del autore, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del autore de forma correcta")
            );

            datos[NOMBRE_AUTORES][indice] = { nombre: nuevoNombre, apellido: nuevoApellido };
            break;

        case NOMBRE_AUTORES:
            datos[NOMBRE_AUTORES].push({
                apellido: await preguntar.prompt(
                    tp, "Apellido del autore",
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                ),
                nombre: await preguntar.prompt(
                    tp, "Nombre del autore",
                    error.Quit("No se ingresa el nombre del autore de forma correcta")
                ),
            });
            break;

        case ELIMINAR_AUTORE:
            datos[NOMBRE_AUTORES].pop();
            break;

        case TITULO_OBRA:
            datos[TITULO_OBRA] = await preguntar.prompt(
                tp, datos[TITULO_OBRA] 
                    ? `Nuevo título del libro, donde antes era ${datos[TITULO_OBRA]}` 
                    : "Título del libro",
                error.Quit("No se ingresó nombre del libro")
            );
            break;

        case SUBTITULO_OBRA:
            datos[SUBTITULO_OBRA] = await preguntar.prompt(
                tp, datos[SUBTITULO_OBRA]
                    ? `Nuevo subtítulo del libro, donde antes era ${datos[SUBTITULO_OBRA]}`
                    : "Subtítulo del libro",
                error.Quit("No se ingresó el subtitulo del libro")
            );
            break;

        case ANIO:
            datos[ANIO] = await preguntar.numero(
                tp, datos[ANIO]
                    ? `Nuevo año de publicación, donde antes era ${datos[ANIO]}`
                    : "Año de publicación del libro",
                error.Quit("No se ingresó el año del publicación del libro")
            );
            break;

        case EDITORIAL:
            const dv = app.plugins.plugins.dataview.api;
            const editoriales = dv.pages("#biblioteca/libro")
                .map(ref => ref.editorial)
                .distinct();

            let respuesta = await preguntar.suggester(
                tp, [" ⊕ Agregar editorial", ...editoriales], [AGREGAR_EDITOR, ...editoriales],
                datos[EDITORIAL] 
                    ? `Nuevo editorial, donde antes era ${datos[EDITORIAL]}` 
                    : "Editorial del libro",
                error.Quit("No se ingresó la editorial del libro")
            );

            if (respuesta == AGREGAR_EDITOR) {
                respuesta = await preguntar.prompt(
                    tp, datos[EDITORIAL]
                        ? `Nuevo editorial, donde antes era ${datos[EDITORIAL]}`
                        : "Editorial del libro",
                    error.Quit("No se ingresó la editorial del libro")
                );
            }

            datos[EDITORIAL] = respuesta;
            break;

        case EDICION:
            datos[EDICION] = await preguntar.numero(
                tp, datos[EDICION]
                    ? `Nueva edición, donde antes era ${datos[EDICION]}`
                    : "Edición del libro",
                error.Quit("No se ingresó la edición del libro")
            );
            break;

        case VOLUMEN:
            datos[VOLUMEN] = await preguntar.numero(
                tp, datos[VOLUMEN]
                    ? `Nuevo volumen, donde antes era ${datos[VOLUMEN]}`
                    : "Volumen del libro",
                error.Quit("No se ingresó el volumen del libro")
            );
            break;

        case URL:
            datos[URL] = await preguntar.prompt(
                tp, datos[URL]
                    ? `Nuevo URL del libro, donde antes era ${datos[URL]}`
                    : "URL del libro",
                error.Quit("No se ingresó el url del libro")
            );
            break;

        case MODIFICAR_CAPITULO:
            indice = separacion[1];
        
        case CAPITULOS:
            let capituloPrevio, numReferencia;
            if (indice) {
                capituloPrevio = datos[CAPITULOS][indice];
                numReferencia = capituloPrevio[NUM_REFERENCIA];
            } else {
                numReferencia = seguidorRef.conseguirReferencia();
                capituloPrevio = { [NUM_REFERENCIA]: numReferencia };
            }

            let referenciaCapitulo = tp.user.capituloLibro();
            let capitulo = await tp.user.crearPreguntas(
                referenciaCapitulo.obtenerDefault,
                referenciaCapitulo.actualizarDatos,
                referenciaCapitulo.generarPreguntas,
                "Completar para poder ingresar un capítulo", capituloPrevio
            );
            
            if (indice) {
                datos[CAPITULOS][indice] = capitulo; 
            } else {
                datos[CAPITULOS].push(capitulo);
            }
            break;

        case ELIMINAR_CAPITULO:
            let ultimoCapitulo = datos[CAPITULOS].pop();
            seguidorRef.devolverReferencia(ultimoCapitulo[NUM_REFERENCIA]);
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { salir: SALIR, libro: { 
        TITULO_OBRA, SUBTITULO_OBRA, NOMBRE_AUTORES, ANIO,
        EDITORIAL, EDICION, VOLUMEN, URL, CAPITULOS 
    } } = tp.user.constantes().DATOS.REFERENCIAS;
    const { REFERENCIAS } = tp.user.constantes();
    let opciones = [];
    let valores = [];

    opciones.push(TITULO_OBRA);
    if (datos[TITULO_OBRA]) {
        valores.push(` ️✏️ Modificar el nombre del libro, donde era ${datos[TITULO_OBRA]}`);

        opciones.push(SUBTITULO_OBRA);
        valores.push(datos[SUBTITULO_OBRA]
            ? ` └->  ️✏️ Modificar el nombre del libro, donde era ${datos[SUBTITULO_OBRA]}`
            : " └-> ⊕ (opcional) Subtítulo del libro"
        );

    } else {
        valores.push(" ⊕ Nombre del libro")
    }

    for (let [indice, autor] of datos[NOMBRE_AUTORES].entries()) {
        let { nombre, apellido } = autor;
        opciones.push(`${MODIFICAR_AUTORE}-${indice}`);
        valores.push(`️ ️✏️ Modificar el autore ${nombre} ${apellido}`);
    }

    let cantidadAutores = datos[NOMBRE_AUTORES].length;
    if (cantidadAutores == 0) {
        opciones.push(NOMBRE_AUTORES);
        valores.push(" ⊕ Nombre del autore");
    } else {
        let { nombre, apellido } = datos[NOMBRE_AUTORES][cantidadAutores - 1];
        opciones.push(ELIMINAR_AUTORE);
        valores.push(` ⊖ Eliminar ${nombre} ${apellido}`);

        opciones.push(NOMBRE_AUTORES);
        valores.push(" ⊕ (opcional) Nombre del autore");
    }

    opciones.push(ANIO);
    valores.push(datos[ANIO]
        ? ` ️✏️ Modificar el año de publicación, donde era ${datos[ANIO]}`
        : " ⊕ Año de publicación del libro"
    );

    opciones.push(EDITORIAL);
    valores.push(datos[EDITORIAL]
        ? ` ️✏️ Modificar la editorial, donde era ${datos[EDITORIAL]}`
        : " ⊕ Editorial del libro"
    );

    opciones.push(EDICION);
    valores.push(datos[EDICION]
        ? ` ️✏️ Modificar la edición del libro, donde era ${datos[EDICION]}`
        : " ⊕ (opcional) Edición del libro"
    );

    opciones.push(VOLUMEN);
    valores.push(datos[VOLUMEN]
        ? ` ️✏️ Modificar el volumen del libro, donde era ${datos[VOLUMEN]}`
        : " ⊕ (opcional) Volumen del libro"
    );

    opciones.push(URL);
    valores.push(datos[URL]
        ? ` ️✏️ Modificar el URL, donde era ${datos[URL]}`
        : " ⊕ (opcional) URL del libro"
    );

    for (let [indice, infoCapitulo] of datos[CAPITULOS].entries()) {
        let capitulo = { ...infoCapitulo };
        capitulo[REFERENCIAS.libro] = datos;
        let representacion = tp.user.capituloLibro().describir(tp, capitulo);

        opciones.push(`${MODIFICAR_CAPITULO}-${indice}`);
        valores.push(`️ ️✏️ Modificar el ${representacion}`);
    }

    let cantidadCapitulos = datos[CAPITULOS].length;
    if (cantidadCapitulos > 0) {
        let ultimoCapitulo = { ...datos[CAPITULOS][cantidadCapitulos - 1] };
        ultimoCapitulo[REFERENCIAS.libro] = datos;
        let representacion = tp.user.capituloLibro().describir(tp, ultimoCapitulo);

        opciones.push(ELIMINAR_CAPITULO);
        valores.push(` ⊖ Eliminar ${representacion}`);
    }

    opciones.push(CAPITULOS);
    valores.push(" ⊕ (opcional) Capítulo del libro");

    if (datos[NOMBRE_AUTORES].length > 0 && [TITULO_OBRA, ANIO, EDITORIAL].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(" ↶ Confirmar datos");
    }

    return { opciones: opciones, valores: valores };

}

function describir(tp, datos) {
    const { TITULO_OBRA, SUBTITULO_OBRA, NOMBRE_AUTORES, VOLUMEN } = tp.user.constantes().DATOS.REFERENCIAS.libro;

    let autores = [];
    for (let { nombre, apellido } of datos[NOMBRE_AUTORES]) {
        autores.push(`${nombre} ${apellido}`);
    }

    let nombre = datos[TITULO_OBRA];
    if (datos[SUBTITULO_OBRA]) nombre += `: ${datos[SUBTITULO_OBRA]}`;
    if (datos[VOLUMEN]) nombre += ` vol. ${datos[VOLUMEN]}`;

    return `${nombre} de ${autores.join(", ")}`;
}

module.exports = () => ({
    obtenerDefault: (tp) => {
        const { 
            TITULO_OBRA, SUBTITULO_OBRA, NOMBRE_AUTORES, ANIO, 
            EDITORIAL, EDICION, VOLUMEN, URL, CAPITULOS
        } = tp.user.constantes().DATOS.REFERENCIAS.libro;

        return {
            [TITULO_OBRA]: null,
            [SUBTITULO_OBRA]: null,
            [NOMBRE_AUTORES]: [],
            [ANIO]: null,
            [EDITORIAL]: null,
            [EDICION]: null,
            [VOLUMEN]: null,
            [URL]: null,
            [CAPITULOS]: () => tp.user.capituloLibro().obtenerDefault(tp),
        }
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});