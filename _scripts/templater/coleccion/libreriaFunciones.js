const MODIFICAR_LENGUAJE = "modificar lenguaje";
const MODIFICAR_LIBRERIA = "modificar libreria";
const MODIFICAR_MODULO = "modificar modulo";
const ELIMINAR_MODULO = "eliminar modulo";

const ELEGIR_TIPO_ESTRUCTURA = "elegir estructura";
const MODIFICAR_TIPO_ESTRUCTURA = "modificar estructura";

/*
    Tenemos que elegir en donde se va a crear lo que se quiere crear
    Tenemos que elegir el tipo de lo que se quiere crear
        * Funcion
        * Clase
        * Struct
        * Interfaz
        * Enum
    Agarrar esa informacion, y crear todo lo que sea necesario, desde
        la libreria, modulo/s y estructura
*/
class Libreria {
    constructor(tp) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: DATOS_FUNCIONES, LENGUAJE: { lenguajes: DATOS_LENGUAJES }
            }, TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
        } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.tagPorNombre = tp.user.tagPorNombre;
        this.config = DATOS_FUNCIONES;
        this.tipos = DATOS_FUNCIONES.tipoDeDato.tipo;

        let lenguajesDisponibles = Object.values(DATOS_LENGUAJES);
        lenguajesDisponibles.remove(DATOS_LENGUAJES.default);

        this.lenguajesDisponibles = [];
        for (let lenguaje of lenguajesDisponibles) {
            let tagLenguaje = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[lenguaje]}`;
            let tagRepresentante = `${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes.self}`;

            let posibleLenguaje = dv.pages(`#${tagLenguaje} and #${tagRepresentante}`).first(); 
            this.lenguajesDisponibles.push(tp.user.lenguaje.clase(tp, posibleLenguaje));
        }

        this.tipoEstructura = null;
        this.estructura = null;
        this.lenguaje = null;
        this.libreria = null;
        this.modulo = null;

        this.crearEstructura = {
            nuevaFuncion:   tp.user.funcion.clase.bind(null, tp),
            nuevaClase:     tp.user.clase.clase.bind(null, tp),
            nuevoStruct:    tp.user.struct.clase.bind(null, tp),
            nuevaInterfaz:  tp.user.interfaz.clase.bind(null, tp),
            nuevoEnum:      tp.user.enum.clase.bind(null, tp),
        };
    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        switch (respuesta) {
            case MODIFICAR_LENGUAJE:
            case this.tipos.lenguaje:
                let nuevoLenguaje = await generarPreguntas.suggester(
                    (lenguaje) => ` ${this.simbolos.elegir} ${lenguaje.descripcion()}`,
                    this.lenguajesDisponibles, "Que lenguaje se quiere usar?",
                    generarError.Quit("No se eligió el lenguaje")
                );

                if (!nuevoLenguaje.esIgual(this.lenguaje)) {
                    this.lenguaje = nuevoLenguaje;
                    this.libreria = null;
                    this.modulo = null;
                    if (!this.estructura) this.estructura.eliminar();
                }
                break;
            
            case MODIFICAR_LIBRERIA:
            case this.tipos.libreria:
                break;

            case MODIFICAR_MODULO:
            case this.tipos.modulo:
                break;
            
            case ELIMINAR_MODULO:
                this.modulo = null;
                break;

            case MODIFICAR_TIPO_ESTRUCTURA:
            case ELEGIR_TIPO_ESTRUCTURA:
                let nuevoTipoEstructura = await generarPreguntas.suggester(
                    (tipo) => ` ${this.simbolos.elegir} ${tipo}`,
                    [ this.tipos.funcion, this.tipos.clase, this.tipos.struct, this.tipos.interfaz, this.tipos.enum ],
                    "Que tipo de estructura se quiere crear?",
                    generarError.Quit("No se eligió la estructura a crear")
                );

                if (this.tipoEstructura == nuevoTipoEstructura) 
                    break;

                this.tipoEstructura = nuevoTipoEstructura;
                this.estructura?.eliminar();

                switch (this.tipoEstructura) {
                    case this.tipos.funcion:
                        this.estructura = this.crearEstructura.funcion();
                        break;

                    case this.tipos.clase:
                        this.estructura = this.crearEstructura.clase();
                        break;

                    case this.tipos.struct:
                        this.estructura = this.crearEstructura.struct();
                        break;

                    case this.tipos.interfaz:
                        this.estructura = this.crearEstructura.interfaz();
                        break;

                    case this.tipos.enum:
                        this.estructura = this.crearEstructura.enum();
                        break;
                }
                break;

            default:
                this.estructura.actualizarDatos(respuesta, generarPreguntas, generarError);
        }
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        if (!this.lenguaje?.esValido()) {
            opciones.push(this.tipos.lenguaje);
            valores.push(` ${this.simbolos.agregar} Lenguaje`);

            return { opciones, valores };
        } 

        opciones.push(MODIFICAR_LENGUAJE);
        valores.push(`️ ${this.simbolos.modificar} Modificar el lenguaje, donde es ${this.lenguaje.descripcion()}`);

        if (!this.libreria?.esValido()) {
            opciones.push(this.tipos.libreria);
            valores.push(` ${this.simbolos.agregar} Libreria`);

            return { opciones, valores };
        } 

        opciones.push(MODIFICAR_LIBRERIA);
        valores.push(`️ ${this.simbolos.modificar} Modificar la libreria, donde es ${this.libreria.descripcion()}`);

        if (!this.modulo?.esValido()) {
            opciones.push(this.tipos.modulo);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Modulo`);

        } else {
            opciones.push(MODIFICAR_MODULO);
            valores.push(`️ ${this.simbolos.modificar} Modificar el modulo, donde es ${this.modulo.descripcion()}`);

            opciones.push(ELIMINAR_MODULO);
            valores.push(`️ ${this.simbolos.sacar} Eliminar el modulo, donde es ${this.modulo.descripcion()}`);
        }

        if (!this.tipoEstructura) {
            opciones.push(ELEGIR_TIPO_ESTRUCTURA);
            valores.push(` ${this.simbolos.agregar} Tipo de estructura`);

        } else {
            opciones.push(MODIFICAR_TIPO_ESTRUCTURA);
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de estructura, donde es ${this.tipoEstructura}`);

            let { opciones: opcionesEstructura, valores: valoresEstructura } = this.estructura.generarPreguntas();
            opciones = opciones.concat(opcionesEstructura);
            valores = valores.concat(valoresEstructura);
        }

        return { opciones, valores };
    }

    generarRepresentacion(tipo) {
        switch (tipo) {
            case this.tipos.lenguaje:
                return this.lenguaje?.generarRepresentacion();

            case this.tipos.libreria:
                return this.libreria?.generarRepresentacion();

            case this.tipos.modulo:
                return this.modulo?.generarRepresentacion();

            case this.tipos.funcion:
            case this.tipos.clase:
            case this.tipos.struct:
            case this.tipos.interfaz:
            case this.tipos.enum:
                return this.estructura?.generarRepresentacion();
            
            default:
                return {};
        }
    }

    esValido() {
        if (!this.lenguaje?.esValido())
            return false;

        if (!this.libreria?.esValido())
            return false;

        if (this.modulo && !this.modulo.esValido())
            return false;

        switch (this.tipoEstructura) {
            case this.tipos.funcion:
            case this.tipos.clase:
            case this.tipos.struct:
            case this.tipos.interfaz:
            case this.tipos.enum:
                return this.estructura.esValido();
            
            default:
                return true;
        }
    }
}

