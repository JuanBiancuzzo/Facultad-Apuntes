const MODIFICAR_ESTRUCTURA = "modificar estructura";
const ELIMINAR_ESTRUCTURA = "eliminar estructura";

const MODIFICAR_METODO = "modificar metodo";
const ELIMINAR_METODO = "eliminar metodo";

const CANTIDAD_MINIMA_ESTRUCTURAS = 1;
const CANTIDAD_MINIMA_METODOS = 1;

const AGREGAR = "agregar";

const SALIR = "salir";

class EstructuraDeDatos {
    constructor(tp, manejoTipoDeDatos, nombre = null, estructurasId = [], metodos = []) {
        const { 
            SIMBOLOS, DATOS: { 
                ESTRUCTURA_DATOS: DATOS_ESTRUCTURA, 
                FUNCIONES: { 
                    struct: DATOS_STRUCT,
                    manejador: DATOS_MANEJADOR, 
                    tipoDeDato: { tipo: DATOS_TIPOS } 
                },
                LENGUAJE: { lenguajes: LENGUAJES },
            }
        } = tp.user.constantes();

        this.config = DATOS_ESTRUCTURA;
        this.tipos = DATOS_TIPOS;
        this.manejador = DATOS_MANEJADOR;
        this.struct = DATOS_STRUCT,
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.nombre = nombre;
        this.idEstructuras = [];
        this.metodos = [];

        let estructurasIdPrevias = estructurasId ? estructurasId : [];
        for (let estructuraPreviaId of estructurasIdPrevias) {
            this.idEstructuras.push(estructuraPreviaId);
        }
        let metodosPrevios = metodos ? metodos : [];
        for (let metodoPrevio of metodosPrevios) {
            this.metodos.push(tp.user.funcion(tp, this.manejoTipoDeDatos, LENGUAJES.default, metodoPrevio));
        }

        this.informacion = {
            nuevoStruct() { return tp.user.struct(tp, manejoTipoDeDatos, LENGUAJES.default); },
            nuevoMetodo() { return tp.user.funcion(tp, manejoTipoDeDatos, LENGUAJES.default); },
        };
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR)
            return true;

