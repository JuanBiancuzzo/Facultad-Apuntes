Veamos una lista de los archivos de investigación que no están terminados

```dataviewjs
const ETAPAS = {
    ["sin-empezar"]: 1, 
    ["empezado"]: 2, 
    ["ampliar"]: 3, 
    ["terminado"]: 4
};

let archivos = dv.pages(`#nota/investigacion`)
    .flatMap(archivo => {
        let resultado = [];
        let aliasesActual = archivo.aliases ? archivo.aliases : [];
        let referenciasActuales = [];
        if (archivo.referencias) {
            referenciasActuales = dv.array(archivo.referencias).distinct()
                .sort(ref => parseInt(ref, 10))
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
    .sort(({ etapa, ..._ }) => etapa in ETAPAS ? ETAPAS[etapa] : -1)
    .map(({ path, nombre, etapa, aliases, referencias }) => ({
        path: path,
        nombre: nombre,
        subnombre: referencias
            .map(referencia => `[${referencia}]`)
            .join(" "),
        largo: false,
        etapa: etapa,
        descripcionSimple: false,
        descripcion: aliases.filter(alias => !alias.includes("#"))
    }));

await dv.view("_scripts/dataview/mostrarElementos", { simple: true, elementos: archivos });
```