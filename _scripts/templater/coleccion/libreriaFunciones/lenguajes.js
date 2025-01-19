const MODIFICAR_PARAMETRO = "modificar parametro";
const ELIMINAR_PARAMETRO = "eliminar parametro";

const MODIFICAR_TIPO_DATO = "modificar tipo dato";
const ELIMINAR_TIPO_DATO = "eliminar tipo dato";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, lenguaje) {
    const { 
        DATOS: { FUNCIONES: { funcion: { firma: DATOS_FUNCION } } } 
    } = tp.user.constantes(); 

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case DATOS_FUNCION.nombreFuncion: 
            datos[DATOS_FUNCION.nombreFuncion] = await preguntar.prompt(
                tp, datos[DATOS_FUNCION.nombreFuncion]
                    ? `Nuevo nombre de la función, donde antes era ${datos[DATOS_FUNCION.nombreFuncion]}`
                    : "Nombre de la función",
                error.Quit("No se ingresó el nombre de la función")
            );
            break;

        case DATOS_FUNCION.descripcion: 
            datos[DATOS_FUNCION.descripcion] = await preguntar.prompt(
                tp, datos[DATOS_FUNCION.descripcion]
                    ? `Nueva descripción de la función, donde antes era ${datos[DATOS_FUNCION.descripcion]}`
                    : "Descripción de la función",
                error.Quit("No se ingresó la descripción de la función")
            );
            break;

        case MODIFICAR_PARAMETRO:
            indice = separacion[1];

        case DATOS_FUNCION.parametros.self: 
            let parametroPrevio;
            if (indice) parametroPrevio = datos[DATOS_FUNCION.parametros.self][indice];

            let parametro = await tp.user.crearPreguntas(
                tp, obtenerDefaultParametros.bind(null, tp), 
                (tp, datosDado, respuestaDada) => actualizarDatosParametros(tp, datosDado, respuestaDada, lenguaje), 
                (tp, datosDado) => generarPreguntasParametros(tp, datosDado, lenguaje), 
                "Ingresar los datos del parámetro", parametroPrevio
            );

            if (indice) {
                datos[DATOS_FUNCION.parametros.self][indice] = parametro; 
            } else {
                datos[DATOS_FUNCION.parametros.self].push(parametro);
            }
            break;

        case ELIMINAR_PARAMETRO:
            datos[DATOS_FUNCION.parametros.self].pop();
            break;

        case DATOS_FUNCION.return.self: 
            datos[DATOS_FUNCION.return.self] = await tp.user.crearPreguntas(
                tp, obtenerDefaultReturn.bind(null, tp), 
                (tp, datosDado, respuestaDada) => actualizarDatosReturn(tp, datosDado, respuestaDada, lenguaje), 
                (tp, datosDado) => generarPreguntasReturn(tp, datosDado, lenguaje), 
                "Ingresar los datos del tipo de dato que se devuelve", 
                datos[DATOS_FUNCION.return.self] ? datos[DATOS_FUNCION.return.self] : null
            );
            break;

        case SALIR: 
            salir = true;
            break;
    }

    return salir;
}

function defaultTipoDato(tp, TIPOS_DE_DEFAULT, lenguaje) {
    const { lenguajes: DATOS_LENGUAJES } = tp.user.constantes().DATOS.FUNCIONES.lenguaje;

    switch (lenguaje) {
        case DATOS_LENGUAJES.c: 
            return TIPOS_DE_DEFAULT.simple;
        default: return TIPOS_DE_DEFAULT.array;
    }
}

function tipoDatoEsArray(tp, lenguaje) {
    return Array.isArray(defaultTipoDato(tp, lenguaje));
}

function parametroConValorPorDefecto(tp, lenguaje) {
    const { lenguajes: DATOS_LENGUAJES } = tp.user.constantes().DATOS.FUNCIONES.lenguaje;

    switch (lenguaje) {
        case DATOS_LENGUAJES.c: 
            return false;

        case DATOS_LENGUAJES.python:
        default:
            return true;
    }
}