        let opcion, otrosTiposDeDatosStruct;
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre de la estructura, donde antes era ${this.nombre}`
                        : "Nombre de la estructura",
                    generarError.Quit("No se ingresó el nombre de la estructura")
                );
                break;

            case this.config.estructuras:
                opcion = AGREGAR;
                otrosTiposDeDatosStruct = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.struct);

                if (otrosTiposDeDatosStruct.length > 0) {
                    let valoresEstructuras = otrosTiposDeDatosStruct
                        .map(estructura => ` ${this.simbolos.elegir} ${estructura[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsEstructuras = otrosTiposDeDatosStruct.map(estructura => estructura[this.manejador.id]);

                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Ingresar la información de la estructura`, ...valoresEstructuras ],
                        [ AGREGAR, ...idsEstructuras ], "Elegir si usar o ingresar una estructura",
                        generarError.Quit("No se ingresó que hacer con la estructura al ingresar")

                    );
                }

                if (opcion == AGREGAR) {
                    let estructuraAgregar = this.informacion.nuevoStruct();
                    let selfStruct = estructuraAgregar.generarSelf();
                    let id = this.manejoTipoDeDatos.agregar(this.tipos.struct, selfStruct);
                    this.idEstructuras.push(id);

                    await generarPreguntas.formulario(estructuraAgregar, "Ingresar la información de la estructura");
                    this.manejoTipoDeDatos.actualizar(this.tipos.struct, id, estructuraAgregar);

                } else {
                    this.idEstructuras.push(opcion);
                    this.manejoTipoDeDatos.aparicion(this.tipos.struct, opcion);

                }
                break;

            case MODIFICAR_ESTRUCTURA:
                opcion = AGREGAR;
                otrosTiposDeDatosStruct = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.struct);

                if (otrosTiposDeDatosStruct.length > 0) {
                    let valoresEstructuras = otrosTiposDeDatosStruct
                        .map(estructura => ` ${this.simbolos.elegir} ${estructura[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsEstructuras = otrosTiposDeDatosStruct.map(estructura => estructura[this.manejador.id]);

                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.modificar} Modificar la información de la estructura`, ...valoresEstructuras ], 
                        [ AGREGAR, ...idsEstructuras ], "Elegir si usar o modificar una estructura",
                        generarError.Quit("No se ingresó que hacer con la estructura al modificar")
                    );
                }

                if (opcion == AGREGAR) {
                    let estructuraModificar = this.manejoTipoDeDatos.obtener(this.tipos.struct, this.idEstructuras[indice]);
                    await generarPreguntas.formulario(estructuraModificar, "Modificar la información de la estructura");

                } else {
                    this.manejoTipoDeDatos.eliminar(this.tipos.struct, this.idEstructuras[indice]);
                    this.idEstructuras[indice] = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.struct, this.idEstructuras[indice]);
                }
                break;

            case ELIMINAR_ESTRUCTURA:
                let idEstructuraEliminar = this.idEstructuras.pop();
                let valorEstructura = this.manejoTipoDeDatos.obtener(this.tipos.struct, idEstructuraEliminar);

                valorEstructura.eliminar();
                this.manejoTipoDeDatos.eliminar(this.tipos.struct, idEstructuraEliminar);
                break;

            case this.config.metodos:
                let nuevoMetodo = this.informacion.nuevoMetodo();
                await generarPreguntas.formulario(nuevoMetodo, "Ingresar el método de la estructura de datos");
                this.metodos.push(nuevoMetodo);
                break;

            case MODIFICAR_METODO:
                await generarPreguntas.formulario(this.metodos[indice], "Ingresar el método de la estructura de datos");
                break;

            case ELIMINAR_METODO:
                let metodoEliminar = this.metodos.pop();
                metodoEliminar.eliminar();
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre de la estructura, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre de la estructura`
        )

        for (let [indice, idEstructura] of this.idEstructuras.entries()) {
            let estructura = this.manejoTipoDeDatos.obtener(this.tipos.struct, idEstructura);
            let descripcion = estructura.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_ESTRUCTURA}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar la estructura, donde es: \n\t${descripcion}`);
        }

        if (this.idEstructuras.length > 0) {
            let ultimoIdEstructura = this.idEstructuras.last();
            let ultimaEstructura = this.manejoTipoDeDatos.obtener(this.tipos.struct, ultimoIdEstructura);
            let descripcion = ultimaEstructura.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(ELIMINAR_ESTRUCTURA);
            valores.push(` ${this.simbolos.sacar} Eliminar la estructura, donde es: \n\t${descripcion}`);

            opciones.push(this.config.estructuras);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Estructura`);

        } else {
            opciones.push(this.config.estructuras);
            valores.push(` ${this.simbolos.agregar} Estructura`);
        }

