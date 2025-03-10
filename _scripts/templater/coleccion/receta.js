class Receta {
    constructor() {}

    async actualizarDatos(respuesta, generarPreguntas, generarError) {}

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        return { opciones, valores };
    }

    esValido() {
        return true;
    }

    generarRepresentacion() {
        return {};
    }
}

async function crearReceta(tp) {
    const { 
        FORMATO_DIA, SECCIONES, ETAPAS,
        DATOS: { ARCHIVO: DATOS_ARCHIVO },
        DIRECTORIOS: { coleccion: DIR_COLECCION },
        TAGS: { coleccion: { recetas: TAGS_RECETAS, ...TAGS_COLECCION }, nota: TAGS_NOTA },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();

    let receta = new Receta();
    await preguntar.formulario(tp, receta, "Ingresar la información de la receta");

    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
            [DATOS_ARCHIVO.tags]: [
                `${TAGS_COLECCION.self}/${TAGS_RECETAS.self}/${TAGS_RECETAS.receta}`,
                `${TAGS_RECETAS.self}/${TAGS_RECETAS.receta}`,
                `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
            ],
            ...receta.generarRepresentacion(),
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_COLECCION.recetas}`,
        titulo: "temp receta",
        texto: `${SECCIONES.seccion(SECCIONES.definicion)}\n---\n`
            + "<% tp.file.cursor() %>\n\n",
    }
}

module.exports = () => ({
    crear: crearReceta,
    clase: (...argumentos) => new Receta(...argumentos),
});