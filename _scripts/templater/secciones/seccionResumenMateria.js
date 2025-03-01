const SALIR = "salir";

class Resumen {
    constructor(tp, materia, representacionPrevia = {}) {

    }
}

async function crearResumen(tp, materia) {

    return {
        metadata: {},
        carpeta: "temp",
        titulo: "Mucho menos temp",
        texto: "",
    };
}

module.exports = (tp) => ({
    clase: (materia, representacionPrevia = {}) => new Resumen(tp, materia, representacionPrevia),
    crear: crearResumen.bind(null, tp),
});