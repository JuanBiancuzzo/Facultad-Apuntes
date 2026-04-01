class SeguidorContador {
    constructor(obtenerListaContados) {
        this.numeros = obtenerListaContados();
    }

    conseguirNumero() {
        let previoNum = 0;
        for (let numero of this.numeros) {
            if (numero - previoNum > 1)
                break;
            previoNum = numero;
        }

        this.numeros.push(previoNum + 1);
        this.numeros = this.numeros.sort((a, b) => a - b);

        return previoNum + 1;
    }

    devolver(numero) {
        this.numeros.remove(numero);
    }
}

class SeguidorReferencias {
    constructor(tp, dv = undefined) {
        if (!dv) dv = app.plugins.plugins.dataview.api;
        const referencias = tp.user.referencia();

        this.seguidor = new SeguidorContador(() => {
            return referencias.obtenerReferencias(tp, dv)
                .map(referencia => referencia.obtenerNumReferencia())
                .sort(numReferencia => numReferencia)
                .values;
        });
    }

    conseguirReferencia() {
        return this.seguidor.conseguirNumero();
    }

    devolverReferencia(numReferencia) {
        this.seguidor.devolver(numReferencia);
    }
}

module.exports = (tp) => ({
    newGeneral: (obtenerListaContados) => new SeguidorContador(obtenerListaContados),
    new: (dv = undefined) => new SeguidorReferencias(tp, dv),
});
