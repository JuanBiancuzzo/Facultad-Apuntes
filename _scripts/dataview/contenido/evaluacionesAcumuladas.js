let { archivo } = input;

const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const numeroEvaluaciones = archivo.evaluaciones;
if (numeroEvaluaciones !== undefined) {
    const evaluaciones = dv.pages("#colección/ejercicios/evaluacion")
        .filter(evaluacion => numeroEvaluaciones.contains(evaluacion.numero))
        .groupBy(evaluacion => evaluacion["descripción"])
        .map(({ key: descripcion, rows }) => rows
            .sort(evaluacion => evaluacion.fecha)
            .map(evaluacion => {
            const tipoEvaluacion = descripcion ?? "Evaluacion";
            return {
                path: evaluacion.file.path,
                nombre: `${tipoEvaluacion} del ${describirFecha(evaluacion.fecha)}`,
            };
        }))
        .flatMap(rows => rows)
        .map(({ path, nombre }) => crearReferencia(path, nombre));
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
