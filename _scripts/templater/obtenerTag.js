function obtenerTag(tp, tags) {
    if (!tags) return [];

    const { TAGS } = tp.user.constantes();
    const tagsAFiltrar = [
        `${TAGS.investigacion.self}/${TAGS.investigacion.indice}`,
        `${TAGS.curso.self}/${TAGS.curso.curso}`,
        `${TAGS.curso.self}/${TAGS.curso.resumen}`,
        `${TAGS.facultad.self}/${TAGS.facultad.carrera.self}`,
        `${TAGS.facultad.self}/${TAGS.facultad.materia}`,
        `${TAGS.facultad.self}/${TAGS.facultad.resumen}`,
        TAGS.coleccion.self,
        TAGS.referencias,
        `${TAGS.proyecto.self}/`,
        TAGS.nota.self,
    ];

    return tags.filter(tag => tagsAFiltrar.every(tagAFiltrar => !tag.startsWith(tagAFiltrar)));
}

module.exports = obtenerTag;