const MODIFICAR_METODO = "modificar";
const ELIMINAR_METODO = "eliminar";

const CANTIDAD_MINIMA = 0;

const SALIR = "salir";

class TipoInterfaz {
    constructor(tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { interfaz: DATOS_INTERFAZ },
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        if (!this.datosLenguaje.genericos) throw Error(`El lenguaje ${this.lenguajeActual} no tiene genericos`);

        this.config = DATOS_INTERFAZ;
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.nombre = representacionPrevia[this.config.nombre];
        this.metodos = [];

        let metodosPrevios = representacionPrevia[this.config.metodos] ? representacionPrevia[this.config.metodos] : [];
        for (let metodo of metodosPrevios) {
            this.metodos.push(tp.user.funcion(tp, this.manejoTipoDeDatos, this.lenguajeActual, metodo));
        }

        let lenguajeActual = this.lenguajeActual;
        this.informacion = {
            nuevoMetodo() { return tp.user.funcion(tp, manejoTipoDeDatos, lenguajeActual); }
        }
    } 

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR)
            return true;

        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre de la interfaz, donde antes era ${this.nombre}`
                        : "Nombre de la interfaz",
                    generarError.Quit("No se ingresó el nombre de la interfaz")
                );
                break;

            case this.config.metodos:
                let nuevoMetodo = this.informacion.nuevoMetodo();
                await generarPreguntas.formulario(nuevoMetodo, "Ingresar un método para la interfaz");
                this.metodos.push(nuevoMetodo);
                break;

            case MODIFICAR_METODO:
                await generarPreguntas.formulario(this.metodos[indice], "Modificar un método para la interfaz");
                break;

            case ELIMINAR_METODO:
                this.metodos[indice].eliminar();
                datos.splice(indice, 1);
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre de la interfaz, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre de la interfaz`
        )

        for (let [indice, metodo] of this.metodos.entries()) {
            let descripcion = metodo.descripcionCompleta()
                .replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_METODO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el método, donde es ${descripcion}`);

            opciones.push(`${ELIMINAR_METODO}-${indice}`);
            valores.push(`️ ${this.simbolos.sacar} Eliminar el método, donde es ${descripcion}`);
        }

        if (this.metodos.length >= CANTIDAD_MINIMA) {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Método`);

        } else {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} Método`);
        }

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        for (let metodo of this.metodos) {
            metodo.eliminar();
        }
    }

    esValido() {
        return this.nombre && this.metodos.length >= CANTIDAD_MINIMA 
            && this.metodos.every(metodo => metodo && metodo.esValido());
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
            [this.config.metodos]: this.metodos
                .map(metodo => metodo?.generarRepresentacion())
                .filter(representacion => representacion !== undefined)
        }
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";

        let descripcionMetodos = this.metodos.map(metodo => metodo.descripcionArgumento());

        switch (this.lenguajeActual) {
            case this.lenguajes.rust:
                return `trait ${this.nombre} {\n${descripcionMetodos.map(metodo => `\t${metodo};\n`)}}`;

            default:
                return `interface ${this.nombre} then \n${descripcionMetodos.map(metodo => `\t${metodo}\n`)}end`;
        }
    }

    descripcionArgumento() {
        return this.esValido() ? this.nombre : "";
    }

    generarSelf() {
        let descripcion = () => {
            return `Self ${this.nombre ? this.nombre : ""}`;
        };
        return {
            descripcionCompleta: descripcion,
            descripcionArgumento: () => descripcion,
            esValido: () => true,
        }
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new TipoInterfaz(tp, manejoTipoDeDatos, lenguaje, representacionPrevia);