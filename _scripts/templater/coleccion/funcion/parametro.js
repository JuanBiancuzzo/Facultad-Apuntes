const MODIFICCAR_TIPO_DE_DATO = "modificar tipo de dato";

class Parametro {
    constructor(tp, padre, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { parametro: DATOS_PARAMETROS },
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        this.config = DATOS_PARAMETROS;
        this.simbolos = SIMBOLOS;
        this.padre = padre;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.nombre = representacionPrevia[this.config.nombreParametro];
        this.descripcion = representacionPrevia[this.config.descripcion];
        this.valorPorDefecto = representacionPrevia[this.config.valorPorDefecto];
        if (representacionPrevia[this.config.tipoDeDato]) {
            this.tipoDeDato = tp.user.tipoDeDato().clase(
                tp, this, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia[this.config.tipoDeDato]
            );
        }
        
        this.crearTipoDeDato = tp.user.tipoDeDato().clase.bind(null, tp, this, this.manejoTipoDeDatos, this.lenguajeActual);
    } 

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        switch (respuesta) {
            case this.config.nombreParametro:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre del parámetro, donde antes era ${this.nombre}`
                        : "Nombre del parámetro",
                    generarError.Quit("No se ingresó el nombre del parámetro")
                );
                break;

            case this.config.descripcion:
                this.descripcion = await generarPreguntas.prompt(
                    this.descripcion
                        ? `Nueva descripción del parámetro, donde antes era ${this.descripcion}`
                        : "Descripción del parámetro",
                    generarError.Quit("No se ingresó la descripción del parámetro")
                );
                break;

            case this.config.valorPorDefecto:
                this.valorPorDefecto = await generarPreguntas.prompt(
                    this.valorPorDefecto
                        ? `Nuevo valor por defecto del parámetro, donde antes era ${this.valorPorDefecto}`
                        : "Valor por defecto del parámetro",
                    generarError.Quit("No se ingresó el valor por defecto del parámetro")
                );
                break;

            case this.config.tipoDeDato:
                this.tipoDeDato = this.crearTipoDeDato();
                await generarPreguntas.formulario(this.tipoDeDato, "Ingresar datos del tipo de dato");
                break;
            
            case MODIFICCAR_TIPO_DE_DATO:
                await generarPreguntas.formulario(this.tipoDeDato, "Modificar tipo de dato");
        }
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombreParametro);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre del parámetro, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del parámetro`
        )

        opciones.push(this.config.descripcion);
        valores.push(this.descripcion
            ? ` ${this.simbolos.modificar} Modificar la descripción del parámetro, donde era ${this.descripcion}`
            : ` ${this.simbolos.agregar} Descripción del parámetro`
        )

        if (this.datosLenguaje.parametro.valorPorDefecto) {
            opciones.push(this.config.valorPorDefecto);
            valores.push(this.valorPorDefecto
                ? ` ${this.simbolos.modificar} Modificar el valor por defecto del parámetro, donde era ${this.valorPorDefecto}`
                : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Valor por defecto del parámetro`
            )
        }

        if (this.tipoDeDato?.esValido()) {
            let descripcion = this.tipoDeDato.descripcionCompleta()
                .replaceAll("\n", "\n\t");
            opciones.push(MODIFICCAR_TIPO_DE_DATO);
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de dato, donde era ${descripcion}`);

        } else {
            opciones.push(this.config.tipoDeDato);
            valores.push(` ${this.simbolos.agregar} Tipo de dato`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        if (this.tipoDeDato) {
            this.tipoDeDato.eliminar();
        }
    }

    esValido() {
        return this.nombre && this.descripcion && this.tipoDeDato && this.tipoDeDato.esValido();
    }

    generarRepresentacion() {
        return {
            [this.config.nombreParametro]: this.nombre,
            [this.config.descripcion]: this.descripcion,
            [this.config.valorPorDefecto]: this.valorPorDefecto,
            [this.config.tipoDeDato]: this.tipoDeDato?.generarRepresentacion(),
        };
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";

        let descripcionTipoDato = this.tipoDeDato.descripcionCompleta();
        let textoDefault = "";

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                if (this.datosLenguaje.valorPorDefecto && this.valorPorDefecto) {
                    textoDefault = `= ${this.valorPorDefecto}`;
                }

                return `${this.nombre}: ${descripcionTipoDato} ${textoDefault}`;

            case this.lenguajes.rust:
                return `${this.nombre}: ${descripcionTipoDato}`;

            case this.lenguajes.c:
                return `${descripcionTipoDato} ${this.nombre}`;

            default:
                if (this.datosLenguaje.valorPorDefecto && this.valorPorDefecto) {
                    textoDefault = `= ${this.valorPorDefecto}`;
                }
                return `${this.nombre}: ${descripcionTipoDato} ${textoDefault}`;
        }
    }

    descripcionArgumento() {
        if (!this.esValido()) return "";

        let descripcionTipoDato = this.tipoDeDato.descripcionArgumento();
        let textoDefault = "";

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                if (this.datosLenguaje.valorPorDefecto && this.valorPorDefecto) {
                    textoDefault = `= ${this.valorPorDefecto}`;
                }

                return `${this.nombre}: ${descripcionTipoDato} ${textoDefault}`;

            case this.lenguajes.rust:
                return `${this.nombre}: ${descripcionTipoDato}`;

            case this.lenguajes.c:
                return `${descripcionTipoDato} ${this.nombre}`;

            default:
                if (this.datosLenguaje.valorPorDefecto && this.valorPorDefecto) {
                    textoDefault = `= ${this.valorPorDefecto}`;
                }
                return `${this.nombre}: ${descripcionTipoDato} ${textoDefault}`;
        }
    }
}

module.exports = () => ({
    clase: (tp, padre, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new Parametro(tp, padre, manejoTipoDeDatos, lenguaje, representacionPrevia),
});