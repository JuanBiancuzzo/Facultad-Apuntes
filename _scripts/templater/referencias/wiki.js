async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const { salir: SALIR, wiki: { NOMBRE_ARTICULO, FECHA, URL } } = tp.user.constantes().DATOS.REFERENCIAS;
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const error = tp.user.error();

    let salir = false;

    switch (respuesta) {
        case NOMBRE_ARTICULO:
            datos[NOMBRE_ARTICULO] = await preguntar.prompt(
                tp, datos[NOMBRE_ARTICULO] 
                    ? `Nuevo nombre del artículo, donde antes era ${datos[NOMBRE_ARTICULO]}` 
                    : "Nombre del artículo",
                error.Quit("No se ingresó nombre del artículo")
            );
            break;

        case FECHA:
            datos[FECHA] = await preguntar.fecha(
                tp, datos[FECHA] 
                    ? `Nueva fecha del artículo, donde antes era ${describir.fecha(tp, datos[FECHA])}` 
                    : "Fecha del artículo", 
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha del artículo")
            );
            break;
        case URL:
            datos[URL] = await preguntar.prompt(
                tp, datos[URL] 
                    ? `Nuevo URL del artículo, donde antes era ${datos[URL]}` 
                    : "URL del artículo",
                error.Quit("No se ingresó el url del artículo")
            )
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { salir: SALIR, wiki: { NOMBRE_ARTICULO, FECHA, URL } } = tp.user.constantes().DATOS.REFERENCIAS;
    const describir = tp.user.describir();

    let opciones = [];
    let valores = [];

    opciones.push(NOMBRE_ARTICULO);
    valores.push(datos[NOMBRE_ARTICULO]
        ? `️ ️✏️ Modificar el nombre del artículo, donde era ${datos[NOMBRE_ARTICULO]}`
        : " ⊕ Nombre del artículo"
    );

    opciones.push(FECHA);
    valores.push(datos[FECHA]
        ? `️ ️✏️ Modificar la fecha del artículo, donde era ${describir.fecha(tp, datos[FECHA])}`
        : " ⊕ Fecha del artículo"
    );

    opciones.push(URL);
    valores.push(datos[URL]
        ? `️ ️✏️ Modificar el URL, donde era ${datos[URL]}`
        : " ⊕ URL del artículo"
    );

    if ([NOMBRE_ARTICULO, FECHA, URL].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(" ↶ Confirmar datos");
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { NOMBRE_ARTICULO } = tp.user.constantes().DATOS.REFERENCIAS.wiki;
    return `Artículo de wikipedia: ${datos[NOMBRE_ARTICULO]}`;
}

module.exports = () => ({
    obtenerDefault: (tp) => {
        const { NOMBRE_ARTICULO, FECHA, URL } = tp.user.constantes().DATOS.REFERENCIAS.wiki;
        return {
            [NOMBRE_ARTICULO]: null,
            [FECHA]: null,
            [URL]: null,
        }
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});