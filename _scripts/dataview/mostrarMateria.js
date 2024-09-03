let { materia } = input;

let resumenes = dv.pages(`"${materia.file.folder}" and #resumen`)
    .sort(resumen => resumen.capitulo);

for (let resumen of resumenes) {
    dv.header(3, resumen.file.folder.split("/").pop());
    dv.el("hr", "");

    dv.paragraph(`> [!summary]- Resumen\n> ![[${resumen.file.path}#Resumen]]`)
    
    let tagRepresentante = resumen.tags.find(tag => !tag.startsWith("resumen"));
    let mostrar = dv.pages(`#${tagRepresentante} and -#resumen`)
        .flatMap(archivo => {
            let nombre = archivo.file.name;
            let path = archivo.file.path;       
            
            let aliasesActual = archivo.aliases ? archivo.aliases : [];

            let aliases = "";
            if (aliasesActual.length > 0) {
                aliases = "<ul>";
                aliases += aliasesActual
                    .filter(alias => !alias.includes("#"))
                    .map(alias => `<li> ${alias} </li>`)
                    .join("");
                aliases += "</ul>";
            }

            let resultado = [`<li> ${crearReferencia(path, nombre)} ${aliases} </li>`];

            dv.array(aliasesActual.filter(alias => alias.includes("#")))
                .groupBy(alias => alias.split("#")[1])
                .map(({ key, rows }) => {
                    let elementos = rows.values.slice();
                    let subpath = `${path}#${key}`;
                    let subnombre = (elementos.shift()).split("#")[0];
                    
                    let subaliaes = "";
                    if (elementos.length > 0) {
                        subaliaes = "<ul>";
                        subaliaes += elementos
                            .map(alias => `<li> ${alias.split("#")[0]} </li>`)
                            .join("");
                        subaliaes += "</ul>";
                    }
                    
                    return `<li> ${crearReferencia(subpath, subnombre)} ${subaliaes} </li>`;
                })
                .forEach(alias => resultado.push(alias));

            return resultado;
        });

    dv.el("ul", mostrar);
    dv.el("br", "");
}

function crearReferencia(path, texto, style="") {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" style="${style}" \
        class="internal-link" target="_blank" rel="noopener"> ${texto} </a>`;
}