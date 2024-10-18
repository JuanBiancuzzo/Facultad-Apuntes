let { resumen } = input;

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
    .sort(({ nombre, ..._ }) => nombre )
    .map(({ path, nombre, aliases }) => ({
        path: path,
        nombre: nombre,
        largo: (aliases.length >= 2),
        descripcionSimple: false,
        descripcion: aliases.filter(alias => !alias.includes("#"))
    }));

await dv.view("_scripts/dataview/mostrarElementos", { lista: [{ elementos: archivos }] });