const MODIFICAR_PARAMETRO = "modificar parametro";
const ELIMINAR_PARAMETRO = "eliminar parametro";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { funcion: { firma: DATOS_FIRMA } } } } = tp.user.constantes(); 
    const infoParametro = tp.user.parametro();
    const infoReturn = tp.user.return();

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case DATOS_FIRMA.nombreFuncion: 
            datos[DATOS_FIRMA.nombreFuncion] = await preguntar.prompt(
                tp, datos[DATOS_FIRMA.nombreFuncion]
                    ? `Nuevo nombre de la función, donde antes era ${datos[DATOS_FIRMA.nombreFuncion]}`
                    : "Nombre de la función",
                error.Quit("No se ingresó el nombre de la función")
            );
            break;

        case DATOS_FIRMA.descripcion: 
            datos[DATOS_FIRMA.descripcion] = await preguntar.prompt(
                tp, datos[DATOS_FIRMA.descripcion]
                    ? `Nueva descripción de la función, donde antes era ${datos[DATOS_FIRMA.descripcion]}`
                    : "Descripción de la función",
                error.Quit("No se ingresó la descripción de la función")
            );
            break;

        case MODIFICAR_PARAMETRO:
            indice = separacion[1];

        case DATOS_FIRMA.parametros: 
            let parametroPrevio;
            if (indice) parametroPrevio = datos[DATOS_FIRMA.parametros][indice];

            let parametro = await tp.user.crearPreguntas(
                tp, infoParametro.obtenerDefault.bind(null, tp, lenguaje), 
                (tp, datosDado, respuestaDada) => infoParametro.actualizarDatos(tp, datosDado, respuestaDada, lenguaje), 
                (tp, datosDado) => infoParametro.generarPreguntas(tp, datosDado, lenguaje), 
                "Ingresar los datos del parámetro", parametroPrevio
            );

            if (indice) {
                datos[DATOS_FIRMA.parametros][indice] = parametro; 
            } else {
                datos[DATOS_FIRMA.parametros].push(parametro);
            }
            break;

        case ELIMINAR_PARAMETRO:
            datos[DATOS_FIRMA.parametros].pop();
            break;

        case DATOS_FIRMA.return: 
            let resultadoTemp = await tp.user.crearPreguntas(
                tp, infoReturn.obtenerDefault.bind(null, tp, lenguaje), 
                (tp, datosDado, respuestaDada) => infoReturn.actualizarDatos(tp, datosDado, respuestaDada, lenguaje), 
                (tp, datosDado) => infoReturn.generarPreguntas(tp, datosDado, lenguaje), 
                "Ingresar los datos del tipo de dato que se devuelve", 
                datos[DATOS_FIRMA.return] ? datos[DATOS_FIRMA.return] : null
            );
            datos[DATOS_FIRMA.return] = resultadoTemp;
            break;

        case SALIR: 
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { SIMBOLOS, DATOS: { FUNCIONES: { funcion: { firma: DATOS_FIRMA } } } } = tp.user.constantes(); 
    const infoParametro = tp.user.parametro();
    const infoReturn = tp.user.return();
    let opciones = [], valores = [];

    opciones.push(DATOS_FIRMA.nombreFuncion);
    valores.push(datos[DATOS_FIRMA.nombreFuncion]
        ? ` ${SIMBOLOS.modificar} Modificar el nombre de la función, donde era ${datos[DATOS_FIRMA.nombreFuncion]}`
        : ` ${SIMBOLOS.agregar} Nombre de la función`
    )

    opciones.push(DATOS_FIRMA.descripcion);
    valores.push(datos[DATOS_FIRMA.descripcion]
        ? ` ${SIMBOLOS.modificar} Modificar la descripción de la función, donde era ${datos[DATOS_FIRMA.descripcion]}`
        : ` ${SIMBOLOS.agregar} Descripción de la función`
    )

    for (let [indice, parametro] of datos[DATOS_FIRMA.parametros].entries()) {
        opciones.push(`${MODIFICAR_PARAMETRO}-${indice}`);
        valores.push(`️ ${SIMBOLOS.modificar} Modificar el parámetro, donde es ${infoParametro.describir(tp, parametro, lenguaje)}`);
    }

    if (datos[DATOS_FIRMA.parametros].length > 0) {
        let ultimoParametro = datos[DATOS_FIRMA.parametros].last();
        opciones.push(ELIMINAR_PARAMETRO);
        valores.push(` ${SIMBOLOS.sacar} Eliminar el parámetro, donde es ${infoParametro.describir(tp, ultimoParametro, lenguaje)}`);

    } 

    opciones.push(DATOS_FIRMA.parametros);
    valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Parámetro`);

    opciones.push(DATOS_FIRMA.return);
    valores.push(infoReturn.esValido(tp, datos[DATOS_FIRMA.return], lenguaje)
        ? ` ${SIMBOLOS.modificar} Modificar el valor de retorno de la función, donde era ${infoReturn.describir(tp, datos[DATOS_FIRMA.return], lenguaje)}`
        : ` ${SIMBOLOS.agregar} Valor de retorno de la función`
    )

    if (esValido(tp, datos, lenguaje)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function esValido(tp, datos, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { funcion: { firma: DATOS_FIRMA } } } } = tp.user.constantes(); 
    const infoReturn = tp.user.return();

    return infoReturn.esValido(tp, datos[DATOS_FIRMA.return], lenguaje) 
        && [DATOS_FIRMA.nombreFuncion, DATOS_FIRMA.descripcion].every(key => datos[key]);
}

function describir(tp, datos, lenguaje = undefined) {
    const { 
        DATOS: { FUNCIONES: { lenguaje: { lenguajes: DATOS_LENGUAJES }, funcion: { firma: DATOS_FIRMA } } }
    } = tp.user.constantes();
    const infoParametro = tp.user.parametro();
    const infoReturn = tp.user.return();

    let nombre = datos[DATOS_FIRMA.nombreFuncion];
    let parametros = datos[DATOS_FIRMA.parametros].map(param => infoParametro.describir(tp, param, lenguaje));
    let returnValue = infoReturn.describir(tp, datos[DATOS_FIRMA.return], lenguaje)

    switch (lenguaje) {
        case DATOS_LENGUAJES.python:
            return `def ${nombre}(${parametros.join(", ")}) -> ${returnValue}`;

        case DATOS_LENGUAJES.c:
            return `${returnValue} ${nombre}(${parametros.join(", ")})`;

        default:
            return `function ${nombre} :: ${parametros.join(" ")} -> ${returnValue}`;
    }
}

function defaultTipoDato(tp, TIPOS_DE_DEFAULT, lenguaje = undefined) {
    return tieneMultiplesTiposDeDatos(tp, lenguaje)
        ? TIPOS_DE_DEFAULT.array
        : TIPOS_DE_DEFAULT.simple;
}

function tieneMultiplesTiposDeDatos(tp, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { lenguaje: { lenguajes: DATOS_LENGUAJES } } } } = tp.user.constantes();

    switch (lenguaje) {
        case DATOS_LENGUAJES.c: 
            return false;
        
        case DATOS_LENGUAJES.python: 
        default: return true;
    }
}

function tieneParametroConValorPorDefecto(tp, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { lenguaje: { lenguajes: DATOS_LENGUAJES } } } } = tp.user.constantes();

    switch (lenguaje) {
        case DATOS_LENGUAJES.c: 
            return false;

        case DATOS_LENGUAJES.python:
        default:
            return true;
    }
}

function tieneStructConHerencia(tp, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { lenguaje: { lenguajes: DATOS_LENGUAJES } } } } = tp.user.constantes();

    switch (lenguaje) {
        case DATOS_LENGUAJES.c: 
            return false;

        case DATOS_LENGUAJES.python:
        default:
            return true;
    }
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { FUNCIONES: { funcion: { firma: DATOS_FIRMA } } } } = tp.user.constantes();
        const infoParametro = tp.user.parametro();
        const infoReturn = tp.user.return();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_FIRMA.nombreFuncion]: TIPOS_DE_DEFAULT.simple,
            [DATOS_FIRMA.descripcion]: TIPOS_DE_DEFAULT.simple,
            [DATOS_FIRMA.parametros]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () => infoParametro.obtenerDefault(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion),
            ),
            [DATOS_FIRMA.return]: infoReturn.obtenerDefault(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion),
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
    informacion: {
        defaultTipoDato,
        tieneMultiplesTiposDeDatos,
        tieneParametroConValorPorDefecto,
        tieneStructConHerencia,
    }
});