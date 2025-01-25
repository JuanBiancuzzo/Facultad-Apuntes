const AGREGAR = "agregar";
const MODIFICAR = "modificar";
const ELIMINAR = "eliminar";

const CANTIDAD_MINIMA = 2;

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuestaDada, lenguaje = undefined) {
    const infoTipoDeDato = tp.user.tipoDeDato();
    const crearPreguntas = tp.user.crearPreguntas;

    let salir = false;
    let [ respuesta, indice ] = respuestaDada.split("-");

    switch(respuesta) {
        case AGREGAR:
            let nuevoTipoDeDato = await crearPreguntas(
                tp, infoTipoDeDato.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDados, respuestaDada) => infoTipoDeDato.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoTipoDeDato.generarPreguntas(tp, datosDados, lenguaje), 
                "Ingresar el tipo de dato de la tupla" 
            );
            datos.push(nuevoTipoDeDato);
            break;

        case MODIFICAR:
            datos[indice] = await crearPreguntas(
                tp, infoTipoDeDato.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDados, respuestaDada) => infoTipoDeDato.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoTipoDeDato.generarPreguntas(tp, datosDados, lenguaje), 
                "Modificar el tipo de dato de la tupla", datos[indice]
            );
            break;

        case ELIMINAR:
            datos.splice(indice, 1);
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { SIMBOLOS } = tp.user.constantes();
    const infoTipoDeDato = tp.user.tipoDeDato();
    let opciones = [], valores = [];

    for (let [indice, tipoDeDato] of datos.entries()) {
        opciones.push(`${MODIFICAR}-${indice}`);
        valores.push(`️ ${SIMBOLOS.modificar} Modificar el tipo de dato, donde es ${infoTipoDeDato.describir(tp, tipoDeDato, lenguaje).replaceAll("\n", "\n\t")}`);

        opciones.push(`${ELIMINAR}-${indice}`);
        valores.push(`️ ${SIMBOLOS.sacar} Eliminar el tipo de dato, donde es ${infoTipoDeDato.describir(tp, tipoDeDato, lenguaje).replaceAll("\n", "\n\t")}`);
    }

    if (datos.length >= CANTIDAD_MINIMA) {
        opciones.push(AGREGAR);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Tipo de dato`);

    } else {
        opciones.push(AGREGAR);
        valores.push(` ${SIMBOLOS.agregar} Tipo de dato`);
    }

    if (esValido(tp, datos, lenguaje)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function esValido(tp, datos, lenguaje = undefined) {
    if (!datos) return false;

    const { DATOS: { LENGUAJE: { lenguajes: LENGUAJES } } } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;
    const infoTipoDeDato = tp.user.tipoDeDato();

    return datos.length >= CANTIDAD_MINIMA && datos.every(tipoDeDato => infoTipoDeDato.esValido(tp, tipoDeDato, lenguaje));
}

function describir(tp, datos, lenguaje = undefined) {
    if (!esValido(tp, datos, lenguaje)) return "";

    const { DATOS: { LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } } = tp.user.constantes();
    const infoTipoDeDato = tp.user.tipoDeDato();

    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;
    if (!(DATOS_LENGUAJES[lenguaje].tieneTupla)) throw Error(`El lenguaje ${lenguaje} no debería tener tuplas`);

    let tiposDeDato = datos.map(tipoDeDato => infoTipoDeDato.describir(tp, tipoDeDato, lenguaje));

    switch (lenguaje) {
        case LENGUAJES.python:
            return `tuple[${tiposDeDato.join(", ")}]`;

        case LENGUAJES.rust:
            return `(${tiposDeDato.join(", ")})`;

        default:
            return `[${tiposDeDato.join(", ")}]`;
    }
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const infoTipoDeDato = tp.user.tipoDeDato();

        return crearFuncion(
            TIPOS_DE_DEFAULT.array,
            () => infoTipoDeDato.obtenerDefault(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion)
        );
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
});