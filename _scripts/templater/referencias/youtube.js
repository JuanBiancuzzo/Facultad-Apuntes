const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const { DATOS: { REFERENCIAS: { youtube: DATOS_YT } } } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const error = tp.user.error();

    let salir = false;

    switch (respuesta) {
        case DATOS_YT.nombreVideo:
            datos[DATOS_YT.nombreVideo] = await preguntar.prompt(
                tp, datos[DATOS_YT.nombreVideo] 
                    ? `Nuevo nombre del video, donde antes era ${datos[DATOS_YT.nombreVideo]}` 
                    : "Nombre del video",
                error.Quit("No se ingresó nombre del video")
            );
            break;

        case DATOS_YT.nombreCanal:
            datos[DATOS_YT.nombreCanal] = await preguntar.prompt(
                tp, datos[DATOS_YT.nombreCanal] 
                    ? `Nuevo nombre del canal, donde antes era ${datos[DATOS_YT.nombreCanal]}` 
                    : "Nombre del canal",
                error.Quit("No se ingresó nombre del canal")
            );
            break;

        case DATOS_YT.fecha:
            datos[DATOS_YT.fecha] = await preguntar.fecha(
                tp, datos[DATOS_YT.fecha] 
                    ? `Nueva fecha del video, donde antes era ${describir.fecha(tp, datos[DATOS_YT.fecha])}` 
                    : "Fecha del video", 
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha del video")
            );
            break;
        case DATOS_YT.url:
            datos[DATOS_YT.url] = await preguntar.prompt(
                tp, datos[DATOS_YT.url] 
                    ? `Nuevo URL del video, donde antes era ${datos[DATOS_YT.url]}` 
                    : "URL del video",
                error.Quit("No se ingresó el url del video")
            )
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { SIMBOLOS, DATOS: { REFERENCIAS: { youtube: DATOS_YT } } } = tp.user.constantes();
    const describir = tp.user.describir();

    let opciones = [];
    let valores = [];

    opciones.push(DATOS_YT.nombreVideo);
    valores.push(datos[DATOS_YT.nombreVideo]
        ? `️ ${SIMBOLOS.modificar}️ Modificar el nombre del video, donde era ${datos[DATOS_YT.nombreVideo]}`
        : ` ${SIMBOLOS.agregar} Nombre del video`
    );

    opciones.push(DATOS_YT.nombreCanal);
    valores.push(datos[DATOS_YT.nombreCanal]
        ? `️ ${SIMBOLOS.modificar}️ Modificar el nombre del canal del video, donde era ${datos[DATOS_YT.nombreCanal]}`
        : ` ${SIMBOLOS.agregar} Nombre del canal del video`
    );

    opciones.push(DATOS_YT.fecha);
    valores.push(datos[DATOS_YT.fecha]
        ? `️ ${SIMBOLOS.modificar}️ Modificar la fecha del video, donde era ${describir.fecha(tp, datos[DATOS_YT.fecha])}`
        : ` ${SIMBOLOS.agregar} Fecha del video`
    );

    opciones.push(DATOS_YT.url);
    valores.push(datos[DATOS_YT.url]
        ? `️ ${SIMBOLOS.modificar}️ Modificar el URL, donde era ${datos[DATOS_YT.url]}`
        : ` ${SIMBOLOS.agregar} URL del video`
    );

    const DATOS_SIMPLES = [ DATOS_YT.nombreVideo, DATOS_YT.nombreCanal, DATOS_YT.fecha, DATOS_YT.url ];
    if (DATOS_SIMPLES.every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    const { NOMBRE_VIDEO, NOMBRE_CANAL } = tp.user.constantes().DATOS.REFERENCIAS.youtube;
    return `${datos[NOMBRE_VIDEO]} de ${datos[NOMBRE_CANAL]}`;
}

module.exports = () => ({
    obtenerDefault: (tp, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { REFERENCIAS: { youtube: DATOS_YT } } } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_YT.nombreVideo]: TIPOS_DE_DEFAULT.simple,
            [DATOS_YT.nombreCanal]: TIPOS_DE_DEFAULT.simple,
            [DATOS_YT.fecha]: TIPOS_DE_DEFAULT.simple,
            [DATOS_YT.url]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});