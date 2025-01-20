const MODIFICAR_TIPO_DATO = "modificar tipo dato";
const ELIMINAR_TIPO_DATO = "eliminar tipo dato";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { parametro: DATOS_PARAMETROS } } } = tp.user.constantes();
    const { informacion: { tieneMultiplesTiposDeDatos } } = tp.user.lenguajes();

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

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

        case MODIFICAR_TIPO_DATO:
            indice = separacion[1];
            datos[DATOS_PARAMETROS.tipoDeDato][indice] = await preguntar.prompt(
                tp, `Nuevo tipo de dato del parámetro, donde antes era ${datos[DATOS_PARAMETROS.tipoDeDato][indice]}`,
                error.Quit("No se ingresó el tipo de dato del parámetro")
            );
            break;

        case DATOS_PARAMETROS.tipoDeDato:
            let tipoDato = await preguntar.prompt(
                tp, (tieneMultiplesTiposDeDatos(tp, lenguaje) && datos[DATOS_PARAMETROS.tipoDeDato].length > 0) 
                    ? `Tipo de dato del parámetro, donde las otras son ${datos[DATOS_PARAMETROS.tipoDeDato].join(", ")}`
                    : "Tipo de dato del parámetro", 
                error.Quit("No se ingresó el tipo de dato del parámetro")
            );

            if (tieneMultiplesTiposDeDatos(tp, lenguaje)) {
                datos[DATOS_PARAMETROS.tipoDeDato].push(tipoDato);
            } else {
                datos[DATOS_PARAMETROS.tipoDeDato] = tipoDato;
            }
            break;

        case ELIMINAR_TIPO_DATO:
            datos[DATOS_PARAMETROS.tipoDeDato].pop();

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { SIMBOLOS, DATOS: { FUNCIONES: { parametro: DATOS_PARAMETROS } } } = tp.user.constantes();
    const { informacion: { tieneMultiplesTiposDeDatos, tieneParametroConValorPorDefecto } } = tp.user.lenguajes();
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

    if (tieneParametroConValorPorDefecto(tp, lenguaje)) {
        opciones.push(DATOS_PARAMETROS.valorPorDefecto);
        valores.push(datos[DATOS_PARAMETROS.valorPorDefecto]
            ? ` ${SIMBOLOS.modificar} Modificar el valor por defecto del parámetro, donde era ${datos[DATOS_PARAMETROS.valorPorDefecto]}`
            : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Valor por defecto del parámetro`
        )
    }

    if (tieneMultiplesTiposDeDatos(tp, lenguaje)) {
        for (let [indice, tipoDeDato] of datos[DATOS_PARAMETROS.tipoDeDato].entries()) {
            opciones.push(`${MODIFICAR_TIPO_DATO}-${indice}`);
            valores.push(`️ ${SIMBOLOS.modificar} Modificar el tipo de dato, donde es ${tipoDeDato}`);
        }

        if (datos[DATOS_PARAMETROS.tipoDeDato].length > 0) {
            let ultimoTipoDeDato = datos[DATOS_PARAMETROS.tipoDeDato].last();
            opciones.push(ELIMINAR_TIPO_DATO);
            valores.push(` ${SIMBOLOS.sacar} Eliminar el tipo de dato, donde es ${ultimoTipoDeDato}`);
            
            opciones.push(DATOS_PARAMETROS.tipoDeDato);
            valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Tipo de dato`);

        } else {
            opciones.push(DATOS_PARAMETROS.tipoDeDato);
            valores.push(` ${SIMBOLOS.agregar} Tipo de dato`);
        }


    } else {
        opciones.push(DATOS_PARAMETROS.tipoDeDato);
        valores.push(datos[DATOS_PARAMETROS.tipoDeDato]
            ? ` ${SIMBOLOS.modificar} Modificar el tipo de dato, donde era ${datos[DATOS_PARAMETROS.tipoDeDato]}`
            : ` ${SIMBOLOS.agregar} Tipo de dato`
        );
    }

    if (esValido(tp, datos)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, parametro, lenguaje = undefined) {
    const { 
        DATOS: { FUNCIONES: { parametro: DATOS_PARAMETROS, lenguaje: { lenguajes: DATOS_LENGUAJES } } },
    } = tp.user.constantes();
    const { informacion: { tieneMultiplesTiposDeDatos } } = tp.user.lenguajes();

    let descripcionTipoDato;

    switch (lenguaje) {
        case DATOS_LENGUAJES.python:
            descripcionTipoDato = parametro[DATOS_PARAMETROS.tipoDeDato];
            if (tieneMultiplesTiposDeDatos(tp, lenguaje)) {
                descripcionTipoDato = `${parametro[DATOS_PARAMETROS.tipoDeDato].join(" | ")}`;
            }
            let textoDefault = "";
            if (tieneMultiplesTiposDeDatos(tp, lenguaje)) {
                textoDefault = `= ${parametro[DATOS_PARAMETROS.valorPorDefecto]}`;
            }

            return `${parametro[DATOS_PARAMETROS.nombreParametro]}: ${descripcionTipoDato} ${textoDefault}`;

        case DATOS_LENGUAJES.c:
            return `${parametro[DATOS_PARAMETROS.tipoDeDato]} ${parametro[DATOS_PARAMETROS.nombreParametro]}`;

        default:
            descripcionTipoDato = parametro[DATOS_PARAMETROS.tipoDeDato];
            if (tieneMultiplesTiposDeDatos(tp, lenguaje)) {
                descripcionTipoDato = `${parametro[DATOS_PARAMETROS.tipoDeDato].join(" | ")}`;
                if (parametro[DATOS_PARAMETROS.tipoDeDato].length > 1) {
                    descripcionTipoDato = `(${descripcionTipoDato})`;
                }
            }

            return `${parametro[DATOS_PARAMETROS.nombreParametro]}: ${descripcionTipoDato}`;
    }
}

function esValido(tp, datos, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { parametro: DATOS_PARAMETROS } } } = tp.user.constantes();
    const { informacion: { tieneMultiplesTiposDeDatos } } = tp.user.lenguajes();

    let DATOS_SIMPLES = [DATOS_PARAMETROS.nombreParametro, DATOS_PARAMETROS.descripcion];
    if (!tieneMultiplesTiposDeDatos(tp, lenguaje)) {
        DATOS_SIMPLES.push(DATOS_PARAMETROS.tipoDeDato);
    }

    return DATOS_SIMPLES.every(key => datos[key]) && (!tieneMultiplesTiposDeDatos(tp, lenguaje) || datos[DATOS_PARAMETROS.tipoDeDato].length > 0);
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { FUNCIONES: { parametro:  DATOS_PARAMETROS } } } = tp.user.constantes();
        const { informacion: { defaultTipoDato } } = tp.user.lenguajes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_PARAMETROS.nombreParametro]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PARAMETROS.tipoDeDato]: defaultTipoDato(tp, TIPOS_DE_DEFAULT, lenguaje),
            [DATOS_PARAMETROS.valorPorDefecto]: TIPOS_DE_DEFAULT.simple,
            [DATOS_PARAMETROS.descripcion]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
});