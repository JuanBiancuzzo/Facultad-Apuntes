class Lenguaje {
    constructor(tp, manejarTipoDato, representacionPrevia) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { 
                    lenguaje: DATOS_LENGUAJE, tipoDeDato: { tipo: DATOS_TIPOS },
                    manejador: DATOS_MANEJADOR,
                } 
            },
            TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
        } = tp.user.constantes();
        const dv = app.plugins.plugins.dataview.api;
        if (!representacionPrevia) representacionPrevia = {};

        this.simbolos = SIMBOLOS;
        this.config = DATOS_LENGUAJE;
        this.tags = TAGS_FUNCIONES;
        this.manejarTipoDato = manejarTipoDato;
         
        this.nombre = representacionPrevia[this.config.nombre];
        this.temaInvestigacion = representacionPrevia[this.config.temaInvestigacion];

        let tagLenguaje = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[this.nombre]}`;
        let tagRepresentante = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}`;

        let dvSelf = dv.pages(`#${tagLenguaje} and #${tagRepresentante}/${TAGS_FUNCIONES.lenguajes.self}`)
            .first();
        for (let { [DATOS_MANEJADOR.id]: id, [DATOS_MANEJADOR.valor]: valor } of dvSelf[this.config.tiposPrimitivos]) {
            this.manejarTipoDato.incorporarPrevio(id, DATOS_TIPOS.primitivo, valor);
        }

        this.librerias = [];
        for (let libreria of dv.pages(`#${tagLenguaje} and #${tagRepresentante}/${TAGS_FUNCIONES.libreria}`)) {
            this.librerias.push(tp.user.libreria().clase(tp, this, this.manejarTipoDato, libreria));
        }
    }

    obtenerLenguaje() {
        return this;
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