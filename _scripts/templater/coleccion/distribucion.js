class Distribucion {}

class Relacion {}

async function crearDistribucion(tp) {
    const {
        SIMBOLOS, SECCIONES,
        DATAVIEW: { coleccion: { distribuciones: DV_DISTRIBUCIONES }, ...DATAVIEW },
    } = tp.user.constantes();

    return {
        metadata: {},
        carpeta: "temp",
        titulo: "temp distribucion",
        texto: "",
    }
}

module.exports = () => ({
    crear: crearDistribucion,
    claseDistribucion: (...argumentos) => new Distribucion(...argumentos),
    claseRelacion: (...argumentos) => new Relacion(...argumentos),
});