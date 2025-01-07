function obtenerTag(tp, tags) {
    let TAGS = tp.user.constantes().TAGS;
    return tags.filter(tag => {
        switch (tag.split("/").at(0)) {
            case TAGS.investigacion.self:
            case TAGS.carrera.self:
            case TAGS.materia:
            case TAGS.resumenMateria:
            case TAGS.resumenCurso:
            case TAGS.curso.self:
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