const { archivo } = input;

await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo });
return;


if (!archivo) {
    dv.paragraph("No esta cargando - Recargar");
    return;
}

// Conseguir tag
let tag = archivo.file.folder.replaceAll(" ", "-").replaceAll(",", "");
let paginas = dv.pages(`#${tag} and -#referencia`)
    .flatMap(pagina => pagina.referencias)
    .array();

// Conseguir referencias del archivo
dv.pages(`#${tag} and #referencia`)
    .flatMap(referencia => {
        let resultado = [referencia.numReferencia];
        if (referencia.tipoCita == "Libro" && referencia.capitulos) {
            for (let { numReferencia, ..._ } of referencia.capitulos) {
                resultado.push(numReferencia);
            } 
        }

        return resultado;
    }) // concat
    .forEach(referencia => paginas.push(referencia));
if (archivo.referencias) {
    archivo.referencias.forEach(referencia => paginas.push(referencia));
}

// Ordenar
let referenciasTema = paginas
    .map(ref => parseInt(ref, 10))
    .sort(ref => ref);

if (referenciasTema.length > 0) {
    // Conseguir referencias
    let referencias = dv.pages('#referencia')
        .flatMap(ref => {
            let resultado = [ { archivo: ref, num: ref.numReferencia } ]
            if (ref.tipoCita != "Libro" || !ref.capitulos)
                return resultado;
            for (let { numReferencia, capitulo: _ } of ref.capitulos) {			
                resultado.push({ archivo: ref, num: numReferencia });
            }
            return resultado;
        }) // filtrar las que realmente existen
        .filter(ref => referenciasTema.indexOf(ref.num) >= 0)
        .sort(ref => ref.num);

    await dv.view("_scripts/dataview/referencia/referenciasArchivo", referencias);

} else {
    dv.el("p", "No hay referencias para este tema");
}