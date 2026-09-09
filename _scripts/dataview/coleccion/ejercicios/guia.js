const { ejercicios } = input;

let ejerciciosGeneral = {};
for (let ejercicio of dv.pages("#colección/ejercicios/ejercicio")) {
    ejerciciosGeneral[parseInt(ejercicio.numero, 10)] = ejercicio;
}

const infoEjercicios = Object.entries(ejercicios).map(([indice, numEjercicio]) => {
    const ejercicio = ejerciciosGeneral[parseInt(numEjercicio, 10)];
    const numero = parseInt(indice, 10) + 1;
    const nombre = `Ejercicio N°${numero}${ejercicio.nombre != undefined ? `: ${ejercicio.nombre}` : ""}`;
    let estado = "⚫";
    switch (ejercicio.etapa) {
        case "sin-empezar": estado = "🔵"; break;
        case "empezado": estado = "🟠"; break;
        case "ampliar": estado = "🟣"; break;
        case "terminado": estado = "🟢"; break;
    }

    let link = crearReferencia(ejercicio.file.path, nombre);
    return `<li> ${estado} ${link} </li>`;
});

dv.el("div", `<ul> ${infoEjercicios.join("")} </ul>`);

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link hide" target="_blank" rel="noopener"> ${texto} </a>`;
}
