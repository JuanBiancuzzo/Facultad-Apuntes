const MODIFICAR_AUTOR = "modificar autore";
const ELIMINAR_AUTOR = "eliminar autore";
const MODIFICAR_EDITORE = "modificar editore";
const ELIMINAR_EDITORE = "eliminar editore";

const CANTIDAD_MINIMA_AUTORES = 1;
const CANTIDAD_MINIMA_EDITORES = 1;

const SALIR = "salir";

class Paper {
    constructor(tp, seguidorRef, representacionPrevia) {
        // console.log("Paper");
        const { SIMBOLOS, DATOS: { REFERENCIAS: { paper: DATOS_PAPER, ...DATOS_REFERENCIA } } } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.config = { numReferencia: DATOS_REFERENCIA.numReferencia, ...DATOS_PAPER };
        this.seguidorRef = seguidorRef;

        this.titulo = representacionPrevia[this.config.titulo];
        this.subtitulo = representacionPrevia[this.config.subtitulo];
        this.anio = representacionPrevia[this.config.anio];
        this.nombreRevista = representacionPrevia[this.config.nombreRevista];
        this.volumenRevista = representacionPrevia[this.config.volumenRevista];

        this.paginas = { inicio: null, final: null };
        let paginaPrevia = representacionPrevia[this.config.paginas.self]
        if (paginaPrevia) {
            this.paginas.inicio = paginaPrevia[this.config.paginas.inicio];
            this.paginas.final = paginaPrevia[this.config.paginas.final];
        }

        this.numeroRevista = representacionPrevia[this.config.numeroRevista];
        this.url = representacionPrevia[this.config.url];
        this.doi = representacionPrevia[this.config.doi];
        this.numReferencia = representacionPrevia[this.config.numReferencia]
            ? representacionPrevia[this.config.numReferencia]
            : this.seguidorRef?.conseguirReferencia();
        this.autores = [];
        this.editores = [];

        let autoresViejos = representacionPrevia[this.config.autore.self]
            ? representacionPrevia[this.config.autore.self] : [];
        for (let { [this.config.autore.nombre]: nombre, [this.config.autore.apellido]: apellido } of autoresViejos) {
            this.autores.push({ nombre, apellido });
        }

        let editoresViejos = representacionPrevia[this.config.editore.self]
            ? representacionPrevia[this.config.editore.self] : [];
        for (let { [this.config.editore.nombre]: nombre, [this.config.editore.apellido]: apellido } of editoresViejos) {
            this.editores.push({ nombre, apellido });
        }
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR) 
            return true;

        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case MODIFICAR_AUTOR:
                let { nombre: viejoNombre, apellido: viejoApellido } = this.autores[indice];

                let nuevoApellido = await generarPreguntas.prompt(
                    `Nuevo apellido del autore, donde antes era ${viejoApellido}:`,
                    generarError.Quit("No se ingresa el apellido del autore de forma correcta")
                );

