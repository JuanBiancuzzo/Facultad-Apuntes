const TIPO_FUNCION = "function";

async function crearPreguntas(
    tp, 
    obtenerDefault, 
    actualizarDatos, 
    generarPreguntas, 
    mensaje, 
    datosPrevios = undefined
) {
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let datos = obtenerDatos(obtenerDefault, datosPrevios);

    let continuar;
    do {
        let { opciones, valores } = generarPreguntas(tp, datos);

        respuesta = opciones[0];
        if (opciones.length > 1) {
            respuesta = await preguntar.suggester(
                tp, valores, opciones, mensaje,
                error.Prompt("No se completó los datos necesarios")
            );
        }

        try {
            continuar = await actualizarDatos(tp, datos, respuesta);
        } catch ({ name: _, message: mensaje }) {
            new Notice(mensaje);
            continue;
        }

    } while (!continuar);

    return datos;
}

function obtenerDatos(obtenerDefault, datosPrevios) {
    let datos = obtenerDefault();
    if (datosPrevios) {
        for (let [key, value] of Object.entries(datos)) {
            if (typeof value == TIPO_FUNCION) {
                if (datosPrevios[key] instanceof Array) {
                    datos[key] = [];
                    for (let elementoPrevio of datosPrevios[key]) {
                        datos[key].push(obtenerDatos(value, elementoPrevio));
                    }

                } else { 
                    datos[key] = obtenerDatos(value, datosPrevios[key]);
                }
            } else if (key in datosPrevios && datosPrevios[key]) {
                datos[key] = datosPrevios[key];
            }
        }
    }
    return datos;
}

module.exports = crearPreguntas;