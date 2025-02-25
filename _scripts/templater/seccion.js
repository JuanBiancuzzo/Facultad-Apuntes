/**
 * @param {*} tp Objeto representante del plugin Templater
 * @param {string} tipo Un string caracteristico del proceso que se quiere hacer 
 * @returns {(tp, argumentos: array|undefined) => { metadata: Object, carpeta: string, titulo: string, texto: string }} Se devuelve un diccionario con la metadata del archivo y el texto del archivo en sí
 */
async function obtenerCreacion(tp, tipo) {
    const error = tp.user.error();
    const { funciones: SECCION_FUNCIONES, bloqueMatematica: SECCION_MATEMATICA, ...SECCIONES } = tp.user.constantes();

    switch (tipo) {
        case SECCIONES.materia: 
            return;
        case SECCIONES.resumenMateria: 
            return;
        case SECCIONES.curso: 
            return;
        case SECCIONES.resumenCurso: 
            return;
        case SECCIONES.investigacion: 
            return;
        case SECCIONES.proyectoPractico: 
            return;
        case SECCIONES.proyectoInvestigacion: 
            return;
        case SECCIONES.juego: 
            return;

        // Colecciones
        //  * Funciones
        case SECCION_FUNCIONES.libreria: 
            return tp.user.libreriaFunciones().crear.libreria;
        case SECCION_FUNCIONES.modulo: 
            return tp.user.libreriaFunciones().crear.modulo;

        //  * Bloque matemática
        case SECCION_MATEMATICA.tema: 
            return tp.user.bloqueMatematica().crear.tema;
        case SECCION_MATEMATICA.subtema: 
            return tp.user.bloqueMatematica().crear.subtema;
    }

    throw error.Quit("No existe ese proceso");
}

module.exports = () => ({
    obtenerCreacion,
    tagsSeccion: (tp) => {
        const { 
            TAGS: { 
                investigacion: TAGS_INVESTIGACION, curso: TAGS_CURSO,
                facultad: TAGS_FACULTAD, coleccion: TAGS_COLECCION,
                proyecto: TAGS_PROYECTO,
            }
        } = tp.user.constantes();
        return [
            `${TAGS_INVESTIGACION.self}/${TAGS_INVESTIGACION.indice}`,
            `${TAGS_CURSO.self}/${TAGS_CURSO.curso}`,
            `${TAGS_CURSO.self}/${TAGS_CURSO.resumen}`,
            `${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera.self}`,
            `${TAGS_FACULTAD.self}/${TAGS_FACULTAD.materia}`,
            `${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`,
            `${TAGS_COLECCION.self}/${TAGS_COLECCION.representante}`,
            `${TAGS_PROYECTO.self}/${TAGS_PROYECTO.investigacion.self}`,
            `${TAGS_PROYECTO.self}/${TAGS_PROYECTO.practico.self}`,
            `${TAGS_PROYECTO.self}/${TAGS_PROYECTO.juego.self}`,
        ];
    }
});