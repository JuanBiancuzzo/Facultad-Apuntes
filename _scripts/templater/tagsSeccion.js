module.exports = (tp) => {
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
};