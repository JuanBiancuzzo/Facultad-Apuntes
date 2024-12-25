let { materia } = input;

const PAPER = "Paper";
const LIBRO = "Libro";

if (!materia) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

let carpeta = materia.file.folder;
if (materia.equivalencia) {
    let equivalencia = dv.page(materia.equivalencia.path);
    carpeta += `/${equivalencia.file.folder.split("/").slice(1).join("/")}`;
}

let tagRepresentante = carpeta
    .replaceAll(",", "")
    .replaceAll("'", "")
    .replaceAll("-", "")
    .replaceAll(" ", "-");

let datos = dv.pages(`#${tagRepresentante} and #resumen`)
    .sort(resumen => resumen.capitulo)
    .map(resumen => {
        let tagRepresentante = resumen.tags.find(tag => !tag.startsWith("resumen"));
        let archivos = dv.pages(`#${tagRepresentante} and -#resumen`)
            .flatMap(archivo => {
                let resultado = [];
                let aliasesActual = archivo.aliases ? archivo.aliases : [];

                let nombre = archivo.file.name;
                if (archivo.tipoCita == PAPER) {
                    nombre = archivo.tituloInforme;
                } else if (archivo.tipoCita == LIBRO) {
                    nombre = `${archivo.tituloObra}: ${archivo.subtituloObra}`;
                }

                resultado.push({
                    path: archivo.file.path,
                    nombre: nombre,
                    aliases: aliasesActual.filter(alias => !alias.includes("#")),
                    etapa: archivo.etapa,
                });
                
                dv.array(aliasesActual.filter(alias => alias.includes("#")))
                    .groupBy(alias => alias.split("#")[1])
                    .forEach(({ key, rows }) => {
                        let elementos = rows.values.slice();

                        resultado.push({
                            path: `${archivo.file.path}#${key}`,
                            nombre: (elementos.shift()).split("#")[0],
                            aliases: elementos.map(alias => alias.split("#")[0]),
                            etapa: archivo.etapa,
                        });
                    });

                return resultado;
            })
            .sort(({ nombre, ..._ }) => nombre );

        return {
            resumen: resumen,
            archivos: archivos
        };
    })
    .map(({ resumen, archivos }) => ({
        elementos: archivos.map(({ path, nombre, aliases, etapa }) => ({
            path: path,
            nombre: nombre,
            largo: (aliases.length >= 2),
            etapa: etapa,
            descripcionSimple: false,
            descripcion: aliases.filter(alias => !alias.includes("#"))
        })),
        mostrarTitulo: async () => {
            dv.el("div", `<h2 class="mostrarTitulo"> ${crearReferencia(resumen.file.path, "?")} ${resumen.file.folder.split("/").pop()} </h2> <hr>`);

            let tResumen = app.vault.getAbstractFileByPath(resumen.file.path);
            let resumenContenido = await app.vault.read(tResumen);

            const indicadorResumen = "# Resumen\n---\n";
            const indicadorFinal = "# Bibliografía";

            let indiceResumen = resumenContenido.indexOf(indicadorResumen) + indicadorResumen.length;
            let indiceFinal = resumenContenido.indexOf(indicadorFinal);
            if (indiceFinal < 0) resumenContenido.length;

            let contenidoMostrar = resumenContenido.slice(indiceResumen, indiceFinal)
                .split("\n")
                .map(linea => `> ${linea}`)
                .join("\n");

            dv.paragraph(`> [!summary]- Resumen\n> # \n> ---\n${contenidoMostrar}`);
        }
    }));

await dv.view("_scripts/dataview/mostrarElementos", { lista: datos, defaultVacio: "Todavía no hay archivos" });

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link hide" target="_blank" rel="noopener"> ${texto} </a>`;
}