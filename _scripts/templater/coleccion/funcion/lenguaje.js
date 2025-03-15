class Lenguaje {
    constructor(tp, representacionPrevia = {}) {
        if (!representacionPrevia) representacionPrevia = {};

    }

    obtenerLibreriasDisponibles() {

    }

    esIgual(otro) {

        return !otro && this.nombre == otro.nombre;
    }

    generarRepresentacion() {

    }

    descripcion() {

    }
}

async function crearLenguaje() {

}

module.exports = () => ({
    clase: (tp, representacionPrevia = {}) => new Lenguaje(tp, representacionPrevia),
    crear: crearLenguaje,
});