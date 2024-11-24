let { curso } = input;

if (!curso) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

let tagRepresentante = curso.file.folder.replaceAll(" ", "-").replaceAll(",", "");
let archivos = dv.pages(`#${tagRepresentante} and -#proyecto/curso`)
    .flatMap(archivo => {
        let resultado = [];
        let aliasesActual = archivo.aliases ? archivo.aliases : [];
        resultado.push({
            path: archivo.file.path,
            nombre: archivo.file.name,
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