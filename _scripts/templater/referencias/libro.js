const MODIFICAR_AUTORE = "modificar autores";
const ELIMINAR_AUTORE = "eliminar autores";
const MODIFICAR_CAPITULO = "modificar capitulos";
const ELIMINAR_CAPITULO = "eliminar capitulos";
const AGREGAR_EDITOR = "agregar editor";

const CANTIDAD_MINIMA_AUTORES = 1;
const CANTIDAD_MINIMA_CAPITULOS = 0;

const SALIR = "salir";

class Libro {
    constructor(tp, seguidorRef, representacionPrevia = {}) {
        // console.log("Libro");
        const { 
            SIMBOLOS,
            TAGS: { coleccion: { self: TAG_COLECCION, libros: TAGS_LIBRO} },
            DATOS: { REFERENCIAS: { libro: DATOS_LIBRO, ...DATOS_REFERENCIA } },
        } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.config = { numReferencia: DATOS_REFERENCIA.numReferencia, ...DATOS_LIBRO };
        this.tags = { coleccion: TAG_COLECCION, ...TAGS_LIBRO };
        this.seguidorRef = seguidorRef;

        this.titulo = representacionPrevia[this.config.titulo];
        this.subtitlo = representacionPrevia[this.config.subtitlo];
        this.autores = [];
        this.anio = representacionPrevia[this.config.anio];
        this.editorial = representacionPrevia[this.config.editorial];
        this.edicion = representacionPrevia[this.config.edicion];
        this.volumen = representacionPrevia[this.config.volumen];
        this.url = representacionPrevia[this.config.url];
        this.capitulos = [];
        this.numReferencia = representacionPrevia[this.config.numReferencia]
            ? representacionPrevia[this.config.numReferencia]
            : this.seguidorRef?.conseguirReferencia();

        let autoresPrevios = representacionPrevia[this.config.autore.self] 
            ? representacionPrevia[this.config.autore.self] : [];
        for (let { [this.config.autore.nombre]: nombre, [this.config.autore.apellido]: apellido } of autoresPrevios) {
            this.autores.push({ nombre, apellido });
        }

        let capitulosPrevios = representacionPrevia[this.config.capitulo] 
            ? representacionPrevia[this.config.capitulo] : [];

        let claseCapitulo = tp.user.capituloLibro(tp);
        for (let capituloPrevio of capitulosPrevios) {
            this.capitulos.push(claseCapitulo.clase(this.seguidorRef, capituloPrevio, this));
        }

        let padre = this;
        this.informacion = {
            capituloNuevo() { return claseCapitulo.clase(seguidorRef, {}, padre); },
        };
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
                        error.Quit("No se ingresó la editorial del libro")
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
                break;

            case this.config.capitulo:
                let nuevoCapitulo = this.informacion.capituloNuevo();
                await generarPreguntas.formulario(nuevoCapitulo, "Ingresar información del capítulo");
                this.capitulos.push(nuevoCapitulo);
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

    eliminar() {
        this.seguidorRef?.devolverReferencia(this.numReferencia);
        for (let capitulo of this.capitulos) {
            capitulo.eliminar();
        }
    }

    esValido() {
        return this.titulo && this.anio && this.editorial
            && this.autores.length >= CANTIDAD_MINIMA_AUTORES
            && this.capitulos.length >= CANTIDAD_MINIMA_CAPITULOS
            && this.capitulos.every(capitulo => capitulo.esValido());
    }

    generarRepresentacion() {
        return {
            [this.config.titulo]: this.titulo,
            [this.config.subtitlo]: this.subtitlo,
            [this.config.numReferencia]: this.numReferencia,
            [this.config.autore.self]: this.autores
                .map(({ nombre, apellido }) => ({
                    [this.config.autore.nombre]: nombre,
                    [this.config.autore.apellido]: apellido,
                })),
            [this.config.anio]: this.anio,
            [this.config.editorial]: this.editorial,
            [this.config.edicion]: this.edicion,
            [this.config.volumen]: this.volumen,
            [this.config.url]: this.url,
            [this.config.capitulo]: this.capitulos
                .map(capitulo => capitulo?.generarRepresentacion())
                .filter(representarElemento => representarElemento),
        };
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

    obtenerNumReferencia() {
        return this.numReferencia;
    }

    obtenerReferencias(referencias = []) {
        referencias.push(this);
        for (let capitulo of this.capitulos) {
            capitulo.obtenerReferencias(referencias);
        }
        return referencias;
    }
}

async function crearLibro(tp, seguidorRef, referenciaCreada = null) {
    const { 
        FORMATO_DIA, ETAPAS, REFERENCIAS, CARACTERES_INVALIDOS, SECCIONES, DATOS: {
            ARCHIVO: DATOS_ARCHIVO, REFERENCIAS: { libro: DATOS_LIBRO, ...DATOS_REFERENCIAS },
        }, TAGS: {
            referencias: TAG_REFERENCIA, nota: TAGS_NOTA,
            coleccion: { libros: TAGS_LIBROS, ...TAGS_COLECCION },
        }, 
        DIRECTORIOS: { coleccion: { libros: DIR_LIBRO, ...DIR_COLECCION } }, 
        DATAVIEW: { coleccion: { libro: DV_LIBRO }, ...DATAVIEW },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    if (!referenciaCreada) referenciaCreada = { valor: null };

    let infoLibro = new Libro(tp, seguidorRef);
    await preguntar.formulario(tp, infoLibro, "Completar la información del libro");
    referenciaCreada.valor = infoLibro;
	
    let nombreArchivo = infoLibro.describir();
	let intercambios = [[":", ","], ['"', "'"], ["<", "("], [">", ")"], ["?", ""]]
	for (let [caracterInvalido, caracterValido] of intercambios) {
		nombreArchivo = nombreArchivo.replaceAll(caracterInvalido, caracterValido);
	}
	CARACTERES_INVALIDOS.forEach(caracterInvalido => nombreArchivo = nombreArchivo.replaceAll(caracterInvalido, ","));

    let texto = `\`\`\`dataviewjs\n\tawait dv.view("${DATAVIEW.self}/${DATAVIEW.etapa}", { etapa: dv.current()?.etapa });\n\`\`\`\n`;
    texto += `${"#".repeat(SECCIONES.resumen.nivel)} ${SECCIONES.resumen.texto}\n---\n`;
    texto += `\`\`\`dataviewjs\n\tlet actual = dv.current();\n\tawait dv.view("${DATAVIEW.self}/${DV_LIBRO.capitulo}", { libro: actual, capitulos: actual?.capitulos });\n\`\`\`\n\n`;

    let capitulos = infoLibro.capitulos ? infoLibro.capitulos : [];
    for (let infoCapitulo of capitulos) {
        texto += `${"#".repeat(SECCIONES.capitulo.nivel)} ${infoCapitulo.describirReducido()}\n---\n\n\n\n`;
    }

    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
            [DATOS_ARCHIVO.tags]: [
                `${TAG_REFERENCIA}/${REFERENCIAS.libro.toLowerCase()}`,
                `${TAGS_COLECCION.self}/${TAGS_LIBROS.self}/${TAGS_LIBROS.libro}`,
                `${TAGS_NOTA.self}/${TAGS_NOTA.investigacion}`,
            ],
            [DATOS_REFERENCIAS.tipoCita]: REFERENCIAS.libro,
            ...infoLibro.generarRepresentacion(),
            [DATOS_ARCHIVO.aliases]: capitulos
                .map(infoCapitulo => {
                    let descripcion = infoCapitulo.describirReducido();
                    return `${nombreArchivo}, ${descripcion}#${descripcion}`;
                }),
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_LIBRO}`,
        titulo: nombreArchivo,
        texto: texto,
    };
}

module.exports = (tp) => ({
    clase: (seguidorRef = null, representacionPrevia = {}) => new Libro(tp, seguidorRef, representacionPrevia),
    crear: crearLibro.bind(null, tp),
});