async function actualizarDatos(tp, datos, respuesta) {
    const { 
        SIMBOLOS, DATOS: { FUNCIONES: DATOS_FUNCIONES, LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJE } },
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
    } = tp.user.constantes(); 

    const tagPorNombre = tp.user.tagPorNombre;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    const dv = app.plugins.plugins.dataview.api;

    let resultado, tagAcumulado, lenguajes, librerias, modulos;
    let salir = false;

    switch (respuesta) {
        case LENGUAJE:
            lenguajes = Object.values(LENGUAJES);
            lenguajes.remove(LENGUAJES.default);

            resultado = lenguajes.first();
            if (lenguajes.length > 1) {
                resultado = await preguntar.suggester(
                    tp, (lenguaje) => `Lenguaje ${DATOS_LENGUAJE[lenguaje].nombre}`, lenguajes,
                    "Como se llama el lenguaje?",
                    error.Prompt("No se ingresó el lenguaje")
                );
            }

            datos[LENGUAJE] = resultado;
            break;

        case LIBRERIA:
            tagAcumulado = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[datos[LENGUAJE]]}`;
            librerias = dv.pages(`#${tagAcumulado} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.libreria}`)
                .map(libreria => libreria[DATOS_FUNCIONES.libreria.nombre]);

            resultado = AGREGAR;
            if (librerias.length > 0) {
                resultado = await preguntar.suggester(
                    tp, [` ${SIMBOLOS.agregar} Agregar libreria`, ...librerias],
                    [AGREGAR, ...librerias], "Como se llama la libreria?",
                    error.Prompt("No se ingresó la libreria")
                );
            }

            if (resultado == AGREGAR) {
                resultado = await preguntar.prompt(
                    tp, datos[LIBRERIA] 
                        ? `Nuevo nombre de la libreria, donde antes era ${datos[LIBRERIA]}`
                        : "Nombre de la libreria"
                );
            }

            datos[LIBRERIA] = resultado;
            break;

        case MODULO:
            tagAcumulado = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[datos[LENGUAJE].nombre]}/${tagPorNombre(datos[LIBRERIA])}`;
            modulos = dv.pages(`#${tagAcumulado} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.modulo}`)
                .map(modulo => modulo[DATOS_FUNCIONES.modulo.nombre]);

            resultado = AGREGAR;
            if (modulos.length > 0) {
                resultado = await preguntar.suggester(
                    tp, [` ${SIMBOLOS.agregar} Agregar modulo`, ...modulos],
                    [AGREGAR, ...modulos], "Como se llama el módulo?",
                    error.Prompt("No se ingresó el modulo")
                );
            }

            if (resultado == AGREGAR) {
                resultado = await preguntar.prompt(
                    tp, datos[MODULO] 
                        ? `Nuevo nombre del módulo, donde antes era ${datos[MODULO]}`
                        : "Nombre del módulo"
                );
            }

            datos[MODULO] = resultado;
            break;

        case FUNCION:
            const preguntasLenguaje = tp.user.funcion();
            datos[FUNCION] = await tp.user.crearPreguntas(
                tp, preguntasLenguaje.obtenerDefault.bind(null, tp, datos[LENGUAJE]),
                (tp, datosDato, respuestaDada) => preguntasLenguaje.actualizarDatos(tp, datosDato, respuestaDada, datos[LENGUAJE]), 
                (tp, datosDato) => preguntasLenguaje.generarPreguntas(tp, datosDato, datos[LENGUAJE]), 
                "Definir la función que se quiere ingresar",
                datos[FUNCION] ? datos[FUNCION] : {}
            );
            break;

        case SALIR: 
            salir = true;
            break;
    }

    return salir;
}

