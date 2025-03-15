class Libreria {
    
    obtenerModulosDisponibles() {

    }

    generarRepresentacion() {

    }

    descripcion() {

    }
}

async function crearLibreria(tp, lenguaje, libreria) {
    const { 
        TEMPLATE: { coleccion: TEMPLATE_COLECCION }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION },
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES }, investigacion: TAGS_INVESTIGACION  }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES, INVESTIGACION: DATOS_INVESTIGACION, LENGUAJE: DATOS_LENGUAJE },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const dv = app.plugins.plugins.dataview.api;

    let tagPath = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[lenguaje]}`;
    let tagFuncion = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${tagFuncion}/${TAGS_FUNCIONES.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_FUNCIONES.lenguaje.temaInvestigacion].path);

    let tags = [`${tagPath}/${tagPorNombre(libreria)}`, `${tagFuncion}/${TAGS_FUNCIONES.libreria}`];
    if (dvLenguaje) {
        let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
            .map(tag => `${tag}/${TAGS_FUNCIONES.lenguajes[lenguaje]}/${tagPorNombre(`${libreria}`)}`);
        
        tags.push(`${TAGS_INVESTIGACION.self}/${TAGS_INVESTIGACION.indice}`);
        tags = tags.concat(tagsInvestigacion);
    }

    return {
        metadata: {
            [DATOS_FUNCIONES.libreria.tags]: tags,
            [DATOS_FUNCIONES.libreria.nombre]: libreria,
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_COLECCION.funciones.self}/${DIR_COLECCION.funciones[keyLenguaje]}/${libreria}`,
        titulo: DATOS_FUNCIONES.libreria.obtenerTitulo(DATOS_LENGUAJE[lenguaje].nombre, libreria),
        texto: await tp.file.include(`[[${TEMPLATE_COLECCION.funciones.libreria}]]`),
    };
}

module.exports = () => ({
    clase: () => new Libreria(),
    crear: crearLibreria,
});