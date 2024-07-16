const { paginaActual } = input;

const carpeta = paginaActual.file.folder;
const nivel = carpeta.split("/").length;

const subSecciones = dv.pages(`"${carpeta}" and -#legal/articulo`)
    .filter(seccion => seccion.file.folder.split("/").length == nivel + 1);

if (subSecciones.length == 0) {
    dv.paragraph("No hay subsecciones todavía");
    return;
}

for (let subSeccion of subSecciones) {
    dv.paragraph(`Sección: ${subSeccion.file.name}`);
}