const MODIFICAR_TIPO_DATO = "modificar tipo dato";
const ELIMINAR_TIPO_DATO = "eliminar tipo dato";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { return: DATOS_RETURN } } } = tp.user.constantes();
    const { informacion: { tieneMultiplesTiposDeDatos } } = tp.user.lenguajes();

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case DATOS_RETURN.descripcion:
            datos[DATOS_RETURN.descripcion] = await preguntar.prompt(
                tp, datos[DATOS_RETURN.descripcion]
                    ? `Nueva descripción del valor de retorno, donde antes era ${datos[DATOS_RETURN.descripcion]}`
                    : "Descripción del valor de retorno",
                error.Quit("No se ingresó la descripción del valor de retorno")
            );
            break;


        case MODIFICAR_TIPO_DATO:
            indice = separacion[1];
            datos[DATOS_RETURN.tipoDeDato][indice] = await preguntar.prompt(
                tp, `Nuevo tipo de dato del parámetro, donde antes era ${datos[DATOS_RETURN.tipoDeDato][indice]}`,
                error.Quit("No se ingresó el tipo de dato del parámetro")
            );
            break;

        case DATOS_RETURN.tipoDeDato:
            let tipoDato = await preguntar.prompt(
                tp, (tieneMultiplesTiposDeDatos(tp, lenguaje) && datos[DATOS_RETURN.tipoDeDato].length > 0) 
                    ? `Tipo de dato del parámetro, donde las otras son ${datos[DATOS_RETURN.tipoDeDato].join(", ")}`
                    : "Tipo de dato del parámetro", 
                error.Quit("No se ingresó el tipo de dato del parámetro")
            );

            if (tieneMultiplesTiposDeDatos(tp, lenguaje)) {
                datos[DATOS_RETURN.tipoDeDato].push(tipoDato);
            } else {
                datos[DATOS_RETURN.tipoDeDato] = tipoDato;
            }
            break;

        case ELIMINAR_TIPO_DATO:
            datos[DATOS_RETURN.tipoDeDato].pop();
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { SIMBOLOS, DATOS: { FUNCIONES: { return: DATOS_RETURN } } } = tp.user.constantes();
    const { informacion: { tieneMultiplesTiposDeDatos } } = tp.user.lenguajes();
    let opciones = [], valores = [];

    opciones.push(DATOS_RETURN.descripcion);
    valores.push(datos[DATOS_RETURN.descripcion]
        ? ` ${SIMBOLOS.modificar} Modificar la descripción del valor de retorno, donde era ${datos[DATOS_RETURN.descripcion]}`
        : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Descripción del valor de retorno`
    )

    if (tieneMultiplesTiposDeDatos(tp, lenguaje)) {
        for (let [indice, tipoDeDato] of datos[DATOS_RETURN.tipoDeDato].entries()) {
            opciones.push(`${MODIFICAR_TIPO_DATO}-${indice}`);
            valores.push(`️ ${SIMBOLOS.modificar} Modificar el tipo de dato, donde es ${tipoDeDato}`);
        }

        if (datos[DATOS_RETURN.tipoDeDato].length > 0) {
            let ultimoTipoDeDato = datos[DATOS_RETURN.tipoDeDato].last();
            opciones.push(ELIMINAR_TIPO_DATO);
            valores.push(` ${SIMBOLOS.sacar} Eliminar el tipo de dato, donde es ${ultimoTipoDeDato}`);

            opciones.push(DATOS_RETURN.tipoDeDato);
            valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Tipo de dato`);

        } else {
            opciones.push(DATOS_RETURN.tipoDeDato);
            valores.push(` ${SIMBOLOS.agregar} Tipo de dato`);
        }

    } else {
        opciones.push(DATOS_RETURN.tipoDeDato);
        valores.push(datos[DATOS_RETURN.tipoDeDato]
            ? ` ${SIMBOLOS.modificar} Modificar el tipo de dato, donde era ${datos[DATOS_RETURN.tipoDeDato]}`
            : ` ${SIMBOLOS.agregar} Tipo de dato`
        );
    }

    if (esValido(tp, datos)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, returnValue, lenguaje = undefined) {
    const { 
        DATOS: { FUNCIONES: { return: DATOS_RETURN, lenguaje: { lenguajes: DATOS_LENGUAJES } } },
    } = tp.user.constantes();
    const { informacion: { tieneMultiplesTiposDeDatos } } = tp.user.lenguajes();

    let descripcionReturn;
    switch (lenguaje) {
        case DATOS_LENGUAJES.python:
            descripcionReturn = returnValue[DATOS_RETURN.tipoDeDato];
            if (tieneMultiplesTiposDeDatos(tp, lenguaje)) {
                descripcionReturn = `${returnValue[DATOS_RETURN.tipoDeDato].join(" | ")}`;
            }
            break;

        case DATOS_LENGUAJES.c:
            descripcionReturn = returnValue[DATOS_RETURN.tipoDeDato];
            break;

        default:
            descripcionReturn = returnValue[DATOS_RETURN.tipoDeDato];
            if (tieneMultiplesTiposDeDatos(tp, lenguaje)) {
                descripcionReturn = `${returnValue[DATOS_RETURN.tipoDeDato].join(" | ")}`;
                if (returnValue[DATOS_RETURN.tipoDeDato].length > 1) {
                    descripcionReturn = `(${descripcionReturn})`;
                }
            }
    }

    return descripcionReturn;
}

function esValido(tp, datos, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { return: DATOS_RETURN } } } = tp.user.constantes(); 
    const { informacion: { tieneMultiplesTiposDeDatos } } = tp.user.lenguajes();

    let DATOS_SIMPLES = [];
    if (!tieneMultiplesTiposDeDatos(tp, lenguaje)) {
        DATOS_SIMPLES.push(DATOS_RETURN.tipoDeDato);
    }

    return DATOS_SIMPLES.every(key => datos[key]) 
        && (!tieneMultiplesTiposDeDatos(tp, lenguaje) || datos[DATOS_RETURN.tipoDeDato].length > 0);
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { FUNCIONES: { return: DATOS_RETURN } } } = tp.user.constantes();
        const { informacion: { defaultTipoDato } } = tp.user.lenguajes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_RETURN.tipoDeDato]: defaultTipoDato(tp, TIPOS_DE_DEFAULT, lenguaje),
            [DATOS_RETURN.descripcion]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
});