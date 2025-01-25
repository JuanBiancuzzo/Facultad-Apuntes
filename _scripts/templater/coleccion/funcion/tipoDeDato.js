const MODIFICAR_TIPO_DATO = "modificar tipo dato";
const ELIMINAR_TIPO_DATO = "eliminar tipo dato";

const MODIFICAR_VALOR = "modificar";
const ELIMINAR_VALOR = "eliminar valor";

const CANTIDAD_MINIMA = 1;

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuestaDada, lenguaje = undefined) {
    const { 
        DATOS: { 
            FUNCIONES: { tipoDeDato: { valor: DATO_VALOR, tipo: DATOS_TIPO_DE_DATO } }, 
            LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
        }
    } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;

    const infoStruct = tp.user.struct();
    const infoTupla = tp.user.tupla();
    const infoInterfaz = tp.user.interfaz();
    const infoArray = tp.user.array();

    const crearPreguntas = tp.user.crearPreguntas;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let [ respuesta, indice ] = respuestaDada.split("-");
    let datosPrevios = datos;
    if (!(DATOS_LENGUAJES[lenguaje].multiplesTiposDatos)) {
        datosPrevios = [ datos ];
        indice = 0;
    }

    let listaTiposDeDatos = [
        DATOS_TIPO_DE_DATO.primitivo,
        DATOS_TIPO_DE_DATO.compuesto.array,
        DATOS_TIPO_DE_DATO.compuesto.struct,
    ];

    if (DATOS_LENGUAJES[lenguaje].tieneTupla) {
        listaTiposDeDatos.push(DATOS_TIPO_DE_DATO.compuesto.tupla);
    }

    if (DATOS_LENGUAJES[lenguaje].genericos) {
        listaTiposDeDatos.push(DATOS_TIPO_DE_DATO.generico);
    }

    switch (respuesta) {
        case MODIFICAR_TIPO_DATO:
            let tipoDeDatoModificado = await preguntar.suggester(
                tp, (tipoDeDato) => `Tipo de dato ${tipoDeDato}`, listaTiposDeDatos,
                "Que tipo de dato se quiere ingresar",
                error.Quit("No se ingresó que tipo de del tipo de datos")
            );

            if (datos[indice][DATOS_TIPO_DE_DATO.self] != tipoDeDatoModificado) {
                datos[indice][DATOS_TIPO_DE_DATO.self] = tipoDeDatoModificado;
                datos[indice][DATO_VALOR] = null;
            }
            break;

        case DATOS_TIPO_DE_DATO.self:
            let nuevoTipoDeDato = await preguntar.suggester(
                tp, (tipoDeDato) => `Tipo de dato ${tipoDeDato}`, listaTiposDeDatos,
                "Que tipo de dato se quiere ingresar",
                error.Quit("No se ingresó que tipo de del tipo de datos")
            );

            if (DATOS_LENGUAJES[lenguaje].multiplesTiposDatos) {
                datos.push({ [DATOS_TIPO_DE_DATO.self]: nuevoTipoDeDato });

            } else if (datos[DATOS_TIPO_DE_DATO.self] != nuevoTipoDeDato) {
                datos[DATOS_TIPO_DE_DATO.self] = nuevoTipoDeDato;
                datos[DATO_VALOR] = null;
            }
            break;

        case ELIMINAR_TIPO_DATO:
            datos.splice(indice, 1);
            break;

        case DATOS_TIPO_DE_DATO.primitivo:
            let valorPrimitivo = await preguntar.prompt(
                tp, "Ingresar el tipo de dato primitivo", 
                error.Quit("No se ingresó que tipo de dato primitivo"),
            );

            if (DATOS_LENGUAJES[lenguaje].multiplesTiposDatos) {
                datos[indice][DATO_VALOR] = valorPrimitivo;
            } else {
                datos[DATO_VALOR] = valorPrimitivo;
            }
            break;

        case `${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.primitivo}`:
            datos[indice][DATO_VALOR] = await preguntar.prompt(
                tp, "Modificar el tipo de dato primitivo", 
                error.Quit("No se ingresó que tipo de dato primitivo"),
            );
            break;

        case `${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.compuesto.tupla}`:
        case DATOS_TIPO_DE_DATO.compuesto.tupla:
            let tuplaPrevia = datosPrevios[indice][DATO_VALOR];

            let valorTupla = await crearPreguntas(
                tp, infoTupla.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDados, respuestaDada) => infoTupla.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoTupla.generarPreguntas(tp, datosDados, lenguaje), 
                "Ingresar la información de la tupla", tuplaPrevia
            );

            if (DATOS_LENGUAJES[lenguaje].multiplesTiposDatos) {
                datos[indice][DATO_VALOR] = valorTupla;
            } else {
                datos[DATO_VALOR] = valorTupla;
            }
            break;

        case `${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.compuesto.array}`:
        case DATOS_TIPO_DE_DATO.compuesto.array:
            let arrayPrevio = datosPrevios[indice][DATO_VALOR];

            let valorArray = await crearPreguntas(
                tp, infoArray.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDados, respuestaDada) => infoArray.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoArray.generarPreguntas(tp, datosDados, lenguaje), 
                "Ingresar la información del array", arrayPrevio
            );

            if (DATOS_LENGUAJES[lenguaje].multiplesTiposDatos) {
                datos[indice][DATO_VALOR] = valorArray;
            } else {
                datos[DATO_VALOR] = valorArray;
            }
            break;

        case `${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.compuesto.struct}`:
        case DATOS_TIPO_DE_DATO.compuesto.struct:
            let structPrevio = datosPrevios[indice][DATO_VALOR];

            let valorStruct = await crearPreguntas(
                tp, infoStruct.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDados, respuestaDada) => infoStruct.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoStruct.generarPreguntas(tp, datosDados, lenguaje), 
                "Ingresar la información de la estructura", structPrevio
            );

            if (DATOS_LENGUAJES[lenguaje].multiplesTiposDatos) {
                datos[indice][DATO_VALOR] = valorStruct;
            } else {
                datos[DATO_VALOR] = valorStruct;
            }
            break;

        case `${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.compuesto.generico}`:
        case DATOS_TIPO_DE_DATO.generico:
            let interfazPrevia = datosPrevios[indice][DATO_VALOR];

            let valorInterfaz = await crearPreguntas(
                tp, infoInterfaz.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDados, respuestaDada) => infoInterfaz.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoInterfaz.generarPreguntas(tp, datosDados, lenguaje), 
                "Ingresar la información de la interfaz", interfazPrevia
            );

            if (DATOS_LENGUAJES[lenguaje].multiplesTiposDatos) {
                datos[indice][DATO_VALOR] = valorInterfaz;
            } else {
                datos[DATO_VALOR] = valorInterfaz;
            }
            break;

        case ELIMINAR_VALOR:
            datos[indice][DATO_VALOR] = null;
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntasSimple(tp, datos, lenguaje = undefined) {
    const { SIMBOLOS, DATOS: { FUNCIONES: { tipoDeDato: { valor: DATO_VALOR, tipo: DATOS_TIPO_DE_DATO } } } } = tp.user.constantes();
    const infoStruct = tp.user.struct();
    const infoTupla = tp.user.tupla();
    const infoInterfaz = tp.user.interfaz();
    const infoArray = tp.user.array();

    let opciones = [], valores = [];

    opciones.push(DATOS_TIPO_DE_DATO.self);
    if (!datos[DATOS_TIPO_DE_DATO.self]) {
        valores.push(` ${SIMBOLOS.agregar} Tipo de dato`)

    } else {
        valores.push(` ${SIMBOLOS.modificar} Modificar el tipo de dato, donde era ${datos[DATOS_TIPO_DE_DATO.self]}`);

        switch (datos[DATOS_TIPO_DE_DATO.self]) {
            case DATOS_TIPO_DE_DATO.primitivo:
                opciones.push(DATOS_TIPO_DE_DATO.primitivo);
                valores.push(datos[DATO_VALOR]
                    ? ` ${SIMBOLOS.modificar} Modificar el tipo de dato primitivo, donde era ${datos[DATO_VALOR]}`
                    : ` ${SIMBOLOS.agregar} Tipo de dato primitivo`
                );
                break;

            case DATOS_TIPO_DE_DATO.compuesto.tupla:
                opciones.push(DATOS_TIPO_DE_DATO.compuesto.tupla);
                valores.push(infoTupla.esValido(tp, datos[DATO_VALOR], lenguaje)
                    ? ` ${SIMBOLOS.modificar} Modificar el dato de una tupla, donde era ${infoTupla.describir(tp, datos[DATO_VALOR], lenguaje).replaceAll("\n", "\n\t")}`
                    : ` ${SIMBOLOS.agregar} Datos de una tupla`
                );
                break;

            case DATOS_TIPO_DE_DATO.compuesto.array:
                opciones.push(DATOS_TIPO_DE_DATO.compuesto.array);
                valores.push(infoArray.esValido(tp, datos[DATO_VALOR], lenguaje)
                    ? ` ${SIMBOLOS.modificar} Modificar el dato de un array, donde era ${infoArray.describir(tp, datos[DATO_VALOR], lenguaje).replaceAll("\n", "\n\t")}`
                    : ` ${SIMBOLOS.agregar} Datos de un array`
                );
                break;

            case DATOS_TIPO_DE_DATO.compuesto.struct:
                opciones.push(DATOS_TIPO_DE_DATO.compuesto.struct);
                valores.push(infoStruct.esValido(tp, datos[DATO_VALOR], lenguaje)
                    ? ` ${SIMBOLOS.modificar} Modificar el dato de una estructra, donde era ${infoStruct.describir(tp, datos[DATO_VALOR], lenguaje).replaceAll("\n", "\n\t")}`
                    : ` ${SIMBOLOS.agregar} Datos de una estructura`
                );
                break;

            case DATOS_TIPO_DE_DATO.generico:
                opciones.push(DATOS_TIPO_DE_DATO.generico);
                valores.push(infoInterfaz.esValido(tp, datos[DATO_VALOR], lenguaje)
                    ? ` ${SIMBOLOS.modificar} Modificar el dato de un generico, donde era ${infoInterfaz.describir(tp, datos[DATO_VALOR], lenguaje).replaceAll("\n", "\n\t")}`
                    : ` ${SIMBOLOS.agregar} Datos de un generico`
                );
                break;
        }
    }

    return { opciones: opciones, valores: valores };
}

