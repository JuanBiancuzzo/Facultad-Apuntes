const MODIFICAR_METODO = "modificar metodo";
const ELIMINAR_METODO = "eliminar metodo";

const CANTIDAD_MINIMA = 0;

class TipoInterfaz {
    constructor(tp, padre, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { interfaz: DATOS_INTERFAZ, manejador: DATOS_MANEJADOR, tipoDeDato: { tipo: DATOS_TIPOS } },
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        if (!this.datosLenguaje.interfaz.tieneInterfaces) throw Error(`El lenguaje ${this.lenguajeActual} no tiene interfaz`);

        this.config = DATOS_INTERFAZ;
        this.manejador = DATOS_MANEJADOR;
        this.tipos = DATOS_TIPOS;
        this.simbolos = SIMBOLOS;
        this.padre = padre;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.nombre = representacionPrevia[this.config.nombre];
        this.metodos = [];

        let metodosPrevios = representacionPrevia[this.config.metodos] ? representacionPrevia[this.config.metodos] : [];
        for (let metodo of metodosPrevios) {
            this.metodos.push(tp.user.funcion().clase(tp, this, this.manejoTipoDeDatos, this.lenguajeActual, metodo));
        }

        this.crearMetodo = tp.user.funcion().clase.bind(null, tp, this, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearGenerico = tp.user.generico().clase.bind(null, tp, this, this.manejoTipoDeDatos, this.lenguajeActual);
    } 

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
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
                let nuevoMetodo = this.crearMetodo();
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

async function crearInterfaz() {
    
}

module.exports = () => ({
    clase: (tp, padre, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new TipoInterfaz(tp, padre, manejoTipoDeDatos, lenguaje, representacionPrevia),
    crear: crearInterfaz,
});