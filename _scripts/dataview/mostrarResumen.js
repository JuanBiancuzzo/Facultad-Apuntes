let { resumen } = input;

const PAPER = "Paper";
const LIBRO = "Libro";

if (!resumen) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

let tagRepresentante = resumen.file.folder
    .replaceAll(",", "")
    .replaceAll("'", "")
    .replaceAll("-", "")
    .replaceAll(" ", "-");

if (resumen.parte) {
    tagRepresentante += `/${resumen.parte}`;
}
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
    .sort(({ nombre, ..._ }) => nombre )
    .map(({ path, nombre, aliases, etapa }) => ({
        path: path,
        nombre: nombre,
        largo: (aliases.length >= 2),
        etapa: etapa,
        descripcionSimple: false,
        descripcion: aliases.filter(alias => !alias.includes("#"))
    }));

await dv.view("_scripts/dataview/mostrarElementos", { lista: [{ elementos: archivos }] });
