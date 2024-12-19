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

    let datos = obtenerDefault();
    if (datosPrevios) {
        for (let [key, _] of Object.entries(datos)) {
            if (key in datosPrevios) {
                datos[key] = datosPrevios[key];
            }
        }
    }

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

module.exports = crearPreguntas;