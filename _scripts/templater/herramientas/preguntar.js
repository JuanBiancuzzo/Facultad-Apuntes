async function preguntarAutore(tp, mensajeNombre, mensajeApellido, errorNombre, errorApellido) {
    let apellido = await preguntarSimple(tp, mensajeApellido, errorApellido);
    let nombre = await preguntarSimple(tp, mensajeNombre, errorNombre);

    return { "autore": [{ "nombre": nombre }, { "apellido": apellido }] };
}

async function preguntarFecha(tp, mensaje, errorFormatoIncorrecto, errorFechaIncorrecta) {
    let fechaVideoTexto = await proxyPrompt(tp, `${mensaje} (formato: DD/MM/YYYY)`, errorFechaIncorrecta);
    let fechaVideo = moment(fechaVideoTexto, "D/MM/YYYY");

    if (!fechaVideo.isValid()) {
        let formato = await proxyPrompt(
            tp, `Ingrese el formato para la fecha ${fechaVideoTexto}`,
            errorFechaIncorrecta
        );

        fechaVideo = moment(fechaVideoTexto, formato);
        if (!(formato && fechaVideo.isValida())) {
            throw errorFormatoIncorrecto;
        }
    }

    return fechaVideo.format("YYYY-MM-DD");
}

async function preguntarSimple(tp, mensaje, errorInputIncorrecto) {
    let resultado = await proxyPrompt(tp, mensaje, errorInputIncorrecto);
    return resultado;
}

async function proxyPrompt(tp, prompt_text, mensajeError = undefined, default_value = null, multiline = false) {
    try {
        let respuesta = await tp.system.prompt(prompt_text, default_value, true, multiline);
        return respuesta;
    } catch {
        if (mensajeError) throw mensajeError;
    }
}

async function proxySuggester(tp, text_items, items, placeholder = "", mensajeError = undefined, limit = undefined) {    
    try {
        let respuesta = await tp.system.suggester(
            text_items, items, true, placeholder, limit
        );
        return respuesta;
    } catch {
        if (mensajeError) throw mensajeError;
    }
}

async function preguntarSeccion(tp, tipo) {
    const error = tp.user.error();
    
    let numero = await proxyPrompt(
        tp, `Cuál es el número de la sección: ${tipo}?`,
        error.Prompt("No se ingresó el número de la sección")
    );
    
    let nombre = await proxyPrompt(
        tp, `Cuál es el nombre de la sección: ${tipo}?`,
        error.Prompt("No se ingresó el nombre de la sección")
    );
    
    return {
        tipo: tipo,
        nombre: nombre,
        numero: numero
    };
}

module.exports = () => ({
    autore: preguntarAutore,
    fecha: preguntarFecha,
    simple: preguntarSimple,
    prompt: proxyPrompt,
    suggester: proxySuggester,
    legal: {
        seccion: preguntarSeccion,
    }
})