const { paginaActual } = input;

if (!paginaActual) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

const carpeta = paginaActual.file.folder;
const nivel = carpeta.split("/").length;

const subSecciones = dv.pages(`"${carpeta}" and -#legal/articulo`)
    .filter(seccion => seccion.file.folder.split("/").length == nivel + 1)
    .sort(seccion => seccion.num);

if (subSecciones.length == 0) {
    return;
}

let titulo = (paginaActual.file.tags.some( tag=> tag.includes("legal/documento") ))
    ? "Secciones principales" : "Subsecciones";
dv.header(3, titulo);
dv.el("hr", "");

dv.table(["Sección", "Artículos"], subSecciones.file.map(subSeccion => {
    let textoSeccion = `${subSeccion.name} [[${subSeccion.path}|?]]`;
    
    let articuloNums = dv.pages(`"${subSeccion.folder}" and #legal/articulo`)
        .map(articulo => articulo.num);

    let resultado = "No tiene artículos";
    if (articuloNums.length > 0) {
        let minimo = articuloNums[0];
        let maximo = articuloNums[0];

        for (let num of articuloNums) {
            if (num < minimo)
                minimo = num;
            else if (num > maximo)
                maximo = num;
        }

        resultado = (minimo == maximo) 
            ? `Artículo ${minimo}`
            : `De artículo ${minimo} al artículo ${maximo}`;
    }

    return [textoSeccion, resultado];
}));