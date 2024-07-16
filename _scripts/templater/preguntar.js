async function proxyPrompt(tp, prompt_text, mensajeError = undefined, default_value = null, multiline = false) {
    try {
        let respuesta = await tp.system.prompt(prompt_text, default_value, true, multiline);
        return respuesta;
    } catch {
        throw new Error(mensajeError);
    }
}

async function proxySuggester(tp, text_items, items, placeholder = "", mensajeError = undefined, limit = undefined) {
    try {
        let respuesta = tp.system.suggester(
            text_items, items, true, placeholder, limit
        );
        return respuesta;
    } catch {
        throw new Error(mensajeError);
    }
}

async function preguntarSeccion(tp, tipo) {
    let numero = await proxyPrompt(
        tp, `Cuál es el número de la sección: ${tipo}?`,
        "No se ingresó el número de la sección"
    );
    
    let nombre = await proxyPrompt(
        tp, `Cuál es el nombre de la sección: ${tipo}?`,
        "No se ingresó el nombre de la sección"
    );
    
    return {
        tipo: tipo,
        nombre: nombre,
        numero: numero
    };
}

module.exports = () => {
    return {
        prompt: proxyPrompt,
        suggester: proxySuggester,
        legal: {
            seccion: preguntarSeccion,
        }
    };
};