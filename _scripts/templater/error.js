const QUIT_ERROR = "QuitError";
const PROMPT_ERROR = "PromptError";
const NADA_ERROR = "NadaError";

function quitError(mensaje) {
    let error = new Error(mensaje);
    error.name = QUIT_ERROR;
    
    return error;
}

function promptError(mensaje) {
    let error = new Error(mensaje);
    error.name = PROMPT_ERROR;
    
    return error;
}

function nadaError(mensaje) {
    let error = new Error(mensaje);
    error.name = NADA_ERROR;
    
    return error;
}

module.exports = () => ({
    Quit: quitError,
    Prompt: promptError,
    Nada: nadaError,
    nombre: {
        quit: QUIT_ERROR,
        prompt: PROMPT_ERROR,
        nada: NADA_ERROR,
    }
});