async function generar(tp) {
    const { DIRECTORIOS, REFERENCIAS } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    try {
        let tipoCita = await preguntar.suggester(
            tp, ["Citar libro", "Citar curso online", "Citar un paper", "Citar un video de Youtube", "Citar una pagína web", "Citar una página de wikipedia"],
            [ REFERENCIAS.libro, REFERENCIAS.curso, REFERENCIAS.paper, REFERENCIAS.youtube, REFERENCIAS.web, REFERENCIAS.wikipedia ],
            "Que se va a querer referenciar?",
            error.Prompt("No se ingresó lo que se quiere citar")
        );

        let nombre = "Untitle", directorio;
        
        switch (tipoCita) {
            case REFERENCIAS.libro:
                directorio = `${DIRECTORIOS.coleccion.self}/${DIRECTORIOS.coleccion.libros}`;
                break;

            case REFERENCIAS.curso:
                directorio = DIRECTORIOS.curso;
                break;

            case REFERENCIAS.paper:
                directorio = `${DIRECTORIOS.coleccion.self}/${DIRECTORIOS.coleccion.papers}`;
                break;

            case REFERENCIAS.youtube:
            case REFERENCIAS.web:
            case REFERENCIAS.wikipedia:
                nombre = tipoCita;
                directorio = DIRECTORIOS.referencias;
                break;

            default:
                throw error.Prompt("No se puede referenciar eso");
        }

        if (!nombre || !directorio) {
            let mensaje = "Hubo un error en la creación de una referencia\n";
            mensaje += `Nombre: ${nombre ? "Valido" : "Invalido"}\n`;
            mensaje += `Directorio: ${directorio ? "Valido" : "Invalido"}\n`;

            throw error.Prompt(mensaje);
        }

        let template = tp.file.find_tfile("Nota - Template");
        directorio = app.vault.getAbstractFileByPath(directorio);

        return await tp.file.create_new(template, nombre, false, directorio);

    } catch ({ name:nombre, message: mensaje }) {
        console.log(nombre, mensaje);
        new Notice(mensaje);
        return;
    }
}

function obtenerReferencia(tp, tipoCita) {
    const REFERENCIAS = tp.user.constantes().REFERENCIAS;
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
    const { TAGS, REFERENCIAS, DATOS_REFERENCIA } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    return dv.pages(`#${TAGS.referencias}`)
        .flatMap(archivo => {
            let referencia = obtenerReferencia(tp, archivo[DATOS_REFERENCIA.tipoCita]);

            let datos = referencia.obtenerDefault();
            for (let [key, _] of Object.entries(datos)) {
                if (key in archivo && archivo[key]) {
                    datos[key] = archivo[key];
                }
            }
            datos[DATOS_REFERENCIA.tipoCita] = archivo[DATOS_REFERENCIA.tipoCita];
            datos[DATOS_REFERENCIA.numReferencia] = archivo[DATOS_REFERENCIA.numReferencia];

            let resultado = [ datos ];
            switch (archivo.tipoCita) {
                case REFERENCIAS.libro:
                    if (!datos.capitulos || datos.capitulos.length == 0) 
                        break;

                    for (let capitulo of datos.capitulos) {
                        capitulo[DATOS_REFERENCIA.tipoCita] = REFERENCIAS.capituloLibro;
                        capitulo[REFERENCIAS.libro] = datos;
                        resultado.push(capitulo);
                    }
                    break;
            }
            
            return resultado;
        });
}

function describir(tp, datos) {
    let DATOS_REFERENCIA = tp.user.constantes().DATOS_REFERENCIA;
    let referencia = obtenerReferencia(tp, datos[DATOS_REFERENCIA.tipoCita]);
    return `[${datos[DATOS_REFERENCIA.numReferencia]}] ${referencia.describir(tp, datos)}`;
}

async function editar(tp, tipoCita, seguidorRef, datosActuales) {
    let referencia = obtenerReferencia(tp, tipoCita);

    return await tp.user.crearPreguntas(
        tp, referencia.obtenerDefault,
        (tp, datos, respuesta) => referencia.actualizarDatos(tp, datos, respuesta, seguidorRef),
        referencia.generarPreguntas,
        "Completar para poder referenciar",
        datosActuales,
    );
}

module.exports = () => ({
    citar: async (tp, tipoCita, seguidorRef) => await editar(tp, tipoCita, seguidorRef, null),
    editar: editar,
    generar: generar,
    describir: describir,
    obtenerReferencias: obtenerReferencias,
});
