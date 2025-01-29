const SALIR = "salir";

class Parametro {
    constructor(tp, manejoTipoDeDatos, lenguaje = null) {
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
        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [this.config.nombreParametro]: TIPOS_DE_DEFAULT.simple,
            [this.config.tipoDeDato]: this.informacion.tipoDeDato.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion),
            [this.config.valorPorDefecto]: TIPOS_DE_DEFAULT.simple,
            [this.config.descripcion]: TIPOS_DE_DEFAULT.simple,
        }));
    }

    async actualizarDatos(tp, datos, respuesta) {
        let salir = false;

        switch (respuesta) {
            case this.config.nombreParametro:
                datos[this.config.nombreParametro] = await this.preguntar.prompt(
                    tp, datos[this.config.nombreParametro]
                    ? `Nuevo nombre del parámetro, donde antes era ${datos[this.config.nombreParametro]}`
                    : "Nombre del parámetro",
                    this.error.Quit("No se ingresó el nombre del parámetro")
                );
                break;

            case this.config.descripcion:
                datos[this.config.descripcion] = await this.preguntar.prompt(
                    tp, datos[this.config.descripcion]
                    ? `Nueva descripción del parámetro, donde antes era ${datos[this.config.descripcion]}`
                    : "Descripción del parámetro",
                    this.error.Quit("No se ingresó la descripción del parámetro")
                );
                break;

            case this.config.valorPorDefecto:
                datos[this.config.valorPorDefecto] = await this.preguntar.prompt(
                    tp, datos[this.config.valorPorDefecto]
                    ? `Nuevo valor por defecto del parámetro, donde antes era ${datos[this.config.valorPorDefecto]}`
                    : "Valor por defecto del parámetro",
                    this.error.Quit("No se ingresó el valor por defecto del parámetro")
                );
                break;

            case this.config.tipoDeDato:
                datos[this.config.tipoDeDato] = await this.crearPreguntas(
                    tp, this.informacion.tipoDeDato.obtenerDefault, this.informacion.tipoDeDato.actualizarDatos,
                    this.informacion.tipoDeDato.generarPreguntas, "Ingresar los datos del tipo de dato", 
                    datos[this.config.tipoDeDato]
                );
                break;

            case SALIR:
                salir = true;
                break;
        }

        return salir;
    }

    generarPreguntas(tp, datos) {
        let opciones = [], valores = [];

        opciones.push(this.config.nombreParametro);
        valores.push(datos[this.config.nombreParametro]
            ? ` ${this.simbolos.modificar} Modificar el nombre del parámetro, donde era ${datos[this.config.nombreParametro]}`
            : ` ${this.simbolos.agregar} Nombre del parámetro`
        )

        opciones.push(this.config.descripcion);
        valores.push(datos[this.config.descripcion]
            ? ` ${this.simbolos.modificar} Modificar la descripción del parámetro, donde era ${datos[this.config.descripcion]}`
            : ` ${this.simbolos.agregar} Descripción del parámetro`
        )

        if (this.datosLenguaje.parametroValorPorDefecto) {
            opciones.push(this.config.valorPorDefecto);
            valores.push(datos[this.config.valorPorDefecto]
                ? ` ${this.simbolos.modificar} Modificar el valor por defecto del parámetro, donde era ${datos[this.config.valorPorDefecto]}`
                : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Valor por defecto del parámetro`
            )
        }

        opciones.push(this.config.tipoDeDato);
        valores.push(this.informacion.tipoDeDato.esValido(datos[this.config.tipoDeDato])
            ? ` ${this.simbolos.modificar} Modificar el tipo de dato, donde era ${this.informacion.tipoDeDato.describir(datos[this.config.tipoDeDato]).replaceAll("\n", "\n\t")}`
            : ` ${this.simbolos.agregar} Tipo de dato`
        )

        if (this.esValido(datos)) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar(datos) {
        if (!datos) return;

        if (!datos[this.config.tipoDeDato])
            return;
        this.informacion.tipoDeDato.eliminar(datos[this.config.tipoDeDato]);
    }

    describir(parametro) {
        if (!this.esValido(parametro)) return "";

        let descripcionTipoDato = this.informacion.tipoDeDato.describir(parametro[this.config.tipoDeDato]);
        let textoDefault = "";

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                if (this.datosLenguaje.parametroValorPorDefecto && parametro[this.configg.valorPorDefecto]) {
                    textoDefault = `= ${parametro[this.config.valorPorDefecto]}`;
                }

                return `${parametro[this.config.nombreParametro]}: ${descripcionTipoDato} ${textoDefault}`;

            case this.lenguajes.rust:
                return `${parametro[this.config.nombreParametro]}: ${parametro[this.config.tipoDeDato]}`;

            case this.lenguajes.c:
                return `${parametro[this.config.tipoDeDato]} ${parametro[this.config.nombreParametro]}`;

            default:
                if (this.datosLenguaje.parametroValorPorDefecto && parametro[this.config.valorPorDefecto]) {
                    textoDefault = `= ${parametro[this.config.valorPorDefecto]}`;
                }
                return `${parametro[this.config.nombreParametro]}: ${descripcionTipoDato} ${textoDefault}`;
        }
    }

    esValido(datos) {
        if (!datos) return false;

        return [this.config.nombreParametro, this.config.descripcion].every(key => datos[key])
            && this.informacion.tipoDeDato.esValido(datos[this.config.tipoDeDato]);
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null) => new Parametro(tp, manejoTipoDeDatos, lenguaje);