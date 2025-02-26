const SALIR = "salir";

class Youtube {
    constructor(tp, seguidorRef, representacionPrevia) {
        // console.log("Youtube");
        const {
            SIMBOLOS, DATOS: { REFERENCIAS: { youtube: DATOS_YOUTUBE, ...DATOS_REFERENCIA } }
        } = tp.user.constantes();

        this.describirFecha = tp.user.describir().fecha.bind(null, tp);
        this.simbolos = SIMBOLOS;
        this.config = { numReferencia: DATOS_REFERENCIA.numReferencia, ...DATOS_YOUTUBE };
        this.seguidorRef = seguidorRef;

        this.nombre = representacionPrevia[this.config.nombreVideo];
        this.canal = representacionPrevia[this.config.nombreCanal];
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
            case this.config.nombreVideo:
                this.nobmre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre del video, donde antes era ${this.nombre}`
                        : "Nombre del video",
                    generarError.Quit("No se ingresó nombre del video")
                );
                break;

            case this.config.nombreCanal:
                this.canal = await generarPreguntas.prompt(
                    this.canal
                        ? `Nuevo nombre del canal, donde antes era ${this.canal}`
                        : "Nombre del canal",
                    generarError.Quit("No se ingresó nombre del canal")
                );
                break;

            case this.config.fecha:
                this.fecha = await generarPreguntas.fecha(
                    this.fecha
                        ? `Nueva fecha del video, donde antes era ${this.describirFecha(this.fecha)}`
                        : "Fecha del video",
                    generarError.Quit("No se ingresó un formato de fecha válido"),
                    generarError.Quit("No se ingresó la fecha del video")
                );
                break;

            case this.config.url:
                this.url = await generarPreguntas.prompt(
                    this.url
                        ? `Nuevo URL del video, donde antes era ${this.url}`
                        : "URL del video",
                    generarError.Quit("No se ingresó el url del video")
                )
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.nombreVideo);
        valores.push(this.nobmre
            ? `️ ${this.simbolos.modificar}️ Modificar el nombre del video, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del video`
        );

        opciones.push(this.config.nombreCanal);
        valores.push(this.canal
            ? `️ ${this.simbolos.modificar}️ Modificar el nombre del canal del video, donde era ${this.canal}`
            : ` ${this.simbolos.agregar} Nombre del canal del video`
        );

        opciones.push(this.config.fecha);
        valores.push(this.fecha
            ? `️ ${this.simbolos.modificar}️ Modificar la fecha del video, donde era ${this.describirFecha(this.fecha)}`
            : ` ${this.simbolos.agregar} Fecha del video`
        );

        opciones.push(this.config.url);
        valores.push(this.url
            ? `️ ${this.simbolos.modificar}️ Modificar el URL, donde era ${this.url}`
            : ` ${this.simbolos.agregar} URL del video`
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
        return this.nombre && this.canal && this.fecha && this.url;
    }

    generarRepresentacion() {
        return {
            [this.config.nombreVideo]: this.nombre,
            [this.config.nombreCanal]: this.canal,
            [this.config.numReferencia]: this.numReferencia,
            [this.config.fecha]: this.fecha,
            [this.config.url]: this.url,
        };
    }

    describir() {
        return `${this.nombre} de ${this.canal}`;
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
    clase: (seguidorRef, representacionPrevia = {}) => new Youtube(tp, seguidorRef, representacionPrevia),
});