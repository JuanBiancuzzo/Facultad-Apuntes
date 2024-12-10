const CARACTERES_ELIMINAR = [",", "-"];

function tagPorNombre(folder) {
    for (let caracterEliminar of CARACTERES_ELIMINAR) {
        folder = folder.replaceAll(caracterEliminar, "");
    }
    return folder.replaceAll(" ", "-");
}

module.exports = tagPorNombre;