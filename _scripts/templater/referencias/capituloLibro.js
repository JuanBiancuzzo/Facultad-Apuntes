const MODIFICAR_EDITORES = "modificar editores";
const ELIMINAR_EDITORE = "eliminar editores";

const CANTIDAD_MINIMA_EDITORES = 0;

const SALIR = "salir";

class Capitulo {
    constructor(tp, seguidorRef, representacionPrevia, libro) {
        // console.log("Capitulo");
        const { SIMBOLOS, DATOS: { REFERENCIAS: { capituloLibro: DATOS_CAPITULO, ...DATOS_REFERENCIA } } } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.config = { numReferencia: DATOS_REFERENCIA.numReferencia, ...DATOS_CAPITULO };
        this.seguidorRef = seguidorRef;

        this.nombre = representacionPrevia[this.config.nombre];
        this.numero = representacionPrevia[this.config.numero];
        this.numReferencia = representacionPrevia[this.config.numReferencia]
            ? representacionPrevia[this.config.numReferencia]
            : this.seguidorRef?.conseguirReferencia();
        this.libro = libro;

        this.editores = [];
        this.paginas = { inicio: null, final: null };
        let paginaPrevia = representacionPrevia[this.config.paginas.self]
        if (paginaPrevia) {
            this.paginas.inicio = paginaPrevia[this.config.paginas.inicio];
            this.paginas.final = paginaPrevia[this.config.paginas.final];
        }

        let editoresPrevios = representacionPrevia[this.config.editore.self]
            ? representacionPrevia[this.config.editore.self] : [];
        for (let { [this.config.editore.nombre]: nombre, [this.config.editore.apellido]: apellido } of editoresPrevios) {
            this.editores.push({ nombre, apellido });
        }
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR)
            return true;

        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.numero:
                this.numero = await generarPreguntas.numero(
                    this.numero
                        ? `Nuevo número del capítulo, donde antes era ${this.numero}`
                        : "Número del capítulo",
                    generarError.Quit("No se ingresó el número del capítulo")
                );
                break;

            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre del capítulo, donde antes era ${this.nombre}`
                        : "Nombre del capítulo",
                    generarError.Quit("No se ingresó el nombre del capítulo")
                )
                break;

            case MODIFICAR_EDITORES:
                let { nombre: viejoNombre, apellido: viejoApellido } = this.editores[indice];

                let nuevoApellido = await generarPreguntas.prompt(
                    `Nuevo apellido del autore, donde antes era ${viejoApellido}:`,
                    generarError.Quit("No se ingresa el apellido del autore de forma correcta")
                );

                let nuevoNombre = await generarPreguntas.prompt(
                    `Nuevo nombre del autore, donde antes era ${viejoNombre}:`,
                    generarError.Quit("No se ingresa el nombre del autore de forma correcta")
                );

                this.editores[indice] = { nombre: nuevoNombre, apellido: nuevoApellido };
                break;

            case this.config.editore.self:
                this.editores.push({
                    nombre: await generarPreguntas.prompt(
                        "Apellido del autore",
                        generarError.Quit("No se ingresa el apellido del autore de forma correcta")
                    ),
                    apellido: await generarPreguntas.prompt(
                        "Nombre del autore",
                        generarError.Quit("No se ingresa el nombre del autore de forma correcta")
                    ),
                });
                break;

            case ELIMINAR_EDITORE:
                this.editores.pop();
                break;

            case this.config.paginas.self:
                let inicioPaginas = await generarPreguntas.numero(
                    this.paginas.inicio
                        ? `Nueva página de inicio del capitulo, donde antes era ${this.paginas.inicio}`
                        : "Página de inicio del capitulo",
                    generarError.Quit("No se ingresó el inicio del capitulo")
                );

                if (parseInt(inicioPaginas, 10) < 0) {
                    throw generarError.Quit("El inicio es un valor negativo");
                }

                let finalPaginas = await generarPreguntas.numero(
                    this.paginas.final
                        ? `Nueva página final del capitulo, donde antes era ${this.paginas.final}`
                        : "Página final del capitulo",
                    generarError.Quit("No se ingresó el final del capitulo")
                );

                if (parseInt(finalPaginas, 10) < parseInt(inicioPaginas, 10)) {
                    throw generarError.Quit("Termina antes de lo que empieza, la página final es más chica que el inicio");
                }

                this.paginas = { inicio: inicioPaginas, final: finalPaginas };
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.numero);
        valores.push(this.numero
            ? ` ️${this.simbolos.modificar} Modificar el número del capítulo, donde era ${this.numero}`
            : ` ${this.simbolos.agregar} Número del capítulo`
        );

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? `️ ${this.simbolos.modificar} Modificar el nombre del capítulo, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Nombre del capítulo`
        );

        for (let [indice, editore] of this.editores.entries()) {
            let { nombre, apellido } = editore;
            opciones.push(`${MODIFICAR_EDITORES}-${indice}`);
            valores.push(`️️ ${this.simbolos.modificar} Modificar el editore ${nombre} ${apellido}`);
        }

        let cantidadEditores = this.editores.length;
        if (cantidadEditores > 0) {
            let { nombre, apellido } = this.editores[cantidadEditores - 1];
            opciones.push(ELIMINAR_EDITORE);
            valores.push(` ${this.simbolos.sacar} Eliminar ${nombre} ${apellido}`);
        }

        opciones.push(this.config.editore.self);
        valores.push(cantidadEditores < CANTIDAD_MINIMA_EDITORES
            ? ` ${this.simbolos.agregar} Nombre del editore`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Nombre del editore`
        );

        opciones.push(this.config.paginas.self);
        valores.push((this.paginas.inicio && this.paginas.final)
            ? ` ${this.simbolos.modificar} Modificar las páginas del capítulo, donde era ${this.paginas.inicio} - ${this.paginas.final}`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Número de páginas del capítulo`
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
        return this.numero && this.editores.length >= CANTIDAD_MINIMA_EDITORES;
    }

    generarRepresentacion() {
        return {
            [this.config.numero]: this.numero,
            [this.config.nombre]: this.nombre,
            [this.config.numReferencia]: this.numReferencia,
            [this.config.editore.self]: this.editores
                .map(({ nombre, apellido }) => ({
                    [this.config.editore.nombre]: nombre,
                    [this.config.editore.apellido]: apellido,
                })),
            [this.config.paginas.self]: {
                [this.config.paginas.inicio]: this.paginas.inicio,
                [this.config.paginas.final]: this.paginas.final,
            },
        };
    }

    describir() {
        let textoCapitulo = `Capítulo ${this.numero}`;
        if (this.nombre) textoCapitulo += `: ${this.nombre}`;
        if (this.paginas.inicio && this.paginas.final) {
            textoCapitulo += ` p. ${this.paginas.inicio}-${this.paginas.final}`;
        }

        textoCapitulo += ` del libro ${this.libro.describir()}`;
        return textoCapitulo;
    }

    describirReducido() {
        let textoCapitulo = `Capítulo ${this.numero}`;
        if (this.nombre) textoCapitulo += `: ${this.nombre}`;

        return textoCapitulo;
    }

    obtenerNumReferencia() {
        return this.numReferencia;
    }

    obtenerReferencias(referencias = []) {
        referencias.push(this);
        return referencias;
    }
}

async function crearCapitulo(tp, seguidorRef, referenciaCreada = null) {
    if (!referenciaCreada) referenciaCreada = { valor: null };

}

module.exports = (tp) => ({
    clase: (seguidorRef = null, representacionPrevia = {}, padre = null) => new Capitulo(tp, seguidorRef, representacionPrevia, padre),
    crear: crearCapitulo.bind(null, tp),
});