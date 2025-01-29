const SALIR = "salir";

class Return {
    constructor(tp, manejoTipoDeDatos, lenguaje = null) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { return: DATOS_RETURN },
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        this.config = DATOS_RETURN;
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
            [this.config.tipoDeDato]: this.informacion.tipoDeDato.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion),
            [this.config.descripcion]: TIPOS_DE_DEFAULT.simple,
        }));
    }
    
    async actualizarDatos(tp, datos, respuesta) {
        let salir = false;

        switch (respuesta) {
            case this.config.descripcion:
                datos[this.config.descripcion] = await this.preguntar.prompt(
                    tp, datos[this.config.descripcion]
                    ? `Nueva descripción del valor de retorno, donde antes era ${datos[this.config.descripcion]}`
                    : "Descripción del valor de retorno",
                    this.error.Quit("No se ingresó la descripción del valor de retorno")
                );
                break;

            case this.config.tipoDeDato:
                datos[this.config.tipoDeDato] = await this.crearPreguntas(
                    tp, this.informacion.tipoDeDato.obtenerDefault, this.informacion.tipoDeDato.actualizarDatos, 
                    this.informacion.tipoDeDato.generarPreguntas, "Ingresar los datos del tipo de dato", datos[this.config.tipoDeDato]
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

        opciones.push(this.config.descripcion);
        valores.push(datos[this.config.descripcion]
            ? ` ${this.simbolos.modificar} Modificar la descripción del valor de retorno, donde era ${datos[this.config.descripcion]}`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Descripción del valor de retorno`
        )

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

    describir(returnValue) {
        if (!this.esValido(returnValue)) return "";
        return this.informacion.tipoDeDato.describir(returnValue[this.config.tipoDeDato]);
    }

    esValido(datos) {
        if (!datos) return false;
        return this.informacion.tipoDeDato.esValido(datos[this.config.tipoDeDato]);
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null) => new Return(tp, manejoTipoDeDatos, lenguaje);
