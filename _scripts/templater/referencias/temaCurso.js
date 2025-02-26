const MODIFICAR_PROFESOR = "modificar profesor";
const ELIMINAR_PROFESOR_AT = "eliminar profesor en posicion";

const CANTIDAD_MINIMA_PROFESORES = 1;

const SALIR = "salir";

class TemaCurso {
    constructor(tp, seguidorRef, representacionPrevia) {
        // console.log("Tema curso");
        const {
            TAGS: { curso: TAGS_CURSO }, SIMBOLOS, 
            DATOS: { 
                CURSO: DATOS_ARCHIVO_CURSO,
                REFERENCIAS: { temaCurso: DATOS_TEMA, curso: DATOS_CURSO, ...DATOS_REFERENCIA } 
            }
        } = tp.user.constantes();
        const dv = app.plugins.plugins.dataview.api;

        this.simbolos = SIMBOLOS;
        this.config = { numReferencia: DATOS_REFERENCIA.numReferencia, ...DATOS_TEMA };
        this.configCurso = DATOS_CURSO;
        this.seguidorRef = seguidorRef;

        this.nombre = representacionPrevia[this.config.nombre];
        this.numero = representacionPrevia[this.config.numero];
        this.parte = representacionPrevia[this.config.parte];
        this.curso = dv.page(representacionPrevia[this.config.curso].path);
        this.numProfesores = representacionPrevia[this.config.numProfesore]
            ? representacionPrevia[this.config.numProfesore] : [];
        this.numReferencia = representacionPrevia[this.config.numReferencia]
            ? representacionPrevia[this.config.numReferencia]
            : this.seguidorRef?.conseguirReferencia();

        let tagsCurso = tp.user.obtenerTag(tp, this.curso[DATOS_ARCHIVO_CURSO.tags])
            .map(tag => `#${tag}`);

        this.otrosTemas = dv.pages(`(${tagsCurso.join(" or ")}) and #${TAGS_CURSO.self}/${TAGS_CURSO.resumen}`)
            .filter(tema => tema[this.config.numReferencia] != this.numReferencia)
            .map(tema => ({ parte: tema.parte, nombre: tema.nombreTema }));

        this.profesores = [];
        for (let { [this.configCurso.profesore.nombre]: nombre, [this.configCurso.profesore.apellido]: apellido } of this.curso[this.configCurso.profesore.self]) {
            this.profesores.push({ nombre, apellido });
        }

        if (this.profesores.length == 1 && this.numProfesores.length == 0) {
            this.numProfesores.push(0);
        }
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR)
            return true;
        
        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                let eleccion = AGREGAR_TEMA;
                let nombreTema;
                if (this.otrosTemas.length > 0) {
                    eleccion = await generarPreguntas.suggester(
                        [` ${this.simbolos.agregar} Agregar nuevo tema`, ...this.otrosTemas.map(tema => {
                            return (tema.parte > 0) ? `${tema.nombre} parte ${tema.parte}` : tema.nombre;
                        })], [AGREGAR_TEMA, ...this.otrosTemas], "Que es lo que quiere hacer?",
                        generarError.Prompt("No se eligió donde crear el tema")
                    );
                }

                if (eleccion == AGREGAR_TEMA) {
                    nombreTema = await generarPreguntas.prompt(
                        this.nombre
                            ? `Nuevo nombre del tema, donde antes era ${this.nombre}`
                            : "Nombre del tema",
                        generarError.Quit("No se ingresó el nombre del tema")
                    );

                } else {
                    nombreTema = eleccion.nombre;
                    this.parte = eleccion.parte;
                }

                this.nombre = nombreTema;
                break;

            case this.config.numero:
                let numero = await generarPreguntas.numero(
                    this.numero
                        ? `Nuevo número de tema, donde antes era ${this.numero}`
                        : "Número de tema",
                    generarError.Quit("No se ingresó el número del tema")
                );

                this.numero = parseInt(numero, 10);
                break;

            case MODIFICAR_PROFESOR:
                this.numProfesores.splice(indice, 1);

            case this.config.numProfesore:
                let profesoresDisponibles = [...this.profesores.keys()]
                    .sort()
                    .filter((indice) => this.numProfesores.indexOf(indice) < 0);

                let indiceProfesor = profesoresDisponibles.first();

