const GUIA_INVALIDA = -1;
const DEFAULT_NUMERO = 1;
const MODIFICAR_EJERCICIO = "modificar ejercicio";
const ELIMINAR_EJERCICIO = "eliminar ejercicio";

class Guia {
    constructor(tp, dv, representacionPrevia = {}) {
        const { 
            SIMBOLOS,
            TAGS: { coleccion: { self: TAGS_COLECCION, ejercicios: TAGS_EJERCICIOS} },
            DATOS: { EJERCICIOS: { guia: DATOS_GUIA } },
        } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.config = DATOS_GUIA;
        this.posiblesEjercicios = dv.pages(`#${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.ejercicio}`);

        this.nombre = representacionPrevia[this.config.nombre];
        if (this.config.ejercicios in representacionPrevia) {
            this.ejercicios = representacionPrevia[this.config.ejercicios];

        } else {
            this.ejercicios = [];
        }

        if (this.config.numero in representacionPrevia) {
            this.numero = representacionPrevia[this.config.numero];

        } else {
            this.numero = DEFAULT_NUMERO;
            let numGuias = dv.pages(`#${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.guia}`)
                .map(archivo => archivo[this.config.numero])
                .sort(numero => numero);

            for (let numero of numGuias) {
                if (this.numero == numero) {
                    this.numero++;
                } else {
                    break;
                }
            }
        }
    }
    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        let [ respuesta, indice ] = respuestaDada.split("-");
        switch (respuesta) {
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    "Nombre ",
                    generarError.Quit("No se ingresa el nombre de la guia"),
                );
                break;

            case MODIFICAR_EJERCICIO:
                break;

            case this.config.ejercicios:
                break;

            case ELIMINAR_EJERCICIO:
                break;

                await generarPreguntas.formulario(this.capitulos[indice], "Modificar información del capítulo");
                this.capitulos = this.capitulos.sort((a, b) => parseInt(a.numero, 10) - parseInt(b.numero, 10));
                break;

            case this.config.capitulo:
                let nuevoCapitulo = this.informacion.capituloNuevo();
                await generarPreguntas.formulario(nuevoCapitulo, "Ingresar información del capítulo");
                this.capitulos.push(nuevoCapitulo);
                this.capitulos = this.capitulos.sort((a, b) => parseInt(a.numero, 10) - parseInt(b.numero, 10));
                break;

            case ELIMINAR_CAPITULO:
                let ultimoCapitulo = this.capitulos.pop();
                ultimoCapitulo.eliminar();
                break;
        }
    }
}

