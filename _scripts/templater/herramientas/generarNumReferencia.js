function generarNumReferencia(dv = undefined) {
    if (!dv) dv = app.plugins.plugins.dataview.api;

    let numReferencias = dv.pages('#referencia')
        .flatMap(ref => {
            let resultado = [ ref.numReferencia ]
            if (ref.tipoCita != "Libro" || !ref.capitulos)
                return resultado;
            for (let { numReferencia, capitulo: _ } of ref.capitulos) {
                resultado.push(numReferencia);
            }
            return resultado;
        })
        .sort(ref => ref);
    
    let previoNumReferencia = 0;
    for (let numReferencia of numReferencias) {
        if (numReferencia - previoNumReferencia > 1)
            break;
        previoNumReferencia = numReferencia;
    }

    return previoNumReferencia + 1;
}

module.exports = generarNumReferencia;