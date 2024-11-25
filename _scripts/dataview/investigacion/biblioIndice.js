const { indice } = input;

if (!indice) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

let tag = indice.file.folder.trim().replaceAll(",", "").replaceAll(" ", "-");

let paginas = dv.pages(`#${tag} and -#índice and -#referencia`)
    .flatMap(pagina => pagina.referencias);
let paginasReferencias = dv.pages(`#${tag} and -#índice and #referencia`)
    .flatMap(referencia => {
        let resultado = [referencia.numReferencia];
        if (referencia.tipoCita == "Libro" && referencia.capitulos) {
            for (let { numReferencia, ..._ } of referencia.capitulos) {
                resultado.push(numReferencia);
            } 
        }

        return resultado;
    });

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

    await dv.view("_scripts/dataview/mostrarReferencia", { referencias: referencias });

} else {
    dv.el("p", "No hay referencias para este tema");
}