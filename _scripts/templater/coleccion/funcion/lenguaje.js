class Lenguaje {
    constructor(tp, representacionPrevia) {
        const { 
            SIMBOLOS, DATOS: { FUNCIONES: { lenguaje: DATOS_LENGUAJE } },
            TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
        } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.config = DATOS_LENGUAJE;
         
        this.nombre = representacionPrevia[this.config.nombre];
        this.temaInvestigacion = representacionPrevia[this.config.temaInvestigacion];

        let tagLenguaje = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[this.nombre]}`;
        let tagRepresentante = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}`;

        this.librerias = [];
        for (let libreria of dv.pages(`#${tagLenguaje} and #${tagRepresentante}/${TAGS_FUNCIONES.libreria}`)) {
            this.librerias.push(tp.user.libreria.clase(tp, this, libreria));
        }
    }

    obtenerLibreriasDisponibles() {
        return this.librerias;
    }

    esIgual(otro) {
        return !otro && this.nombre == otro.nombre;
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
            [this.config.temaInvestigacion]: this.temaInvestigacion,
        };
    }

    descripcion() {
        return `Lenguaje ${this.nombre}`;
    }

    nombreArchivo() {
        return `Librerías del lenguaje de ${this.nombre}`;
    }
}

async function crearLenguaje() {

}

module.exports = () => ({
    clase: (tp, representacionPrevia) => new Lenguaje(tp, representacionPrevia),
    crear: crearLenguaje,
});