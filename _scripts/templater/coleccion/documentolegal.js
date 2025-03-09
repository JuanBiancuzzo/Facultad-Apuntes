async function crearDocumentoLegal(tp) {

    return {
        metadata: {},
        carpeta: "temp",
        titulo: "temp articulo",
        texto: "",
    }
}

module.exports = () => ({
    crear: crearDocumentoLegal,
});