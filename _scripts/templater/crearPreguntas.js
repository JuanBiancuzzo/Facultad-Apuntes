const TIPO_FUNCION = "function";

/**
 * @param {*} tp Objeto representante del plugin Templater
 * @param {() => Objecto} obtenerDefault Es una función que devuelve los datos en su valor por defecto
 * @param {(tp: *, datos: Objecto, respuesta: string) => bool} actualizarDatos Modifica los datos a partir de la respuesta dada, y devuelve true en el caso que se determina que no se quiere continua
 * @param {(tp, datos: Objeto) => { opciones: array, valores: array }} generarPreguntas Dado los datos guardados genera dos arrays de respuestas (opciones) y su representación (valores)
 * @param {string} mensaje Es el mensaje que aparecerá si hay multiples opciones a elegir
 * @param {Objeto} datosPrevios Son los datos ya inicializados que se incorporarán al proceso
 * @returns {Object} Devuelve los datos cuando el usuario aya decidido no continuar con sus elecciones
 */
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

module.exports = ({
    preguntar: crearPreguntas,
});