function generarPreguntas(tp, datos, lenguaje) {
    const { 
        SIMBOLOS, DATOS: { FUNCIONES: { funcion: { firma: DATOS_FUNCION } } } 
    } = tp.user.constantes(); 
    let opciones = [], valores = [];

    opciones.push(DATOS_FUNCION.nombreFuncion);
    valores.push(datos[DATOS_FUNCION.nombreFuncion]
        ? ` ${SIMBOLOS.modificar} Modificar el nombre de la función, donde era ${datos[DATOS_FUNCION.nombreFuncion]}`
        : ` ${SIMBOLOS.agregar} Nombre de la función`
    )

    opciones.push(DATOS_FUNCION.descripcion);
    valores.push(datos[DATOS_FUNCION.descripcion]
        ? ` ${SIMBOLOS.modificar} Modificar la descripción de la función, donde era ${datos[DATOS_FUNCION.descripcion]}`
        : ` ${SIMBOLOS.agregar} Descripción de la función`
    )

    for (let [indice, parametro] of datos[DATOS_FUNCION.parametros.self].entries()) {
        opciones.push(`${MODIFICAR_PARAMETRO}-${indice}`);
        valores.push(`️ ${SIMBOLOS.modificar} Modificar el parámetro, donde es ${describirParametro(tp, parametro, lenguaje)}`);
    }

    if (datos[DATOS_FUNCION.parametros.self].length > 0) {
        let ultimoParametro = datos[DATOS_FUNCION.parametros.self].last();
        opciones.push(ELIMINAR_PARAMETRO);
        valores.push(` ${SIMBOLOS.sacar} Eliminar el parámetro, donde es ${describirParametro(tp, ultimoParametro, lenguaje)}`);


    } 

    opciones.push(DATOS_FUNCION.parametros.self);
    valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Parámetro`);

    opciones.push(DATOS_FUNCION.return.self);
    valores.push(datos[DATOS_FUNCION.return.self]
        ? ` ${SIMBOLOS.modificar} Modificar el valor de retorno de la función, donde era ${describirReturn(tp, datos[DATOS_FUNCION.return.self], lenguaje)}`
        : ` ${SIMBOLOS.agregar} Valor de retorno de la función`
    )

    if ([DATOS_FUNCION.nombreFuncion, DATOS_FUNCION.descripcion, DATOS_FUNCION.return.self].every(key => datos[key])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function obtenerDefaultParametros(tp, TIPOS_DE_DEFAULT, crearFuncion) {
    const {
        DATOS: { FUNCIONES: { funcion: { firma: { parametros: DATOS_PARAMETROS } } } }
    } = tp.user.constantes()

    return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
        [DATOS_PARAMETROS.nombreParametro]: TIPOS_DE_DEFAULT.simple,
        [DATOS_PARAMETROS.tipoDeDato]: defaultTipoDato(tp, TIPOS_DE_DEFAULT, lenguaje),
        [DATOS_PARAMETROS.valorPorDefecto]: TIPOS_DE_DEFAULT.simple,
        [DATOS_PARAMETROS.descripcion]: TIPOS_DE_DEFAULT.simple,
    }));
}

async function actualizarDatosParametros(tp, datos, respuesta, lenguaje) {
    const { 
        funcion: { firma: { parametros: DATOS_PARAMETROS } },
    } = tp.user.constantes().DATOS.FUNCIONES;

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
                tp, `Nuevo tipo de dato del parámetro, donde antes era ${datos[NOMBRE_AUTORES][indice]}`,
                error.Quit("No se ingresó el tipo de dato del parámetro")
            );
            break;

        case DATOS_PARAMETROS.tipoDeDato:
            let tipoDato = await preguntar.prompt(
                tp, (tipoDatoEsArray(tp, lenguaje) && datos[DATOS_PARAMETROS.tipoDeDato].length > 0) 
                    ? `Tipo de dato del parámetro, donde las otras son ${datos[DATOS_PARAMETROS.tipoDeDato].join(", ")}`
                    : "Tipo de dato del parámetro", 
                error.Quit("No se ingresó el tipo de dato del parámetro")
            );

            if (tipoDatoEsArray(tp, lenguaje)) {
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

function generarPreguntasParametros(tp, datos, lenguaje) {
    const { 
        SIMBOLOS, DATOS: { FUNCIONES: { funcion: { firma: { parametros: DATOS_PARAMETROS } } } } 
    } = tp.user.constantes(); 
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

    if (parametroConValorPorDefecto(tp, lenguaje)) {
        opciones.push(DATOS_PARAMETROS.valorPorDefecto);
        valores.push(datos[DATOS_PARAMETROS.valorPorDefecto]
            ? ` ${SIMBOLOS.modificar} Modificar el valor por defecto del parámetro, donde era ${datos[DATOS_PARAMETROS.valorPorDefecto]}`
            : ` ${SIMBOLOS.agregar} Valor por defecto del parámetro`
        )
    }

    if (tipoDatoEsArray(tp, lenguaje)) {
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

    let DATOS_SIMPLES = [DATOS_PARAMETROS.nombreParametro, DATOS_PARAMETROS.descripcion];
    if (!tipoDatoEsArray(tp, lenguaje)) {
        DATOS_SIMPLES.push(DATOS_PARAMETROS.tipoDeDato);
    }
    if (parametroConValorPorDefecto(tp, lenguaje)) {
        DATOS_SIMPLES.push(DATOS_PARAMETROS.valorPorDefecto);
    }

    if (DATOS_SIMPLES.every(key => datos[key]) && (!tipoDatoEsArray(tp, lenguaje) || datos[DATOS_PARAMETROS.tipoDeDato].length > 0)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describirParametro(tp, parametro, lenguaje) {
    const { 
        lenguaje: { lenguajes: DATOS_LENGUAJES },
        funcion: { firma: { parametros: DATOS_PARAMETROS } },
    } = tp.user.constantes().DATOS.FUNCIONES;

    let descripcionTipoDato;

    switch (lenguaje) {
        case DATOS_LENGUAJES.python:
            descripcionTipoDato = parametro[DATOS_PARAMETROS.tipoDeDato];
            if (Array.isArray(parametro[DATOS_PARAMETROS.tipoDeDato])) {
                descripcionTipoDato = `${parametro[DATOS_PARAMETROS.tipoDeDato].join(" | ")}`;
            }
            let textoDefault = "";
            if (parametro[DATOS_PARAMETROS.valorPorDefecto]) {
                textoDefault = `= ${parametro[DATOS_PARAMETROS.valorPorDefecto]}`;
            }

            return `${parametro[DATOS_PARAMETROS.nombreParametro]}: ${descripcionTipoDato} ${textoDefault}`;

        case DATOS_LENGUAJES.c:
            return `${parametro[DATOS_PARAMETROS.tipoDeDato]} ${parametro[DATOS_PARAMETROS.nombreParametro]}`;

        default:
            descripcionTipoDato = parametro[DATOS_PARAMETROS.tipoDeDato];
            if (Array.isArray(parametro[DATOS_PARAMETROS.tipoDeDato])) {
                descripcionTipoDato = `(${parametro[DATOS_PARAMETROS.tipoDeDato].join(" | ")})`;
            }

            return `${parametro[DATOS_PARAMETROS.nombreParametro]}: ${descripcionTipoDato}`;
    }
}

function obtenerDefaultStruct(tp, TIPOS_DE_DEFAULT, crearFuncion) {
    const {
        DATOS: { FUNCIONES: { funcion: { firma: { struct: DATOS_STRUCT } } } }
    } = tp.user.constantes()

    return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
        [DATOS_STRUCT.nombreStruct]: TIPOS_DE_DEFAULT.simple,
        [DATOS_STRUCT.descripcion]: TIPOS_DE_DEFAULT.simple,
        [DATOS_STRUCT.campos]: crearFuncion(
            TIPOS_DE_DEFAULT.array, 
            () => obtenerDefaultParametros(tp, TIPOS_DE_DEFAULT, crearFuncion)
        ),
        [DATOS_STRUCT.alias]: TIPOS_DE_DEFAULT.simple,
    }));
}

function obtenerDefaultReturn(tp, TIPOS_DE_DEFAULT, crearFuncion) {
    const {
        DATOS: { FUNCIONES: { funcion: { firma: { return: DATOS_RETURN } } } }
    } = tp.user.constantes()

    return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
        [DATOS_RETURN.tipoDeDato]: defaultTipoDato(tp, TIPOS_DE_DEFAULT, lenguaje),
        [DATOS_RETURN.descripcion]: TIPOS_DE_DEFAULT.simple,
    }));
}

async function actualizarDatosReturn(tp, datos, respuesta, lenguaje) {
    const { 
        funcion: { firma: { return: DATOS_RETURN } },
    } = tp.user.constantes().DATOS.FUNCIONES;

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
                tp, `Nuevo tipo de dato del parámetro, donde antes era ${datos[NOMBRE_AUTORES][indice]}`,
                error.Quit("No se ingresó el tipo de dato del parámetro")
            );
            break;

        case DATOS_RETURN.tipoDeDato:
            let tipoDato = await preguntar.prompt(
                tp, (tipoDatoEsArray(tp, lenguaje) && datos[DATOS_RETURN.tipoDeDato].length > 0) 
                    ? `Tipo de dato del parámetro, donde las otras son ${datos[DATOS_RETURN.tipoDeDato].join(", ")}`
                    : "Tipo de dato del parámetro", 
                error.Quit("No se ingresó el tipo de dato del parámetro")
            );

            if (tipoDatoEsArray(tp, lenguaje)) {
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

function generarPreguntasReturn(tp, datos, lenguaje) {
    const { 
        SIMBOLOS, DATOS: { FUNCIONES: { funcion: { firma: { return: DATOS_RETURN } } } } 
    } = tp.user.constantes(); 
    let opciones = [], valores = [];

    opciones.push(DATOS_RETURN.descripcion);
    valores.push(datos[DATOS_RETURN.descripcion]
        ? ` ${SIMBOLOS.modificar} Modificar la descripción del valor de retorno, donde era ${datos[DATOS_RETURN.descripcion]}`
        : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Descripción del valor de retorno`
    )

    if (tipoDatoEsArray(tp, lenguaje)) {
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

    let DATOS_SIMPLES = [];
    if (!tipoDatoEsArray(tp, lenguaje)) {
        DATOS_SIMPLES.push(DATOS_RETURN.tipoDeDato);
    }

    if (DATOS_SIMPLES.every(key => datos[key]) && (!tipoDatoEsArray(tp, lenguaje) || datos[DATOS_RETURN.tipoDeDato].length > 0)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describirReturn(tp, returnValue, lenguaje) {
    const { 
        lenguaje: { lenguajes: DATOS_LENGUAJES },
        funcion: { firma: { return: DATOS_RETURN } },
    } = tp.user.constantes().DATOS.FUNCIONES;

    let descripcionReturn;
    switch (lenguaje) {
        case DATOS_LENGUAJES.python:
            descripcionReturn = returnValue[DATOS_RETURN.tipoDeDato];
            if (Array.isArray(returnValue[DATOS_RETURN.tipoDeDato])) {
                descripcionReturn = `${returnValue[DATOS_RETURN.tipoDeDato].join(" | ")}`;
            }
            break;

        case DATOS_LENGUAJES.c:
            descripcionReturn = returnValue[DATOS_RETURN.tipoDeDato];
            break;

        default:
            descripcionReturn = returnValue[DATOS_RETURN.tipoDeDato];
            if (Array.isArray(returnValue[DATOS_RETURN.tipoDeDato])) {
                descripcionReturn = `(${returnValue[DATOS_RETURN.tipoDeDato].join(" | ")})`;
            }
    }

    return descripcionReturn;
}

function describir(tp, datos, lenguaje) {
    const { 
        lenguaje: { lenguajes: DATOS_LENGUAJES },
        funcion: { firma: { nombreFuncion: DATOS_NOMBRE, parametros: DATOS_PARAMETROS, return: DATOS_RETURN } }
    } = tp.user.constantes().DATOS.FUNCIONES;

    let nombre = datos[DATOS_NOMBRE];
    let parametros = datos[DATOS_PARAMETROS.self].map(param => describirParametro(tp, param, lenguaje));
    let returnValue = describirReturn(tp, datos[DATOS_RETURN.self], lenguaje)

    switch (lenguaje) {
        case DATOS_LENGUAJES.python:
            return `def ${nombre}(${parametros.join(", ")}) -> ${returnValue}`;

        case DATOS_LENGUAJES.c:
            return `${returnValue} ${nombre}(${parametros.join(", ")})`;

        default:
            return `function ${nombre} :: ${parametros.join(" ")} -> ${returnValue}`;
    }
}

module.exports = () => ({
    obtenerDefault: (tp, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { 
            DATOS: { FUNCIONES: { funcion: { firma: DATOS_FIRMA } } } 
        } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_FIRMA.nombreFuncion]: TIPOS_DE_DEFAULT.simple,
            [DATOS_FIRMA.descripcion]: TIPOS_DE_DEFAULT.simple,
            [DATOS_FIRMA.parametros.self]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () => obtenerDefaultParametros(tp, TIPOS_DE_DEFAULT, crearFuncion),
            ),
            [DATOS_FIRMA.parametros.self]: crearFuncion(
                TIPOS_DE_DEFAULT.diccionario, 
                () => obtenerDefaultReturn(tp, TIPOS_DE_DEFAULT, crearFuncion),
            ),
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    parametro: {
        obtenerDefault: obtenerDefaultParametros,
        actualizarDatos: actualizarDatosParametros,
        generarPreguntas: generarPreguntasParametros,
        describir: describirParametro,
    },
    struct: {
        obtenerDefault: obtenerDefaultStruct,
        actualizarDatos: actualizarDatosStruct,
        generarPreguntas: generarPreguntasStruct,
        describir: describirStruct,
    },
    return: {
        obtenerDefault: obtenerDefaultReturn,
        actualizarDatos: actualizarDatosReturn,
        generarPreguntas: generarPreguntasReturn,
        describir: describirReturn,
    },
});