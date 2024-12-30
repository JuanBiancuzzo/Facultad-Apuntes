
function describirLegalDocumento(documento) {
    return documento.file.name;
}

function describirLegalSeccion(seccion) {
    return `${seccion.tipo}${seccion.num ? ` ${seccion.num},` : ""} ${seccion.nombre}`;
}

function describirFecha(tp, fecha) {
    const { MESES: nombreMes } = tp.user.constantes();
    let [ anio, mes, dia ] = fecha.split("-").map(num => parseInt(num, 10));
    
    dia = (dia <= 3) ? ["1ro", "2do", "3ro"][dia - 1] : dia;
    return `${dia} de ${nombreMes(mes)} del ${anio}`;
}

module.exports = () => {
    return {
        legal: {
            documento: describirLegalDocumento,
            seccion: describirLegalSeccion
        },
        fecha: describirFecha,
    };
};