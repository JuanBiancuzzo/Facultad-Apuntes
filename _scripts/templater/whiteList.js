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
        archivoInvestigacion: whiteListArchivoInvestigacion,
        archivoProyecto: whiteListArchivoProyecto,
        archivoLibro: whiteListArchivoLibro,
        archivoComida: whiteListArchivoComida,
        validarNombre: validarNombre
    };
};