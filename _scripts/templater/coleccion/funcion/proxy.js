
class Proxy {
    constructor (tp, manejoTipoDeDatos, representacionPrevia) {
        const { DATOS: { FUNCIONES: { proxy: DATOS_PROXY } } } = tp.user.constantes();

        this.config = DATOS_PROXY;
        this.manejoTipoDeDatos = manejoTipoDeDatos;

        if (![this.config.id, this.config.tipo, this.config.objeto].every(key => key in representacionPrevia)) {
            throw Error("No puede existir un proxy sin esos datos");
        }

        this.id = representacionPrevia[this.config.id];
        this.tipo = representacionPrevia[this.config.tipo];
        this.objeto = representacionPrevia[this.config.objeto];
        this.genericos = representacionPrevia[this.config.genericos]
            ? representacionPrevia[this.config.genericos] : [];
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        let [ respuetsa, indice ] = respuestaDada.split("-");

        switch (respuetsa) {
            default: 
                this.objeto.actualizarDatos(respuestaDada, generarPreguntas, generarError);
        }
    }

    generarPreguntas() {
        let { opciones: opcionesObjeto, valores: valoresObjeto } = this.objeto.generarPreguntas();

        let opciones = [];
        let valores = [];

        return { 
            opciones: [...opcionesObjeto, ...opciones ], 
            valores: [...valoresObjeto, ...valores ]
        };
    }

    generarRepresentacion() {
        return {
            [this.config.id]: this.id,
            [this.config.tipo]: this.tipo,
            [this.config.objeto]: this.objeto,
            [this.config.genericos]: this.genericos,
        }
    }

    esValido() {
        return this.id && this.objeto.esValido();
    }
}

module.exports = (tp, manejoTipoDeDatos, representacionPrevia) => new Proxy(tp, manejoTipoDeDatos, representacionPrevia);