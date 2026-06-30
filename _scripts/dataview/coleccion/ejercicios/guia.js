const { ejercicios } = input;

let ejerciciosGeneral = {};
for (let ejercicio of dv.pages("#colección/ejercicios/ejercicio")) {
    ejerciciosGeneral[parseInt(ejercicio.numero, 10)] = ejercicio;
}

const infoEjercicios = Object.entries(ejercicios).map(([indice, numEjercicio]) => {
    const ejercicio = ejerciciosGeneral[parseInt(numEjercicio, 10)];
    const nombre = `Ejercicio N°${parseInt(indice, 10) + 1}${ejercicio.nombre != undefined ? `: ${ejercicio.nombre}` : ""}`;

    let link = crearReferencia(ejercicio.file.path, nombre);
    return `<li> ${link} </li>`;
});

dv.el("div", `<ul> ${infoEjercicios.join("")} </ul>`);

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link hide" target="_blank" rel="noopener"> ${texto} </a>`;
}
