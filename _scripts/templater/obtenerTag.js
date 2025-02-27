function obtenerTag(tp, tags) {
    if (!tags) return [];

    const { TAGS } = tp.user.constantes();
    const tagsAFiltrar = [ ...tp.user.tagsSeccion(tp), TAGS.referencias, TAGS.nota.self ];
    return tags.filter(tag => tagsAFiltrar.every(tagAFiltrar => !tag.startsWith(tagAFiltrar)));
}

module.exports = obtenerTag;