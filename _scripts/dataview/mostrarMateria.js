let { materia } = input;

let resumenes = dv.pages(`"${materia.file.folder}" and #resumen`)
    .sort(resumen => resumen.capitulo);

for (let resumen of resumenes) {
    dv.header(3, resumen.file.folder.split("/").pop());
    dv.el("hr", "");

    dv.paragraph(`> [!summary]- Resumen\n> ![[${resumen.file.path}#Resumen]]`)
    
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
    dv.el("br", "");
}

function crearReferencia(path, texto, style="") {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" style="${style}" \
        class="internal-link" target="_blank" rel="noopener"> ${texto} </a>`;
}