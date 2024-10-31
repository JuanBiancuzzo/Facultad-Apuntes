
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

function describirCapitulo(infoCapitulo) {
    let descripcion = `Capítulo ${infoCapitulo.numeroCapitulo}`;
    if (infoCapitulo.nombreCapitulo) 
        descripcion += `: ${infoCapitulo.nombreCapitulo}`;
    if (infoCapitulo.editores && infoCapitulo.editores.length > 0) {
        let editores = [];
		for (let editore of infoCapitulo.editores) {
			editores.push(`${editore.nombre} ${editore.apellido}`);
		}
		
		descripcion += ` de ${editores.join(", ")}`;
    }

    return descripcion;
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