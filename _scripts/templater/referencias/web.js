const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";

const CANTIDAD_MINIMA_AUTORES = 1;

const SALIR = "salir";

class Web {
    constructor(tp, seguidorRef, representacionPrevia) {
        // console.log("Web");
        const {
            SIMBOLOS, DATOS: { REFERENCIAS: { web: DATOS_WEB, ...DATOS_REFERENCIA } }
        } = tp.user.constantes();

        this.describirFecha = tp.user.describir().fecha.bind(null, tp);
        this.simbolos = SIMBOLOS;
        this.config = { numReferencia: DATOS_REFERENCIA.numReferencia, ...DATOS_WEB };
        this.seguidorRef = seguidorRef;

        this.autores = [];
        this.fecha = representacionPrevia[this.config.fecha];
        this.titulo = representacionPrevia[this.config.titulo];
        this.pagina = representacionPrevia[this.config.pagina];
        this.url = representacionPrevia[this.config.url];
        this.numReferencia = representacionPrevia[this.config.numReferencia]
            ? representacionPrevia[this.config.numReferencia]
            : this.seguidorRef?.conseguirReferencia();

        let autoresViejos = representacionPrevia[this.config.autore.self]
            ? representacionPrevia[this.config.autore.self] : [];
        for (let { [this.config.autore.nombre]: nombre, [this.config.autore.apellido]: apellido } of autoresViejos) {
            this.autores.push({ nombre, apellido });
        }
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case MODIFICAR_AUTOR:
                let { nombre: viejoNombre, apellido: viejoApellido } = this.autores[indice];

                let nuevoApellido = await generarPreguntas.prompt(
                    `Nuevo apellido, donde antes era ${viejoApellido}:`,
                    generarError.Quit("No se ingresa el apellido del autore de forma correcta")
                );

                let nuevoNombre = await generarPreguntas.prompt(
                    `Nuevo nombre, donde antes era ${viejoNombre}:`,
                    generarError.Quit("No se ingresa el nombre del autore de forma correcta")
                );

                this.autores[indice] = { nombre: nuevoNombre, apellido: nuevoApellido };
                break;

            case this.config.autore.self:
                this.autores.push({
                    apellido: await generarPreguntas.prompt(
                        "Apellido del autore",
                        generarError.Quit("No se ingresa el apellido del autore de forma correcta")
                    ),
                    nombre: await generarPreguntas.prompt(
                        "Nombre del autore",
                        generarError.Quit("No se ingresa el nombre del autore de forma correcta")
                    ),
                });
                break;

            case ELIMINAR_AUTOR:
                this.autores.pop();
                break;

            case this.config.fecha:
                this.fecha = await generarPreguntas.fecha(
                    this.fecha
                        ? `Nueva fecha de publicación, donde antes era ${this.describirFecha(this.fecha)}`
                        : "Fecha de publicación de la página",
                    generarError.Quit("No se ingresó un formato de fecha válido"),
                    generarError.Quit("No se ingresó la fecha de publicación de la página")
                );
                break;

            case this.config.titulo:
                this.titulo = await generarPreguntas.prompt(
                    this.titulo
                        ? `Nuevo título del artículo, donde antes era ${this.titulo}`
                        : "Título del artículo",
                    generarError.Quit("No se ingresó nombre del artículo")
                );
                break;

            case this.config.pagina:
                this.pagina = await generarPreguntas.prompt(
                    this.pagina
                        ? `Nuevo nombre de la página, donde antes era ${this.pagina}`
                        : "Nombre de la página",
                    generarError.Quit("No se ingresó nombre de la página")
                );
                break;

            case this.config.url:
                this.url = await generarPreguntas.prompt(
                    this.url
                        ? `Nuevo URL de la página, donde antes era ${this.url}`
                        : "URL de la página",
                    generarError.Quit("No se ingresó el url de la página")
                );
                break;
        }
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        for (let [indice, autore] of this.autores.entries()) {
            opciones.push(`${MODIFICAR_AUTOR}-${indice}`);
            valores.push(`️ ️️${this.simbolos.modificar} Modificar el autore ${autore.nombre} ${autore.apellido}`);
        }

        let cantidadAutores = this.autores.length;
        if (cantidadAutores > 0) {
            let ultimoAutore = this.autores[cantidadAutores - 1];
            opciones.push(ELIMINAR_AUTOR);
            valores.push(` ${this.simbolos.sacar} Eliminar ${ultimoAutore.nombre} ${ultimoAutore.apellido}`);
        }


        opciones.push(this.config.autore.self);
        valores.push(cantidadAutores < CANTIDAD_MINIMA_AUTORES
            ? ` ${this.simbolos.agregar} Nombre del autore`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Nombre del autore`
        );

        opciones.push(this.config.fecha);
        valores.push(this.fecha
            ? `️ ️${this.simbolos.modificar}️ Modificar la fecha de publicación, donde era ${this.describirFecha(this.fecha)}`
            : ` ${this.simbolos.agregar} Fecha de publicación`
        );

        opciones.push(this.config.titulo);
        valores.push(this.titulo
            ? `️ ️${this.simbolos.modificar} Modificar el título del artículo, donde era ${this.titulo}`
            : ` ${this.simbolos.agregar} Título del artículo`
        );

        opciones.push(this.config.pagina);
        valores.push(this.pagina
            ? `️ ️${this.simbolos.modificar}️ Modificar el nombre de la página, donde era ${this.pagina}`
            : ` ${this.simbolos.agregar} Nombre de la página`
        );

        opciones.push(this.config.url);
        valores.push(this.url
            ? `️ ️${this.simbolos.modificar}️ Modificar el URL, donde era ${this.url}`
            : ` ${this.simbolos.agregar} URL de la página`
        );

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        this.seguidorRef?.devolverReferencia(this.numReferencia);
    }

    esValido() {
        return this.fecha && this.titulo && this.pagina && this.url
            && this.autores.length >= CANTIDAD_MINIMA_AUTORES;
    }

    generarRepresentacion() {
        return {
            [this.config.titulo]: this.titulo,
            [this.config.numReferencia]: this.numReferencia,
            [this.config.fecha]: this.fecha,
            [this.config.pagina]: this.pagina,
            [this.config.url]: this.url,
            [this.config.autore.self]: this.autores
                .map(({ nombre, apellido }) => ({
                    [this.config.autore.nombre]: nombre,
                    [this.config.autore.apellido]: apellido,
                })),
        };
    }

    describir() {
        let autores = [];
        for (let autore of this.autores) {
            autores.push(`${autore.apellido}, ${autore.nombre[0]}.`);
        }

        return `${this.titulo} de ${autores.join(", ")}, publicado en ${this.pagina}`;
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
    clase: (seguidorRef, representacionPrevia = {}) => new Web(tp, seguidorRef, representacionPrevia),
});