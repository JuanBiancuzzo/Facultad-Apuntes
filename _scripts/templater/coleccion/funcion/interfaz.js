const MODIFICAR_METODO = "modificar";
const ELIMINAR_METODO = "eliminar";

const CANTIDAD_MINIMA = 1;

const SALIR = "salir";

class TipoInterfaz {
    constructor(tp, manejoTipoDeDatos, lenguaje = null) {
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

        this.informacion = {
            _claseFuncion: null,
            get funcion() {
                if (this._claseFuncion === null)
                    this._claseFuncion = tp.user.funcion(tp, manejoTipoDeDatos, lenguaje);
                return this._claseFuncion;
            },
        };

        this.preguntar = tp.user.preguntar();
        this.error = tp.user.error();
        this.crearPreguntas = tp.user.crearPreguntas;

        this.obtenerDefault = this.obtenerDefault.bind(this);
        this.actualizarDatos = this.actualizarDatos.bind(this);
        this.generarPreguntas = this.generarPreguntas.bind(this);
        this.eliminar = this.eliminar.bind(this);
        this.describir = this.describir.bind(this);
        this.descripcionReducida = this.descripcionReducida.bind(this);
        this.esValido = this.esValido.bind(this);
    }

    obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion) {
        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [this.config.nombre]: TIPOS_DE_DEFAULT.simple,
            [this.config.metodos]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () => this.informacion.funcion.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion)
            ),
        }));
    }

    async actualizarDatos(tp, datos, respuestaDada) {
        let salir = false;
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                datos[this.config.nombre] = await this.preguntar.prompt(
                    tp, datos[this.config.nombre]
                    ? `Nuevo nombre de la interfaz, donde antes era ${datos[this.config.nombre]}`
                    : "Nombre de la interfaz",
                    this.error.Quit("No se ingresó el nombre de la interfaz")
                );
                break;

            case this.config.metodos:
                let nuevoMetodo = await this.crearPreguntas(
                    tp, this.informacion.funcion.obtenerDefault, this.informacion.funcion.actualizarDatos, 
                    this.informacion.funcion.generarPreguntas, "Ingresar un método para la interfaz"
                );
                datos[this.config.metodos].push(nuevoMetodo);
                break;

            case MODIFICAR_METODO:
                datos[this.config.metodos][indice] = await this.crearPreguntas(
                    tp, this.informacion.funcion.obtenerDefault, this.informacion.funcion.actualizarDatos, 
                    this.informacion.funcion.generarPreguntas, "Modificar un método para la interfaz", 
                    datos[this.config.metodos][indice]
                );
                break;

            case ELIMINAR_METODO:
                this.informacion.funcion.eliminar(datos[this.config.metodos][indice]);
                datos.splice(indice, 1);
                break;

            case SALIR:
                salir = true;
                break;
        }

        return salir;

    }

    generarPreguntas(tp, datos) {
        let opciones = [], valores = [];

        opciones.push(this.config.nombre);
        valores.push(datos[this.config.nombre]
            ? ` ${this.simbolos.modificar} Modificar el nombre de la interfaz, donde era ${datos[this.config.nombre]}`
            : ` ${this.simbolos.agregar} Nombre de la interfaz`
        )

        for (let [indice, metodo] of datos[this.config.metodos].entries()) {
            let descripcion = this.informacion.funcion.describir(metodo)
                .replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_METODO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el método, donde es ${descripcion}`);

            opciones.push(`${ELIMINAR_METODO}-${indice}`);
            valores.push(`️ ${this.simbolos.sacar} Eliminar el método, donde es ${descripcion}`);
        }

        if (datos[this.config.metodos].length >= CANTIDAD_MINIMA) {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Método`);

        } else {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} Método`);
        }

        if (this.esValido(datos)) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar(datos) {
        if (!datos) return;

        for (let metodo of datos[this.config.metodos]) {
            this.informacion.funcion.eliminar(metodo);
        }
    }

    describir(datos) {
        if (!this.esValido(datos)) return "";

        let metodos = datos[this.config.metodos].map(metodo => this.informacion.funcion.describir(metodo));

        switch (this.lenguajeActual) {
            case this.lenguajes.rust:
                return `trait ${datos[this.config.nombre]} {\n${metodos.map(metodo => `\t${metodo};\n`)}}`;

            default:
                return `interface ${datos[this.config.nombre]} then \n${metodos.map(metodo => `\t${metodo}\n`)}end`;
        }
    }

    descripcionReducida(datos) {
        if (!this.esValido(datos)) return "";
        return datos[this.config.nombre];
    }

    esValido(datos) {
        if (!datos) return false;

        return datos[this.config.nombre] && datos[this.config.metodos].length >= CANTIDAD_MINIMA
            && datos[this.config.metodos].every(metodo => this.informacion.funcion.esValido(metodo))
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null) => new TipoInterfaz(tp, manejoTipoDeDatos, lenguaje);