function generarPreguntasMultiple(tp, datos, lenguaje = undefined, opcional = false) {
    const { SIMBOLOS, DATOS: { FUNCIONES: { tipoDeDato: { valor: DATO_VALOR, tipo: DATOS_TIPO_DE_DATO } } } } = tp.user.constantes();
    const infoStruct = tp.user.struct();
    const infoTupla = tp.user.tupla();
    const infoInterfaz = tp.user.interfaz();
    const infoArray = tp.user.array();

    let opciones = [], valores = [];

    let textoOpcional = opcional ? `${SIMBOLOS.opcional} ` : "";

    if (!(datos && datos[DATOS_TIPO_DE_DATO.self])) {
        opciones.push(DATOS_TIPO_DE_DATO.self);
        valores.push(` ${SIMBOLOS.agregar} ${textoOpcional}Tipo de dato`)

    } else {
        opciones.push(MODIFICAR_TIPO_DATO);
        valores.push(` ${SIMBOLOS.modificar} Modificar el tipo de dato, donde era ${datos[DATOS_TIPO_DE_DATO.self]}`);

        opciones.push(ELIMINAR_TIPO_DATO);
        valores.push(` ${SIMBOLOS.sacar} Eliminar el tipo de dato, donde era ${datos[DATOS_TIPO_DE_DATO.self]}`);

        let descripcion;
        switch (datos[DATOS_TIPO_DE_DATO.self]) {
            case DATOS_TIPO_DE_DATO.primitivo:
                if (datos[DATO_VALOR]) {
                    descripcion = datos[DATO_VALOR];

                    opciones.push(`${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.primitivo}`);
                    valores.push(` ${SIMBOLOS.modificar} Modificar el tipo de dato primitivo, donde era ${descripcion}`);

                    opciones.push(ELIMINAR_VALOR);
                    valores.push(` ${SIMBOLOS.sacar} Eliminar el tipo de dato, donde era ${descripcion}`);

                } else {
                    opciones.push(DATOS_TIPO_DE_DATO.primitivo);
                    valores.push(` ${SIMBOLOS.agregar} ${textoOpcional}Tipo de dato primitivo`);
                }

                break;

            case DATOS_TIPO_DE_DATO.compuesto.tupla:
                if (infoTupla.esValido(tp, datos[DATO_VALOR], lenguaje)) {
                    descripcion = infoTupla.describir(tp, datos[DATO_VALOR], lenguaje)
                        .replaceAll("\n", "\n\t");

                    opciones.push(`${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.compuesto.tupla}`);
                    valores.push(` ${SIMBOLOS.modificar} Modificar el dato de una tupla, donde era ${descripcion}`);

                    opciones.push(ELIMINAR_VALOR);
                    valores.push(` ${SIMBOLOS.sacar} Eliminar el dato de una tupla, donde era ${descripcion}`);

                } else {
                    opciones.push(DATOS_TIPO_DE_DATO.compuesto.tupla);
                    valores.push(` ${SIMBOLOS.agregar} ${textoOpcional}Datos de una tupla`);
                }
                break;

            case DATOS_TIPO_DE_DATO.compuesto.array:
                if (infoArray.esValido(tp, datos[DATO_VALOR], lenguaje)) {
                    descripcion = infoArray.describir(tp, datos[DATO_VALOR], lenguaje)
                        .replaceAll("\n", "\n\t");

                    opciones.push(`${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.compuesto.array}`);
                    valores.push(` ${SIMBOLOS.modificar} Modificar el dato de un array, donde era ${descripcion}`);

                    opciones.push(ELIMINAR_VALOR);
                    valores.push(` ${SIMBOLOS.sacar} Eliminar el dato de un array, donde era ${descripcion}`);

                } else {
                    opciones.push(DATOS_TIPO_DE_DATO.compuesto.array);
                    valores.push(` ${SIMBOLOS.agregar} ${textoOpcional}Datos de un array`);
                }
                break;

            case DATOS_TIPO_DE_DATO.compuesto.struct:
                if (infoStruct.esValido(tp, datos[DATO_VALOR], lenguaje)) {
                    descripcion = infoStruct.describir(tp, datos[DATO_VALOR], lenguaje)
                        .replaceAll("\n", "\n\t");

                    opciones.push(`${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.compuesto.struct}`);
                    valores.push(` ${SIMBOLOS.modificar} Modificar el dato de una estructura, donde era ${descripcion}`);

                    opciones.push(ELIMINAR_VALOR);
                    valores.push(` ${SIMBOLOS.sacar} Eliminar el dato de una estructura, donde era ${descripcion}`);

                } else {
                    opciones.push(DATOS_TIPO_DE_DATO.compuesto.struct);
                    valores.push(` ${SIMBOLOS.agregar} ${textoOpcional}Datos de una estructura`);
                }
                break;

            case DATOS_TIPO_DE_DATO.generico:
                if (infoInterfaz.esValido(tp, datos[DATO_VALOR], lenguaje)) {
                    descripcion = infoInterfaz.describir(tp, datos[DATO_VALOR], lenguaje)
                        .replaceAll("\n", "\n\t");

                    opciones.push(`${MODIFICAR_VALOR}${DATOS_TIPO_DE_DATO.generico}`);
                    valores.push(` ${SIMBOLOS.modificar} Modificar el dato de un generico, donde era ${descripcion}`);

                    opciones.push(ELIMINAR_VALOR);
                    valores.push(` ${SIMBOLOS.sacar} Eliminar el dato de un un generico, donde era ${descripcion}`);

                } else {
                    opciones.push(DATOS_TIPO_DE_DATO.generico);
                    valores.push(` ${SIMBOLOS.agregar} ${textoOpcional}Datos de un generico`);
                }
                break;
        }
    }

    return { opciones: opciones, valores: valores };
}

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { SIMBOLOS, DATOS: { LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;

    let opciones = [], valores = [];

    if (DATOS_LENGUAJES[lenguaje].multiplesTiposDatos) {
        for (let [indice, tipoDeDato] of datos.entries()) {
            let { opciones: nuevasOpciones, valores: nuevosValores } = generarPreguntasMultiple(tp, tipoDeDato, lenguaje);

            opciones = opciones.concat(nuevasOpciones.map(opcion => `${opcion}-${indice}`));
            valores = valores.concat(nuevosValores);
        }

        let { opciones: nuevasOpciones, valores: nuevosValores } = generarPreguntasMultiple(tp, null, lenguaje, datos.length >= CANTIDAD_MINIMA);

        opciones = opciones.concat(nuevasOpciones.map(opcion => `${opcion}-${datos.length}`));
        valores = valores.concat(nuevosValores);

    } else {
        let { opciones: nuevasOpciones, valores: nuevosValores } = generarPreguntasSimple(tp, datos, lenguaje);

        opciones = nuevasOpciones;
        valores = nuevosValores;
    }

    if (esValido(tp, datos, lenguaje)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function esValido(tp, datos, lenguaje = undefined) {
    if (!datos) return false;
    const { 
        DATOS: { 
            FUNCIONES: { tipoDeDato: { valor: DATO_VALOR, tipo: DATOS_TIPO_DE_DATO } }, 
            LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
        }
    } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;
    const infoStruct = tp.user.struct();
    const infoTupla = tp.user.tupla();
    const infoInterfaz = tp.user.interfaz();
    const infoArray = tp.user.array();

    if (!(DATOS_LENGUAJES[lenguaje].multiplesTiposDatos)) {
        datos = [ datos ];
    }

    return datos.length >= CANTIDAD_MINIMA && datos.every(tipoDeDato => {
        switch (tipoDeDato[DATOS_TIPO_DE_DATO.self]) {
            case DATOS_TIPO_DE_DATO.primitivo:
                return tipoDeDato[DATO_VALOR];

            case DATOS_TIPO_DE_DATO.compuesto.tupla:
                return infoTupla.esValido(tp, tipoDeDato[DATO_VALOR], lenguaje);

            case DATOS_TIPO_DE_DATO.compuesto.array:
                return infoArray.esValido(tp, tipoDeDato[DATO_VALOR], lenguaje);

            case DATOS_TIPO_DE_DATO.compuesto.struct:
                return infoStruct.esValido(tp, tipoDeDato[DATO_VALOR], lenguaje);

            case DATOS_TIPO_DE_DATO.generico:
                return infoInterfaz.esValido(tp, tipoDeDato[DATO_VALOR], lenguaje);

            default: return false;
        }
    });
}

function describir(tp, datos, lenguaje = undefined) {
    if (!esValido(tp, datos, lenguaje)) return "";

    const { 
        DATOS: { 
            FUNCIONES: { tipoDeDato: { valor: DATO_VALOR, tipo: DATOS_TIPO_DE_DATO } },
            LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
        } 
    } = tp.user.constantes();
    const infoStruct = tp.user.struct();
    const infoTupla = tp.user.tupla();
    const infoInterfaz = tp.user.interfaz();
    const infoArray = tp.user.array();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;

    if (!(DATOS_LENGUAJES[lenguaje].multiplesTiposDatos)) {
        datos = [ datos ];
    }
    
    let descripciones = datos.map(tipoDeDato => {
        if (!(tipoDeDato[DATO_VALOR] && tipoDeDato[DATOS_TIPO_DE_DATO.self]))
            return "";

        switch (tipoDeDato[DATOS_TIPO_DE_DATO.self]) {
            case DATOS_TIPO_DE_DATO.primitivo:
                return tipoDeDato[DATO_VALOR];

            case DATOS_TIPO_DE_DATO.compuesto.tupla:
                return infoTupla.describir(tp, tipoDeDato[DATO_VALOR], lenguaje);

            case DATOS_TIPO_DE_DATO.compuesto.array:
                return infoArray.describir(tp, tipoDeDato[DATO_VALOR], lenguaje);

            case DATOS_TIPO_DE_DATO.compuesto.struct:
                return infoStruct.describir(tp, tipoDeDato[DATO_VALOR], lenguaje);

            case DATOS_TIPO_DE_DATO.generico:
                return infoInterfaz.describir(tp, tipoDeDato[DATO_VALOR], lenguaje);
        }
    });

    switch (lenguaje) {
        case LENGUAJES.python:
            return descripciones.length > 1
                ? `${descripciones.join(" | ")}`
                : descripciones.first();

        case LENGUAJES.rust:
            return descripciones.length > 1
                ? `(${descripciones.join(", ")})`
                : descripciones.first();

        case LENGUAJES.c:
            return descripciones.first();

        default:
            return descripciones.length > 1
                ? `(${descripciones.join(" | ")})`
                : descripciones.first();
    }
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const {
            DATOS: { 
                FUNCIONES: { tipoDeDato: DATOS_TIPO_DE_DATO }, 
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES },
            },
        } = tp.user.constantes();
        if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;

        let tipoDeDatosCantidad = DATOS_LENGUAJES[lenguaje].multiplesTiposDatos
            ? TIPOS_DE_DEFAULT.array
            : TIPOS_DE_DEFAULT.simple;

        return crearFuncion(tipoDeDatosCantidad, () => {
            return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                [DATOS_TIPO_DE_DATO.tipo.self]: TIPOS_DE_DEFAULT.simple,
                [DATOS_TIPO_DE_DATO.valor]: TIPOS_DE_DEFAULT.simple,
            }));
        });
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
});