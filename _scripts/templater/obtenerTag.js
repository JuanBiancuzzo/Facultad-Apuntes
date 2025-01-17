function obtenerTag(tp, tags) {
    const { TAGS } = tp.user.constantes();
    const tagsAFiltrar = [
        `${TAGS.investigacion.self}/${TAGS.investigacion.indice}`,
        `${TAGS.curso.self}/${TAGS.curso.curso}`,
        TAGS.resumenCurso,
        TAGS.carrera.self,
        TAGS.materia,
        TAGS.resumenMateria,
        TAGS.coleccion.self,
        TAGS.referencias,
        TAGS.proyecto.self,
        TAGS.nota.self,
    ];

    return tags.filter(tag => tagsAFiltrar.every(tagAFiltrar => !tag.startsWith(tagAFiltrar)));
}

module.exports = obtenerTag;