const MODIFICAR_INTERFAZ = "modificar";
const ELIMINAR_INTERFAZ = "eliminar";

const CANTIDAD_MINIMA = 0;

const SALIR = "salir";

class TipoGenerico {
    constructor(tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { generico: DATOS_GENERICO, tipoDeDato: { tipo: DATOS_TIPOS } },
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        if (!this.datosLenguaje.generico.tieneGenericos) throw Error(`El lenguaje ${this.lenguajeActual} no tiene interfaz`);

        this.config = DATOS_GENERICO;
        this.tipos = DATOS_TIPOS;
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.nombre = representacionPrevia[this.config.nombre];
        this.interfaces = [];

        let interfacesPrevias = representacionPrevia[this.config.interfaces] ? representacionPrevia[this.config.interfaces] : [];
        for (let metodo of interfacesPrevias) {
            this.interfaces.push(tp.user.interfaz(tp, this.manejoTipoDeDatos, this.lenguajeActual, metodo));
        }

        let lenguajeActual = this.lenguajeActual;
        this.informacion = {
            nuevaInterfaz() { return tp.user.interfaz(tp, manejoTipoDeDatos, lenguajeActual); },
        }
        this.clonar = this.generarClone.bind(this, tp);
    } 

    generarClone(tp) {
        return new TipoGenerico(tp, this.manejoTipoDeDatos, this.lenguajeActual, this.generarRepresentacion());
    }

    async definirGenericos(generarPreguntas, generarError) {

    }

    preguntarDatos(datosRecolectados = []) {
        for (let metodo of this.interfaces) {
            if (metodo?.esValido()) {
                metodo.preguntarDatos(datosRecolectados);
            }
        }
        return datosRecolectados;
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre del generico, donde antes era ${this.nombre}`
                        : "Nombre del generico",
                    generarError.Quit("No se ingresó el nombre del generico")
                );
                break;

            case this.config.interfaces:
                let nuevaInterfaz = this.informacion.nuevaInterfaz();
                await generarPreguntas.formulario(nuevaInterfaz, "Ingresar una interfaz para el generico");
                this.interfaces.push(nuevaInterfaz);
                break;

            case MODIFICAR_INTERFAZ:
                await generarPreguntas.formulario(this.interfaces[indice], "Modificar una interfaz para el generico");
                break;

            case ELIMINAR_INTERFAZ:
                this.interfaces[indice].eliminar();
                datos.splice(indice, 1);
                break;
        }
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre del generico, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del generico`
        )

        for (let [indice, generico] of this.interfaces.entries()) {
            let descripcion = generico.descripcionCompleta()
                .replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_INTERFAZ}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el generico, donde es ${descripcion}`);

            opciones.push(`${ELIMINAR_INTERFAZ}-${indice}`);
            valores.push(`️ ${this.simbolos.sacar} Eliminar el generico, donde es ${descripcion}`);
        }

        if (this.interfaces.length >= CANTIDAD_MINIMA) {
            opciones.push(this.config.interfaces);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Interfaz`);

        } else {
            opciones.push(this.config.interfaces);
            valores.push(` ${this.simbolos.agregar} Interfaz`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        for (let interfaz of this.interfaces) {
            interfaz.eliminar();
        }
    }

    esValido() {
        return this.nombre && this.interfaces.length >= CANTIDAD_MINIMA 
            && this.interfaces.every(interfaz => interfaz?.esValido());
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
            [this.config.interfaces]: this.interfaces
                .map(interfaz => interfaz?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
        }
    }

    descripcionCompleta() {
        if (!this.esValido()) {
            return "";
        }

        let descripcionInterfaces = this.interfaces.map(interfaz => interfaz.descripcionArgumento());

        switch (this.lenguajeActual) {
            case this.lenguajes.rust:
            default:
                let descripcion = `${this.nombre}`;
                if (descripcionInterfaces.length > 0) {
                    descripcion += `: ${descripcionInterfaces.join(" + ")}`;
                }
                return descripcion;
        }
    }

    descripcionArgumento() {
        return this.esValido() ? this.nombre : "";
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new TipoGenerico(tp, manejoTipoDeDatos, lenguaje, representacionPrevia);