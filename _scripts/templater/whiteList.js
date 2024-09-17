function whiteListArchivoFacultad(archivoPath) {
    const dv = app.plugins.plugins.dataview.api;
    const materias = dv.pages("#materia").map(materia => materia.file.folder);
    return materias.some(materia => archivoPath.startsWith(materia));
}

function whiteListArchivoInvestigacion(archivoPath) {
    const dv = app.plugins.plugins.dataview.api;
    const indice = dv.pages("#índice").map(indice => indice.file.folder);
    return indice.some(indice => archivoPath.startsWith(indice));
}

function whiteListArticuloLegal(tp, archivoPath) {
    const cte = tp.user.constantes();
    return archivoPath.startsWith(cte.pathArticulos)
}

function whiteListArchivoProyecto(archivoPath) {
    const dv = app.plugins.plugins.dataview.api;
    const proyecto = dv.pages("#proyecto").map(proyecto => proyecto.file.folder);
    return proyecto.some(proyecto => archivoPath.startsWith(proyecto));
}

function whiteListArchivoLibro(archivoPath) {
    const dv = app.plugins.plugins.dataview.api;
    const itemBiblioteca = dv.pages("#biblioteca/libro").map(item => item.file.folder);
    return itemBiblioteca.some(item => archivoPath.startsWith(item));
}

function whiteListArchivoComida(archivoPath) {
    return false;
}

function validarNombre(tp, nombre) {
    return !tp.user.constantes().caracteresInvalidos.some(caracter => nombre.includes(caracter));
}

module.exports = () => {
    return {
        archivoFacultad: whiteListArchivoFacultad,
        articuloLegal: whiteListArticuloLegal,
        archivoInvestigacion: whiteListArchivoInvestigacion,
        archivoProyecto: whiteListArchivoProyecto,
        archivoLibro: whiteListArchivoLibro,
        archivoComida: whiteListArchivoComida,
        validarNombre: validarNombre
    };
};