class Ejercicio {
    constructor(tp, dv, representacionPrevia = {}) {
        const { 
            SIMBOLOS,
            TAGS: { coleccion: { self: TAGS_COLECCION, ejercicios: TAGS_EJERCICIOS} },
            DATOS: { EJERCICIOS: DATOS_EJERCICIOS },
        } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.config = DATOS_EJERCICIOS;
        this.guias = dv.pages(`#${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.guia}`);

        this.nombre = representacionPrevia[this.config.ejercicio.nombre];
        if (this.config.ejercicio.guia in representacionPrevia) {
            let numeroGuia = representacionPrevia[this.config.ejercicio.guia];
            let posibleGuia = this.guias
                .filter(guia => guia[this.config.guia.numero] == numeroGuia);
            switch (posibleGuia.length) {
                case 1:
                    this.guia = posibleGuia[0];

                default:
                    this.guia = GUIA_INVALIDA;
                    break;
            }

        } else {
            this.guia = GUIA_INVALIDA;
        }
        
        if (this.config.ejercicio.numero in representacionPrevia) {
            this.numero = representacionPrevia[this.config.ejercicio.numero];

        } else {
            this.numero = DEFAULT_NUMERO;
            let numEjercicios = dv.pages(`#${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.ejercicio}`)
                .map(archivo => archivo[this.config.ejercicio.numero])
                .sort(numero => numero);

            for (let numero of numEjercicios) {
                if (this.numero == numero) {
                    this.numero++;
                } else {
                    break;
                }
            }
        }
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {


        let [ respuesta, indice ] = respuestaDada.split("-");
        switch (respuesta) {
            case MODIFICAR_AUTORE:
                let { nombre: viejoNombre, apellido: viejoApellido } = this.autores[indice];

                let nuevoApellido = await generarPreguntas.prompt(
                    `Nuevo apellido del autore, donde antes era ${viejoApellido}:`,
                    generarError.Quit("No se ingresa el apellido del autore de forma correcta")
                );

                let nuevoNombre = await generarPreguntas.prompt(
                    `Nuevo nombre del autore, donde antes era ${viejoNombre}:`,
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
                });
                break;

            case ELIMINAR_AUTORE:
                this.autores.pop();
                break;

            case this.config.titulo:
                this.titulo = await generarPreguntas.prompt(
                    this.titulo 
                        ? `Nuevo título del libro, donde antes era ${this.titulo}`
                        : "Título del libro",
                    generarError.Quit("No se ingresó nombre del libro")
                );
                break;

            case this.config.subtitulo:
                this.subtitlo = await generarPreguntas.prompt(
                    this.subtitlo
                        ? `Nuevo subtítulo del libro, donde antes era ${this.subtitlo}`
                        : "Subtítulo del libro",
                    generarError.Quit("No se ingresó el subtitulo del libro")
                );
                break;

            case this.config.anio:
                this.anio = await generarPreguntas.numero(
                    this.anio
                        ? `Nuevo año de publicación, donde antes era ${this.anio}`
                        : "Año de publicación del libro",
                    generarError.Quit("No se ingresó el año del publicación del libro")
                );
                break;

            case this.config.editorial:
                const dv = app.plugins.plugins.dataview.api;
                const editoriales = dv.pages(`#${this.tags.coleccion}/${this.tags.self}/${this.tags.libro}`)
                    .map(ref => ref[this.config.editorial])
                    .distinct();

                let respuesta = AGREGAR_EDITOR;
                if (editoriales.length > 0) {
                    respuesta = await generarPreguntas.suggester(
                        [` ${this.simbolos.agregar} Agregar editorial`, ...editoriales], [AGREGAR_EDITOR, ...editoriales],
                        this.editorial
                            ? `Nuevo editorial, donde antes era ${this.editorial}`
                            : "Editorial del libro",
                        generarError.Quit("No se ingresó la editorial del libro")
                    );
                }

                if (respuesta == AGREGAR_EDITOR) {
                    respuesta = await generarPreguntas.prompt(
                        this.editorial
                        ? `Nuevo editorial, donde antes era ${this.editorial}`
                        : "Editorial del libro",
                        generarError.Quit("No se ingresó la editorial del libro")
                    );
                }

                this.editorial = respuesta;
                break;

            case this.config.edicion:
                this.edicion = await generarPreguntas.numero(
                    this.edicion
                        ? `Nueva edición, donde antes era ${this.edicion}`
                        : "Edición del libro",
                    generarError.Quit("No se ingresó la edición del libro, debería ser un número")
                );
                break;

            case this.config.volumen:
                this.volumen = await generarPreguntas.numero(
                    this.volumen
                        ? `Nuevo volumen, donde antes era ${this.volumen}`
                        : "Volumen del libro",
                    generarError.Quit("No se ingresó el volumen del libro")
                );
                break;

            case this.config.url:
                this.url = await generarPreguntas.prompt(
                    this.url
                        ? `Nuevo URL del libro, donde antes era ${this.url}`
                        : "URL del libro",
                    generarError.Quit("No se ingresó el url del libro")
                );
                break;

            case MODIFICAR_CAPITULO:
                await generarPreguntas.formulario(this.capitulos[indice], "Modificar información del capítulo");
                this.capitulos = this.capitulos.sort((a, b) => parseInt(a.numero, 10) - parseInt(b.numero, 10));
                break;

            case this.config.capitulo:
                let nuevoCapitulo = this.informacion.capituloNuevo();
                await generarPreguntas.formulario(nuevoCapitulo, "Ingresar información del capítulo");
                this.capitulos.push(nuevoCapitulo);
                this.capitulos = this.capitulos.sort((a, b) => parseInt(a.numero, 10) - parseInt(b.numero, 10));
                break;

            case ELIMINAR_CAPITULO:
                let ultimoCapitulo = this.capitulos.pop();
                ultimoCapitulo.eliminar();
                break;
        }
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.titulo);
        if (this.titulo) {
            valores.push(`️ ${this.simbolos.modificar}️ Modificar el nombre del libro, donde era ${this.titulo}`);

            opciones.push(this.config.subtitulo);
            valores.push(this.subtitlo
                ? ` └-> ${this.simbolos.modificar}️ Modificar el nombre del libro, donde era ${this.subtitlo}`
                : ` └-> ${this.simbolos.agregar} ${this.simbolos.opcional} Subtítulo del libro`
            );

        } else {
            valores.push(` ${this.simbolos.agregar} Nombre del libro`);
        }

        for (let [indice, autor] of this.autores.entries()) {
            let { nombre, apellido } = autor;
            opciones.push(`${MODIFICAR_AUTORE}-${indice}`);
            valores.push(`️ ️${this.simbolos.modificar}️ Modificar el autore ${nombre} ${apellido}`);
        }

