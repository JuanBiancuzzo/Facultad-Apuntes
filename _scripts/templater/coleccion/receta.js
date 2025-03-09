async function crearReceta(tp) {

    return {
        metadata: {},
        carpeta: "temp",
        titulo: "temp receta",
        texto: "",
    }
}

module.exports = () => ({
    crear: crearReceta,
});