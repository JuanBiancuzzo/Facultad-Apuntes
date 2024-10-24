const citaView = require(app.vault.adapter.basePath + "/_scripts/dataview/investigacion/citaView.js");

const { indice } = input;

if (!indice) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

let tag = indice.file.folder.trim()
    .split(" ")
    .filter(token => token.trim() != "-" && token.trim() != "")
    .join("-");

let paginas = dv.pages(`#${tag} and -#índice and -#referencia`)
    .flatMap(pagina => pagina.referencias);
let paginasReferencias = dv.pages(`#${tag} and -#índice and #referencia`)
    .map(pagina => pagina.numReferencia);

let referenciasIndice = indice.referencias ? indice.referencias : [];
let indiceArray = dv.array(indice.tags.some(tag => tag.startsWith("nota")) ? referenciasIndice : []);

let referenciasTema = paginas.concat(paginasReferencias).concat(indiceArray)
    .map(ref => parseInt(ref, 10))
    .sort(ref => ref)
    .values;

if (referenciasTema.length > 0) {
    let referencias = dv.pages('#referencia')
        .flatMap(ref => {
            let resultado = [ { archivo: ref, num: ref.numReferencia } ]
            if (ref.tipoCita != "Libro" || !ref.capitulos)
                return resultado;
            for (let { numReferencia, capitulo: _ } of ref.capitulos) {			
                resultado.push({ archivo: ref, num: numReferencia });
            }
            return resultado;
        })
        .filter(ref => referenciasTema.indexOf(ref.num) >= 0)
        .sort(ref => ref.num);

    let resultado = "";
    for (let { archivo, num } of referencias) {
        resultado += citaView.mostrarCita(archivo, num);
    }

    dv.el("div", resultado);
} else {
    dv.el("p", "No hay referencias para este tema");
}