        let cantidadAutores = this.autores.length;
        if (cantidadAutores > 0) {
            let { nombre, apellido } = this.autores[cantidadAutores - 1];
            opciones.push(ELIMINAR_AUTORE);
            valores.push(` ${this.simbolos.sacar} Eliminar ${nombre} ${apellido}`);
        }

        opciones.push(this.config.autore.self);
        valores.push(cantidadAutores < CANTIDAD_MINIMA_AUTORES
            ? ` ${this.simbolos.agregar} Nombre del autore`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Nombre del autore`
        );

        opciones.push(this.config.anio);
        valores.push(this.anio
            ? ` ️${this.simbolos.modificar}️ Modificar el año de publicación, donde era ${this.anio}`
            : ` ${this.simbolos.agregar} Año de publicación del libro`
        );

        opciones.push(this.config.editorial);
        valores.push(this.editorial
            ? ` ️${this.simbolos.modificar} Modificar la editorial, donde era ${this.editorial}`
            : ` ${this.simbolos.agregar} Editorial del libro`
        );

        opciones.push(this.config.edicion);
        valores.push(this.edicion
            ? ` ️${this.simbolos.modificar}️ Modificar la edición del libro, donde era ${this.edicion}`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Edición del libro`
        );

        opciones.push(this.config.volumen);
        valores.push(this.volumen
            ? ` ️${this.simbolos.modificar}️ Modificar el volumen del libro, donde era ${this.volumen}`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Volumen del libro`
        );

        opciones.push(this.config.url);
        valores.push(this.url
            ? ` ️${this.simbolos.modificar}️ Modificar el URL, donde era ${this.url}`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} URL del libro`
        );

        for (let [indice, capitulo] of this.capitulos.entries()) {
            opciones.push(`${MODIFICAR_CAPITULO}-${indice}`);
            valores.push(`️ ️${this.simbolos.modificar} Modificar el ${capitulo.describirReducido()}`);
        }

        let cantidadCapitulos = this.capitulos.length;
        if (cantidadCapitulos > 0) {
            let ultimoCapitulo = this.capitulos[cantidadCapitulos - 1];
            opciones.push(ELIMINAR_CAPITULO);
            valores.push(` ${this.simbolos.sacar} Eliminar ${ultimoCapitulo.describirReducido()}`);
        }

        opciones.push(this.config.capitulo);
        valores.push(cantidadCapitulos < CANTIDAD_MINIMA_CAPITULOS
            ? ` ${this.simbolos.agregar} Capítulo del libro`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Capítulo del libro`
        );

        return { opciones: opciones, valores: valores };
    }

    esValido() {
        return true;
    }

    generarRepresentacion() {
        let representacion = {
            [this.config.ejercicio.numero]: this.numero,
        };

        if (this.guia !== GUIA_INVALIDA) {
            representacion[this.config.ejercicio.guia] = this.guia[this.config.guia.numero];
        }

        if (this.nombre != "") {
            representacion[this.config.ejercicio.nombre] = this.nombre;
        }
    }

    describir() {
        let autores = [];
        for (let { nombre, apellido } of this.autores) {
            autores.push(`${nombre} ${apellido}`);
        }

        let nombre = this.titulo;
        if (this.subtitlo) nombre += `: ${this.subtitlo}`;
        if (this.volumen) nombre += ` vol. ${this.volumen}`;

        return `${nombre} de ${autores.join(", ")}`;
    }
}

async function crearEjercicio(tp, dv) {
    const { 
        FORMATO_DIA, ETAPAS, REFERENCIAS, SECCIONES, DATOS: {
            ARCHIVO: DATOS_ARCHIVO, EJERCICIOS: DATOS_EJERCICIOS,
        }, TAGS: {
            nota: TAGS_NOTA,
            coleccion: { ejercicios: TAGS_EJERCICIOS, ...TAGS_COLECCION },
        }, 
        DIRECTORIOS: { coleccion: { ejercicios: DIR_EJERCICIOS, ...DIR_COLECCION } }, 
    } = tp.user.constantes();


    let texto = SECCIONES.seccion(SECCIONES.enunciado);
    texto += "\n---\n\n"

    texto += "\n\n" + SECCIONES.seccion(SECCIONES.resolucion);
    texto += "\n---\n\n"

    texto += "\n\n" + SECCIONES.seccion(SECCIONES.resultado);
    texto += "\n---\n\n"

    return {
        metadata: {
            [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.tags]: [
                `${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.ejercicio}`,
                `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
            ],
            [DATOS_EJERCICIOS.numero]: numeroEjercicio,
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_EJERCICIOS}`,
        titulo: `Ejercicio N°${numeroEjercicio}`,
        texto: texto,
    }
}

module.exports = (tp, dv) => ({
    crearEjercicio: crearEjercicio.bind(null, tp, dv),
});