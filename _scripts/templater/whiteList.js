function whiteListArchivoFacultad(archivoPath) {
    const dv = app.plugins.plugins.dataview.api;
    const materias = dv.pages("#materia").map(materia => materia.file.folder);
    return materias.some(materia => archivoPath.startsWith(materia));
}

function whiteListArchivoInvestigacion(archivoPath) {
    const dv = app.plugins.plugins.dataview.api;
    const indice = dv.pages("#Índice").map(indice => indice.file.folder);
    return indice.some(indice => archivoPath.startsWith(indice));
}

function whiteListArticuloLegal(tp, archivoPath) {
    const cte = tp.user.constantes();
    return archivoPath.startsWith(cte.pathArticulos)
}

function whiteListArchivoProyecto(archivoPath) {
    return false;
}

function whiteListArchivoLibro(archivoPath) {
    return false;
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