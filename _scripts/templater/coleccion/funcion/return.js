const MODIFICCAR_TIPO_DE_DATO = "modificar tipo de dato";

class Return {
    constructor(tp, padre, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
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
        this.padre = padre;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.descripcion = representacionPrevia[this.config.describir];
        this.tipoDeDato = null;

        if (representacionPrevia[this.config.tipoDeDato]) {
            this.tipoDeDato = tp.user.tipoDeDato().clase(
                tp, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia[this.config.tipoDeDato]
            );
        }

        this.crearTipoDeDato = tp.user.tipoDeDato().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        
        this.clonar = this.generarClone.bind(this, tp);
    } 

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        switch (respuesta) {
            case this.config.descripcion:
                this.descripcion = await generarPreguntas.prompt(
                    this.descripcion
                        ? `Nueva descripción del valor de retorno, donde antes era ${this.descripcion}`
                        : "Descripción del valor de retorno",
                    generarError.Quit("No se ingresó la descripción del valor de retorno")
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

        opciones.push(this.config.descripcion);
        valores.push(this.descripcion
            ? ` ${this.simbolos.modificar} Modificar la descripción del valor de retorno, donde era ${this.descripcion}`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Descripción del valor de retorno`
        )

        if (this.tipoDeDato?.esValido()) {
            let descripcionTipoDeDato = this.tipoDeDato.descripcionCompleta()
                .replaceAll("\n", "\n\t");
            opciones.push(MODIFICCAR_TIPO_DE_DATO);
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de dato, donde era ${descripcionTipoDeDato}`);

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
        if (!this.tipoDeDato) return false;
        return this.tipoDeDato.esValido();
    }

    generarRepresentacion() {
        return {
            [this.config.tipoDeDato]: this.tipoDeDato?.generarRepresentacion(),
            [this.config.descripcion]: this.descripcion,
        }
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";
        return this.tipoDeDato.descripcionCompleta();
    }

    descripcionArgumento() {
        if (!this.esValido()) return "";
        return this.tipoDeDato.descripcionArgumento();
    }
}

module.exports = () => ({
    clase: (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new Return(tp, manejoTipoDeDatos, lenguaje, representacionPrevia),
})
