const NUM_REFERENCIA = "numReferencia";
const NUMERO_CAPITULO = "numeroCapitulo";
const NOMBRE_CAPITULO = "nombreCapitulo";
const EDITORES = "editores";
const MODIFICAR_EDITORES = "modificar editores";
const ELIMINAR_EDITORE = "eliminar editores";
const PAGINAS = "paginas";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case NUMERO_CAPITULO:
            datos[NUMERO_CAPITULO] = await preguntar.numero(
                tp, datos[NUMERO_CAPITULO] 
                    ? `Nuevo número del capítulo, donde antes era ${datos[NUMERO_CAPITULO]}`
                    : "Número del capítulo",
                error.Quit("No se ingresó el número del capítulo")
            );
            break;

        case NOMBRE_CAPITULO:
            datos[NOMBRE_CAPITULO] = await preguntar.simple(
                tp, datos[NOMBRE_CAPITULO]
                    ? `Nuevo nombre del capítulo, donde antes era ${datos[NOMBRE_CAPITULO]}`
                    : "Nombre del capítulo",
                error.Quit("No se ingresó el nombre del capítulo")
            )
            break;

        case MODIFICAR_EDITORES:
            indice = separacion[1];
            let { nombre: viejoNombre, apellido: viejoApellido } = datos[EDITORES][indice];

            let nuevoApellido = await preguntar.simple(
                tp, `Nuevo apellido del autore, donde antes era ${viejoApellido}:`,
                error.Quit("No se ingresa el apellido del autore de forma correcta")
            );

            let nuevoNombre = await preguntar.simple(
                tp, `Nuevo nombre del autore, donde antes era ${viejoNombre}:`,
                error.Quit("No se ingresa el nombre del autore de forma correcta")
            );

            datos[EDITORES][indice] = { nombre: nuevoNombre, apellido: nuevoApellido };
            break;

        case EDITORES:
            datos[EDITORES].push({
                apellido: await preguntar.simple(
                    tp, "Apellido del autore",
                    error.Quit("No se ingresa el apellido del autore de forma correcta")
                ),
                nombre: await preguntar.simple(
                    tp, "Nombre del autore",
                    error.Quit("No se ingresa el nombre del autore de forma correcta")
                ),
            });
            break;

        case ELIMINAR_EDITORE:
            datos[EDITORES].pop();
            break;

        case PAGINAS:
            let inicioPaginas = await preguntar.numero(
                tp, datos[PAGINAS]
                    ? `Nueva página de inicio del capitulo, donde antes era ${datos[PAGINAS].inicio}`
                    : "Página de inicio del capitulo",
                error.Quit("No se ingresó el inicio del capitulo")
            );

            if (parseInt(inicioPaginas, 10) < 0) {
                throw error.Quit("El inicio es un valor negativo");
            }

            let finalPaginas = await preguntar.numero(
                tp, datos[PAGINAS]
                    ? `Nueva página final del capitulo, donde antes era ${datos[PAGINAS].final}`
                    : "Página final del capitulo",
                error.Quit("No se ingresó el final del capitulo")
            );

            if (parseInt(finalPaginas, 10) < parseInt(inicioPaginas, 10)) {
                throw error.Quit("Termina antes de lo que empieza, la página final es más chica que el inicio");
            }

            datos[PAGINAS] = { inicio: inicioPaginas, final: finalPaginas };
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    let opciones = [];
    let valores = [];

    opciones.push(NUMERO_CAPITULO);
    valores.push(datos[NUMERO_CAPITULO]
        ? ` ️✏️ Modificar el número del capítulo, donde era ${datos[NUMERO_CAPITULO]}`
        : " ⊕ Número del capítulo"
    );

    opciones.push(NOMBRE_CAPITULO);
    valores.push(datos[NOMBRE_CAPITULO]
        ? ` ️✏️ Modificar el nombre del capítulo, donde era ${datos[NOMBRE_CAPITULO]}`
        : " ⊕ (opcional) Nombre del capítulo"
    );

    for (let [indice, editore] of datos[EDITORES].entries()) {
        let { nombre, apellido } = editore;
        opciones.push(`${MODIFICAR_EDITORES}-${indice}`);
        valores.push(`️ ️✏️ Modificar el editore ${nombre} ${apellido}`);
    }

    let cantidadEditores = datos[EDITORES].length;
    if (cantidadEditores > 0) {
        let { nombre, apellido } = datos[EDITORES][cantidadEditores - 1];
        opciones.push(ELIMINAR_EDITORE);
        valores.push(` ⊖ Eliminar ${nombre} ${apellido}`);
    }
    opciones.push(EDITORES);
    valores.push(" ⊕ (opcional) Nombre del editore");

    opciones.push(PAGINAS);
    valores.push(datos[PAGINAS]
        ? ` ️✏️ Modificar las páginas del capítulo, donde era ${datos[PAGINAS].inicio} - ${datos[PAGINAS].final}`
        : " ⊕ (opcional) Número de páginas del capítulo"
    );

    if (datos[NUMERO_CAPITULO]) {
        opciones.push(SALIR);
        valores.push(" ↶ Confirmar datos");
    }

    return { opciones: opciones, valores: valores };
}

function describir(datos) {
    let textoCapitulo = datos[NUMERO_CAPITULO];
    if (datos[NOMBRE_CAPITULO]) textoCapitulo += `: ${datos[NOMBRE_CAPITULO]}`;
    if (datos[PAGINAS]) textoCapitulo += ` p. ${datos[PAGINAS].inicio}-${datos[PAGINAS].final}`;

    return textoCapitulo;
}

module.exports = () => ({
    obtenerDefault: () => ({
        [NUM_REFERENCIA]: numReferencia,
        [NUMERO_CAPITULO]: null,
        [NOMBRE_CAPITULO]: null,
        [EDITORES]: [],
        [PAGINAS]: null,
    }),
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});