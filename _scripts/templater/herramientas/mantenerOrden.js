function conseguirValorOrden() {
    const dv = app.plugins.plugins.dataview.api;

    let contadores = dv.pages().filter(archivo => archivo.orden)
        .map(archivo => archivo.orden);
    let cantidadTemp = contadores.length;
    
    contadores = contadores.distinct(orden => orden)
        .sort(orden => orden)
        .values;
    
    if (cantidadTemp > contadores.length) {
        new Notice("Hay duplicados");
    }
    
    let contadorEsperado = 1;
    for (let contador of contadores) {
        if (contador != contadorEsperado) break;
        contadorEsperado = contador + 1;
    }

    return contadorEsperado;
}

module.exports = () => ({
    siguienteValorOrden: conseguirValorOrden
});