const { ejercicios } = input;

let ejerciciosGeneral = {};
for (let ejercicio of dv.pages("#colección/ejercicios/ejercicio")) {
    ejerciciosGeneral[parseInt(ejercicio.numero, 10)] = ejercicio;
}

let infoEjercicios = Object.entries(ejercicios).map(([indice, numEjercicio]) => {
    let ejercicio = ejerciciosGeneral[parseInt(numEjercicio, 10)];
    let link = crearReferencia(ejercicio.file.path, `Ejercicio N°${parseInt(indice, 10) + 1}`);
    return `<li> ${link} </li>`;
});

dv.el("div", `<ul> ${infoEjercicios.join("")} </ul>`);

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link hide" target="_blank" rel="noopener"> ${texto} </a>`;
}