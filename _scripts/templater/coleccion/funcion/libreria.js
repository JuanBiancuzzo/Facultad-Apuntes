const CANTIDAD_MINIMA_DEPENDENCIAS = 0;

class Libreria {
    constructor(tp, manejarTipoDato, lenguajePadre, representacionPrevia = null) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { libreria: DATOS_LIBRERIA, tipoDeDato: { tipo: DATOS_TIPOS }, manejador: DATOS_MANEJADOR }, 
                ARCHIVO: DATOS_ARCHIVO 
            },
            TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
        } = tp.user.constantes();
        const dv = app.plugins.plugins.dataview.api;

        if (!representacionPrevia) representacionPrevia = {};

        this.tagPorNombre = tp.user.tagPorNombre;
        this.simbolos = SIMBOLOS;
        this.config = DATOS_LIBRERIA;
        this.tags = { coleccion: TAG_COLECCION, ...TAGS_FUNCIONES };
        this.manejarTipoDato = manejarTipoDato;

        this.nombre = representacionPrevia[this.config.nombre];
        this.dependencias = representacionPrevia[this.config.dependencias]
            ? representacionPrevia[this.config.dependencias]
            : [];

        this.lenguajePadre = lenguajePadre;

        let tagLenguaje = this.lenguajePadre.obtenerTag();
        let tagLibreria = `${tagLenguaje}/${this.tagPorNombre(this.nombre)}`;
        let tagRepresentante = `${this.tags.coleccion}/${this.tags.self}`;

        let estructuras = dv.pages(`#${tagLibreria} and #${tagRepresentante}/${this.tags.estructura}`)
            .filter(({ [DATOS_ARCHIVO.tags]: tags }) => tags.some(tag => tag == tagLibreria));

        for (let { [DATOS_MANEJADOR.id]: id, [DATOS_MANEJADOR.tipo]: tipo, ...datos } of estructuras) {
            let valor;
            switch (tipo) {
                case DATOS_TIPOS.funcion:   valor = tp.user.funcion().clase(tp, this.manejarTipoDato, this, datos); break;
                case DATOS_TIPOS.clase:     valor = tp.user.clase().clase(tp, this.manejarTipoDato, this, datos); break;
                case DATOS_TIPOS.struct:    valor = tp.user.struct().clase(tp, this.manejarTipoDato, this, datos); break;
                case DATOS_TIPOS.interfaz:  valor = tp.user.interfaz().clase(tp, this.manejarTipoDato, this, datos); break;
                case DATOS_TIPOS.enum:      valor = tp.user.enum().clase(tp, this.manejarTipoDato, this, datos); break;

                default: continue;
            }

            this.manejarTipoDato.incorporarPrevio(id, tipo, valor);
        }

        this.modulos = [];
        for (let modulo of dv.pages(`#${tagLibreria} and #${tagRepresentante}/${this.tags.modulo}`)) {
            this.modulos.push(tp.user.modulo().clase(tp, this.manejarTipoDato, this, modulo));
        }

        this.crearManejador = tp.user.manejarTipoDato.bind(null, tp);
    }

    esValido() {
        return this.dependencias.length >= CANTIDAD_MINIMA_DEPENDENCIAS;
    }

    esIgual(otro) {
        return this.nombre == otro.nombre;
    }

    obtenerTiposDeDatos() {
        return [];
    }

    obtenerManejador() {
        let tiposDeDatos = this.obtenerTiposDeDatos();
        for (let dependencia of this.dependencias) {
            tiposDeDatos = tiposDeDatos.concat(dependencia.obtenerTiposDeDatos());
        }

        return this.crearManejador(tiposDeDatos);
    }
    
    obtenerModulosDisponibles() {
        return this.modulos;
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
            [this.config.dependencias]: this.dependencias,
        };
    }

    descripcion() {
        return `Libreria ${this.nombre}`;
    }

    directorio() {
        return "temp";
    }

    nombreArchivoDeEstructura(nombreEstructura) {
        let descripcion = `${nombreEstructura} de ${this.nombre}`;
        return this.lenguajePadre.nombreArchivoDeEstructura(descripcion);
    }

    nombreSeccion(informacionModulo = null) {
        return informacionModulo
            ? this.lenguajePadre.nombreSeccion(`${informacionModulo} de la librería Pandas`)
            : this.lenguajePadre.nombreSeccion(`Librería ${this.nombre}`);
    }

    obtenerTag() {
        return `${this.lenguajePadre.obtenerTag()}/${this.tagPorNombre(this.nombre)}`;
    }
}

async function crearLibreria(tp, lenguajePadre, representacionLibreria) {
    const { 
        TEMPLATE: { coleccion: TEMPLATE_COLECCION }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION },
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES }, investigacion: TAGS_INVESTIGACION  }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES, INVESTIGACION: DATOS_INVESTIGACION, LENGUAJE: DATOS_LENGUAJE },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const dv = app.plugins.plugins.dataview.api;

    if (!representacionLibreria) representacionLibreria = {};

    let libreria = new Libreria(tp, lenguajePadre, representacionLibreria);
    if (!libreria.esValido()) {
        await tp.user.preguntar().formulario(tp, libreria, "Ingresar la informacion de la libreria");
    }


    let tagPath = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[lenguaje]}`;
    let tagFuncion = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${tagFuncion}/${TAGS_FUNCIONES.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_FUNCIONES.lenguaje.temaInvestigacion].path);

    let tags = [`${tagPath}/${tagPorNombre(libreria)}`, `${tagFuncion}/${TAGS_FUNCIONES.libreria}`];
    if (dvLenguaje) {
        let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
            .map(tag => `${tag}/${TAGS_FUNCIONES.lenguajes[lenguaje]}/${tagPorNombre(`${libreria}`)}`);
        
        tags.push(`${TAGS_INVESTIGACION.self}/${TAGS_INVESTIGACION.indice}`);
        tags = tags.concat(tagsInvestigacion);
    }

    return {
        metadata: {
            [DATOS_FUNCIONES.libreria.tags]: tags,
            [DATOS_FUNCIONES.libreria.nombre]: libreria,
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_COLECCION.funciones.self}/${DIR_COLECCION.funciones[keyLenguaje]}/${libreria}`,
        titulo: DATOS_FUNCIONES.libreria.obtenerTitulo(DATOS_LENGUAJE[lenguaje].nombre, libreria),
        texto: await tp.file.include(`[[${TEMPLATE_COLECCION.funciones.libreria}]]`),
    };
}

module.exports = () => ({
    clase: (tp, lenguajePadre, representacionPrevia) => new Libreria(tp, lenguajePadre, representacionPrevia),
    crear: crearLibreria,
});