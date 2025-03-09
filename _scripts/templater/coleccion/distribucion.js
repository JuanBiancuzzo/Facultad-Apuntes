async function crearDistribucion(tp) {

    return {
        metadata: {},
        carpeta: "temp",
        titulo: "temp distribucion",
        texto: "",
    }
}

module.exports = () => ({
    crear: crearDistribucion,
});