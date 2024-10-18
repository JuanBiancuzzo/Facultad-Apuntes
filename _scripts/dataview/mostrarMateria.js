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
    })
    .map(({ resumen, archivos }) => ({
        elementos: archivos.map(({ path, nombre, aliases }) => ({
            path: path,
            nombre: nombre,
            largo: (aliases.length >= 2),
            descripcionSimple: false,
            descripcion: aliases.filter(alias => !alias.includes("#"))
        })),
        mostrarTitulo: () => {
            dv.el("div", `<h2> ${resumen.file.folder.split("/").pop()} </h2> <hr>`);
            dv.paragraph(`> [!summary]- Resumen\n> ![[${resumen.file.path}#Resumen]]`);
        }
    }));

    await dv.view("_scripts/dataview/mostrarElementos", { lista: datos, defaultVacio: "Todavía no hay archivos" });