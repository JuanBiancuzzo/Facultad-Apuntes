class SeguidorReferencias {
    constructor(tp, dv) {
        if (!dv) dv = app.plugins.plugins.dataview.api;
        const referencias = tp.user.referencia();

        this.numReferencias = referencias.obtenerReferencias(tp, dv)
            .map(referencia => referencia.obtenerNumReferencia())
            .sort(numReferencia => numReferencia)
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

module.exports = (tp) => ({
    new: (dv = undefined) => new SeguidorReferencias(tp, dv),
});
