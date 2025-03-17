const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";

const CANTIDAD_MINIMA_AUTORES = 1;

class Diccionario {
    constructor(tp, seguidorRef, representacionPrevia) {
        // console.log("Diccionariio online");
        const {
            SIMBOLOS, DATOS: { REFERENCIAS: { diccionario: DATOS_DICCIONARIO, ...DATOS_REFERENCIA } }
        } = tp.user.constantes();

        this.describirFecha = tp.user.describir().fecha.bind(null, tp);
        this.simbolos = SIMBOLOS;
        this.config = { numReferencia: DATOS_REFERENCIA.numReferencia, ...DATOS_DICCIONARIO };
        this.seguidorRef = seguidorRef;

        this.editorial = representacionPrevia[this.config.editorial];
        this.palabra = representacionPrevia[this.config.palabra];
        this.nombre = representacionPrevia[this.config.nombre];
        this.fecha = representacionPrevia[this.config.fecha];
        this.url = representacionPrevia[this.config.url];
        this.numReferencia = representacionPrevia[this.config.numReferencia]
            ? representacionPrevia[this.config.numReferencia]
            : this.seguidorRef?.conseguirReferencia();

    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        switch (respuesta) {
            case this.config.fecha:
                this.fecha = await generarPreguntas.fecha(
                    this.fecha
                        ? `Nueva fecha de recuperación, donde antes era ${this.describirFecha(this.fecha)}`
                        : "Fecha de recuperación",
                    generarError.Quit("No se ingresó un formato de fecha válido"),
                    generarError.Quit("No se ingresó la fecha de recuperación")
                );
                break;

            case this.config.palabra:
                this.palabra = await generarPreguntas.prompt(
                    this.palabra
                        ? `Nuevo palabra búscada, donde antes era ${this.palabra}`
                        : "Palabra búscada",
                    generarError.Quit("No se ingresó la palabra búscada")
                );
                break;

            case this.config.editorial:
                this.editorial = await generarPreguntas.prompt(
                    this.editorial
                        ? `Nueva editorial, donde antes era ${this.editorial}`
                        : "Editorial",
                    generarError.Quit("No se ingresó la editorial")
                );
                break;

            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre del diccionario, donde antes era ${this.nombre}`
                        : "Nombre del diccionario",
                    generarError.Quit("No se ingresó nombre del diccionario")
                );
                break;

            case this.config.url:
                this.url = await generarPreguntas.prompt(
                    this.url
                        ? `Nuevo URL del diccionario, donde antes era ${this.url}`
                        : "URL del diccionario",
                    generarError.Quit("No se ingresó el url del diccionario")
                );
                break;
        }
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.editorial);
        valores.push(this.editorial
            ? `️ ️${this.simbolos.modificar} Modificar la editorial, donde era ${this.editorial}`
            : ` ${this.simbolos.agregar} Editorial`
        );

        opciones.push(this.config.palabra);
        valores.push(this.palabra
            ? `️ ️${this.simbolos.modificar} Modificar la palabra búscada, donde era ${this.palabra}`
            : ` ${this.simbolos.agregar} Palabra búscada`
        );

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? `️ ️${this.simbolos.modificar}️ Modificar el nombre del diccionario, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del diccionario`
        );

        opciones.push(this.config.fecha);
        valores.push(this.fecha
            ? `️ ️${this.simbolos.modificar}️ Modificar la fecha de la recuperación, donde era ${this.describirFecha(this.fecha)}`
            : ` ${this.simbolos.agregar} Fecha de la recuperación`
        );

        opciones.push(this.config.url);
        valores.push(this.url
            ? `️ ️${this.simbolos.modificar}️ Modificar el URL, donde era ${this.url}`
            : ` ${this.simbolos.agregar} URL del diccionario`
        );

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        this.seguidorRef?.devolverReferencia(this.numReferencia);
    }

    esValido() {
        return this.editorial && this.palabra && this.nombre && this.fecha && this.url;
    }

    generarRepresentacion() {
        return {
            [this.config.numReferencia]: this.numReferencia,
            [this.config.editorial]: this.editorial,
            [this.config.palabra]: this.palabra,
            [this.config.fecha]: this.fecha,
            [this.config.nombre]: this.nombre,
            [this.config.url]: this.url,
        };
    }

    describir() {
        return `${this.palabra} en ${this.nombre}`;
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
    clase: (seguidorRef, representacionPrevia = {}) => new Diccionario(tp, seguidorRef, representacionPrevia),
});