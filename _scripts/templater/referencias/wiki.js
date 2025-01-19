const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const { DATOS: { REFERENCIAS: { wiki: DATOS_WIKI } } } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const error = tp.user.error();

    let salir = false;

    switch (respuesta) {
        case DATOS_WIKI.nombre:
            datos[DATOS_WIKI.nombre] = await preguntar.prompt(
                tp, datos[DATOS_WIKI.nombre] 
                    ? `Nuevo nombre del artículo, donde antes era ${datos[DATOS_WIKI.nombre]}` 
                    : "Nombre del artículo",
                error.Quit("No se ingresó nombre del artículo")
            );
            break;

        case DATOS_WIKI.fecha:
            datos[DATOS_WIKI.fecha] = await preguntar.fecha(
                tp, datos[DATOS_WIKI.fecha] 
                    ? `Nueva fecha del artículo, donde antes era ${describir.fecha(tp, datos[DATOS_WIKI.fecha])}` 
                    : "Fecha del artículo", 
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha del artículo")
            );
            break;
        case DATOS_WIKI.url:
            datos[DATOS_WIKI.url] = await preguntar.prompt(
                tp, datos[DATOS_WIKI.url] 
                    ? `Nuevo URL del artículo, donde antes era ${datos[DATOS_WIKI.url]}` 
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
    const { SIMBOLOS, DATOS: { REFERENCIAS: { wiki: DATOS_WIKI } } } = tp.user.constantes();
    const describir = tp.user.describir();

    let opciones = [];
    let valores = [];

    opciones.push(DATOS_WIKI.nombre);
    valores.push(datos[DATOS_WIKI.nombre]
        ? `️ ️️${SIMBOLOS.modificar} Modificar el nombre del artículo, donde era ${datos[DATOS_WIKI.nombre]}`
        : ` ${SIMBOLOS.agregar} Nombre del artículo`
    );

    opciones.push(DATOS_WIKI.fecha);
    valores.push(datos[DATOS_WIKI.fecha]
        ? `️ ️${SIMBOLOS.modificar} Modificar la fecha del artículo, donde era ${describir.fecha(tp, datos[DATOS_WIKI.fecha])}`
        : ` ${SIMBOLOS.agregar} Fecha del artículo`
    );

    opciones.push(DATOS_WIKI.url);
    valores.push(datos[DATOS_WIKI.url]
        ? `️ ️${SIMBOLOS.modificar}️ Modificar el URL, donde era ${datos[DATOS_WIKI.url]}`
        : ` ${SIMBOLOS.agregar} URL del artículo`
    );

    if ([DATOS_WIKI.nombre, DATOS_WIKI.fecha, DATOS_WIKI.url].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { DATOS: { REFERENCIAS: { wiki: DATOS_WIKI } } } = tp.user.constantes();
    return `Artículo de wikipedia: ${datos[DATOS_WIKI.nombre]}`;
}

module.exports = () => ({
    obtenerDefault: (tp, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { REFERENCIAS: { wiki: DATOS_WIKI } } } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_WIKI.nombre]: TIPOS_DE_DEFAULT.simple,
            [DATOS_WIKI.fecha]: TIPOS_DE_DEFAULT.simple,
            [DATOS_WIKI.url]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});