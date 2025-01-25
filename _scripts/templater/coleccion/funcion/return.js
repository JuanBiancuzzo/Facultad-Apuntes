const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { return: DATOS_RETURN } } } = tp.user.constantes(); 
    const infoTipoDeDato = tp.user.tipoDeDato();

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;

    switch (respuesta) {
        case DATOS_RETURN.descripcion:
            datos[DATOS_RETURN.descripcion] = await preguntar.prompt(
                tp, datos[DATOS_RETURN.descripcion]
                    ? `Nueva descripción del valor de retorno, donde antes era ${datos[DATOS_RETURN.descripcion]}`
                    : "Descripción del valor de retorno",
                error.Quit("No se ingresó la descripción del valor de retorno")
            );
            break;

        case DATOS_RETURN.tipoDeDato:
            datos[DATOS_RETURN.tipoDeDato] = await tp.user.crearPreguntas(
                tp, infoTipoDeDato.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDado, respuestaDada) => infoTipoDeDato.actualizarDatos(tp, datosDado, respuestaDada, lenguaje), 
                (tp, datosDado) => infoTipoDeDato.generarPreguntas(tp, datosDado, lenguaje), 
                "Ingresar los datos del tipo de dato", datos[DATOS_RETURN.tipoDeDato]
            );
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { SIMBOLOS, DATOS: { FUNCIONES: { return: DATOS_RETURN } } } = tp.user.constantes(); 
    const infoTipoDeDato = tp.user.tipoDeDato();

    let opciones = [], valores = [];

    opciones.push(DATOS_RETURN.descripcion);
    valores.push(datos[DATOS_RETURN.descripcion]
        ? ` ${SIMBOLOS.modificar} Modificar la descripción del valor de retorno, donde era ${datos[DATOS_RETURN.descripcion]}`
        : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Descripción del valor de retorno`
    )

    opciones.push(DATOS_RETURN.tipoDeDato);
    valores.push(infoTipoDeDato.esValido(tp, datos[DATOS_RETURN.tipoDeDato], lenguaje)
        ? ` ${SIMBOLOS.modificar} Modificar el tipo de dato, donde era ${infoTipoDeDato.describir(tp, datos[DATOS_RETURN.tipoDeDato], lenguaje).replaceAll("\n", "\n\t")}`
        : ` ${SIMBOLOS.agregar} Tipo de dato`
    )

    if (esValido(tp, datos, lenguaje)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, returnValue, lenguaje = undefined) {
    if (!esValido(tp, returnValue, lenguaje)) return "";

    const { DATOS: { FUNCIONES: { return: DATOS_RETURN } } } = tp.user.constantes(); 
    return tp.user.tipoDeDato().describir(tp, returnValue[DATOS_RETURN.tipoDeDato], lenguaje);
}

function esValido(tp, datos, lenguaje = undefined) {
    if (!datos) return false;

    const { DATOS: { FUNCIONES: { return: DATOS_RETURN } } } = tp.user.constantes(); 
    const infoTipoDeDato = tp.user.tipoDeDato();

    return infoTipoDeDato.esValido(tp, datos[DATOS_RETURN.tipoDeDato], lenguaje);
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { FUNCIONES: { return: DATOS_RETURN } } } = tp.user.constantes();
        const infoTipoDeDato = tp.user.tipoDeDato();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_RETURN.tipoDeDato]: infoTipoDeDato.obtenerDefault(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion),
            [DATOS_RETURN.descripcion]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
});