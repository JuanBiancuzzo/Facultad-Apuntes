const SALIR = "salir";

class Wikipedia {
    constructor(tp, seguidorRef, representacionPrevia) {
        // console.log("Wiki");
        const {
            SIMBOLOS, DATOS: { REFERENCIAS: { wiki: DATOS_WIKI, ...DATOS_REFERENCIA } }
        } = tp.user.constantes();

        this.describirFecha = tp.user.describir().fecha.bind(null, tp);
        this.simbolos = SIMBOLOS;
        this.config = { numReferencia: DATOS_REFERENCIA.numReferencia, ...DATOS_WIKI };
        this.seguidorRef = seguidorRef;

        this.nombre = representacionPrevia[this.config.nombre];
        this.fecha = representacionPrevia[this.config.fecha];
        this.url = representacionPrevia[this.config.url];
        this.numReferencia = representacionPrevia[this.config.numReferencia]
            ? representacionPrevia[this.config.numReferencia]
            : this.seguidorRef?.conseguirReferencia();
    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        if (respuesta == SALIR)
            return true;

        switch (respuesta) {
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre del artículo, donde antes era ${this.nombre}`
                        : "Nombre del artículo",
                    generarError.Quit("No se ingresó nombre del artículo")
                );
                break;

            case this.config.fecha:
                this.fecha = await generarPreguntas.fecha(
                    this.fecha
                        ? `Nueva fecha del artículo, donde antes era ${this.describirFecha(this.fecha)}`
                        : "Fecha del artículo",
                    generarError.Quit("No se ingresó un formato de fecha válido"),
                    generarError.Quit("No se ingresó la fecha del artículo")
                );
                break;

            case this.config.url:
                this.url = await generarPreguntas.prompt(
                    this.url
                        ? `Nuevo URL del artículo, donde antes era ${this.url}`
                        : "URL del artículo",
                    generarError.Quit("No se ingresó el url del artículo")
                )
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? `️ ️️${this.simbolos.modificar} Modificar el nombre del artículo, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del artículo`
        );

        opciones.push(this.config.fecha);
        valores.push(this.fecha
            ? `️ ️${this.simbolos.modificar} Modificar la fecha del artículo, donde era ${this.describirFecha(this.fecha)}`
            : ` ${this.simbolos.agregar} Fecha del artículo`
        );

        opciones.push(this.config.url);
        valores.push(this.url
            ? `️ ️${this.simbolos.modificar}️ Modificar el URL, donde era ${this.url}`
            : ` ${this.simbolos.agregar} URL del artículo`
        );

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        this.seguidorRef?.devolverReferencia(this.numReferencia);
    }

    esValido() {
        return this.nombre && this.fecha && this.url;
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
            [this.config.numReferencia]: this.numReferencia,
            [this.config.fecha]: this.fecha,
            [this.config.url]: this.url,
        };
    }

    describir() {
        return `Artículo de wikipedia: ${this.nombre}`;
    }

    obtenerNumReferencia() {
        return this.numReferencia;
    }

    obtenerReferencias(referencias = []) {
        referencias.push(this);
        return referencias;
    }
}

module.exports = (tp) => ({
    clase: (seguidorRef, representacionPrevia = {}) => new Wikipedia(tp, seguidorRef, representacionPrevia),
});