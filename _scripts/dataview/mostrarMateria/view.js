let { materia } = input;

let resumenes = dv.pages(`"${materia.file.folder}" and #resumen`)
    .sort(resumen => resumen.capitulo);

let datos = dv.pages(`"${materia.file.folder}" and #resumen`)
    .sort(resumen => resumen.capitulo)
    .map(resumen => {
        let tagRepresentante = resumen.tags.find(tag => !tag.startsWith("resumen"));
        let archivos = dv.pages(`#${tagRepresentante} and -#resumen`)
            .flatMap(archivo => {
                let resultado = [];
                let aliasesActual = archivo.aliases ? archivo.aliases : [];
                resultado.push({
                    path: archivo.file.path,
                    nombre: archivo.file.name,
                    aliases: aliasesActual
                        .filter(alias => !alias.includes("#"))
                });
                
                dv.array(aliasesActual.filter(alias => alias.includes("#")))
                    .groupBy(alias => alias.split("#")[1])
                    .forEach(({ key, rows }) => {
                        let elementos = rows.values.slice();

                        resultado.push({
                            path: `${archivo.file.path}#${key}`,
                            nombre: (elementos.shift()).split("#")[0],
                            aliases: elementos
                                .map(alias => alias.split("#")[0])
                        });
                    });

                return resultado;
            })
            .sort(({ path, nombre, aliases }) => nombre );

        return {
            resumen: resumen,
            archivos: archivos
        };
    });

for (let { resumen, archivos } of datos) {
    let nombreTema = resumen.file.folder.split("/").pop();
    dv.el("div", `<h3> ${nombreTema} </h3> <hr>`);
    dv.paragraph(`> [!summary]- Resumen\n> ![[${resumen.file.path}#Resumen]]`);

    let mostrar = archivos.map(({ path, nombre, aliases }) => {
        let mostrarAliases = "";
        if (aliases.length > 0) {
            mostrarAliases += '<div class="aliases">' + aliases
                .filter(alias => !alias.includes("#"))
                .map(alias => `<p class="alias"> ${alias} </p>`)
                .join("") + "</div>";
        }
        let clase = (aliases.length < 3) ? "nota" : "nota-larga";

        return `<div class="${clase}"> ${crearReferencia(path, nombre)} ${mostrarAliases} </div>`;
    }).join("");
    

    dv.el("div", `<div class="grilla"> ${mostrar} </div><br>`);
}

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link ref" target="_blank" rel="noopener"> ${texto} </a>`;
}