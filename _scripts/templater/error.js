const QUIT_ERROR = "QuitError";
const PROMPT_ERROR = "PromptError";

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

module.exports = () => ({
    Quit: quitError,
    Prompt: promptError,
    nombre: {
        quit: QUIT_ERROR,
        prompt: PROMPT_ERROR
    }
});