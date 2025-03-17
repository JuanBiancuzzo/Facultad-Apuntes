class Lenguaje {
    constructor(tp, representacionPrevia) {
        const { 
            SIMBOLOS, DATOS: { FUNCIONES: { lenguaje: DATOS_LENGUAJE } },
            TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
        } = tp.user.constantes();
        const dv = app.plugins.plugins.dataview.api;
        if (!representacionPrevia) representacionPrevia = {};

        this.simbolos = SIMBOLOS;
        this.config = DATOS_LENGUAJE;
        this.tags = TAGS_FUNCIONES;
         
        this.nombre = representacionPrevia[this.config.nombre];
        this.temaInvestigacion = representacionPrevia[this.config.temaInvestigacion];

        let tagLenguaje = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[this.nombre]}`;
        let tagRepresentante = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}`;

        this.librerias = [];
        for (let libreria of dv.pages(`#${tagLenguaje} and #${tagRepresentante}/${TAGS_FUNCIONES.libreria}`)) {
            this.librerias.push(tp.user.libreria().clase(tp, this, libreria));
        }
    }

    esValido() {
        return this.nombre && this.temaInvestigacion;
    }

    obtenerLibreriasDisponibles() {
        return this.librerias;
    }

    obtenerLenguaje() {
        return this.nombre;
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

    nombreArchivoDeEstructura(nombreEstructura) {
        return `${nombreEstructura} en ${this.nombre}`;
    }

    nombreSeccion(informacionLibreria = null) {
        return informacionLibreria
            ? `Librerías del lenguaje de ${this.nombre}`
            : `${informacionLibreria} en ${this.nombre}`;
    }

    obtenerTag() {
        return `${this.tags.self}/${this.tags.lenguajes[this.nombre]}`;
    }
}

async function crearLenguaje() {

    return {
        metadata: {

        },
        carpeta: "",
        titulo: "",
        texto: "",
    };
}

module.exports = () => ({
    clase: (tp, representacionPrevia) => new Lenguaje(tp, representacionPrevia),
    crear: crearLenguaje,
});