class Modulo {
    constructor(tp, manejarTipoDato, libreriaPadre, representacionPrevia = null) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { modulo: DATOS_MODULO, tipoDeDato: { tipo: DATOS_TIPOS }, manejador: DATOS_MANEJADOR }, 
                ARCHIVO: DATOS_ARCHIVO 
            },
            TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
        } = tp.user.constantes();
        const dv = app.plugins.plugins.dataview.api;

        if (!representacionPrevia) representacionPrevia = {};

        this.tagPorNombre = tp.user.tagPorNombre;
        this.simbolos = SIMBOLOS;
        this.config = DATOS_MODULO;
        this.tags = { coleccion: TAG_COLECCION, ...TAGS_FUNCIONES };
        this.manejarTipoDato = manejarTipoDato;

        this.nombre = representacionPrevia[this.config.nombre];
        this.libreriaPadre = libreriaPadre;

        let tagLibreria = this.libreriaPadre.obtenerTag();
        let tagModulo = `${tagLibreria}/${this.tagPorNombre(this.nombre)}`;
        let tagRepresentante = `${this.tags.coleccion}/${this.tags.self}`;

        let estructuras = dv.pages(`#${tagModulo} and #${tagRepresentante}/${this.tags.estructura}`)
            .filter(({ [DATOS_ARCHIVO.tags]: tags }) => tags.some(tag => tag == tagModulo));

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
    }
    
    esValido() {
        return true;
    }

    obtenerManejador() {

    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
        };
    }

    descripcion() {

    }
    
    directorio() {
        return "temp";
    }

    nombreArchivoDeEstructura(nombreEstructura) {
        let descripcion = `${nombreEstructura} de módulo ${this.nombre}`;
        return this.libreriaPadre.nombreArchivoDeEstructura(descripcion);
    }

    nombreSeccion() {
        return this.libreriaPadre.nombreSeccion(`Módulo ${this.nombre}`);
    }

    obtenerTag() {
        return `${this.libreriaPadre.obtenerTag()}/${this.tagPorNombre(this.nombre)}`;
    }
}

async function crearModulo(tp, lenguaje, libreria, modulo) {
    const { 
        TEMPLATE: { coleccion: TEMPLATE_COLECCION }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION },
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES }, investigacion: TAGS_INVESTIGACION  }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES, INVESTIGACION: DATOS_INVESTIGACION, LENGUAJE: DATOS_LENGUAJE },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const dv = app.plugins.plugins.dataview.api;

    let tagPath = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[lenguaje]}`;
    let tagFuncion = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}`;
    let dvLenguaje = dv.pages(`#${tagPath} and #${tagFuncion}/${TAGS_FUNCIONES.lenguajes.self}`)
        .first();
    dvLenguaje = dv.page(dvLenguaje[DATOS_FUNCIONES.lenguaje.temaInvestigacion].path);

    let tags = [`${tagPath}/${tagPorNombre(`${libreria}/${modulo}`)}`, `${tagFuncion}/${TAGS_FUNCIONES.modulo}`];
    if (dvLenguaje) {
        let tagsInvestigacion = tp.user.obtenerTag(tp, dvLenguaje[DATOS_INVESTIGACION.tags])
            .map(tag => `${tag}/${TAGS_FUNCIONES.lenguajes[lenguaje]}/${tagPorNombre(`${libreria}/${modulo}`)}`);
        
        tags.push(`${TAGS_INVESTIGACION.self}/${TAGS_INVESTIGACION.indice}`);
        tags = tags.concat(tagsInvestigacion);
    }

    let dvLibreria = dv.pages(`#${tagPath}/${tagPorNombre(libreria)} and #${tagFuncion}/${TAGS_FUNCIONES.libreria}`)
        .first();
    let carpetaLibreria = dvLibreria
        ? dvLibreria.file.folder
        : `${DIR_COLECCION.self}/${DIR_COLECCION.funciones.self}/${DIR_COLECCION.funciones[lenguaje]}/${libreria}`;

    return {
        metadata: {
            [DATOS_FUNCIONES.modulo.tags]: tags,
            [DATOS_FUNCIONES.modulo.nombre]: modulo,
        },
        carpeta: `${carpetaLibreria}/${modulo}`,
        titulo: DATOS_FUNCIONES.modulo.obtenerTitulo(DATOS_LENGUAJE[lenguaje].nombre, libreria, modulo),
        texto: await tp.file.include(`[[${TEMPLATE_COLECCION.funciones.modulo}]]`),
    };
}

module.exports = () => ({
    clase: (tp, libreriaPadre, representacionPrevia = null) => new Modulo(tp, libreriaPadre, representacionPrevia),
    crear: crearModulo,
});