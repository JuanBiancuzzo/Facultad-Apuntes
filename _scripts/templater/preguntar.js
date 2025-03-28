const SALIR = "salir";

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

async function preguntarNumero(tp, mensaje, errorInputIncorrecto) {
    let resultado = await proxyPrompt(tp, mensaje, errorInputIncorrecto);
    if (Number.isNaN(parseInt(resultado, 10)))
        throw errorInputIncorrecto;
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

async function crearFormulario(tp, datos, mensaje) {
    const { SIMBOLOS } = tp.user.constantes();
    const error = tp.user.error();
    const preguntar = tp.user.preguntar();
    const generarPreguntas = {
        prompt: preguntar.prompt.bind(null, tp),
        numero: preguntar.numero.bind(null, tp),
        suggester: preguntar.suggester.bind(null, tp),
        formulario: preguntar.formulario.bind(null, tp),
        fecha: preguntar.fecha.bind(null, tp),
    };

    while(true) {
        let { opciones, valores } = datos.generarPreguntas();
        if (datos.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${SIMBOLOS.confirmar} Confirmar los datos`);
        }

        let respuesta = opciones[0];
        if (opciones.length > 1) {
            respuesta = await proxySuggester(
                tp, valores, opciones, mensaje,
                error.Prompt("No se completó los datos necesarios")
            );
        }

        if (respuesta == SALIR) {
            break;
        }

        try {
            await datos.actualizarDatos(respuesta, generarPreguntas, error);
        } catch ({ name: _, message: mensaje }) {
            new Notice(mensaje);
            console.log(mensaje);
            continue;
        }
    }
}

module.exports = () => ({
    fecha: preguntarFecha,
    numero: preguntarNumero,
    prompt: proxyPrompt,
    suggester: proxySuggester,
    formulario: crearFormulario,
    legal: {
        seccion: preguntarSeccion,
    }
})