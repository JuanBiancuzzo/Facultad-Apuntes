// const TIPO_FUNCION = "function";

const TIPOS_DE_DEFAULT = {
    simple: "simple",
    array: "multiple",
    diccionario: "diccionario",
};

const TIPO_FUNCION = {
    self: "funcion",
    tipo: "tipo",
    generarSimple: "generar",
};

/**
 * @param {{ simple, array, diccionario }} tipo Describe que array esta por debajo
 * @param {() =>{[TIPOS_DE_DEFAULT.self], [TIPOS_DE_DEFAULT.tipo], [TIPOS_DE_DEFAULT.generarSimple]} } obtenerDefault Es una función que devuelve los datos en su valor por defecto
 * @returns { {[TIPOS_DE_DEFAULT.self], [TIPOS_DE_DEFAULT.tipo], [TIPOS_DE_DEFAULT.generarSimple]} } Devuelve una estructura representente de la función
    }
 */
function crearFuncion(tipo, obtenerDefault) {
    return {
        [TIPO_FUNCION.self]: TIPO_FUNCION.self,
        [TIPO_FUNCION.tipo]: tipo,
        [TIPO_FUNCION.generarSimple]: obtenerDefault,
    };
}

/**
 * @param {*} tp Objeto representante del plugin Templater
 * @param {({ simple, array, diccionario }, (tipo, obtenerDefault) => Object)) => Objecto} obtenerDefault Es una función que devuelve los datos en su valor por defecto
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

function obtenerDatos(obtenerDefault, datosPrevios = undefined) {
    let datos = obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion);

    if (TIPOS_DE_DEFAULT.simple == datos) 
        return datosPrevios ? datosPrevios : null;
    
    if (TIPOS_DE_DEFAULT.array == datos) 
        return datosPrevios ? datosPrevios : [];
    
    if (TIPOS_DE_DEFAULT.diccionario == datos) 
        return datosPrevios ? datosPrevios : {};

    // Si o si es una función
    switch (datos[TIPO_FUNCION.tipo]) {
        case TIPOS_DE_DEFAULT.simple:
            return obtenerDatos(
                (_tipoDefault, _crearFuncion) => datos[TIPO_FUNCION.generarSimple](),
                datosPrevios
            );

        case TIPOS_DE_DEFAULT.array:
            if (!datosPrevios) return [];

            let resultado = [];
            for (let elemento of datosPrevios) {
                resultado.push(obtenerDatos(
                    (_tipoDefault, _crearFuncion) => datos[TIPO_FUNCION.generarSimple](),
                    elemento
                ));
            }
            return resultado;

        case TIPOS_DE_DEFAULT.diccionario:
            datos = datos[TIPO_FUNCION.generarSimple]();
            for (let [key, value] of Object.entries(datos)) {
                datos[key] = obtenerDatos(
                    (_tipoDefault, _crearFuncion) => value,
                    datosPrevios ? datosPrevios[key] : undefined
                );
            }
            return datos;
    }

    return datos;
}

module.exports = crearPreguntas;