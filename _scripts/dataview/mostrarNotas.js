let { proyecto } = input;

let tagRepresentante = proyecto.tags.find(tag => tag != "proyecto");

let mostrar = dv.pages(`#${tagRepresentante} and -#proyecto and #nota/proyecto`)
    .sort(archivo => archivo.dia, direction="desc")
    .map(archivo => {
        let nombre = archivo.file.name;
        let path = archivo.file.path;        
        return `<li> ${crearReferencia(path, nombre)} </li>`;
    });

dv.el("ul", mostrar);

function crearReferencia(path, texto, style="") {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" style="${style}" \
        class="internal-link" target="_blank" rel="noopener"> ${texto} </a>`;
}