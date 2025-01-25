const MODIFICAR_METODO = "modificar";
const ELIMINAR_METODO = "eliminar";

const CANTIDAD_MINIMA = 1;

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuestaDada, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { interfaz: DATOS_INTERFAZ } } } = tp.user.constantes();
    const infoFuncion = tp.user.funcion();
    const crearPreguntas = tp.user.crearPreguntas;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let salir = false;
    let [ respuesta, indice ] = respuestaDada.split("-");

    switch (respuesta) {
        case DATOS_INTERFAZ.nombre:
            datos[DATOS_INTERFAZ.nombre] = await preguntar.prompt(
                tp, datos[DATOS_INTERFAZ.nombre]
                    ? `Nuevo nombre de la interfaz, donde antes era ${datos[DATOS_INTERFAZ.nombre]}`
                    : "Nombre de la interfaz",
                error.Quit("No se ingresó el nombre de la interfaz")
            );
            break;

        case DATOS_INTERFAZ.metodos:
            let nuevoMetodo = await crearPreguntas(
                tp, infoFuncion.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDados, respuestaDada) => infoFuncion.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoFuncion.generarPreguntas(tp, datosDados, lenguaje), 
                "Ingresar un método para la interfaz"
            );
            datos[DATOS_INTERFAZ.metodos].push(nuevoMetodo);
            break;
        
        case MODIFICAR_METODO:
            datos[DATOS_INTERFAZ.metodos][indice] = await crearPreguntas(
                tp, infoFuncion.obtenerDefault.bind(null, tp, lenguaje),
                (tp, datosDados, respuestaDada) => infoFuncion.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoFuncion.generarPreguntas(tp, datosDados, lenguaje), 
                "Modificar un método para la interfaz", datos[DATOS_INTERFAZ.metodos][indice]
            );
            break;

        case ELIMINAR_METODO:
            datos.splice(indice, 1);
            break;

        case SALIR:
            salir = true;
            break;
    }

    return salir;

}

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { SIMBOLOS, DATOS: { FUNCIONES: { interfaz: DATOS_INTERFAZ } } } = tp.user.constantes();
    const infoFuncion = tp.user.funcion();
    let opciones = [], valores = [];

    opciones.push(DATOS_INTERFAZ.nombre);
    valores.push(datos[DATOS_INTERFAZ.nombre]
        ? ` ${SIMBOLOS.modificar} Modificar el nombre de la interfaz, donde era ${datos[DATOS_INTERFAZ.nombre]}`
        : ` ${SIMBOLOS.agregar} Nombre de la interfaz`
    )

    for (let [indice, metodo] of datos[DATOS_INTERFAZ.metodos].entries()) {
        opciones.push(`${MODIFICAR_METODO}-${indice}`);
        valores.push(`️ ${SIMBOLOS.modificar} Modificar el método, donde es ${infoFuncion.describir(tp, metodo, lenguaje).replaceAll("\n", "\n\t")}`);

        opciones.push(`${ELIMINAR_METODO}-${indice}`);
        valores.push(`️ ${SIMBOLOS.sacar} Eliminar el método, donde es ${infoFuncion.describir(tp, metodo, lenguaje).replaceAll("\n", "\n\t")}`);
    }

    if (datos[DATOS_INTERFAZ.metodos].length >= CANTIDAD_MINIMA) {
        opciones.push(DATOS_INTERFAZ.metodos);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Método`);

    } else {
        opciones.push(DATOS_INTERFAZ.metodos);
        valores.push(` ${SIMBOLOS.agregar} Método`);
    }

    if (esValido(tp, datos, lenguaje)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function esValido(tp, datos, lenguaje = undefined) {
    if (!datos) return false;

    const { DATOS: { FUNCIONES: { interfaz: DATOS_INTERFAZ } } } = tp.user.constantes();
    const infoFuncion = tp.user.funcion();

    return datos[DATOS_INTERFAZ.nombre] && datos[DATOS_INTERFAZ.metodos].length >= CANTIDAD_MINIMA 
        && datos[DATOS_INTERFAZ.metodos].every(metodo => infoFuncion.esValido(tp, metodo, lenguaje))
}

function describir(tp, datos, lenguaje = undefined) {
    if (!esValido(tp, datos, lenguaje)) return "";

    const { DATOS: { 
        FUNCIONES: { interfaz: DATOS_INTERFAZ },
        LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
    } } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;
    const infoFuncion = tp.user.funcion();

    if (!(DATOS_LENGUAJES[lenguaje].genericos)) throw Error(`El lenguaje ${lenguaje} no tiene genericos`);
    let metodos = datos[DATOS_INTERFAZ.metodos]
        .map(metodo => infoFuncion.describir(tp, metodo, lenguaje));

    switch (lenguaje) {
        case LENGUAJES.rust:
            return `trait ${datos[DATOS_INTERFAZ.nombre]} {\n${metodos.map(metodo => `\t${metodo};\n`)}}`;

        default:
            return `interface ${datos[DATOS_INTERFAZ.nombre]} then \n${metodos.map(metodo => `\t${metodo}\n`)}end`;
    }
}

function descripcionReducida(tp, datos, lenguaje = undefined) {
    if (!esValido(tp, datos, lenguaje)) return "";

    const { DATOS: { 
        FUNCIONES: { interfaz: DATOS_INTERFAZ },
        LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
    } } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;

    if (!(DATOS_LENGUAJES[lenguaje].genericos)) throw Error(`El lenguaje ${lenguaje} no tiene genericos`);

    return datos[DATOS_INTERFAZ].nombre;
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { FUNCIONES: { interfaz: DATOS_INTERFAZ } } } = tp.user.constantes();
        const infoFuncion = tp.user.funcion();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_INTERFAZ.nombre]: TIPOS_DE_DEFAULT.simple,
            [DATOS_INTERFAZ.metodos]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () => infoFuncion.obtenerDefault(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion)
            ),
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    descripcionReducida: descripcionReducida,
    esValido: esValido,
});