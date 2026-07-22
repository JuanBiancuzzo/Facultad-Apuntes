let { archivo } = input;

const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const numeroEvaluaciones = archivo.evaluaciones;
if (numeroEvaluaciones !== undefined) {
    const evaluaciones = dv.pages("#colección/ejercicios/evaluacion")
        .filter(evaluacion => numeroEvaluaciones.contains(evaluacion.numero))
        .sort(evaluacion => evaluacion.fecha)
        .map((evaluacion, index) => crearReferencia(evaluacion.file.path, `Evaluacion ${index + 1} del ${describirFecha(evaluacion.fecha)}`));
    dv.list(evaluaciones);

} else {
    dv.paragraph("No contiene evaluaciones");
}

function describirFecha(fechaCompleta) {
    const fecha = `${fechaCompleta}`.split("T")[0];

    let [anio, mes, dia] = fecha.split("-").map(num => parseInt(num, 10));
    dia = (dia <= 3) ? ["1ro", "2do", "3ro"][dia - 1] : dia;
    return `${dia} de ${MESES[mes - 1]} del ${anio}`;
}

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link hide" target="_blank" rel="noopener"> ${texto} </a>`;
}
