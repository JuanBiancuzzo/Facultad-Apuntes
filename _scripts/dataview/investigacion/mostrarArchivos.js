const { indice } = input;

let tagRepresentante = tagIndice(indice);

let nivelActual = indice.file.folder.split("/").length;
let subTemas = dv.pages(`#${tagRepresentante} and #índice`)
    .filter(ind => ind.file.folder.split("/").length == nivelActual + 1);
console.log(subTemas);

let archivos = dv.pages(`#${tagRepresentante} and -#índice`)
    .flatMap(archivo => {
        let resultado = [];
        let aliasesActual = archivo.aliases ? archivo.aliases : [];
        let referenciasActuales = [];
        if (archivo.referencias) {
            referenciasActuales = dv.array(archivo.referencias).distinct()
                .sort(ref => parseInt(ref, 10))
        }

        let tags = archivo.tags.filter(tag => tag.startsWith(tagRepresentante));
        for (let tag of tags) {
            resultado.push({
                path: archivo.file.path,
                nombre: archivo.file.name,
                tag: tag,
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
                        tag: tag,
                        etapa: archivo.etapa,
                        aliases: elementos
                            .map(alias => alias.split("#")[0]),
                        referencias: referenciasActuales
                    });
                });
        }

        return resultado;
    })
    .sort(({ referencias, ..._ }) => referencias ? dv.array(referencias).min() : 0)
    .groupBy(({ tag, ..._ }) => subTemas.findIndex(subTema => tag.startsWith(tagIndice(subTema))))
    .values
    .map(({ key, rows }) => ({
        elementos: rows.map(({ path, nombre, etapa, aliases, referencias, ..._ }) => ({
            path: path,
            nombre: nombre,
            subnombre: referencias
                .map(referencia => `[${referencia}]`)
                .join(" "),
            largo: (aliases.length >= 3),
            etapa: etapa,
            descripcionSimple: false,
            descripcion: aliases.filter(alias => !alias.includes("#"))
        })),
        mostrarTitulo: () => {
            if (key < 0) return;

            console.log(key);

            let subTema = subTemas[key];
            console.log(subTema);
            let tema = subTema.file.folder.split("/").pop();
            tema = `${tema.charAt(0).toUpperCase()}${tema.slice(1)}`;
            dv.el("div", `<h3> ${tema} </h3> <hr>`);
            dv.paragraph(`> [!summary]- Resumen\n> ![[${subTema.file.path}#Resumen]]`);
        },
        mostrarFinal: () => {

        }
    }));


await dv.view("_scripts/dataview/mostrarElementos", { lista: archivos });

function tagIndice(indice) {
    return indice.file.folder.trim()
        .split(" ")
        .filter(token => token.trim() != "-" && token.trim() != "")
        .join("-");   
}