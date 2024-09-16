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
    .sort(({ referencias, ..._ }) => referencias ? dv.array(referencias).min() : 0);

let mostrar = archivos.map(({ path, nombre, etapa, aliases, referencias }) => {
    let mostrarAliases = "";
    if (aliases.length > 0) {
        mostrarAliases += '<div class="aliases">' + aliases
            .filter(alias => !alias.includes("#"))
            .map(alias => `<p class="alias"> ${alias} </p>`)
            .join("") + "</div>";
    }
    let textoReferencias = '<div class="referencias">' + referencias
        .map(referencia => `[${referencia}]`)
        .join(" ") + "</div>";

    let color = "#";
    switch (etapa) {
        case "empezado": color += "e9973f"; break;
        case "ampliar": color += "53dfdd"; break;
        case "terminado": color += "3fb764"; break;
        default: color += "0963c7";
    }
    textoEtapa = `<div class="etapa"> ${obtenerEtapa(color)} </div>`;

    let textoNombre = `<div class="nombre"> ${crearReferencia(path, nombre)} ${textoReferencias} </div>`;
    let titulo = `<div class="titulo"> ${textoNombre} ${textoEtapa} </div>`;

    let clase = (aliases.length <= 2) ? "nota" : "nota-larga";
    return `<div class="${clase}"> ${titulo} ${mostrarAliases} </div>`;
}).join("");


dv.el("div", `<div class="grilla"> ${mostrar} </div>`);

function crearReferencia(path, texto) {
    return `<a data-tooltip-position="top" aria-label="${path}" data-href="${path}" \
        class="internal-link ref" target="_blank" rel="noopener"> ${texto} </a>`;
}

function obtenerEtapa(color) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-72 -72 33.874 44.279"><g stroke-width="1.6" stroke="currentColor" fill="currentColor" stroke-miterlimit="10"><path d="M-64.803-71.47v42.68L-52-41.596l12.803 12.804V-71.47" fill="none" stroke="#dadada"></path><path d="M-60.535-69.336v30.728L-52-47.57l8.962 8.962v-30.728Z" stroke="none" fill="${color}"></path></g></svg>`;
}