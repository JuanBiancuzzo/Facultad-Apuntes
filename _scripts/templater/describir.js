
function describirLegalDocumento(documento) {
    return documento.file.name;
}

function describirLegalSeccion(seccion) {
    return `${seccion.tipo}${seccion.num ? ` ${seccion.num},` : ""} ${seccion.nombre}`;
}

function describirFecha(fecha, infoMeses) {
    let [ anio, mes, dia ] = fecha.split("-").map(num => parseInt(num, 10));
    
    dia = (dia <= 3) ? ["1ro", "2do", "3ro"][dia - 1] : dia;
    mes = infoMeses[mes - 1];

    return `${dia} de ${mes} del ${anio}`;
}

function describirCapitulo(infoLibro, infoCapitulo) {
    let autores = [];
    for (let autore of infoLibro.nombreAutores) {
        autores.push(`${autore.nombre} ${autore.apellido}`);
    }
    let capitulo = `${infoLibro.tituloObra} de ${autores.join(", ")}, `;
    capitulo += `capítulo ${infoCapitulo.numeroCapitulo}`;
    return capitulo;
}

module.exports = () => {
    return {
        legal: {
            documento: describirLegalDocumento,
            seccion: describirLegalSeccion
        },
        fecha: describirFecha,
        capitulo: describirCapitulo,
    };
};