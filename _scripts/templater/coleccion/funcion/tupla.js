const AGREGAR = "agregar";
const MODIFICAR = "modificar";
const ELIMINAR = "eliminar";

const CANTIDAD_MINIMA = 2;

const SALIR = "salir";

class TipoTupla {
    constructor(tp, manejoTipoDeDatos, lenguaje = null) {
        const { 
            SIMBOLOS, DATOS: { LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];


        if (!(this.datosLenguaje.tieneTupla)) throw Error(`El lenguaje ${this.lenguajeActual} no debería tener tuplas`);

        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.informacion = {
            _claseTipoDeDato: null,
            get tipoDeDato() {
                if (!this._claseTipoDeDato)
                    this._claseTipoDeDato = tp.user.tipoDeDato(tp, manejoTipoDeDatos, lenguaje);
                return this._claseTipoDeDato;
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
        this.esValido = this.esValido.bind(this);
    }

    obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion) {
        return crearFuncion(
            TIPOS_DE_DEFAULT.array,
            () => this.informacion.tipoDeDato.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion)
        );
    }

    async actualizarDatos(tp, datos, respuestaDada) {
        let salir = false;
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case AGREGAR:
                let nuevoTipoDeDato = await this.crearPreguntas(
                    tp, this.informacion.tipoDeDato.obtenerDefault, this.informacion.tipoDeDato.actualizarDatos, 
                    this.informacion.tipoDeDato.generarPreguntas, "Ingresar el tipo de dato de la tupla"
                );
                datos.push(nuevoTipoDeDato);
                break;

            case MODIFICAR:
                datos[indice] = await this.crearPreguntas(
                    tp, this.informacion.tipoDeDato.obtenerDefault, this.informacion.tipoDeDato.actualizarDatos, 
                    this.informacion.tipoDeDato.generarPreguntas, "Modificar el tipo de dato de la tupla", datos[indice]
                );
                break;

            case ELIMINAR:
                this.informacion.tipoDeDato.eliminar(datos[indice]);
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

        for (let [indice, tipoDeDato] of datos.entries()) {
            let descripcion = this.informacion.tipoDeDato.describir(tipoDeDato)
                .replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el tipo de dato, donde es ${descripcion}`);

            opciones.push(`${ELIMINAR}-${indice}`);
            valores.push(`️ ${this.simbolos.sacar} Eliminar el tipo de dato, donde es ${descripcion}`);
        }

        if (datos.length >= CANTIDAD_MINIMA) {
            opciones.push(AGREGAR);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Tipo de dato`);

        } else {
            opciones.push(AGREGAR);
            valores.push(` ${this.simbolos.agregar} Tipo de dato`);
        }

        if (this.esValido(datos)) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar(datos) {
        for (let tipoDeDato of datos) {
            this.informacion.tipoDeDato.eliminar(tipoDeDato);
        }
    }

    describir(datos) {
        if (!this.esValido(datos)) return "";

        let tiposDeDato = datos.map(tipoDeDato => this.informacion.tipoDeDato.describir(tipoDeDato));

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                return `tuple[${tiposDeDato.join(", ")}]`;

            case this.lenguajes.rust:
                return `(${tiposDeDato.join(", ")})`;

            default:
                return `[${tiposDeDato.join(", ")}]`;
        }
    }

    esValido(datos) {
        if (!datos) return false;

        return datos.length >= CANTIDAD_MINIMA 
            && datos.every(tipoDeDato => this.informacion.tipoDeDato.esValido(tipoDeDato));
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null) => new TipoTupla(tp, manejoTipoDeDatos, lenguaje);