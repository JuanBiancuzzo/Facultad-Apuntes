const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, lenguaje = undefined) {
    const { 
        DATOS: { 
            FUNCIONES: { parametro: DATOS_PARAMETROS }, LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
        }
    } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;
    const infoTipoDeDato = tp.user.tipoDeDato();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;

    switch (respuesta) {
        case DATOS_PARAMETROS.nombreParametro:
            datos[DATOS_PARAMETROS.nombreParametro] = await preguntar.prompt(
                tp, datos[DATOS_PARAMETROS.nombreParametro]
                    ? `Nuevo nombre del parámetro, donde antes era ${datos[DATOS_PARAMETROS.nombreParametro]}`
                    : "Nombre del parámetro",
                error.Quit("No se ingresó el nombre del parámetro")
            );
            break;

        case DATOS_PARAMETROS.descripcion:
            datos[DATOS_PARAMETROS.descripcion] = await preguntar.prompt(
                tp, datos[DATOS_PARAMETROS.descripcion]
                    ? `Nueva descripción del parámetro, donde antes era ${datos[DATOS_PARAMETROS.descripcion]}`
                    : "Descripción del parámetro",
                error.Quit("No se ingresó la descripción del parámetro")
            );
            break;

        case DATOS_PARAMETROS.valorPorDefecto:
            datos[DATOS_PARAMETROS.valorPorDefecto] = await preguntar.prompt(
                tp, datos[DATOS_PARAMETROS.valorPorDefecto]
                    ? `Nuevo valor por defecto del parámetro, donde antes era ${datos[DATOS_PARAMETROS.valorPorDefecto]}`
                    : "Valor por defecto del parámetro",
                error.Quit("No se ingresó el valor por defecto del parámetro")
            );
            break;

        case DATOS_PARAMETROS.tipoDeDato:
            datos[DATOS_PARAMETROS.tipoDeDato] = await tp.user.crearPreguntas(
                tp, infoTipoDeDato.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDado, respuestaDada) => infoTipoDeDato.actualizarDatos(tp, datosDado, respuestaDada, lenguaje), 
                (tp, datosDado) => infoTipoDeDato.generarPreguntas(tp, datosDado, lenguaje), 
                "Ingresar los datos del tipo de dato", datos[DATOS_PARAMETROS.tipoDeDato]
            );
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { 
        SIMBOLOS, DATOS: { 
            FUNCIONES: { parametro: DATOS_PARAMETROS }, LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
        }
    } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;
    const infoTipoDeDato = tp.user.tipoDeDato();

    let opciones = [], valores = [];

    opciones.push(DATOS_PARAMETROS.nombreParametro);
    valores.push(datos[DATOS_PARAMETROS.nombreParametro]
        ? ` ${SIMBOLOS.modificar} Modificar el nombre del parámetro, donde era ${datos[DATOS_PARAMETROS.nombreParametro]}`
        : ` ${SIMBOLOS.agregar} Nombre del parámetro`
    )

    opciones.push(DATOS_PARAMETROS.descripcion);
    valores.push(datos[DATOS_PARAMETROS.descripcion]
        ? ` ${SIMBOLOS.modificar} Modificar la descripción del parámetro, donde era ${datos[DATOS_PARAMETROS.descripcion]}`
        : ` ${SIMBOLOS.agregar} Descripción del parámetro`
    )

    if (DATOS_LENGUAJES[lenguaje].parametroValorPorDefecto) {
        opciones.push(DATOS_PARAMETROS.valorPorDefecto);
        valores.push(datos[DATOS_PARAMETROS.valorPorDefecto]
            ? ` ${SIMBOLOS.modificar} Modificar el valor por defecto del parámetro, donde era ${datos[DATOS_PARAMETROS.valorPorDefecto]}`
            : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Valor por defecto del parámetro`
        )
    }

    opciones.push(DATOS_PARAMETROS.tipoDeDato);
    valores.push(infoTipoDeDato.esValido(tp, datos[DATOS_PARAMETROS.tipoDeDato], lenguaje)
        ? ` ${SIMBOLOS.modificar} Modificar el tipo de dato, donde era ${infoTipoDeDato.describir(tp, datos[DATOS_PARAMETROS.tipoDeDato], lenguaje).replaceAll("\n", "\n\t")}`
        : ` ${SIMBOLOS.agregar} Tipo de dato`
    )

    if (esValido(tp, datos, lenguaje)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, parametro, lenguaje = undefined) {
    if (!esValido(tp, parametro, lenguaje)) return "";

    const { 
        DATOS: { 
            FUNCIONES: { parametro: DATOS_PARAMETROS }, 
            LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
        } 
    } = tp.user.constantes();
    const infoTipoDeDato = tp.user.tipoDeDato();

    let descripcionTipoDato = infoTipoDeDato.describir(tp, parametro[DATOS_PARAMETROS.tipoDeDato], lenguaje);
    let textoDefault = "";

    switch (lenguaje) {
        case LENGUAJES.python:
            if (DATOS_LENGUAJES[lenguaje].parametroValorPorDefecto && parametro[DATOS_PARAMETROS.valorPorDefecto]) {
                textoDefault = `= ${parametro[DATOS_PARAMETROS.valorPorDefecto]}`;
            }

            return `${parametro[DATOS_PARAMETROS.nombreParametro]}: ${descripcionTipoDato} ${textoDefault}`;

        case LENGUAJES.rust:
            return `${parametro[DATOS_PARAMETROS.nombreParametro]}: ${parametro[DATOS_PARAMETROS.tipoDeDato]}`;

        case LENGUAJES.c:
            return `${parametro[DATOS_PARAMETROS.tipoDeDato]} ${parametro[DATOS_PARAMETROS.nombreParametro]}`;

        default:
            if (DATOS_LENGUAJES[lenguaje].parametroValorPorDefecto && parametro[DATOS_PARAMETROS.valorPorDefecto]) {
                textoDefault = `= ${parametro[DATOS_PARAMETROS.valorPorDefecto]}`;
            }
            return `${parametro[DATOS_PARAMETROS.nombreParametro]}: ${descripcionTipoDato} ${textoDefault}`;
    }
}

function esValido(tp, datos, lenguaje = undefined) {
    if (!datos) return false;

    const { DATOS: { FUNCIONES: { parametro: DATOS_PARAMETROS } } } = tp.user.constantes();
    const infoTipoDeDato = tp.user.tipoDeDato();

    return [DATOS_PARAMETROS.nombreParametro, DATOS_PARAMETROS.descripcion].every(key => datos[key]) 
        && infoTipoDeDato.esValido(tp, datos[DATOS_PARAMETROS.tipoDeDato], lenguaje);
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { FUNCIONES: { parametro:  DATOS_PARAMETROS } } } = tp.user.constantes();
        const infoTipoDeDato = tp.user.tipoDeDato();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_PARAMETROS.nombreParametro]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PARAMETROS.tipoDeDato]: infoTipoDeDato.obtenerDefault(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion),
            [DATOS_PARAMETROS.valorPorDefecto]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PARAMETROS.descripcion]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
});