function generarPreguntas(tp, datos) {
    const { SIMBOLOS, DATOS: { LENGUAJE: DATOS_LENGUAJE } } = tp.user.constantes(); 
    const preguntasLenguaje = tp.user.funcion();

    const usoLenguaje = tp.user.funcion();
    let opciones = [], valores = [];

    opciones.push(LENGUAJE);
    if (!datos[LENGUAJE]) {
        valores.push(` ${SIMBOLOS.agregar} Lenguaje`);
    } else {
        valores.push(` ${SIMBOLOS.modificar} Modificar el lenguaje, donde era ${DATOS_LENGUAJE[datos[LENGUAJE]].nombre}`);

        opciones.push(LIBRERIA);
        if (!datos[LIBRERIA]) {
            valores.push(` ${SIMBOLOS.agregar} Libreria`);
        } else {
            valores.push(` ${SIMBOLOS.modificar} Modificar la libreria, donde era ${datos[LIBRERIA]}`);

            opciones.push(MODULO);
            valores.push(datos[MODULO]
                ? ` ${SIMBOLOS.modificar} Modificar el modulo, donde era ${datos[MODULO]}`
                : ` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Modulo`
            );
        }

        opciones.push(FUNCION);
        valores.push(preguntasLenguaje.esValido(tp, datos[FUNCION], datos[LENGUAJE])
            ? ` ${SIMBOLOS.modificar} Modificar la función, donde era:\n\t${usoLenguaje.describir(tp, datos[FUNCION], datos[LENGUAJE]).replaceAll("\n", "\n\t")}`
            : ` ${SIMBOLOS.agregar} Función`
        )
    }

    if ([LENGUAJE, LIBRERIA].every(key => datos[key]) && preguntasLenguaje.esValido(tp, datos[FUNCION], datos[LENGUAJE])) {
        opciones.push(SALIR);
        valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
    }

    return { opciones: opciones, valores: valores };
}


async function agregarDatos(tp, datos) {
    const { 
        TAGS: { coleccion: { self: TAG_COLECCION, funciones: TAGS_FUNCIONES } }, 
        DATOS: { FUNCIONES: DATOS_FUNCIONES },
    } = tp.user.constantes();
    const tagPorNombre = tp.user.tagPorNombre;
    const crearArchivo = tp.user.archivo();
    const dv = app.plugins.plugins.dataview.api;

    let keyLenguaje = DATOS_FUNCIONES.lenguaje.keyLenguaje(datos[LENGUAJE]);

    let tagLenguaje = `${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.lenguajes[keyLenguaje]}`;
    let tagLibreria = `${tagLenguaje}/${tagPorNombre(datos[LIBRERIA])}`;

    let libreria = dv.pages(`#${tagLibreria} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.libreria}`).first();
    if (!libreria) {
        await crearArchivo.crear(tp, () => crearLibreria(tp, datos[LENGUAJE], datos[LIBRERIA]));
    } 

    if (datos[MODULO]) {
        let tagModulo = `${tagLibreria}/${tagPorNombre(datos[MODULO])}`;
        let modulos = dv.pages(`#${tagModulo} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_FUNCIONES.modulo}`);
        if (!modulos.first()) {
            await crearArchivo.crear(tp, () => crearModulo(tp, datos[LENGUAJE], datos[LIBRERIA], datos[MODULO]));
        }
    }
}

async function crearLibreria() {
    
}

module.exports = () => ({
    clase: (tp) => new Libreria(tp),
    crear: crearLibreria,
});