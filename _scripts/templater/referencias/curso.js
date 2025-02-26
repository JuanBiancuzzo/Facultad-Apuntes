const MODIFICAR_PROFESOR = "modificar profesore";
const ELIMINAR_PROFESOR = "eliminar profesore";

const CANTIDAD_MINIMA_PROFESORES = 1;

const SALIR = "salir";

class Curso {
    constructor(tp, seguidorRef, representacionPrevia) {
        // console.log("Curso");
        const {
            SIMBOLOS, CARACTERES_INVALIDOS, TAGS: { curso: TAGS_CURSO },
            DATOS: { REFERENCIAS: { curso: DATOS_CURSO, ...DATOS_REFERENCIA }, CURSO: DATOS_ARCHIVO_CURSO },
        } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        // this.caracteresInvalidos = CARACTERES_INVALIDOS;
        // this.tags = TAGS_CURSO;
        this.config = { numReferencia: DATOS_REFERENCIA.numReferencia, ...DATOS_CURSO};
        // this.archivo = DATOS_ARCHIVO_CURSO;
        this.seguidorRef = seguidorRef;

        this.profesores = [];
        this.fecha = representacionPrevia[this.config.fecha];
        this.nombre = representacionPrevia[this.config.nombre];
        this.pagina = representacionPrevia[this.config.pagina];
        this.url = representacionPrevia[this.config.url];
        this.numReferencia = representacionPrevia[this.config.numReferencia]
            ? representacionPrevia[this.config.numReferencia]
            : this.seguidorRef?.conseguirReferencia();

        let profesoresPrevios = representacionPrevia[this.config.profesore.self]
            ? representacionPrevia[this.config.profesore.self] : [];
        for (let { [this.config.profesore.nombre]: nombre, [this.config.profesore.apellido]: apellido } of profesoresPrevios) {
            this.profesores.push({ nombre, apellido });
        }
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR)
            return true;
        
        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case MODIFICAR_PROFESOR:
                let { nombre: nombreViejo, apellido: viejoApellido } = this.profesores[indice];

                let nuevoApellido = await generarPreguntas.prompt(
                    `Nuevo apellido, donde antes era ${viejoApellido}:`,
                    generarError.Quit("No se ingresa el apellido del profesore de forma correcta")
                );

                let nuevoNombre = await generarPreguntas.prompt(
                    `Nuevo nombre, donde antes era ${viejoNombre}:`,
                    generarError.Quit("No se ingresa el nombre del profesore de forma correcta")
                );

                this.profesores[indice] = { nombre: nuevoNombre, apellido: nuevoApellido };
                break;

            case this.config.profesore.self:
                this.profesores.push({
                    nombre: await generarPreguntas.prompt(
                        "Apellido del profesore",
                        generarError.Quit("No se ingresa el apellido del profesore de forma correcta")
                    ),
                    apellido: await generarPreguntas.prompt(
                        "Nombre del profesore",
                        generarError.Quit("No se ingresa el nombre del profesore de forma correcta")
                    ),
                });
                break;

            case ELIMINAR_PROFESOR:
                this.profesores.pop();
                break;

            case this.config.fecha:
                this.fecha = await generarPreguntas.numero(
                    this.fecha
                        ? `Nuevo año de creación, donde antes era ${this.fecha}`
                        : "Año de creación del curso",
                    generarError.Quit("No se ingresó año de creación del curso")
                );
                break;

            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre del curso, donde antes era ${this.nombre}`
                        : "Nombre del curso",
                    generarError.Quit("No se ingresó el nombre del curso")
                );

                /*
                const dv = app.plugins.plugins.dataview.api;
                let cursoExistente = dv.pages(`#${TAGS_CURSO.self}/${TAGS_CURSO.curso}`)
                    .find(curso => curso[DATOS_ARCHIVO_CURSO.nombre] == nombreCurso);

                if (cursoExistente || CARACTERES_INVALIDOS.some(caracterInvalido => nombreCurso.includes(caracterInvalido)))
                    throw error.Quit("Nombre de curso invalido");

                datos[DATOS_CURSO.nombre] = nombreCurso;
                */
                break;

            case this.config.pagina:
                this.pagina = await generarPreguntas.prompt(
                    this.pagina
                        ? `Nuevo nombre de la página del curso, donde antes era ${this.pagina}`
                        : "Nombre de la página del curso",
                    generarError.Quit("No se ingresó el nombre de la página del curso")
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

        return false;
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        for (let [indice, profesore] of this.profesores.entries()) {
            opciones.push(`${MODIFICAR_PROFESOR}-${indice}`);
            valores.push(`️ ️${this.simbolos.modificar}️ Modificar el profesore ${profesore.nombre} ${profesore.apellido}`);
        }

        let cantidadProfesoes = this.profesores.length;
        if (cantidadProfesoes > 0) {
            let ultimoProfesor = this.profesores[cantidadProfesoes - 1];
            opciones.push(ELIMINAR_PROFESOR);
            valores.push(` ${this.simbolos.sacar} Eliminar ${ultimoProfesor.nombre} ${ultimoProfesor.apellido}`);
        }

        opciones.push(this.config.profesore.self);
        valores.push(cantidadProfesoes < CANTIDAD_MINIMA_PROFESORES
            ? ` ${this.simbolos.agregar} Nombre del profesore`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Nombre del profesore`
        );

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? `️ ️${this.simbolos.modificar}️ Modificar el nombre del curso, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del curso`
        );

        opciones.push(this.config.pagina);
        valores.push(this.pagina
            ? `️ ️${this.simbolos.modificar}️ Modificar el nombre de la página del curso, donde era ${this.pagina}`
            : ` ${this.simbolos.agregar} Nombre de la página del curso`
        );

        opciones.push(this.config.fecha);
        valores.push(this.fecha
            ? `️ ️${this.simbolos.modificar}️ Modificar el año de creación del curso, donde era ${this.fecha}`
            : ` ${this.simbolos.agregar} Año de creación del curso`
        );

        opciones.push(this.config.url);
        valores.push(this.url
            ? `️ ️${this.simbolos.modificar} Modificar el URL, donde era ${this.url}`
            : ` ${this.simbolos.agregar} URL de la página`
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
        return this.fecha && this.nombre && this.pagina && this.url
            && this.profesores.length >= CANTIDAD_MINIMA_PROFESORES;
    }

    generarRepresentacion() {
        return {
            [this.config.profesore.self]: this.profesores
                .map(({ nombre, apellido }) => ({
                    [this.config.profesore.nombre]: nombre,
                    [this.config.profesore.apellido]: apellido,
                })),
            [this.config.fecha]: this.fecha,
            [this.config.nombre]: this.nombre,
            [this.config.pagina]: this.pagina,
            [this.config.url]: this.url,
            [this.config.numReferencia]: this.numReferencia,
        }
    }

    describir() {
        let autores = [];
        for (let { nombre, apellido } of this.profesores) {
            autores.push(`${apellido}, ${nombre[0]}.`);
        }

        return `${this.nombre} de ${autores.join(", ")}, publicado en ${this.pagina}`;
    }

    obtenerNumReferencia() {
        return this.numReferencia;
    }

    obtenerReferencias(referencias = []) {
        referencias.push(this);
        return referencias;
    }
}

async function crearCurso(tp, seguidorRef, referenciaCreada = null) {
    if (!referenciaCreada) referenciaCreada = { valor: null };

}

module.exports = (tp) => ({
    clase: (seguidorRef, representacionPrevia = {}) => new Curso(tp, seguidorRef, representacionPrevia),
    crear: crearCurso.bind(null, tp),
});