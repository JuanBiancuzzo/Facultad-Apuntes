const DEFAULT_NUMERO = 1;

const AGREGAR_EJERCICIO = "agregar ejercicio"
const MODIFICAR_EJERCICIO = "modificar ejercicio";
const ELIMINAR_EJERCICIO = "eliminar ejercicio";
const MOVER_ARRIBA_EJERCICIO = "arriba ejercicio";
const MOVER_ABAJO_EJERCICIO = "abajo ejercicio";

class Guia {
    constructor(tp, dv, representacionPrevia = {}) {
        const { 
            SIMBOLOS,
            TAGS: { coleccion: { ejercicios: TAGS_EJERCICIOS, ...TAGS_COLECCION } },
            DATOS: { EJERCICIOS: { guia: DATOS_GUIA, ejercicio: DATOS_EJERCICIOS } },
        } = tp.user.constantes();
        const seguidorGeneral = tp.user.seguidorReferencias(tp);

        this.simbolos = SIMBOLOS;
        this.config = DATOS_GUIA;
        this.configEjercicio = DATOS_EJERCICIOS;
        this.posiblesEjercicios = dv.pages(`#${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.ejercicio}`)
            .map(ejercicio => new Ejercicio(tp, dv, ejercicio))
            .sort(ejercicio => ejercicio[this.configEjercicio.numero]);

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

        this.seguidorEjercicios = seguidorGeneral.newGeneral(() => {
            return dv.pages(`#${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.ejercicio}`)
                .map(archivo => archivo[DATOS_EJERCICIOS.numero])
                .sort(numero => numero)
                .values;
        });

        this.ejerciciosAgregados = {}
        let generarNuevoEjercicio = () => {
            let numero = this.seguidorEjercicios.conseguirNumero();
            let ejercicio = new Ejercicio(tp, dv, { 
                [DATOS_EJERCICIOS.numero]: numero,
            });
            this.ejerciciosAgregados[numero] = ejercicio;
            return ejercicio;
        };

        this.informacion = {
            ejercicioNuevo: () => generarNuevoEjercicio(),
        }
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        let [ respuesta, indice ] = respuestaDada.split("-");
        if (indice) {
            indice = parseInt(indice, 10);
        }

        switch (respuesta) {
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    "Nombre de la guia",
                    generarError.Quit("No se ingresa el nombre de la guia"),
                );
                break;

            case MODIFICAR_EJERCICIO:
                await generarPreguntas.formulario(this.ejercicios[indice], "Modificar información del ejercicio");
                break;

            case this.config.ejercicios:
                let respuesta = AGREGAR_EJERCICIO;
                let ejerciciosElegir = [];
                for (let i = 0; i < this.posiblesEjercicios.length; i++) {
                    let ejercicioActual = this.posiblesEjercicios[i];

                    let fueElegido = false;
                    let numEjercicioActual = ejercicioActual[this.configEjercicio.numero];
                    for (let j = 0; j < this.ejercicios.length && !fueElegido; j++) {
                        let numEjericioElegido = this.ejercicios[j][this.configEjercicio.numero];
                        if (numEjericioElegido == numEjercicioActual) {
                            fueElegido = true;
                        }
                    }

                    if (!fueElegido) {
                        ejerciciosElegir.push([ i, ejercicioActual.titulo() ]);
                    }
                }
                if (ejerciciosElegir.length > 0) {
                    respuesta = await generarPreguntas.suggester(
                        [
                            ` ${this.simbolos.agregar} Agregar ejercicio`, 
                            ...ejerciciosElegir.map(([_, nombre]) => nombre),
                        ], 
                        [ AGREGAR_EJERCICIO, ...ejerciciosElegir.map(([i, _]) => i)],
                        "Agregar ejercicio",
                        generarError.Quit("No se ingreso el ejercicio para la guia"),
                    );
                }

                if (respuesta == AGREGAR_EJERCICIO) {
                    let cantidadEjerciciosNuevos = await generarPreguntas.numero(
                        "Número de ejercicios a agregar",
                        generarError.Quit("No se ingresa el número de ejercicios nuevos a agregar"),
                    );

                    if (cantidadEjerciciosNuevos <= 0) {
                        break;

                    } else if (cantidadEjerciciosNuevos == 1) {
                        let nuevoEjercicio = this.informacion.ejercicioNuevo();
                        await generarPreguntas.formulario(nuevoEjercicio, "Ingresar información del ejercicio");
                        this.ejercicios.push(nuevoEjercicio);
                    } else {
                        for (let i = 0; i < cantidadEjerciciosNuevos; i++) {
                            this.ejercicios.push(this.informacion.ejercicioNuevo());
                        }
                    }

                } else {
                    this.ejercicios.push(this.posiblesEjercicios[respuesta]);
                }

                break;

            case ELIMINAR_EJERCICIO:
                let [ ejercicioEliminar ] = this.ejercicios.splice(indice, 1);
                if (ejercicioEliminar[this.configEjercicio.numero] in this.ejerciciosAgregados) {
                    this.seguidorEjercicios.devolver(ejercicioEliminar[this.configEjercicio.numero]);
                    delete this.ejerciciosAgregados[ejercicioEliminar[this.configEjercicio.numero]];
                }
                break;

            case MOVER_ARRIBA_EJERCICIO:
                if (indice <= 0) {
                    break;
                }

                [ this.ejercicios[indice], this.ejercicios[indice - 1] ] = [ this.ejercicios[indice - 1], this.ejercicios[indice] ];
                break;

            case MOVER_ABAJO_EJERCICIO:
                if (indice >= this.ejercicios.length - 1) {
                    break;
                }

                [ this.ejercicios[indice], this.ejercicios[indice + 1] ] = [ this.ejercicios[indice + 1], this.ejercicios[indice] ];
                break;
        }
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre de la guia, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre de la guia`
        );

        for (let [indice, ejercicio] of this.ejercicios.entries()) {
            let descripcionEjercicio = ejercicio.titulo();
            opciones.push(`${MODIFICAR_EJERCICIO}-${indice}`);
            valores.push(` ${this.simbolos.modificar} ${descripcionEjercicio}`);

            if (indice > 0) {
                opciones.push(`${MOVER_ARRIBA_EJERCICIO}-${indice}`);
                valores.push(` ${this.simbolos.arriba} Mover arriba, ${descripcionEjercicio}`);
            }

            if (indice < this.ejercicios.length - 1) {
                opciones.push(`${MOVER_ABAJO_EJERCICIO}-${indice}`);
                valores.push(` ${this.simbolos.abajo} Mover abajo, ${descripcionEjercicio}`);
            }

            opciones.push(`${ELIMINAR_EJERCICIO}-${indice}`);
            valores.push(` ${this.simbolos.sacar} Eliminar ${descripcionEjercicio}`);
        }

        opciones.push(this.config.ejercicios);
        valores.push(` ${this.simbolos.agregar} Agregar ejercicio`);

        return { opciones: opciones, valores: valores };
    }

    generarRepresentacion() {
        return {
            [this.config.numero]: this.numero,
            [this.config.nombre]: this.nombre,
            [this.config.ejercicios]: this.ejercicios   
                .map(ejercicio => ejercicio[this.configEjercicio.numero]),
        }
    }

    esValido() {
        return this.nombre && this.ejercicios.length > 0;
    }

    titulo() {
        return this.nombre;
    }
}

class Ejercicio {
    constructor(tp, dv, representacionPrevia = {}) {
        const { 
            SIMBOLOS, SECCIONES,
            TAGS: { coleccion: { ejercicios: TAGS_EJERCICIOS, ...TAGS_COLECCION } },
            DATOS: { EJERCICIOS: DATOS_EJERCICIOS },
        } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.secciones = SECCIONES;
        this.config = DATOS_EJERCICIOS;

        this.nombre = representacionPrevia[this.config.ejercicio.nombre];
        
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
        switch (respuestaDada) {
            case this.config.ejercicio.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre 
                        ? `Nuevo nombre del ejercicio, donde antes era ${this.nombre}`
                        : "Nombre del ejercicio",
                    generarError.Quit("No se ingresó nombre del ejercicio")
                );
                break;
        }
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.ejercicio.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre del ejercicio, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del ejercicio`
        );

        return { opciones: opciones, valores: valores };
    }

    esValido() {
        return true;
    }

    generarRepresentacion() {
        if (this.nombre) {
            return {
                [this.config.ejercicio.numero]: this.numero,
                [this.config.ejercicio.nombre]: this.nombre,
            }
        } else {
            return {
                [this.config.ejercicio.numero]: this.numero,
            }
        }
    }

    async describir(tp, dv) {
        let archivos = dv.pages(`#${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.ejercicio}`)
            .filter(archivo => archivo[this.config.ejercicio.numero] == this.numero);
        
        switch (archivos.length) {
            case 0:
                return this.titulo();

            case 1:
                break;

            default:
                throw Error("Hay más de un ejercicio con el mismo número");
        }

        let tArchivo = tp.file.find_tfile(archivos[0].file.path);
        let contenido = await app.vault.read(tArchivo);

        let indiceInicio = contenido.search(new RegExp(`#+\\s+${this.secciones.seccion(this.secciones.enunciado)}\\s*\n`))
            + this.secciones.seccion(this.secciones.enunciado).length;
        let indiceFinal = contenido.search(new RegExp(`#+\\s+${this.secciones.seccion(this.secciones.resolucion)}\\s*\n`));

        let enunciado = contenido.slice(indiceInicio, indiceFinal);
        console.log(enunciado);
        return enunciado;
    }

    titulo() {
        return this.nombre 
            ? `Ejercicio N° ${this.numero}, ${this.nombre}`
            : `Ejercicio N° ${this.numero}`
    }
}

