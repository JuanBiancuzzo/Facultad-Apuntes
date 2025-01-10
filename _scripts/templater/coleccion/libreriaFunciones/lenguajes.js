const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta) {

}

function generarPreguntas(tp, datos) {

}

function describir(tp, datos, lenguaje) {
    const { 
        lenguaje: { lenguajes: DATOS_LENGUAJES },
        funcion: { firma: { nombreFuncion: DATOS_NOMBRE, parametros: DATOS_PARAMETROS, return: DATOS_RETURN } }
    } = tp.user.constantes().DATOS.FUNCIONES;

    let nombre = datos[DATOS_NOMBRE];
    let parametros = datos[DATOS_PARAMETROS.self];
    let returnValue = datos[DATOS_RETURN.self]

    if (lenguaje == DATOS_LENGUAJES.python) {
        let descripcionParametros = parametros
            .map(param => {
                let descripcionTipoDato = param[DATOS_PARAMETROS.tipoDeDato];
                if (Array.isArray(param[DATOS_PARAMETROS.tipoDeDato])) {
                    descripcionTipoDato = `${param[DATOS_PARAMETROS.tipoDeDato].join(" | ")}`;
                }
                let textoDefault = "";
                if (param[DATOS_PARAMETROS.valorPorDefecto]) {
                    textoDefault = `= ${param[DATOS_PARAMETROS.valorPorDefecto]}`;
                }

                return `${param[DATOS_PARAMETROS.nombreParametro]}: ${descripcionTipoDato} ${textoDefault}`;
            })
        let descripcionReturn = returnValue[DATOS_RETURN.tipoDeDato];
        if (Array.isArray(returnValue[DATOS_RETURN.tipoDeDato])) {
            descripcionReturn = `${returnValue[DATOS_RETURN.tipoDeDato].join(" | ")}`;
        }

        return `def ${nombre}(${descripcionParametros.join(", ")}) -> ${descripcionReturn}`;
    } 
    
    if (lenguaje == DATOS_LENGUAJES.c) {
        let descripcionParametros = parametros
            .map(param => `${param[DATOS_PARAMETROS.tipoDeDato]} ${param[DATOS_PARAMETROS.nombreParametro]}`)
        return `${returnValue[DATOS_RETURN.tipoDeDato]} ${nombre}(${descripcionParametros.join(", ")})`;
    }

    let descripcionParametros = parametros
        .map(param => {
            let descripcionTipoDato = param[DATOS_PARAMETROS.tipoDeDato];
            if (Array.isArray(param[DATOS_PARAMETROS.tipoDeDato])) {
                descripcionTipoDato = `(${param[DATOS_PARAMETROS.tipoDeDato].join(" | ")})`;
            }

            return `${param[DATOS_PARAMETROS.nombreParametro]}: ${descripcionTipoDato}`;
        })
    let descripcionReturn = returnValue[DATOS_RETURN.tipoDeDato];
    if (Array.isArray(returnValue[DATOS_RETURN.tipoDeDato])) {
        descripcionReturn = `(${returnValue[DATOS_RETURN.tipoDeDato].join(" | ")})`;
    }
    // function MergeSort :: array: Integer[] n: Integer -> Interger[]
    return `function ${nombre} :: (${descripcionParametros.join(" ")}) -> ${descripcionReturn}`;
}



module.exports = () => ({
    obtenerDefault: (tp) => {
        return {};
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
});