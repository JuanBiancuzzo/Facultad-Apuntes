async function crearComponente(tp) {

    return {
        metadata: {},
        carpeta: "temp",
        titulo: "temp componente",
        texto: "",
    }
}

module.exports = () => ({
    crear: crearComponente,
});