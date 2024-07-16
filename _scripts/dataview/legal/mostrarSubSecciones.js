const { paginaActual } = input;

const carpeta = paginaActual.file.folder;
const nivel = carpeta.split("/").length;

const subSecciones = dv.pages(`"${carpeta}" and -#legal/articulo`)
    .filter(seccion => seccion.file.folder.split("/").length == nivel + 1)
    .sort(seccion => seccion.num);

if (subSecciones.length == 0) {
    dv.paragraph("No hay subsecciones todavía");
    return;
}

dv.table(["Sección", "Artículos"], subSecciones.file.map(subSeccion => {
    let textoSeccion = `${subSeccion.name} [[${subSeccion.path}|?]]`;
    
    let articuloNums = dv.pages(`"${subSeccion.folder}" and #legal/articulo`)
        .map(articulo => articulo.num)
        .sort(num => num);

    let resultado = "No tiene artículos";
    if (articuloNums.length > 0) {
        let previo = articuloNums[0];
        resultado = `${previo}`;

        for (let i = 1; i < articuloNums.length; i++) {
            let num = articuloNums[i];
            if (previo + 1 != num) {
                resultado += `-${previo}, ${num}`;
            } 

            previo = num;
        }
    }

    return [textoSeccion, resultado];
}));