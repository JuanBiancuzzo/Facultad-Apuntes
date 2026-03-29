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
            TAGS: { coleccion: { ejercicios: TAGS_EJERCICIOS, ...TAGS_COLECCION } },
            DATOS: { EJERCICIOS: DATOS_EJERCICIOS },
        } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
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

    describir() {
        return this.nombre 
            ? `Ejercicio N° ${this.numero}, ${this.nombre}`
            : `Ejercicio N° ${this.numero}`
    }
}

async function crearEjercicio(tp, dv) {
    const { 
        FORMATO_DIA, ETAPAS, SECCIONES, DATOS: { ARCHIVO: DATOS_ARCHIVO }, TAGS: {
            nota: TAGS_NOTA,
            coleccion: { ejercicios: TAGS_EJERCICIOS, ...TAGS_COLECCION },
        }, 
        DIRECTORIOS: { coleccion: { ejercicios: DIR_EJERCICIOS, ...DIR_COLECCION } }, 
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();

    let infoEjercicio = new Ejercicio(tp, dv);
    await preguntar.formulario(tp, infoEjercicio, "Completar la información del ejercicio");

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
            ...infoEjercicio.generarRepresentacion(),
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_EJERCICIOS}`,
        titulo: infoEjercicio.describir(),
        texto: texto,
    }
}

module.exports = (tp, dv) => ({
    crearEjercicio: crearEjercicio.bind(null, tp, dv),
});