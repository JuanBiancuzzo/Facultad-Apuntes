const { indice } = input;

let tagRepresentante = indice.file.folder.trim()
    .split(" ")
    .filter(token => token.trim() != "-" && token.trim() != "")
    .join("-");

let archivos = dv.pages(`#${tagRepresentante} and -#índice`)
    .flatMap(archivo => {
        let resultado = [];
        let aliasesActual = archivo.aliases ? archivo.aliases : [];
        let referenciasActuales = [];
        if (archivo.referencias) {
            referenciasActuales = dv.array(archivo.referencias).distinct()
                .sort(ref => ref, direction="desc")
        }

        resultado.push({
            path: archivo.file.path,
            nombre: archivo.file.name,
            etapa: archivo.etapa,
            aliases: aliasesActual
                .filter(alias => !alias.includes("#")),
            referencias: referenciasActuales
        });
        
        dv.array(aliasesActual.filter(alias => alias.includes("#")))
            .groupBy(alias => alias.split("#")[1])
            .forEach(({ key, rows }) => {
                let elementos = rows.values.slice();

                resultado.push({
                    path: `${archivo.file.path}#${key}`,
                    nombre: (elementos.shift()).split("#")[0],
                    etapa: archivo.etapa,
                    aliases: elementos
                        .map(alias => alias.split("#")[0]),
                    referencias: referenciasActuales
                });
            });

        return resultado;
    })
    .sort(({ referencias, ..._ }) => referencias ? dv.array(referencias).min() : 0)
    .map(({ path, nombre, etapa, aliases, referencias }) => ({
        path: path,
        nombre: nombre,
        subnombre: referencias
            .map(referencia => `[${referencia}]`)
            .join(" "),
        largo: (aliases.length >= 3),
        etapa: etapa,
        descripcionSimple: false,
        descripcion: aliases.filter(alias => !alias.includes("#"))
    }));


await dv.view("_scripts/dataview/mostrarElementos", { simple: true, elementos: archivos });