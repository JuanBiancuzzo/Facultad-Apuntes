const MODIFICAR_CAMPO = "modificar campo";
const ELIMINAR_CAMPO = "eliminar campo";

const SALIR = "salir";

async function actualizarDatos(tp, datos, respuesta, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { struct: DATOS_STRUCT } } } = tp.user.constantes();

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

        case MODIFICAR_CAMPO:
            indice = separacion[1];

        case DATOS_STRUCT.campos: 
            let campoPrevio;
            if (indice) campoPrevio = datos[DATOS_STRUCT.campos][indice];

            const infoParametro = tp.user.parametro();
            let campo = await tp.user.crearPreguntas(
                tp, infoParametro.obtenerDefault.bind(null, tp, lenguaje), 
                (tp, datosDados, respuestaDada) => infoParametro.actualizarDatos(tp, datosDados, respuestaDada, lenguaje), 
                (tp, datosDados) => infoParametro.generarPreguntas(tp, datosDados, lenguaje), 
                "Ingresar los datos del campo", campoPrevio
            );

            if (indice) {
                datos[DATOS_STRUCT.campos][indice] = campo; 
            } else {
                datos[DATOS_STRUCT.campos].push(campo);
            }
            break;

        case ELIMINAR_CAMPO:
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

function generarPreguntas(tp, datos, lenguaje = undefined) {
    const { 
        SIMBOLOS, DATOS: { FUNCIONES: { struct: DATOS_STRUCT }, LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } 
    } = tp.user.constantes();
    if (!(lenguaje in LENGUAJES)) lenguaje = LENGUAJES.default;

    const infoParametro = tp.user.parametro();
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
        opciones.push(`${MODIFICAR_CAMPO}-${indice}`);
        valores.push(`️ ${SIMBOLOS.modificar} Modificar el campos, donde es ${infoParametro.describir(tp, parametro, lenguaje)}`);
    }

    if (datos[DATOS_STRUCT.campos].length > 0) {
        let ultimoParametro = datos[DATOS_STRUCT.campos].last();
        opciones.push(ELIMINAR_CAMPO);
        valores.push(` ${SIMBOLOS.sacar} Eliminar el campo, donde es ${infoParametro.describir(tp, ultimoParametro, lenguaje)}`);

        opciones.push(DATOS_STRUCT.campos);
        valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Campo`);

    } else {
        opciones.push(DATOS_STRUCT.campos);
        valores.push(` ${SIMBOLOS.agregar} Campo`);
    }

    if (DATOS_LENGUAJES[lenguaje].structHerencia) {
        opciones.push(DATOS_STRUCT.herede);
        valores.push(datos[DATOS_STRUCT.herede]
            ? ` ${SIMBOLOS.modificar} Modificar la estructura de la que herede, donde era ${datos[DATOS_STRUCT.herede]}`
            : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Estructura de la que herede`
        );
    }

    if (esValido(tp, datos)) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}

function describir(tp, datos, lenguaje = undefined) {
    const { 
        DATOS: { FUNCIONES: { struct: DATOS_STRUCT }, LENGUAJE: { lenguajes: LENGUAJES } },
    } = tp.user.constantes();
    const infoParametro = tp.user.parametro();

    let nombre = datos[DATOS_STRUCT.nombreStruct];
    let herencia = datos[DATOS_STRUCT.herede];
    let parametros = datos[DATOS_STRUCT.campos]
        .map(param => infoParametro.describir(tp, param, lenguaje));

    switch (lenguaje) {
        case LENGUAJES.python:
            return `class ${nombre}${herencia ? `(${herencia})` : ""}:\n\t${parametros.join("\n\t")}`;

        case LENGUAJES.c:
            return `struct ${nombre} { \n\t${parametros.join(";\n\t")} \n };`;

        default:
            return `struct ${nombre}${herencia ? ` :: ${herencia}` : ""} then\n\t${parametros.join("\n\t")}\nend`;
    }
}

function esValido(tp, datos, lenguaje = undefined) {
    const { DATOS: { FUNCIONES: { struct: DATOS_STRUCT } } } = tp.user.constantes();
    const DATOS_SIMPLES = [DATOS_STRUCT.nombreStruct, DATOS_STRUCT.descripcion];

    return datos[DATOS_STRUCT.campos].length > 0 && DATOS_SIMPLES.every(key => datos[key]);
}

module.exports = () => ({
    obtenerDefault: (tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion) => {
        const { DATOS: { FUNCIONES: { struct: DATOS_STRUCT } } } = tp.user.constantes();

        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [DATOS_STRUCT.nombreStruct]: TIPOS_DE_DEFAULT.simple,
            [DATOS_STRUCT.descripcion]: TIPOS_DE_DEFAULT.simple,
            [DATOS_STRUCT.campos]: crearFuncion(
                TIPOS_DE_DEFAULT.array,
                () => tp.user.parametro().obtenerDefault(tp, lenguaje, TIPOS_DE_DEFAULT, crearFuncion)
            ),
            [DATOS_STRUCT.herede]: TIPOS_DE_DEFAULT.simple,
        }));
    },
    actualizarDatos: actualizarDatos,
    generarPreguntas: generarPreguntas,
    describir: describir,
    esValido: esValido,
});