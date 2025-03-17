const MODIFICAR_LENGUAJE = "modificar lenguaje";
const MODIFICAR_LIBRERIA = "modificar libreria";
const MODIFICAR_MODULO = "modificar modulo";
const ELIMINAR_MODULO = "eliminar modulo";

const ELEGIR_TIPO_ESTRUCTURA = "elegir estructura";
const MODIFICAR_TIPO_ESTRUCTURA = "modificar estructura";

/*
    Tenemos que elegir en donde se va a crear lo que se quiere crear
    Tenemos que elegir el tipo de lo que se quiere crear
        * Funcion
        * Clase
        * Struct
        * Interfaz
        * Enum
    Agarrar esa informacion, y crear todo lo que sea necesario, desde
        la libreria, modulo/s y estructura
*/
class Libreria {
    constructor(tp) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: DATOS_FUNCIONES, LENGUAJE: { lenguajes: DATOS_LENGUAJES }
            }, TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
        } = tp.user.constantes();
        const dv = app.plugins.plugins.dataview.api;

        this.simbolos = SIMBOLOS;
        this.tagPorNombre = tp.user.tagPorNombre;
        this.config = DATOS_FUNCIONES;
        this.tipos = DATOS_FUNCIONES.tipoDeDato.tipo;

        let lenguajesDisponibles = Object.values(DATOS_LENGUAJES);
        lenguajesDisponibles.remove(DATOS_LENGUAJES.default);

        this.lenguajesDisponibles = [];
        for (let lenguaje of lenguajesDisponibles) {
            let tagLenguaje = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[lenguaje]}`;
            let tagRepresentante = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes.self}`;

            let posibleLenguaje = dv.pages(`#${tagLenguaje} and #${tagRepresentante}`).first(); 
            if (!posibleLenguaje) continue;

            this.lenguajesDisponibles.push(tp.user.lenguaje().clase(tp, posibleLenguaje));
        }

        this.tipoEstructura = null;
        this.estructura = null;
        this.lenguaje = null;
        this.libreria = null;
        this.modulo = null;

        this.nuevaEstructura = {
            funcion:   tp.user.funcion().clase.bind(null, tp),
            clase:     tp.user.clase().clase.bind(null, tp),
            struct:    tp.user.struct().clase.bind(null, tp),
            interfaz:  tp.user.interfaz().clase.bind(null, tp),
            enum:      tp.user.enum().clase.bind(null, tp),
        };

        this.crearEstructura = {
            funcion:   tp.user.funcion().crear.bind(null, tp),
            clase:     tp.user.clase().crear.bind(null, tp),
            struct:    tp.user.struct().crear.bind(null, tp),
            interfaz:  tp.user.interfaz().crear.bind(null, tp),
            enum:      tp.user.enum().crear.bind(null, tp),
        };
    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        let mostrarEleccion = (elemento) => ` ${this.simbolos.elegir} ${elemento.descripcion()}`;
        switch (respuesta) {
            case this.tipos.lenguaje:
                this.lenguaje = this.lenguajesDisponibles.first();
                if (this.lenguajesDisponibles.length > 1) {
                    this.lenguaje = await generarPreguntas.suggester(
                        this.lenguajesDisponibles.map(mostrarEleccion), this.lenguajesDisponibles,
                        "Que lenguaje se quiere usar?", generarError.Quit("No se eligió el lenguaje")
                    );
                }
                break;

            case MODIFICAR_LENGUAJE:
                let nuevoLenguaje = this.lenguajesDisponibles.first();
                if (this.lenguajesDisponibles.length > 1) {
                    nuevoLenguaje = await generarPreguntas.suggester(
                        this.lenguajesDisponibles.map(mostrarEleccion), this.lenguajesDisponibles,
                        "Que lenguaje se va a usar ahora?", generarError.Quit("No se eligió el lenguaje")
                    );
                }

                if (!this.lenguaje.esIgual(nuevoLenguaje)) {
                    this.lenguaje = nuevoLenguaje;
                    this.libreria = null;
                    this.modulo = null;
                    this.estructura?.eliminar();
                }
                break;
            
            case this.tipos.libreria:
                let opcionesLibreria = this.lenguaje.obtenerLibreriasDisponibles();
                this.libreria = opcionesLibreria.first();
                if (opcionesLibreria.length > 1) {
                    this.libreria = await generarPreguntas.suggester(
                        opcionesLibreria.map(mostrarEleccion), opcionesLibreria,
                        "Que libreria se quiere usar?", generarError.Quit("No se eligió la libreria")
                    );
                }
                this.crearNuevaEstructura();
                break;

            case MODIFICAR_LIBRERIA:
                let nuevaOpcionesLibreria = this.lenguaje.obtenerLibreriasDisponibles();
                let nuevaLibreria = nuevaOpcionesLibreria.first();

                if (nuevaOpcionesLibreria.length > 1) {
                    nuevaLibreria = await generarPreguntas.suggester(
                        nuevaOpcionesLibreria.map(mostrarEleccion), nuevaOpcionesLibreria,
                        "Que libreria se va a usar ahora?", generarError.Quit("No se eligió la libreria")
                    );
                }

                if (!this.libreria.esIgual(nuevaLibreria)) {
                    this.libreria = nuevaLibreria;
                    this.modulo = null;
                    this.estructura?.eliminar();
                    this.crearNuevaEstructura();
                }
                break;

            case MODIFICAR_MODULO:
            case this.tipos.modulo:
                break;
            
            case ELIMINAR_MODULO:
                this.modulo = null;
                break;

            case MODIFICAR_TIPO_ESTRUCTURA:
            case ELEGIR_TIPO_ESTRUCTURA:
                let nuevoTipoEstructura = await generarPreguntas.suggester(
                    (tipo) => ` ${this.simbolos.elegir} ${tipo}`,
                    [ this.tipos.funcion, this.tipos.clase, this.tipos.struct, this.tipos.interfaz, this.tipos.enum ],
                    "Que tipo de estructura se quiere crear?",
                    generarError.Quit("No se eligió la estructura a crear")
                );

                if (this.tipoEstructura == nuevoTipoEstructura) 
                    break;

                this.tipoEstructura = nuevoTipoEstructura;
                this.estructura?.eliminar();
                this.crearNuevaEstructura();
                break;

            default:
                await this.estructura.actualizarDatos(respuesta, generarPreguntas, generarError);
        }
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        if (!this.lenguaje?.esValido()) {
            opciones.push(this.tipos.lenguaje);
            valores.push(` ${this.simbolos.agregar} Lenguaje`);

            return { opciones, valores };
        } 

        opciones.push(MODIFICAR_LENGUAJE);
        valores.push(`️ ${this.simbolos.modificar} Modificar el lenguaje, donde es ${this.lenguaje.descripcion()}`);

        if (!this.libreria?.esValido()) {
            opciones.push(this.tipos.libreria);
            valores.push(` ${this.simbolos.agregar} Libreria`);

            return { opciones, valores };
        } 

        opciones.push(MODIFICAR_LIBRERIA);
        valores.push(`️ ${this.simbolos.modificar} Modificar la libreria, donde es ${this.libreria.descripcion()}`);

        if (this.libreria.obtenerModulosDisponibles().length > 0) {
            if (!this.modulo?.esValido()) {
                opciones.push(this.tipos.modulo);
                valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Modulo`);

            } else {
                opciones.push(MODIFICAR_MODULO);
                valores.push(`️ ${this.simbolos.modificar} Modificar el modulo, donde es ${this.modulo.descripcion()}`);

                opciones.push(ELIMINAR_MODULO);
                valores.push(`️ ${this.simbolos.sacar} Eliminar el modulo, donde es ${this.modulo.descripcion()}`);
            }
        }

        if (!this.tipoEstructura) {
            opciones.push(ELEGIR_TIPO_ESTRUCTURA);
            valores.push(` ${this.simbolos.agregar} Tipo de estructura`);

        } else {
            opciones.push(MODIFICAR_TIPO_ESTRUCTURA);
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de estructura, donde es ${this.tipoEstructura}`);

            let { opciones: opcionesEstructura, valores: valoresEstructura } = this.estructura.generarPreguntas();
            opciones = opciones.concat(opcionesEstructura);
            valores = valores.concat(valoresEstructura);
        }

        return { opciones, valores };
    }

    generarRepresentacion() {
        return this.estructura?.generarRepresentacion();
    }

    esValido() {
        if (!this.lenguaje?.esValido())
            return false;

        if (!this.libreria?.esValido())
            return false;

        if (this.modulo && !this.modulo.esValido())
            return false;

        switch (this.tipoEstructura) {
            case this.tipos.funcion:
            case this.tipos.clase:
            case this.tipos.struct:
            case this.tipos.interfaz:
            case this.tipos.enum:
                return this.estructura.esValido();
            
            default:
                return false;
        }
    }

    obtenerUbicacion() {
        return this.modulo?.esValido()
            ? this.modulo
            : this.libreria;
    }

    crearNuevaEstructura() {
        let creadorEstructura;
        switch (this.tipoEstructura) {
            case this.tipos.funcion:    creadorEstructura = this.nuevaEstructura.funcion; break;
            case this.tipos.clase:      creadorEstructura = this.nuevaEstructura.clase; break;
            case this.tipos.struct:     creadorEstructura = this.nuevaEstructura.struct; break;
            case this.tipos.interfaz:   creadorEstructura = this.nuevaEstructura.interfaz; break;
            case this.tipos.enum:       creadorEstructura = this.nuevaEstructura.enum; break;

            default: return;
        }

        let lenguajeActual = this.lenguaje.obtenerLenguaje();
        let manejador = this.libreria.obtenerManejador();

        this.estructura = creadorEstructura(manejador, lenguajeActual);
    }

    crearDatos() {
        switch (this.tipoEstructura) {
            case this.tipos.funcion:    return this.crearEstructura.funcion;
            case this.tipos.clase:      return this.crearEstructura.clase;
            case this.tipos.struct:     return this.crearEstructura.struct;
            case this.tipos.interfaz:   return this.crearEstructura.interfaz;
            case this.tipos.enum:       return this.crearEstructura.enum;
            
            default: return {};
        }
    }
}

async function crearLibreria(tp) {
    const preguntar = tp.user.preguntar();

    let libreria = new Libreria(tp);
    await preguntar.formulario(tp, libreria, "Ingresar información de la libreria");

    let representacion = libreria.generarRepresentacion();
    return libreria.crearDatos(representacion);
}

module.exports = () => ({
    clase: (tp) => new Libreria(tp),
    crear: crearLibreria,
});