                let nuevoNombre = await generarPreguntas.prompt(
                    `Nuevo nombre del autore, donde antes era ${viejoNombre}:`,
                    generarPreguntas.Quit("No se ingresa el nombre del autore de forma correcta")
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

            case this.config.titulo:
                this.titulo = await generarPreguntas.prompt(
                    this.titulo
                        ? `Nuevo título del paper, donde antes era ${this.titulo}`
                        : "Título del paper",
                    generarError.Quit("No se ingresó nombre del paper")
                );
                break;

            case this.config.subtitulo:
                this.subtitulo = await generarPreguntas.prompt(
                    this.subtitulo
                        ? `Nuevo subtítulo del paper, donde antes era ${this.subtitulo}`
                        : "Subtítulo del paper",
                    generarError.Quit("No se ingresó nombre del paper")
                );
                break;

            case this.config.anio:
                this.anio = await generarPreguntas.numero(
                    this.anio
                        ? `Nuevo año de publicación, donde antes era ${this.anio}`
                        : "Año de publicación",
                    generarError.Quit("No se ingresó año de publicación")
                );
                break;

            case this.config.nombreRevista:
                this.nombreRevista = await generarPreguntas.prompt(
                    this.nombreRevista
                        ? `Nuevo nombre de la revista, donde antes era ${this.nombreRevista}`
                        : "Nombre de la revista en la que se publicó",
                    generarError.Quit("No se ingresó nombre de la revista")
                );
                break;

            case this.config.volumenRevista:
                this.volumenRevista = await generarPreguntas.prompt(
                    this.volumenRevista
                        ? `Nuevo volumen de la revista, donde antes era ${this.volumenRevista}`
                        : "Volumen de la revista",
                    generarError.Quit("No se ingresó el volumen de la revista")
                );
                break;

            case this.config.paginas.self:
                let inicioPaginas = await generarPreguntas.numero(
                    this.paginas.inicio
                        ? `Nueva página de inicio del paper, donde antes era ${this.paginas.inicio}`
                        : "Página de inicio del paper",
                    generarError.Quit("No se ingresó el inicio del paper")
                );

                if (parseInt(inicioPaginas, 10) < 0) {
                    throw generarError.Quit("El inicio es un valor negativo");
                }

                let finalPaginas = await generarPreguntas.numero(
                    this.paginas.final
                        ? `Nueva página final del paper, donde antes era ${this.paginas.final}`
                        : "Página final del paper",
                    generarError.Quit("No se ingresó el final del paper")
                );

                if (parseInt(finalPaginas, 10) < parseInt(inicioPaginas, 10)) {
                    throw generarError.Quit("Termina antes de lo que empieza, la página final es más chica que el inicio");
                }

                this.paginas = { inicio: inicioPaginas, final: finalPaginas };
                break;

            case this.config.numeroRevista:
                this.numeroRevista = await generarPreguntas.numero(
                    this.numeroRevista
                        ? `Nuevo número (el issue) del informe, donde antes era ${this.numeroRevista}`
                        : "Número del informe (el issue)",
                    generarError.Quit("No se ingresó número del informe")
                );
                break;

            case MODIFICAR_EDITORE:
                let { nombre: viejoNombreEditore, apellido: viejoApellidoEditore } = this.editores[indice];

                let nuevoApellidoEditore = await generarPreguntas.prompt(
                    `Nuevo apellido del editore, donde antes era ${viejoApellidoEditore}:`,
                    generarError.Quit("No se ingresa el apellido del editore de forma correcta")
                );

                let nuevoNombreEditore = await generarPreguntas.prompt(
                    `Nuevo nombre del editore, donde antes era ${viejoNombreEditore}:`,
                    generarError.Quit("No se ingresa el nombre del editore de forma correcta")
                );

                this.editores[indice] = { nombre: nuevoNombreEditore, apellido: nuevoApellidoEditore };
                break;

            case this.config.editore.self:
                this.editores.push({
                    apellido: await generarPreguntas.prompt(
                        "Apellido del editore",
                        generarError.Quit("No se ingresa el apellido del editore de forma correcta")
                    ),
                    nombre: await generarPreguntas.prompt(
                        "Nombre del editore",
                        generarError.Quit("No se ingresa el nombre del editore de forma correcta")
                    ),
                });
                break;

            case ELIMINAR_EDITORE:
                this.editores.pop();
                break;

            case this.config.url:
                this.url = await generarPreguntas.prompt(
                    this.url
                        ? `Nuevo URL del paper, donde antes era ${this.url}`
                        : "URL del paper",
                    generarError.Quit("No se ingresó el url del paper")
                );
                this.doi = null;
                break;

            case this.config.doi:
                this.doi = await generarPreguntas.prompt(
                    this.doi
                        ? `Nuevo DOI del paper, donde antes era ${this.doi}`
                        : "DOI de la página",
                    error.Quit("No se ingresó el doi del paper")
                );
                this.url = null;
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        for (let [indice, autore] of this.autores.entries()) {
            opciones.push(`${MODIFICAR_AUTOR}-${indice}`);
            valores.push(`️ ️${this.simbolos.agregar}️ Modificar el autore ${autore.nombre} ${autore.apellido}`);
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

        opciones.push(this.config.anio);
        valores.push(this.anio
            ? `️ ️${this.simbolos.modificar}️ Modificar el año de publicación ${this.anio}`
            : ` ${this.simbolos.agregar} Año de publicación del paper`
        );

        opciones.push(this.config.titulo);
        if (this.titulo) {
            valores.push(` ${this.simbolos.modificar}️ Modificar el título del paper, donde era ${this.titulo}`);

            opciones.push(this.config.subtitulo);
            valores.push(this.subtitulo
                ? ` └-> ${this.simbolos.modificar} Modificar el subtítulo del paper, donde era ${this.subtitulo}`
                : ` └-> ${this.simbolos.agregar} ${this.simbolos.opcional} Subtítulo del paper`
            );

        } else {
            valores.push(` ${this.simbolos.agregar} Título del paper`);
        }

        opciones.push(this.config.nombreRevista);
        if (this.nombreRevista) {
            valores.push(`️ ${this.simbolos.modificar} Modificar el nombre de la revista, donde era ${this.nombreRevista}`);

            opciones.push(this.config.volumenRevista);
            if (this.volumenRevista) {
                valores.push(` └->️ ${this.simbolos.modificar} Modificar el volumen de la revista, donde era ${this.volumenRevista}`);

                opciones.push(this.config.numeroRevista);
                if (this.numeroRevista) {
                    valores.push(`     └->️ ${this.simbolos.modificar}️ Modificar el número de la revista, donde era ${this.numeroRevista}`);

                    opciones.push(this.config.paginas.self);
                    valores.push((this.paginas.inicio && this.paginas.final)
                        ? `         └-> ${this.simbolos.modificar}️ Modificar las páginas del paper, donde era ${this.paginas.inicio} - ${this.paginas.final}`
                        : `         └-> ${this.simbolos.agregar} Número de páginas del paper`
                    );

                } else {
                    valores.push(`     └-> ${this.simbolos.agregar} Número de la revista`);
                }

            } else {
                valores.push(` └-> ${this.simbolos.agregar} Volumen de la revista`);
            }

        } else {
            valores.push(` ${this.simbolos.agregar} Nombre de la revista`);
        }

        for (let [indice, editore] of this.editores.entries()) {
            opciones.push(`${MODIFICAR_EDITORE}-${indice}`);
            valores.push(`️ ️${this.simbolos.modificar} Modificar el editore ${editore.nombre} ${editore.apellido}`);
        }

        let cantidadEditores = this.editores.length;
        if (cantidadEditores > 0) {
            let ultimoEditore = this.editores[cantidadEditores - 1];
            opciones.push(ELIMINAR_EDITORE);
            valores.push(` ${this.simbolos.sacar} Eliminar ${ultimoEditore.nombre} ${ultimoEditore.apellido}`);
        }

        opciones.push(this.config.editore.self);
        valores.push(cantidadEditores < CANTIDAD_MINIMA_EDITORES
            ? ` ${this.simbolos.agregar} Nombre del editore`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Nombre del editore`
        );

        opciones.push(this.config.url);
        valores.push(this.url
            ? ` ┌-> ${this.simbolos.modificar}️ Modificar el URL del paper, donde era ${this.url}`
            : ` ┌-> ${this.simbolos.agregar} ${this.doi ? `${this.simbolos.opcional} ` : ``}URL del paper`
        );

        opciones.push(this.config.doi);
        valores.push(this.doi
            ? ` └-> ️${this.simbolos.modificar} Modificar el DOI del paper, donde era ${this.doi}`
            : ` └-> ${this.simbolos.agregar} ${this.url ? `${this.simbolos.opcional} ` : ""}DOI del paper`
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
        return this.autores.length >= CANTIDAD_MINIMA_AUTORES
            && this.editores.length >= CANTIDAD_MINIMA_EDITORES
            && this.titulo && this.anio && this.nombreRevista && this.volumenRevista && this.numeroRevista
            && (this.doi || this.url)
            && this.paginas.inicio && this.paginas.final;
    }

    generarRepresentacion() {
        return {
            [this.config.autore.self]: this.autores.map(autore => ({
                [this.config.autore.nombre]: autore.nombre,
                [this.config.autore.apellido]: autore.apellido,
            })),    
            [this.config.editore.self]: this.editores.map(editore => ({
                [this.config.editore.nombre]: editore.nombre,
                [this.config.editore.apellido]: editore.apellido,
            })),    
            [this.config.titulo]: this.titulo,
            [this.config.subtitulo]: this.subtitulo,
            [this.config.anio]: this.anio,
            [this.config.nombreRevista]: this.nombreRevista,
            [this.config.volumenRevista]: this.volumenRevista,
            [this.config.numeroRevista]: this.numeroRevista,
            [this.config.url]: this.url,
            [this.config.doi]: this.doi,
            [this.config.paginas.self]: {
                [this.config.paginas.inicio]: this.paginas.inicio,
                [this.config.paginas.final]: this.paginas.final,
            },
        };
    }

    describir() {
        let autores = [];
        for (let { nombre, apellido } of this.autores) {
            autores.push(`${nombre} ${apellido}`);
        }

        let nombre = this.titulo;
        if (this.subtitulo) nombre += `: ${this.subtitulo}`;

        return `${nombre} de ${autores.join(", ")}`;
    }

    obtenerNumReferencia() {
        return this.numReferencia;
    }

    obtenerReferencias(referencias = []) {
        referencias.push(this);
        return referencias;
    }
}

async function crearPaper(tp, seguidorRef, referenciaCreada = null) {
    if (!referenciaCreada) referenciaCreada = { valor: null };

}

module.exports = (tp) => ({
    clase: (seguidorRef, representacionPrevia = {}) => new Paper(tp, seguidorRef, representacionPrevia),
    crear: crearPaper.bind(null, tp),
});