function mostrarArticulo(articulo) {
    // Devuelve html de como se ve el artículo
    return `<p> Artículo ${articulo.num} - Texto <p>`;
}

exports.mostrar = mostrarArticulo;