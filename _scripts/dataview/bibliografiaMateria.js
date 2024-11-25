const { materia } = input;

if (!materia) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

let tag = materia.file.folder.replaceAll(" ", "-").replaceAll(",", "");
let paginas = dv.pages(`#${tag} and -#referencia`)
    .flatMap(pagina => pagina.referencias)
    .array();

dv.pages(`#${tag} and #referencia`)
    .flatMap(referencia => {
        let resultado = [referencia.numReferencia];
        if (referencia.tipoCita == "Libro" && referencia.capitulos) {
            for (let { numReferencia, ..._ } of referencia.capitulos) {
                resultado.push(numReferencia);
            } 
        }

        return resultado;
    }).forEach(referencia => paginas.push(referencia));
if (materia.referencias) {
    materia.referencias.forEach(referencia => paginas.push(referencia));
}

let referenciasTema = paginas
    .map(ref => parseInt(ref, 10))
    .sort(ref => ref);

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