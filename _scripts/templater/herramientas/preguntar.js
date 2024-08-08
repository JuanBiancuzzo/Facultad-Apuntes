async function preguntarAutores(tp, key, mensajeNombre, mensajeApellido, errorNombre, errorApellido) {
    let tR = `${key}:\n`;

    let nombre = await preguntarSimple(tp, "", mensajeNombre, errorNombre);
    nombre = nombre.slice(2);
    let apellido = await preguntarSimple(tp, "", mensajeApellido, errorApellido);
    apellido = apellido.slice(2);

    tR += ` - autore:\n`;
    tR += `   - nombre: ${nombre}`;
    tR += `   - apellido: ${apellido}`;

    while (true) {
        try {
            let nombre = await preguntarSimple(tp, "", mensajeNombre, errorNombre);
            nombre = nombre.slice(2);
            let apellido = await preguntarSimple(tp, "", mensajeApellido, errorApellido);
            apellido = apellido.slice(2);
            
            tR += ` - autore:\n`;
            tR += `   - nombre: ${nombre}`;
            tR += `   - apellido: ${apellido}`;
        } catch (_) {
            break;
        }
    }    

    return tR;
}

async function preguntarFecha(tp, key, mensaje, errorFormatoIncorrecto, errorFechaIncorrecta) {
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

    return `${key}: ${fechaVideo.format("YYYY-MM-DD")}\n`;
}

async function preguntarSimple(tp, key, mensaje, errorInputIncorrecto) {
    let value = await proxyPrompt(tp, mensaje, errorInputIncorrecto);
    return `${key}: "${value}"\n`;
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
    autores: preguntarAutores,
    fecha: preguntarFecha,
    simple: preguntarSimple,
    prompt: proxyPrompt,
    suggester: proxySuggester,
    legal: {
        seccion: preguntarSeccion,
    }
})