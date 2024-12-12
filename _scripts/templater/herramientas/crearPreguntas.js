async function crearPreguntas(
    tp, 
    obtenerDefault, 
    actualizarDatos, 
    generarPreguntas, 
    mensaje, 
    datosPrevios = undefined
) {
    const preguntar = tp.user.preguntar();
    const error = tp.user.error().Prompt("No se completó los datos necesarios");

    let datos = obtenerDefault();
    if (datosPrevios) {
        for (let [key, _] of Object.entries(tp, datos)) {
            if (key in datosPrevios) {
                datos[key] = datosPrevios[key];
            }
        }
    }

    let { opciones, valores } = generarPreguntas(tp, datos);

    let respuesta = opciones[0];
    if (opciones.length > 1) {
        respuesta = await preguntar.suggester(
            tp, valores, opciones, mensaje, error
        );
    }

    let continuar = await actualizarDatos(tp, datos, respuesta);
    while (!continuar) {
        let { opciones, valores } = generarPreguntas(tp, datos);

        respuesta = opciones[0];
        if (opciones.length > 1) {
            respuesta = await preguntar.suggester(
                tp, valores, opciones, mensaje, error
            );
        }

        continuar = await actualizarDatos(tp, datos, respuesta);
    }

    return datos;
}

module.exports = crearPreguntas;