const { ejercicios } = input;

let ejerciciosGeneral = new Map();
for (let ejercicio of dv.pages("#colección/ejercicios/ejercicio")) {
    ejerciciosGeneral.set(parseInt(ejercicio.numero, 10), ejercicio);
}

let archivosEjercicios = [];
for (let numEjercicio of ejercicios) {
    numEjercicio = parseInt(numEjercicio, 10);
    const ejercicio = ejerciciosGeneral.get(numEjercicio);
    const loadTask = dv.io.load(ejercicio.file.path);
    archivosEjercicios.push(loadTask);
}
archivosEjercicios = await Promise.all(archivosEjercicios);

Object.entries(ejercicios).map(([indice, numEjercicio]) => {
    const ejercicio = ejerciciosGeneral.get(parseInt(numEjercicio, 10));
    const nombre = `Ejercicio N°${parseInt(indice, 10) + 1}${ejercicio.nombre != undefined ? `: ${ejercicio.nombre}` : ""}`;
    const estadoCallout = etapa2callout(ejercicio.etapa);

    const link = crearReferencia(ejercicio.file.path, nombre);
    const enunciado = obtenerEnunciado(archivosEjercicios[indice])
        .split("\n")
        .map(linea => `> ${linea}`)
        .join("\n");
    console.log(enunciado);

    dv.el("p", ` > [!${estadoCallout}]+ ${link}\n > ${enunciado}`);
});

function obtenerEnunciado(archivo) {
    const tituloEnunciado = new RegExp("# Enunciado[ ]*[\n]-{3,}[ ]*[\n]", "s");
    let inicioEnunciado = tituloEnunciado.exec(archivo);
    inicioEnunciado = inicioEnunciado.index + inicioEnunciado[0].length;

    const tituloResolucion = new RegExp("# Resolución[ ]*[\n]-{3,}[ ]*[\n]", "s");
    const finalEnunciado = tituloResolucion.exec(archivo).index - 1;
    return archivo.slice(inicioEnunciado, finalEnunciado)
}

function etapa2callout(etapa) {
    switch (etapa) {
        case "sin-empezar": return "info"; 
        case "empezado": return "help"; 
        case "ampliar": return "hint"; 
        case "terminado": return "done"; 
        default: return "bug";
    }
}

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link hide" target="_blank" rel="noopener"> ${texto} </a>`;
}
