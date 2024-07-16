
function describirLegalDocumento(documento) {
    return documento.file.name;
}

function describirLegalSeccion(seccion) {
    return `${seccion.tipo}${seccion.num ? ` ${seccion.num},` : ""} ${seccion.nombre}`;
}

module.exports = () => {
    return {
        legal: {
            documento: describirLegalDocumento,
            seccion: describirLegalSeccion
        }
    };
};