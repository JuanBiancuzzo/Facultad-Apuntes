class SeguidorReferencias {
    constructor(dv) {
        if (!dv) dv = app.plugins.plugins.dataview.api;

        this.numReferencias = dv.pages('#referencia')
            .flatMap(ref => {
                let resultado = [ref.numReferencia]
                if (ref.tipoCita != "Libro" || !ref.capitulos)
                    return resultado;
                for (let { numReferencia, capitulo: _ } of ref.capitulos) {
                    resultado.push(numReferencia);
                }
                return resultado;
            })
            .sort(ref => ref)
            .values;
    }

    conseguirReferencia() {
        let previoNumReferencia = 0;
        for (let numReferencia of this.numReferencias) {
            if (numReferencia - previoNumReferencia > 1)
                break;
            previoNumReferencia = numReferencia;
        }

        this.numReferencias.push(previoNumReferencia + 1);
        this.numReferencias = this.numReferencias.sort((a, b) => a - b);

        return previoNumReferencia + 1;
    }

    devolverReferencia(numReferencia) {
        this.numReferencias.remove(numReferencia);
    }
}

module.exports = () => ({
    new: (dv = undefined) => new SeguidorReferencias(dv),
});