async function crearGuia(tp, dv) {
    const { 
        FORMATO_DIA, SECCIONES, DATOS: { ARCHIVO: DATOS_ARCHIVO }, TAGS: {
            coleccion: { ejercicios: TAGS_EJERCICIOS, ...TAGS_COLECCION },
        }, 
        DIRECTORIOS: { coleccion: { ejercicios: DIR_EJERCICIOS, ...DIR_COLECCION } }, 
        DATAVIEW: { coleccion: { ejercicios: DV_EJERCICIOS }, ...DATAVIEW },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const archivos = tp.user.archivo();

    let infoGuia = new Guia(tp, dv);
    await preguntar.formulario(tp, infoGuia, "Completar la información de la guia");

    let texto = SECCIONES.seccion({ nivel: 1, texto: "Ejercicio" });
    texto += "\n---\n";
    texto += `\`\`\`dataviewjs\n\tlet actual = dv.current();\n\tawait dv.view("${DATAVIEW.self}/${DV_EJERCICIOS.guia}", { ejercicios: actual["${DATOS_GUIA.ejercicios}"] });\n\`\`\`\n\n`;


    for (let infoEjercicio of Object.values(infoGuia.ejerciciosAgregados)) {
        await archivos.crear(tp, async () => await crearEjercicio(tp, dv, infoEjercicio));
    }

    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.tags]: [
                `${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.guia}`,
            ],
            ...infoGuia.generarRepresentacion(),
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_EJERCICIOS}`,
        titulo: `Guía ${infoGuia.numero}, ${infoGuia.titulo()}`,
        texto: texto,
    }
}

async function crearEjercicio(tp, dv, infoPrevia = {}) {
    const { 
        FORMATO_DIA, ETAPAS, SECCIONES, DATOS: { ARCHIVO: DATOS_ARCHIVO }, TAGS: {
            nota: TAGS_NOTA,
            coleccion: { ejercicios: TAGS_EJERCICIOS, ...TAGS_COLECCION },
        }, 
        DIRECTORIOS: { coleccion: { ejercicios: DIR_EJERCICIOS, ...DIR_COLECCION } }, 
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();

    let infoEjercicio = new Ejercicio(tp, dv, infoPrevia);
    if (!infoEjercicio.esValido()) {
        await preguntar.formulario(tp, infoEjercicio, "Completar la información del ejercicio");
    }

    let texto = SECCIONES.seccion(SECCIONES.enunciado);
    texto += "\n---\n<% tp.file.cursor() %>\n"

    texto += "\n" + SECCIONES.seccion(SECCIONES.resolucion);
    texto += "\n---\n\n"

    texto += "\n" + SECCIONES.seccion(SECCIONES.resultado);
    texto += "\n---\n\n"

    return {
        metadata: {
            [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.tags]: [
                `${TAGS_COLECCION.self}/${TAGS_EJERCICIOS.self}/${TAGS_EJERCICIOS.ejercicio}`,
                `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
            ],
            ...infoEjercicio.generarRepresentacion(),
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_EJERCICIOS}`,
        titulo: infoEjercicio.titulo(),
        texto: texto,
    }
}

module.exports = (tp, dv) => ({
    crearEjercicio: crearEjercicio.bind(null, tp, dv),
    crearGuia: crearGuia.bind(null, tp, dv),
});