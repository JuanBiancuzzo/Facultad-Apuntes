const MODIFICAR_ESTRUCTURA = "modificar estructura";
const ELIMINAR_ESTRUCTURA = "eliminar estructura";

const MODIFICAR_METODO = "modificar metodo";
const ELIMINAR_METODO = "eliminar metodo";

const CANTIDAD_MINIMA_ESTRUCTURAS = 1;
const CANTIDAD_MINIMA_METODOS = 1;

const AGREGAR = "agregar";

const SALIR = "salir";

class EstructuraDeDatos {
    constructor(tp, manejoTipoDeDatos) {
        const { 
            SIMBOLOS, DATOS: { 
                ESTRUCTURA_DATOS: DATOS_ESTRUCTURA, FUNCIONES: { manejador: DATOS_MANEJADOR, tipoDeDato: { tipo: DATOS_TIPOS } } 
            }
        } = tp.user.constantes();

        this.config = DATOS_ESTRUCTURA;
        this.tipos = DATOS_TIPOS;
        this.manejador = DATOS_MANEJADOR;
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.informacion = {
            _claseStruct: null,
            get struct() {
                if (!this._claseStruct)
                    this._claseStruct = tp.user.struct(tp, manejoTipoDeDatos);
                return this._claseStruct;
            },

            _claseFuncion: null,
            get funcion() {
                if (!this._claseFuncion)
                    this._claseFuncion = tp.user.funcion(tp, manejoTipoDeDatos);
                return this._claseFuncion;
            },
        };

        this.preguntar = tp.user.preguntar();
        this.error = tp.user.error();
        this.crearPreguntas = tp.user.crearPreguntas;

        this.obtenerDefault = this.obtenerDefault.bind(this);
        this.actualizarDatos = this.actualizarDatos.bind(this);
        this.generarPreguntas = this.generarPreguntas.bind(this);
        this.esValido = this.esValido.bind(this);
    }

    obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion) {
        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [this.config.nombre]: TIPOS_DE_DEFAULT.simple,
            [this.config.estructuras]: crearFuncion(
                TIPOS_DE_DEFAULT.array,
                () => this.informacion.struct.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion),
            ),
            [this.config.metodos]: crearFuncion(
                TIPOS_DE_DEFAULT.array,
                () => this.informacion.funcion.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion),
            ),
        }));
    }

    async actualizarDatos(tp, datos, respuestaDada) {
        let salir = false;
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                datos[this.config.nombre] = await this.preguntar.prompt(
                    tp, datos[this.config.nombre]
                    ? `Nuevo nombre de la estructura, donde antes era ${datos[this.config.nombre]}`
                    : "Nombre de la estructura",
                    this.error.Quit("No se ingresó el nombre de la estructura")
                );
                break;

            case MODIFICAR_ESTRUCTURA:
            case this.config.estructuras:
                let idStruct = AGREGAR;
                let otrosTiposDeDatosStruct = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.struct);

                let estructuraPrevia = null;
                let mensajeEstructura = ` ${this.simbolos.agregar} Ingresar la información de la estructura`;
                if (indice) {
                    estructuraPrevia = this.manejoTipoDeDatos.obtener(this.tipos.struct, datos[this.config.estructuras][indice]);
                    mensajeEstructura = ` ${this.simbolos.modificar} Modificar la información de la estructura`;
                }

                if (otrosTiposDeDatosStruct.length > 0) {
                    idStruct = await this.preguntar.suggester(
                        tp, [
                            mensajeEstructura,
                            ...otrosTiposDeDatosStruct.map(({[this.manejador.valor]: valor}) => ` ${this.simbolos.elegir} ` + this.informacion.struct.describir(valor).replaceAll("\n", "\n\t"))
                        ], [AGREGAR, ...otrosTiposDeDatosStruct.map(({[this.manejador.id]: id}) => id)],
                        "Elegir si usar o crear una estructura",
                        this.error.Quit("No se ingresó que hacer con la estructura")
                    );
                }

                if (idStruct == AGREGAR) {
                    let valorStruct = await this.crearPreguntas(
                        tp, this.informacion.struct.obtenerDefault, this.informacion.struct.actualizarDatos,
                        this.informacion.struct.generarPreguntas, "Ingresar la información de la estructura", estructuraPrevia
                    );

                    if (indice) {
                        idStruct = datos[this.config.estructura][indice];
                        this.manejoTipoDeDatos.actualizar(this.tipos.struct, idStruct, valorStruct);

                    } else {
                        idStruct = this.manejoTipoDeDatos.agregar(this.tipos.struct, valorStruct);
                    }

                } else {
                    this.manejoTipoDeDatos.aparicion(this.tipos.struct, idStruct);
                }

                if (indice) {
                    datos[this.config.estructuras][indice] = idStruct;
                } else {
                    datos[this.config.estructuras].push(idStruct);
                }
                break;

            case ELIMINAR_ESTRUCTURA:
                let idEstructuraEliminar = datos[this.config.estructuras].pop();
                let valorEstructura = this.manejoTipoDeDatos.obtener(this.tipos.struct, idEstructuraEliminar);
                this.informacion.struct.eliminar(valorEstructura);
                break;

            case MODIFICAR_METODO:
            case this.config.metodos:
                let metodoPrevio;
                if (indice) metodoPrevio = datos[this.config.metodos][indice];

                let metodo = await this.crearPreguntas(
                    tp, this.informacion.funcion.obtenerDefault, this.informacion.funcion.actualizarDatos, 
                    this.informacion.funcion.generarPreguntas, "Ingresar el método del la estructura de datos",
                    metodoPrevio
                );
                console.log("Salimos del metodo")

                if (indice) {
                    datos[this.config.metodos][indice] = metodo;
                } else {
                    datos[this.config.metodos].push(metodo);
                }
                break;

            case ELIMINAR_METODO:
                let metodoEliminar = datos[this.config.metodos].pop();
                this.informacion.funcion.eliminar(metodoEliminar);
                break;

            case SALIR:
                salir = true;
                break;
        }

        return salir;
    }

    generarPreguntas(tp, datos) {
        let opciones = [], valores = [];

        opciones.push(this.config.nombre);
        valores.push(datos[this.config.nombre]
            ? ` ${this.simbolos.modificar} Modificar el nombre de la estructura, donde era ${datos[this.config.nombre]}`
            : ` ${this.simbolos.agregar} Nombre de la estructura`
        )

        for (let [indice, idEstructura] of datos[this.config.estructuras].entries()) {
            let estructura = this.manejoTipoDeDatos.obtener(this.tipos.struct, idEstructura);

            opciones.push(`${MODIFICAR_ESTRUCTURA}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar la estructura, donde es: \n\t${this.informacion.struct.describir(estructura).replaceAll("\n", "\n\t")}`);
        }

        if (datos[this.config.estructuras].length > 0) {
            let ultimoIdEstructura = datos[this.config.estructuras].last();
            let ultimaEstructura = this.manejoTipoDeDatos.obtener(this.tipos.struct, ultimoIdEstructura);

            opciones.push(ELIMINAR_ESTRUCTURA);
            valores.push(` ${this.simbolos.sacar} Eliminar la estructura, donde es: \n\t${this.informacion.struct.describir(ultimaEstructura).replaceAll("\n", "\n\t")}`);

            opciones.push(this.config.estructuras);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Estructura`);

        } else {
            opciones.push(this.config.estructuras);
            valores.push(` ${this.simbolos.agregar} Estructura`);
        }

        for (let [indice, metodo] of datos[this.config.metodos].entries()) {
            opciones.push(`${MODIFICAR_METODO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el método, donde es ${this.informacion.funcion.describir(metodo)}`);
        }

        if (datos[this.config.metodos].length > 0) {
            let ultimoMetodo = datos[this.config.metodos].last();
            opciones.push(ELIMINAR_METODO);
            valores.push(` ${this.simbolos.sacar} Eliminar el método, donde es ${this.informacion.funcion.describir(ultimoMetodo)}`);

            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Método`);

        } else {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} Método`);
        }

        if (this.esValido(datos)) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    esValido(datos) {
        if (!datos) return false;

        return datos[this.config.nombre] 
            && datos[this.config.estructuras].length >= CANTIDAD_MINIMA_ESTRUCTURAS 
            && datos[this.config.metodos].length >= CANTIDAD_MINIMA_METODOS
            && datos[this.config.estructuras].every(idEstructura => {
                let estructura = this.manejoTipoDeDatos.obtener(this.tipos.struct, idEstructura);
                return this.informacion.struct.esValido(estructura);
            })
            && datos[this.config.metodos].every(metodo => this.informacion.funcion.esValido(metodo));
    }
}

async function crearEstructura(tp) {
    const {
        ETAPAS, FORMATO_DIA, SECCIONES,
        TEMPLATE: { etapa: TEMPLATE_ETAPA, coleccion: { estructuraDatos: TEMPLATE_ESTRUCTURA } }, 
        DIRECTORIOS: { coleccion: DIR_COLECCION }, 
        DATOS: { 
            ARCHIVO: DATOS_ARCHIVO, ESTRUCTURA_DATOS: DATOS_ESTRUCTURA,
            FUNCIONES: { 
                lenguaje: DATOS_LENGUAJES, funcion: { firma: DATOS_FIRMA },
                tipoDeDato: { tipo: DATOS_TIPO_DE_DATO }, manejador: DATOS_MANEJADOR
            },
            LENGUAJE: { lenguajes: LENGUAJES },
        },
        TAGS: { 
            coleccion: { 
                self: TAG_COLECCION, representante: TAG_REPRESENTANTE, 
                estructuraDatos: TAGS_ESTRUCTURAS, funciones: { lenguajes: TAGS_LENGUAJES, ...TAGS_FUNCIONES },
            },
            nota: TAGS_NOTA,
        },
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;

    let titulo = tp.file.title;
    let datosPrevios = {
        [DATOS_ESTRUCTURA.nombre]: !titulo.startsWith("Untitle")
            ? titulo
            : null,
    };

    let notaPseudocodigo = dv.pages(`#${TAGS_FUNCIONES.self}/${TAGS_LENGUAJES[LENGUAJES.default]} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_LENGUAJES.self}`)
        .first();
    let datosPrimitivos = notaPseudocodigo[DATOS_LENGUAJES.tiposPrimitivos]
        ? notaPseudocodigo[DATOS_LENGUAJES.tiposPrimitivos]
            .map(datos => ({ [DATOS_MANEJADOR.tipo]: DATOS_TIPO_DE_DATO.primitivo, ...datos }))
        : [];

    let manejoTipoDeDatos = tp.user.manejarTipoDato(tp, datosPrimitivos);
    let estructuraDeDatos = new EstructuraDeDatos(tp, manejoTipoDeDatos);

    let datos = await tp.user.crearPreguntas(
        tp, estructuraDeDatos.obtenerDefault, estructuraDeDatos.actualizarDatos,
        estructuraDeDatos.generarPreguntas, "Ingresar datos de la estructura", datosPrevios
    );

    let representante = dv.pages(`#${TAG_COLECCION}/${TAG_REPRESENTANTE} and #${TAG_COLECCION}/${TAGS_ESTRUCTURAS.self}`)
        .first();

    let texto = await tp.file.include(`[[${TEMPLATE_ETAPA}]]`);
    texto += await tp.file.include(`[[${TEMPLATE_ESTRUCTURA.infoGeneral}]]`);
    texto += `\n\n${"#".repeat(SECCIONES.operaciones.nivel)} ${SECCIONES.operaciones.texto}\n---\n`;
    texto += "Vamos a ver las operaciones que deben existir para que se pueda usar esta estructura\n\n";
    for (let funcion of datos[DATOS_ESTRUCTURA.metodos]) {
        texto += `${"#".repeat(SECCIONES.metodo.nivel)} ${funcion[DATOS_FIRMA.nombreFuncion]}\n---\n`;
        // texto += await tp.file.include(`[[${TEMPLATE_ESTRUCTURA.representarMetodoDv}]]`);
        texto += "\n\n";
    }

    let tNotaPseudocodigo = tp.file.find_tfile(notaPseudocodigo.file.path);
    if (!tNotaPseudocodigo) tNotaPseudocodigo = await tp.user.libreriaFunciones().crear.lenguaje(tp, LENGUAJES.default);

    await app.fileManager.processFrontMatter(tNotaPseudocodigo, (frontmatter) => {
        let primitivosNuevos = manejoTipoDeDatos.obtenerInformacion(DATOS_TIPO_DE_DATO.primitivo);
        let primitivosViejos = frontmatter[DATOS_LENGUAJES.tiposPrimitivos]
            ? frontmatter[DATOS_LENGUAJES.tiposPrimitivos]
            : [];

        for (let primitivoViejo of primitivosViejos) {
            let primitivoNuevo = primitivosNuevos.find(({ [DATOS_MANEJADOR.id]: id }) => primitivoViejo[DATOS_MANEJADOR.id] == id);

            if (primitivoNuevo) {
                primitivoNuevo[DATOS_MANEJADOR.valor] = primitivoViejo[DATOS_MANEJADOR.valor];
                primitivoNuevo[DATOS_MANEJADOR.apariciones] += primitivoViejo[DATOS_MANEJADOR.apariciones];

            } else if (primitivoViejo[DATOS_MANEJADOR.apariciones] > 0) {
                primitivosNuevos.push(primitivoViejo);

            }
        }

        frontmatter[DATOS_LENGUAJES.tiposPrimitivos] = primitivosNuevos;
    });

    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.etapa]: ETAPAS.empezado,
            [DATOS_ARCHIVO.tags]: [
                ...tp.user.obtenerTag(tp, representante[DATOS_ARCHIVO.tags]),
                `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
                `${TAG_COLECCION}/${TAGS_ESTRUCTURAS.self}/${TAGS_ESTRUCTURAS.estructura}`,
            ],
            ...datos,
            [DATOS_ESTRUCTURA.tipoEstructura]: manejoTipoDeDatos.obtenerInformacion(DATOS_TIPO_DE_DATO.struct),
            [DATOS_ESTRUCTURA.tipoInterfaz]: manejoTipoDeDatos.obtenerInformacion(DATOS_TIPO_DE_DATO.generico),
        },
        carpeta: representante
            ? representante.file.folder
            : `${DIR_COLECCION.self}/${DIR_COLECCION.estructuraDatos}`,
        titulo: datos[DATOS_ESTRUCTURA.nombre],
        texto: texto,
    }
}

function editar() {

}

module.exports = () => ({
    crear: crearEstructura,
    editar: editar,
    class: (tp, manejoTipoDeDatos) => new EstructuraDeDatos(tp, manejoTipoDeDatos),
});