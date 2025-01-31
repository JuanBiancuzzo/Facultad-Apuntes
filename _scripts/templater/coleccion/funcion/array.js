const MODIFICCAR_TIPO_DE_DATO = "modificar tipo de dato";

const SALIR = "salir";

class TipoArray {
    constructor(tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { array: DATOS_ARRAY },
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        this.config = DATOS_ARRAY;
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.cantidad = representacionPrevia[this.config.cantidad];
        if (representacionPrevia[this.config.tipoDeDato]) {
            this.tipoDeDato = tp.user.tipoDeDato(
                tp, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia[this.config.tipoDeDato]
            );
        }

        this.informacion = {
            nuevoTipoDeDato() {
                return tp.user.tipoDeDato(tp, this.manejoTipoDeDatos, this.lenguajeActual);
            }
        }
    } 

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        if (respuesta == SALIR) 
            return true;

        switch (respuesta) {
            case this.config.tipoDeDato:
                this.tipoDeDato = this.informacion.nuevoTipoDeDato();
                await generarPreguntas.formulario(this.tipoDeDato, "Ingresar el tipo de dato del array");
                break;

            case MODIFICCAR_TIPO_DE_DATO:
                await generarPreguntas.formulario(this.tipoDeDato, "Modificar el tipo de dato del array");
                break;

            case this.config.cantidad:
                let cantidad = await generarPreguntas.numero(
                    "Cantidad de elementos del array (tiene que ser >0)",
                    generarError.Quit("No se ingresó un número para la cantidad del array")
                );
                if (cantidad <= 0) throw generarError.Quit("Se ingresó un número negativo o cero");

                this.cantidad = cantidad;
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        if (this.tipoDeDato && this.tipoDeDato.esValido()) {
            let descripcion = this.tipoDeDato.descripcionCompleta().replaceAll("\n", "\n\t");
            opciones.push(MODIFICCAR_TIPO_DE_DATO);
            valores.push(` ${this.simbolos.modificar} Modificar la cantidad que tiene el array, donde era ${descripcion}`);

        } else {
            opciones.push(this.config.tipoDeDato);
            valores.push(` ${this.simbolos.agregar} Tipo de dato del array`);
        }

        if (this.datosLenguaje.arrayConCantidad) {
            opciones.push(this.config.cantidad);
            valores.push(datos[this.config.cantidad]
                ? ` ${this.simbolos.modificar} Modificar la cantidad que tiene el array, donde era ${datos[this.config.cantidad]}`
                : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Cantidad de elementos del array`
            );
        }

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        if (this.tipoDeDato) {
            this.tipoDeDato.eliminar();
        }
    }

    esValido() {
        return this.tipoDeDato && this.tipoDeDato.esValido();
    }

    generarRepresentacion() {
        return {
            [this.config.tipoDeDato]: this.tipoDeDato?.generarRepresentacion(),
            [this.config.cantidad]: this.cantidad,
        }
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";

        let tipoDeDato = this.tipoDeDato.describirArgumento();

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                return `list[${tipoDeDato}]`;

            case this.lenguajes.rust:
                return (!this.cantidad || this.cantidad <= 0)
                    ? `[${tipoDeDato}]`
                    : `[${tipoDeDato}; ${this.cantidad}]`;

            case this.lenguajes.c:
                return (!this.cantidad || this.cantidad <= 0)
                    ? `${tipoDeDato}[]`
                    : `${tipoDeDato}[${this.cantidad}]`;

            default:
                return (!this.cantidad || this.cantidad <= 0)
                    ? `${tipoDeDato}[]`
                    : `${tipoDeDato}[${this.cantidad}]`;
        }
    }

    descripcionArgumento() {
        if (!this.esValido()) return "";

        let tipoDeDato = this.tipoDeDato.describirArgumento();

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                return `list[${tipoDeDato}]`;

            case this.lenguajes.rust:
                return (!this.cantidad || this.cantidad <= 0)
                    ? `[${tipoDeDato}]`
                    : `[${tipoDeDato}; ${this.cantidad}]`;

            case this.lenguajes.c:
                return (!this.cantidad || this.cantidad <= 0)
                    ? `${tipoDeDato}[]`
                    : `${tipoDeDato}[${this.cantidad}]`;

            default:
                return (!this.cantidad || this.cantidad <= 0)
                    ? `${tipoDeDato}[]`
                    : `${tipoDeDato}[${this.cantidad}]`;
        }
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new TipoArray(tp, manejoTipoDeDatos, lenguaje, representacionPrevia);
