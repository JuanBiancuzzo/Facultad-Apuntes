async function crearPrograma(tp) {

    return {
        metadata: {},
        carpeta: "temp",
        titulo: "temp prograam",
        texto: "",
    }
}

module.exports = () => ({
    crear: crearPrograma,
});