                if (profesoresDisponibles.length > 1) {
                    indiceProfesor = await generarPreguntas.suggester(
                        (i) => `${this.profesores[i].nombre} ${this.profesores[i].apellido}`,
                        profesoresDisponibles, "Que profesor da este tema",
                        generarError.Quit("No se eligió el profesor de este curso")
                    );
                }

                this.numProfesores.push(indiceProfesor);
                break;

            case ELIMINAR_PROFESOR_AT:
                this.numProfesores.splice(indice, 1);
                break;
        }

        if (this.profesores.length == 1 && this.numProfesores.length == 0) {
            this.numProfesores.push(0);
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.numero);
        if (this.numero) {
            if (this.otrosTemas.length == 0) {
                valores.push(`️ ${this.simbolos.modificar}️ Modificar el número del tema, donde era ${this.numero}`);

            } else {
                let anterior, siguiente;
                for (let i = 0; i < this.otrosTemas.length; i++) {
                    if (this.otrosTemas[i][this.config.numero] < this.numero) {
                        anterior = this.otrosTemas[i];

                    } else if (this.otrosTemas[i][this.config.numero] == this.numero) {
                        siguiente = this.otrosTemas[i];

                    } else if (!siguiente && this.otrosTemas[i][this.config.numero] > this.numero) {
                        siguiente = this.otrosTemas[i];
                    }
                }

                let texto = (anterior)
                    ? `antes de ${anterior[this.config.nombre]} => `
                    : "donde era ";
                texto += `${this.numero}`;
                if (siguiente) {
                    texto += ` => ${siguiente[this.config.nombre]}`;
                }

                valores.push(`️ ${this.simbolos.modificar}️ Modificar el número del tema, ${texto}`);
            }

        } else {
            valores.push(` ${this.simbolos.agregar} Número del tema`);
        }

        // Mostrar si es parte °N
        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? `️ ${this.simbolos.modificar}️ Modificar el nombre del tema, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del tema`
        );

        let cantidadProfesores = this.profesores.length;
        let cantidadProfesoresElegidos = this.numProfesores.length;
        for (let [indice, indiceProfesore] of this.numProfesores.entries()) {
            let profesore = this.profesores[indiceProfesore];

            opciones.push(`${MODIFICAR_PROFESOR}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar}️ Modificar el profesore ${profesore.nombre} ${profesore.apellido}`);

            opciones.push(`${ELIMINAR_PROFESOR_AT}-${indice}`);
            valores.push(` ${this.simbolos.sacar} Eliminar profesore ${profesore.nombre} ${profesore.apellido}`);
        }

        if (cantidadProfesores - cantidadProfesoresElegidos > 0) {
            opciones.push(this.config.numProfesore);
            valores.push(cantidadProfesoresElegidos < CANTIDAD_MINIMA_PROFESORES
                ? ` ${this.simbolos.agregar} ${this.simbolos.opcional} Profesore del tema`
                : ` ${this.simbolos.agregar} Profesore del tema`
            );
        }

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
        return this.profesores.length >= CANTIDAD_MINIMA_PROFESORES 
            && this.numero && this.nombre;
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
            [this.config.numero]: this.numero,
            [this.config.parte]: this.parte,
            [this.config.clase]: `[[${this.curso.file.path}|${this.curso.file.name}]]`,
            [this.config.numProfesore]: this.numProfesores,
            [this.config.numReferencia]: this.numReferencia,
        }
    }

    describir() {
        let autores = [];
        for (let numProfesore of this.numProfesores) {
            let profesore = this.profesores[numProfesore];
            autores.push(`${profesore.apellido}, ${profesore.nombre[0]}.`);
        }

        let nombre = `N°${this.numero}: ${this.nombre}`;
        if (this.parte) {
            nombre += ` parte ${this.parte}`;
        }

        let nombreCurso = this.curso[this.configCurso.nombre];
        let paginaCurso = this.curso[this.configCurso.pagina];

        return `${nombre} dado por ${autores.join(", ")}. ${nombreCurso} publicado en ${paginaCurso}`;
    }

    obtenerNumReferencia() {
        return this.numReferencia;
    }

    obtenerReferencias(referencias = []) {
        referencias.push(this);
        return referencias;
    }
}

async function crearTemaCurso(tp, seguidorRef, referenciaCreada = null) {
    if (!referenciaCreada) referenciaCreada = { valor: null };

}

module.exports = (tp) => ({
    clase: (seguidorRef, representacionPrevia = {}) => new TemaCurso(tp, seguidorRef, representacionPrevia),
    crear: crearTemaCurso.bind(null, tp),
});