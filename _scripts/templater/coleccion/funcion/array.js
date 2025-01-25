const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { array: DATOS_ARRAY } } } = tp.user.constantes();
    const infoTipoDeDato = tp.user.tipoDeDato();

    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;

    switch (respuesta) {
        case DATOS_ARRAY.tipoDeDato:
            datos[DATOS_ARRAY.tipoDeDato] = await tp.user.crearPreguntas(
                tp, infoTipoDeDato.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDados, respuestaDada) => infoTipoDeDato.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoTipoDeDato.generarPreguntas(tp, datosDados, lenguaje), 
                "Ingresar el tipo de dato del array", datos[DATOS_ARRAY.tipoDeDato]
            )
            break;

        case DATOS_ARRAY.cantidad:
            let cantidad = await preguntar.numero(
                tp, "Cantidad de elementos del array (tiene que ser >0)", 
                error.Quit("No se ingresó un número para la cantidad del array")
            );
            if (cantidad <= 0) throw error.Quit("Se ingresó un número negativo o cero");

            datos[DATOS_ARRAY.cantidad] = cantidad;
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
            FUNCIONES: { array: DATOS_ARRAY }, LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
        }
    } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;
    const infoTipoDeDato = tp.user.tipoDeDato();

    let opciones = [], valores = [];
    
    opciones.push(DATOS_ARRAY.tipoDeDato);
    valores.push(infoTipoDeDato.esValido(tp, datos[DATOS_ARRAY.tipoDeDato], lenguaje)
        ? ` ${SIMBOLOS.modificar} Modificar la cantidad que tiene el array, donde era ${infoTipoDeDato.describir(tp, datos[DATOS_ARRAY.tipoDeDato], lenguaje).replaceAll("\n", "\n\t")}`
        : ` ${SIMBOLOS.agregar} Tipo de dato del array`
    );

    if (DATOS_LENGUAJES[lenguaje].arrayConCantidad) {
        opciones.push(DATOS_ARRAY.cantidad);
        valores.push(datos[DATOS_ARRAY.cantidad]
            ? ` ${SIMBOLOS.modificar} Modificar la cantidad que tiene el array, donde era ${datos[DATOS_ARRAY.cantidad]}`
            : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Cantidad de elementos del array`
        );
    }

    if (esValido(tp, datos, lenguaje)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function esValido(tp, datos, lenguaje = undefined) {
    if (!datos) return false;

    const { DATOS: { FUNCIONES: { array: DATOS_ARRAY } }} = tp.user.constantes();
    return tp.user.tipoDeDato().esValido(tp, datos[DATOS_ARRAY.tipoDeDato], lenguaje);
}

function describir(tp, datos, lenguaje = undefined) {
    if (!esValido(tp, datos, lenguaje)) return "";

    const { 
        DATOS: { 
            FUNCIONES: { array: DATOS_ARRAY }, 
            LENGUAJE: { lenguajes: LENGUAJES } 
        } 
    } = tp.user.constantes();
    const infoTipoDeDato = tp.user.tipoDeDato();

    let tipoDeDato = infoTipoDeDato.describir(tp, datos[DATOS_ARRAY.tipoDeDato], lenguaje);
    let cantidad = datos[DATOS_ARRAY.cantidad];

    switch (lenguaje) {
        case LENGUAJES.python:
            return `list[${tipoDeDato}]`;

        case LENGUAJES.rust:
            return (!cantidad || cantidad <= 0)
                ? `[${tipoDeDato}]`
                : `[${tipoDeDato}; ${cantidad}]`;

        case LENGUAJES.c:
            return (!cantidad || cantidad <= 0)
                ? `${tipoDeDato}[]`
                : `${tipoDeDato}[${cantidad}]`;

        default:
            return (!cantidad || cantidad <= 0)
                ? `${tipoDeDato}[]`
                : `${tipoDeDato}[${cantidad}]`;
    }
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { FUNCIONES: { array: DATOS_ARRAY } } } = tp.user.constantes();
        const infoTipoDeDato = tp.user.tipoDeDato();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_ARRAY.tipoDeDato]: infoTipoDeDato.obtenerDefault(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion),
            [DATOS_ARRAY.cantidad]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
});