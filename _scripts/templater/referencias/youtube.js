const NOMBRE_VIDEO = "nombreVideo";
const NOMBRE_CANAL = "nombreCanal";
const FECHA = "fecha";
const URL = "url";

const DATOS_SIMPLES = [ NOMBRE_VIDEO, NOMBRE_CANAL, FECHA, URL ];

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, seguidorRef) {
    const preguntar = tp.user.preguntar();
    const describir = tp.user.describir();
    const error = tp.user.error();

    let salir = false;

    switch (respuesta) {
        case NOMBRE_VIDEO:
            datos[NOMBRE_VIDEO] = await preguntar.prompt(
                tp, datos[NOMBRE_VIDEO] 
                    ? `Nuevo nombre del video, donde antes era ${datos[NOMBRE_VIDEO]}` 
                    : "Nombre del video",
                error.Quit("No se ingresó nombre del video")
            );
            break;

        case NOMBRE_CANAL:
            datos[NOMBRE_CANAL] = await preguntar.prompt(
                tp, datos[NOMBRE_CANAL] 
                    ? `Nuevo nombre del canal, donde antes era ${datos[NOMBRE_CANAL]}` 
                    : "Nombre del canal",
                error.Quit("No se ingresó nombre del canal")
            );
            break;

        case FECHA:
            datos[FECHA] = await preguntar.fecha(
                tp, datos[FECHA] 
                    ? `Nueva fecha del video, donde antes era ${describir.fecha(tp, datos[FECHA])}` 
                    : "Fecha del video", 
                error.Quit("No se ingresó un formato de fecha válido"), 
                error.Quit("No se ingresó la fecha del video")
            );
            break;
        case URL:
            datos[URL] = await preguntar.prompt(
                tp, datos[URL] 
                    ? `Nuevo URL del video, donde antes era ${datos[URL]}` 
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
    const describir = tp.user.describir();

    let opciones = [];
    let valores = [];

    opciones.push(NOMBRE_VIDEO);
    valores.push(datos[NOMBRE_VIDEO]
        ? `️ ️✏️ Modificar el nombre del video, donde era ${datos[NOMBRE_VIDEO]}`
        : " ⊕ Nombre del video"
    );

    opciones.push(NOMBRE_CANAL);
    valores.push(datos[NOMBRE_CANAL]
        ? `️ ️✏️ Modificar el nombre del canal del video, donde era ${datos[NOMBRE_CANAL]}`
        : " ⊕ Nombre del canal del video"
    );

    opciones.push(FECHA);
    valores.push(datos[FECHA]
        ? `️ ️✏️ Modificar la fecha del video, donde era ${describir.fecha(tp, datos[FECHA])}`
        : " ⊕ Fecha del video"
    );

    opciones.push(URL);
    valores.push(datos[URL]
        ? `️ ️✏️ Modificar el URL, donde era ${datos[URL]}`
        : " ⊕ URL del video"
    );

    if (DATOS_SIMPLES.every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(" ↶ Confirmar datos");
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos) {
    return `${datos[NOMBRE_VIDEO]} de ${datos[NOMBRE_CANAL]}`;
}

module.exports = () => ({
    obtenerDefault: () => ({
        [NOMBRE_VIDEO]: null,
        [NOMBRE_CANAL]: null,
        [FECHA]: null,
        [URL]: null,
    }),
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});