let { resumen } = input;

let tagRepresentante = resumen.tags.find(tag => !tag.startsWith("resumen"));
let mostrar = dv.pages(`#${tagRepresentante} and -#resumen`)
    .map(archivo => {
        let nombre = archivo.file.name;
        let path = archivo.file.path;

        let aliases = "";
        if (archivo.aliases) {
            aliases = "<ul>";
            aliases += archivo.aliases.map(alias => `<li> ${alias} </li>`).join("");
            aliases += "</ul>";
        }
        
        return `<li> ${crearReferencia(path, nombre)} ${aliases} </li>`;
    });

dv.el("ul", mostrar);

function crearReferencia(path, texto, style="") {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" style="${style}" \
        class="internal-link" target="_blank" rel="noopener"> ${texto} </a>`;
}