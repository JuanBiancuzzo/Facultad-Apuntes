const citaView = require(app.vault.adapter.basePath + "/_scripts/dataview/investigacion/citaView.js");

const { indice } = input;

let tag = indice.file.folder.trim()
    .split(" ")
    .filter(token => token.trim() != "-" && token.trim() != "")
    .join("-");

let paginas = dv.pages(`#${tag} and -#índice`)
    .sort(archivo => {
        let referencias = archivo.referencias;
        if (!referencias || referencias.length == 0)
            return 0;

        referencias = referencias.map(ref => parseInt(ref, 10));
        let refMinimo = referencias[0];
        for (let i = 1; i < referencias.length; i++) {
            if (referencias[i] < refMinimo)
                refMinimo = referencias[i];
        }
        return refMinimo;
    });

let referenciasTema = paginas
    .flatMap(pagina => pagina.referencias)
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