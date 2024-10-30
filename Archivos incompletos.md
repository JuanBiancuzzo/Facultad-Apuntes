Veamos una lista de los archivos de investigación que no están terminados

```dataviewjs
const ETAPAS = {
    ["sin-empezar"]: 1, 
    ["empezado"]: 1, 
    ["ampliar"]: 4, 
    ["terminado"]: 4
};

let archivos = dv.pages(`#nota`);
if (archivos.length <= 0) {
    dv.paragraph("Recargar...");
}

archivos = archivos.filter(archivo => archivo.orden)
    .sort(archivo => -parseInt(archivo.orden, 10))
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
            etapa: archivo.etapa 
                ? archivo.etapa 
                : conseguirEtapa(archivo),
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
                    etapa: archivo.etapa 
                        ? archivo.etapa 
                        : conseguirEtapa(archivo),
                    aliases: elementos
                        .map(alias => alias.split("#")[0]),
                    referencias: referenciasActuales
                });
            });

        return resultado;
    })
    .sort(({ etapa, ..._ }) => etapa in ETAPAS ? ETAPAS[etapa] : -1)
    .map(({ path, nombre, etapa, aliases, referencias }) => ({
        path: path,
        nombre: nombre,
        subnombre: referencias
            .map(referencia => `[${referencia}]`)
            .join(" "),
        largo: aliases.length >= 2,
        etapa: etapa,
        descripcionSimple: false,
        descripcion: aliases.filter(alias => !alias.includes("#"))
    }));

await dv.view("_scripts/dataview/mostrarElementos", { lista: [{ elementos: archivos }], defaultVacio: "No hay archivos incompletas" });

function tagIndice(indice) {
    return indice.file.folder.trim()
        .split(" ")
        .filter(token => token.trim() != "-" && token.trim() != "")
        .join("-");   
}

function conseguirEtapa(indice) {
    let etapasConsideradas = [];

    let tagRepresentanteActual = tagIndice(indice);    
    dv.pages(`#${tagRepresentanteActual} and -#índice`)
        .filter(archivo => archivo.etapa)
        .forEach(archivo => etapasConsideradas.push(archivo.etapa));
    
    let etapaFinal = "sin-empezar";
    if (etapasConsideradas.length > 0) {
        if (etapasConsideradas.some(etapa => etapa != "sin-empezar")) {
            etapaFinal = "empezado";
        } else if (etapasConsideradas.every(etapa => etapa == "ampliar")) {
            etapaFinal = "ampliar";
        } else if (etapasConsideradas.every(etapa => etapa == "terminado")) {
            etapaFinal = "terminado";
        }
    }

    return etapaFinal;
}

```
