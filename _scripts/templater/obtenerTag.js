function obtenerTag(tp, tags) {
    let TAGS = tp.user.constantes().TAGS;
    return tags.filter(tag => {
        switch (tag.split("/").at(0)) {
            case TAGS.investigacion:
            case TAGS.carrera:
            case TAGS.materia:
            case TAGS.resumen:
            case TAGS.curso:
            case TAGS.coleccion:
            case TAGS.referencias:
            case TAGS.proyecto.self:
            case TAGS.nota.self:
                return false;
            
            default: 
                return true;
        }
    });
}

module.exports = obtenerTag;