async function generar(tp) {
    const { REFERENCIAS } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const crearArchivo = tp.user.archivo();

    try {
        let tipoCita = await preguntar.suggester(
            tp, ["Citar libro", "Citar curso online", "Citar un paper", "Citar un video de Youtube", "Citar una pagína web", "Citar una página de wikipedia"],
            [ REFERENCIAS.libro, REFERENCIAS.curso, REFERENCIAS.paper, REFERENCIAS.youtube, REFERENCIAS.web, REFERENCIAS.wikipedia ],
            "Que se va a querer referenciar?",
            error.Prompt("No se ingresó lo que se quiere citar")
        );

        switch (tipoCita) {
            case REFERENCIAS.youtube:
            case REFERENCIAS.web:
            case REFERENCIAS.wikipedia:
            case REFERENCIAS.libro:
            case REFERENCIAS.curso:
            case REFERENCIAS.paper:
                return await crearArchivo.crear(tp, () => crearReferencia(tp, tipoCita));

            case REFERENCIAS.libro:
                throw("No existe la forma de generar un libro");

            case REFERENCIAS.curso:
                throw("No existe la forma de generar un curso");

            case REFERENCIAS.paper:
                throw("No existe la forma de generar un paper");
        }

        let mensaje = "Hubo un error en la creación de una referencia\n";
        throw error.Prompt(mensaje);

    } catch ({ name:nombre, message: mensaje }) {
        console.log(nombre, mensaje);
        new Notice(mensaje);
        return;
    }
}

function obtenerReferencia(tp, tipoCita) {
    const { REFERENCIAS } = tp.user.constantes();
    const error = tp.user.error();

    let referencia;
    switch (tipoCita) {
        case REFERENCIAS.libro: referencia = tp.user.libro(); break;
        case REFERENCIAS.capituloLibro: referencia = tp.user.capituloLibro(); break;
        case REFERENCIAS.curso: referencia = tp.user.curso(); break;
        case REFERENCIAS.temaCurso: referencia = tp.user.temaCurso(); break;
        case REFERENCIAS.paper: referencia = tp.user.paper(); break;
        case REFERENCIAS.youtube: referencia = tp.user.youtube(); break;
        case REFERENCIAS.web: referencia = tp.user.web(); break;
        case REFERENCIAS.wikipedia: referencia = tp.user.wiki(); break;

        default:
            throw error.Quit(`El tipo de cita ${tipoCita} no existe todavia`);
    }

    return referencia;
}

function obtenerReferencias(tp) {
    const { 
        TAGS, REFERENCIAS, DATOS: { REFERENCIAS: { tipoCita: TIPO_CITA, libro: DATOS_LIBRO } } 
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    return dv.pages(`#${TAGS.referencias}`)
        .flatMap(archivo => {
            let resultado = [ archivo ];
            switch (archivo[TIPO_CITA]) {
                case REFERENCIAS.libro:
                    if (!archivo[DATOS_LIBRO.capitulo] || archivo[DATOS_LIBRO.capitulo].length == 0) 
                        break;

                    for (let capitulo of archivo[DATOS_LIBRO.capitulo]) {
                        capitulo[TIPO_CITA] = REFERENCIAS.capituloLibro;
                        capitulo[REFERENCIAS.libro] = archivo;
                        resultado.push(capitulo);
                    }
                    break;
            }
            return resultado;
        });
}

function describir(tp, datos) {
    let { DATOS: { REFERENCIAS } } = tp.user.constantes();
    let referencia = obtenerReferencia(tp, datos[REFERENCIAS.tipoCita]);
    return `[${datos[REFERENCIAS.numReferencia]}] ${referencia.describir(tp, datos)}`;
}

async function editar(tp, tipoCita, seguidorRef, datosActuales) {
    let referencia = obtenerReferencia(tp, tipoCita);

    return await tp.user.crearPreguntas(
        tp, referencia.obtenerDefault.bind(null, tp),
        (tp, datos, respuesta) => referencia.actualizarDatos(tp, datos, respuesta, seguidorRef),
        referencia.generarPreguntas,
        "Completar para poder referenciar",
        datosActuales,
    );
}

function archivoReferencia(tp, numReferenciaBuscado) {
    const { 
        TAGS, REFERENCIAS, 
        DATOS: { REFERENCIAS: { tipoCita: TIPO_CITA, numReferencia: NUM_REFERENCIA, libro: DATOS_LIBRO } } 
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    return dv.pages(`#${TAGS.referencias}`)
        .flatMap(archivo => {
            let referencia = obtenerReferencia(tp, archivo[TIPO_CITA]);

            let datos = referencia.obtenerDefault(tp);
            for (let [key, _] of Object.entries(datos)) {
                if (key in archivo && archivo[key]) {
                    datos[key] = archivo[key];
                }
            }

            let resultado = [ { archivo: archivo, numReferencia: archivo[NUM_REFERENCIA] } ];
            switch (archivo[TIPO_CITA]) {
                case REFERENCIAS.libro:
                    if (!datos[DATOS_LIBRO.capitulo] || datos[DATOS_LIBRO.capitulo].length == 0) 
                        break;

                    for (let capitulo of datos[DATOS_LIBRO.capitulo]) {
                        resultado.push({ archivo: archivo, numReferencia: capitulo[NUM_REFERENCIA] });
                    }
                    break;
            }
            
            return resultado;
        })
        .find(({ numReferencia }) => numReferenciaBuscado == numReferencia)
        .archivo;
}

async function crearReferencia(tp, tipoCita) {
    const { 
        FORMATO_DIA, TAGS, DIRECTORIOS,
        DATOS: { ARCHIVO: DATOS_ARCHIVOS, REFERENCIAS: DATOS_REFERENCIAS } 
    } = tp.user.constantes();

    let seguidorRef = tp.user.seguidorReferencias().new();
    let numReferencia = seguidorRef.conseguirReferencia();

    let datos = await editar(tp, tipoCita, seguidorRef, null);

    return {
        metadata: {
            ...datos,
            [DATOS_ARCHIVOS.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_REFERENCIAS.tipoCita]: tipoCita,
            [DATOS_REFERENCIAS.numReferencia]: numReferencia,
            [DATOS_ARCHIVOS.tags]: [ `${TAGS.referencias}/${tp.user.tagPorNombre(tipoCita.toLowerCase())}` ],
        },
        carpeta: DIRECTORIOS.referencias,
        titulo: `${numReferencia} - ${tipoCita}`,
        texto: "",
    };
}

module.exports = () => ({
    citar: async (tp, tipoCita, seguidorRef) => await editar(tp, tipoCita, seguidorRef, null),
    editar: editar,
    generar: generar,
    describir: describir,
    obtenerReferencias: obtenerReferencias,
    archivoReferencia: archivoReferencia,
    crear: {
        referenciaSimple: crearReferencia,
    },
});