        for (let [indice, metodo] of this.metodos.entries()) {
            let descripcion = metodo.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_METODO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el método, donde es ${descripcion}`);
        }

        if (this.metodos.length > 0) {
            let ultimoMetodo = this.metodos.last();
            let descripcion = ultimoMetodo.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(ELIMINAR_METODO);
            valores.push(` ${this.simbolos.sacar} Eliminar el método, donde es ${descripcion}`);

            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Método`);

        } else {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} Método`);
        }

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    esValido() {
        return this.nombre 
            && this.idEstructuras.length >= CANTIDAD_MINIMA_ESTRUCTURAS
            && this.metodos.length >= CANTIDAD_MINIMA_METODOS
            && this.idEstructuras.every(idEstructura => {
                let estructura = this.manejoTipoDeDatos.obtener(this.tipos.struct, idEstructura);
                return estructura?.esValido();
            })
            && this.metodos.every(metodo => metodo?.esValido());
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
                lenguaje: DATOS_LENGUAJES, funcion: DATOS_FUNCIONES,
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
    const preguntar = tp.user.preguntar();
    const dv = app.plugins.plugins.dataview.api;

    let notaPseudocodigo = dv.pages(`#${TAGS_FUNCIONES.self}/${TAGS_LENGUAJES[LENGUAJES.default]} and #${TAG_COLECCION}/${TAGS_FUNCIONES.self}/${TAGS_LENGUAJES.self}`)
        .first();
    let datosPrimitivos = notaPseudocodigo[DATOS_LENGUAJES.tiposPrimitivos]
        ? notaPseudocodigo[DATOS_LENGUAJES.tiposPrimitivos]
            .map(datos => ({ [DATOS_MANEJADOR.tipo]: DATOS_TIPO_DE_DATO.primitivo, ...datos }))
        : [];

    let manejoTipoDeDatos = tp.user.manejarTipoDato(tp, datosPrimitivos);

    let titulo = tp.file.title.startsWith("Untitle") ? null : tp.file.title;
    let estructuraDeDatos = new EstructuraDeDatos(tp, manejoTipoDeDatos, titulo);
    await preguntar.formulario(tp, estructuraDeDatos, "Ingresar datos de la estructura");

    let representante = dv.pages(`#${TAG_COLECCION}/${TAG_REPRESENTANTE} and #${TAG_COLECCION}/${TAGS_ESTRUCTURAS.self}`)
        .first();

    let texto = await tp.file.include(`[[${TEMPLATE_ETAPA}]]`);
    texto += await tp.file.include(`[[${TEMPLATE_ESTRUCTURA.infoGeneral}]]`);
    texto += `\n\n${"#".repeat(SECCIONES.operaciones.nivel)} ${SECCIONES.operaciones.texto}\n---\n`;
    texto += "Vamos a ver las operaciones que deben existir para que se pueda usar esta estructura\n\n";
    for (let funcion of estructuraDeDatos.metodos) {
        texto += `${"#".repeat(SECCIONES.metodo.nivel)} ${funcion[DATOS_FUNCIONES.nombreFuncion]}\n---\n`;
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
            let primitivoNuevo = primitivosNuevos
                .find(({ [DATOS_MANEJADOR.id]: id }) => primitivoViejo[DATOS_MANEJADOR.id] == id);

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
            [DATOS_ESTRUCTURA.nombre]: estructuraDeDatos.nombre,
            [DATOS_ESTRUCTURA.metodos]: estructuraDeDatos.metodos
                .map(metodo => ({ ...metodo.generarRepresentacion() })),
            [DATOS_ESTRUCTURA.estructuras]: manejoTipoDeDatos.obtenerInformacion(DATOS_TIPO_DE_DATO.struct)
                .map(datos => ({
                    [DATOS_MANEJADOR.valor]: datos[DATOS_MANEJADOR.valor].generarRepresentacion(),
                    [DATOS_MANEJADOR.apariciones]: datos[DATOS_MANEJADOR.apariciones],
                    [DATOS_MANEJADOR.id]: datos[DATOS_MANEJADOR.id],
                })),
            [DATOS_ESTRUCTURA.tipoInterfaz]: manejoTipoDeDatos.obtenerInformacion(DATOS_TIPO_DE_DATO.generico)
                .map(datos => ({
                    [DATOS_MANEJADOR.valor]: datos[DATOS_MANEJADOR.valor].generarRepresentacion(),
                    [DATOS_MANEJADOR.apariciones]: datos[DATOS_MANEJADOR.apariciones],
                    [DATOS_MANEJADOR.id]: datos[DATOS_MANEJADOR.id],
                })),
        },
        carpeta: representante
            ? representante.file.folder
            : `${DIR_COLECCION.self}/${DIR_COLECCION.estructuraDatos}`,
        titulo: estructuraDeDatos.nombre,
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