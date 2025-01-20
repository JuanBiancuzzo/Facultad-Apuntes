const MODIFICAR_PARAMETRO = "modificar parametro";
const ELIMINAR_PARAMETRO = "eliminar parametro";

const MODIFICAR_TIPO_DATO = "modificar tipo dato";
const ELIMINAR_TIPO_DATO = "eliminar tipo dato";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { funcion: { firma: DATOS_FIRMA } } } } = tp.user.constantes(); 

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

        case DATOS_FIRMA.parametros.self: 
            let parametroPrevio;
            if (indice) parametroPrevio = datos[DATOS_FIRMA.parametros.self][indice];

            let parametro = await tp.user.crearPreguntas(
                tp, obtenerDefaultParametros.bind(null, tp, lenguaje), 
                (tp, datosDado, respuestaDada) => actualizarDatosParametros(tp, datosDado, respuestaDada, lenguaje), 
                (tp, datosDado) => generarPreguntasParametros(tp, datosDado, lenguaje), 
                "Ingresar los datos del parámetro", parametroPrevio
            );

            if (indice) {
                datos[DATOS_FIRMA.parametros.self][indice] = parametro; 
            } else {
                datos[DATOS_FIRMA.parametros.self].push(parametro);
            }
            break;

        case ELIMINAR_PARAMETRO:
            datos[DATOS_FIRMA.parametros.self].pop();
            break;

        case DATOS_FIRMA.return.self: 
            let resultadoTemp = await tp.user.crearPreguntas(
                tp, obtenerDefaultReturn.bind(null, tp, lenguaje), 
                (tp, datosDado, respuestaDada) => actualizarDatosReturn(tp, datosDado, respuestaDada, lenguaje), 
                (tp, datosDado) => generarPreguntasReturn(tp, datosDado, lenguaje), 
                "Ingresar los datos del tipo de dato que se devuelve", 
                datos[DATOS_FIRMA.return.self] ? datos[DATOS_FIRMA.return.self] : null
            );
            datos[DATOS_FIRMA.return.self] = resultadoTemp;
            break;

        case SALIR: 
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { SIMBOLOS, DATOS: { FUNCIONES: { funcion: { firma: DATOS_FIRMA } } } } = tp.user.constantes(); 
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

    for (let [indice, parametro] of datos[DATOS_FIRMA.parametros.self].entries()) {
        opciones.push(`${MODIFICAR_PARAMETRO}-${indice}`);
        valores.push(`️ ${SIMBOLOS.modificar} Modificar el parámetro, donde es ${describirParametro(tp, parametro, lenguaje)}`);
    }

    if (datos[DATOS_FIRMA.parametros.self].length > 0) {
        let ultimoParametro = datos[DATOS_FIRMA.parametros.self].last();
        opciones.push(ELIMINAR_PARAMETRO);
        valores.push(` ${SIMBOLOS.sacar} Eliminar el parámetro, donde es ${describirParametro(tp, ultimoParametro, lenguaje)}`);

    } 

    opciones.push(DATOS_FIRMA.parametros.self);
    valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Parámetro`);

    opciones.push(DATOS_FIRMA.return.self);
    valores.push(esValidoReturn(tp, datos[DATOS_FIRMA.return.self], lenguaje)
        ? ` ${SIMBOLOS.modificar} Modificar el valor de retorno de la función, donde era ${describirReturn(tp, datos[DATOS_FIRMA.return.self], lenguaje)}`
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

    return esValidoReturn(tp, datos[DATOS_FIRMA.return.self], lenguaje) 
        && [DATOS_FIRMA.nombreFuncion, DATOS_FIRMA.descripcion].every(key => datos[key]);
}

function obtenerDefaultParametros(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) {
    const {
        DATOS: { FUNCIONES: { funcion: { firma: { parametros: DATOS_PARAMETROS } } } }
    } = tp.user.constantes();

    return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
        [DATOS_PARAMETROS.nombreParametro]: TIPOS_DE_DEFAULT.simple,
        [DATOS_PARAMETROS.tipoDeDato]: defaultTipoDato(tp, TIPOS_DE_DEFAULT, lenguaje),
        [DATOS_PARAMETROS.valorPorDefecto]: TIPOS_DE_DEFAULT.simple,
        [DATOS_PARAMETROS.descripcion]: TIPOS_DE_DEFAULT.simple,
    }));
}

async function actualizarDatosParametros(tp, datos, respuesta, lenguaje = undefined) {
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

function generarPreguntasParametros(tp, datos, lenguaje = undefined) {
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

    if (esValidoParametro(tp, datos)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function esValidoParametro(tp, datos, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { funcion: { firma: { parametros: DATOS_PARAMETROS } } } } } = tp.user.constantes(); 

    let DATOS_SIMPLES = [DATOS_PARAMETROS.nombreParametro, DATOS_PARAMETROS.descripcion];
    if (!tieneMultiplesTiposDeDatos(tp, lenguaje)) {
        DATOS_SIMPLES.push(DATOS_PARAMETROS.tipoDeDato);
    }

    return DATOS_SIMPLES.every(key => datos[key]) && (!tieneMultiplesTiposDeDatos(tp, lenguaje) || datos[DATOS_PARAMETROS.tipoDeDato].length > 0);
}

function obtenerDefaultStruct(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) {
    const { DATOS: { FUNCIONES: { funcion: { firma: { struct: DATOS_STRUCT } } } } } = tp.user.constantes()

    return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
        [DATOS_STRUCT.nombreStruct]: TIPOS_DE_DEFAULT.simple,
        [DATOS_STRUCT.descripcion]: TIPOS_DE_DEFAULT.simple,
        [DATOS_STRUCT.campos]: crearFuncion(
            TIPOS_DE_DEFAULT.array, 
            () => obtenerDefaultParametros(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion)
        ),
        [DATOS_STRUCT.herede]: TIPOS_DE_DEFAULT.simple,
    }));
}

async function actualizarDatosStruct(tp, datos, respuesta, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { funcion: { firma: { struct: DATOS_STRUCT } } } } } = tp.user.constantes(); 

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let separacion = respuesta.split("-");
    respuesta = separacion[0];
    let indice;

    switch (respuesta) {
        case DATOS_STRUCT.nombreStruct: 
            datos[DATOS_STRUCT.nombreStruct] = await preguntar.prompt(
                tp, datos[DATOS_STRUCT.nombreStruct]
                    ? `Nuevo nombre del struct, donde antes era ${datos[DATOS_STRUCT.nombreStruct]}`
                    : "Nombre del struct",
                error.Quit("No se ingresó el nombre del struct")
            );
            break;

        case DATOS_STRUCT.descripcion: 
            datos[DATOS_STRUCT.descripcion] = await preguntar.prompt(
                tp, datos[DATOS_STRUCT.descripcion]
                    ? `Nueva descripción del struct, donde antes era ${datos[DATOS_STRUCT.descripcion]}`
                    : "Descripción del struct",
                error.Quit("No se ingresó la descripción del struct")
            );
            break;

        case MODIFICAR_PARAMETRO:
            indice = separacion[1];

        case DATOS_STRUCT.campos: 
            let campoPrevio;
            if (indice) campoPrevio = datos[DATOS_STRUCT.campos][indice];

            let campo = await tp.user.crearPreguntas(
                tp, obtenerDefaultParametros.bind(null, tp, lenguaje), 
                (tp, datosDados, respuestaDada) => actualizarDatosParametros(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => generarPreguntasParametros(tp, datosDados, lenguaje), 
                "Ingresar los datos del campo", campoPrevio
            );

            if (indice) {
                datos[DATOS_STRUCT.campos][indice] = campo; 
            } else {
                datos[DATOS_STRUCT.campos].push(campo);
            }
            break;

        case ELIMINAR_PARAMETRO:
            datos[DATOS_STRUCT.campos].pop();
            break;

        case DATOS_STRUCT.herede:
            datos[DATOS_STRUCT.herede] = await preguntar.prompt(
                tp, datos[DATOS_STRUCT.herede]
                    ? `Nueva herencia para el struct, donde antes era ${datos[DATOS_STRUCT.herede]}`
                    : "De que hereda el struct",
                error.Quit("No se ingresó la herencia del struct")
            );
            break;

        case SALIR: 
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntasStruct(tp, datos, lenguaje = undefined) {
    const { 
        SIMBOLOS, DATOS: { FUNCIONES: { funcion: { firma: { struct: DATOS_STRUCT } } } } 
    } = tp.user.constantes(); 
    let opciones = [], valores = [];

    opciones.push(DATOS_STRUCT.nombreStruct);
    valores.push(datos[DATOS_STRUCT.nombreStruct]
        ? ` ${SIMBOLOS.modificar} Modificar el nombre del struct, donde era ${datos[DATOS_STRUCT.nombreStruct]}`
        : ` ${SIMBOLOS.agregar} Nombre del struct`
    )

    opciones.push(DATOS_STRUCT.descripcion);
    valores.push(datos[DATOS_STRUCT.descripcion]
        ? ` ${SIMBOLOS.modificar} Modificar la descripción del struct, donde era ${datos[DATOS_STRUCT.descripcion]}`
        : ` ${SIMBOLOS.agregar} Descripción del struct`
    );

    for (let [indice, parametro] of datos[DATOS_STRUCT.campos].entries()) {
        opciones.push(`${MODIFICAR_PARAMETRO}-${indice}`);
        valores.push(`️ ${SIMBOLOS.modificar} Modificar el campos, donde es ${describirParametro(tp, parametro, lenguaje)}`);
    }

    if (datos[DATOS_STRUCT.campos].length > 0) {
        let ultimoParametro = datos[DATOS_STRUCT.campos].last();
        opciones.push(ELIMINAR_PARAMETRO);
        valores.push(` ${SIMBOLOS.sacar} Eliminar el campo, donde es ${describirParametro(tp, ultimoParametro, lenguaje)}`);

        opciones.push(DATOS_STRUCT.campos);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Campo`);

    } else {
        opciones.push(DATOS_STRUCT.campos);
        valores.push(` ${SIMBOLOS.agregar} Campo`);
    }

    if (tieneStructConHerencia(tp, lenguaje)) {
        opciones.push(DATOS_STRUCT.herede);
        valores.push(datos[DATOS_STRUCT.herede]
            ? ` ${SIMBOLOS.modificar} Modificar la estructura de la que herede, donde era ${datos[DATOS_STRUCT.herede]}`
            : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Estructura de la que herede`
        );
    }

    if (esValidoStruct(tp, datos)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function esValidoStruct(tp, datos, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { funcion: { firma: { struct: DATOS_STRUCT } } } } } = tp.user.constantes(); 
    let DATOS_SIMPLES = [DATOS_STRUCT.nombreStruct, DATOS_STRUCT.descripcion];

    return datos[DATOS_STRUCT.campos].length > 0 && DATOS_SIMPLES.every(key => datos[key]);
}

function obtenerDefaultReturn(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) {
    const {
        DATOS: { FUNCIONES: { funcion: { firma: { return: DATOS_RETURN } } } }
    } = tp.user.constantes()

    return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
        [DATOS_RETURN.tipoDeDato]: defaultTipoDato(tp, TIPOS_DE_DEFAULT, lenguaje),
        [DATOS_RETURN.descripcion]: TIPOS_DE_DEFAULT.simple,
    }));
}

async function actualizarDatosReturn(tp, datos, respuesta, lenguaje = undefined) {
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

function generarPreguntasReturn(tp, datos, lenguaje = undefined) {
    const { 
        SIMBOLOS, DATOS: { FUNCIONES: { funcion: { firma: { return: DATOS_RETURN } } } } 
    } = tp.user.constantes(); 
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

    if (esValidoReturn(tp, datos)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function esValidoReturn(tp, datos, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { funcion: { firma: { return: DATOS_RETURN } } } } } = tp.user.constantes(); 

    let DATOS_SIMPLES = [];
    if (!tieneMultiplesTiposDeDatos(tp, lenguaje)) {
        DATOS_SIMPLES.push(DATOS_RETURN.tipoDeDato);
    }

    return DATOS_SIMPLES.every(key => datos[key]) && (!tieneMultiplesTiposDeDatos(tp, lenguaje) || datos[DATOS_RETURN.tipoDeDato].length > 0);
}

function describirParametro(tp, parametro, lenguaje = undefined) {
    const { 
        DATOS: { FUNCIONES: {
            lenguaje: { lenguajes: DATOS_LENGUAJES },
            funcion: { firma: { parametros: DATOS_PARAMETROS } },
        } }
    } = tp.user.constantes();

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

function describirStruct(tp, datos, lenguaje = undefined) {
    const { 
        DATOS: { FUNCIONES: {
            lenguaje: { lenguajes: DATOS_LENGUAJES },
            funcion: { firma: { struct: DATOS_STRUCT } }
        } }
    } = tp.user.constantes();

    let nombre = datos[DATOS_STRUCT.nombreStruct];
    let herencia = datos[DATOS_STRUCT.herede];
    let parametros = datos[DATOS_STRUCT.campos]
        .map(param => describirParametro(tp, param, lenguaje));

    switch (lenguaje) {
        case DATOS_LENGUAJES.python:
            return `class ${nombre}${herencia ? `(${herencia})` : ""}: ${parametros.join(", ")}`;

        case DATOS_LENGUAJES.c:
            return `struct ${nombre} { ${parametros.join("; ")} }`;

        default:
            return `struct ${nombre}${herencia ? ` :: ${herencia}` : ""} then ${parametros.join(" ")} end`;
    }
}

function describirReturn(tp, returnValue, lenguaje = undefined) {
    const { 
        lenguaje: { lenguajes: DATOS_LENGUAJES },
        funcion: { firma: { return: DATOS_RETURN } },
    } = tp.user.constantes().DATOS.FUNCIONES;

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

function describir(tp, datos, lenguaje = undefined) {
    const { 
        DATOS: { FUNCIONES: {
            lenguaje: { lenguajes: DATOS_LENGUAJES },
            funcion: { firma: { parametros: DATOS_PARAMETROS, return: DATOS_RETURN, ...DATOS_FUNCION } }
        } }
    } = tp.user.constantes();

    let nombre = datos[DATOS_FUNCION.nombreFuncion];
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

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_FIRMA.nombreFuncion]: TIPOS_DE_DEFAULT.simple,
            [DATOS_FIRMA.descripcion]: TIPOS_DE_DEFAULT.simple,
            [DATOS_FIRMA.parametros.self]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () => obtenerDefaultParametros(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion),
            ),
            [DATOS_FIRMA.return.self]: obtenerDefaultReturn(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion),
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
    parametro: {
        obtenerDefault: obtenerDefaultParametros,
        actualizarDatos: actualizarDatosParametros,
        generarPreguntas: generarPreguntasParametros,
        describir: describirParametro,
        esValido: esValidoParametro,
    },
    struct: {
        obtenerDefault: obtenerDefaultStruct,
        actualizarDatos: actualizarDatosStruct,
        generarPreguntas: generarPreguntasStruct,
        describir: describirStruct,
        esValido: esValidoStruct,
    },
    return: {
        obtenerDefault: obtenerDefaultReturn,
        actualizarDatos: actualizarDatosReturn,
        generarPreguntas: generarPreguntasReturn,
        describir: describirReturn,
        esValido: esValidoReturn,
    },
});