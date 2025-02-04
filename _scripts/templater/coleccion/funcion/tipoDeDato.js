const AGREGAR = "agregar";
const MODIFICAR = "modificar";
const ELIMINAR = "eliminar";
const CANCELAR = "cancelar";

const CANTIDAD_MINIMA = 1;

const SALIR = "salir";

class TipoDeDatoSimple {
    constructor(tp, manejoTipoDeDatos, lenguaje, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { tipoDeDato: { tipo: DATOS_TIPO, ...DATOS_TIPO_DE_DATO }, manejador: DATOS_MANEJADOR }, 
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES },
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        this.simbolos = SIMBOLOS;
        this.config = { ...DATOS_TIPO_DE_DATO, tipo: DATOS_TIPO.self };
        this.tipos = DATOS_TIPO;
        this.manejador = DATOS_MANEJADOR;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.id = representacionPrevia[this.config.id];
        this.tipo = representacionPrevia[this.config.tipo];

        switch (representacionPrevia[this.config.tipo]) {
            case this.tipos.tupla:
                this.valor = tp.user.tupla(tp, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia[this.config.valor]);
                break;

            case this.tipos.array:
                this.valor = tp.user.array(tp, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia[this.config.valor]);
                break;
        }

        let lenguajeActual = this.lenguajeActual;
        this.informacion = {
            nuevaTupla() { return tp.user.tupla(tp, manejoTipoDeDatos, lenguajeActual) },
            nuevoArray() { return tp.user.array(tp, manejoTipoDeDatos, lenguajeActual) },
            nuevoStruct() { return tp.user.struct(tp, manejoTipoDeDatos, lenguajeActual) },
            nuegoGenerico() { return tp.user.generico(tp, manejoTipoDeDatos, lenguajeActual) },
            nuevaInterfaz() { return tp.user.interfaz(tp, manejoTipoDeDatos, lenguajeActual) },
            nuevoEnum() { return tp.user.generico(tp, manejoTipoDeDatos, lenguajeActual) },
        }
    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        if (respuesta == SALIR)
            return true;

        let opcion;
        let otrosTiposDeDatosPrimitivos, otrosTiposDeDatosStruct, otrosTiposDeDatosGenerico, otrosTiposDeDatosInterfaz, otrosTiposDeDatosEnum;

        switch (respuesta) {
            case this.config.tipo:
                let listaTiposDeDatos = [this.tipos.primitivo, this.tipos.array, this.tipos.struct];

                if (this.datosLenguaje.tieneTupla)
                    listaTiposDeDatos.push(this.tipos.tupla);
                if (this.datosLenguaje.interfaces)
                    listaTiposDeDatos.push(this.tipos.interfaz);
                if (this.datosLenguaje.genericos)
                    listaTiposDeDatos.push(this.tipos.generico);
                if (this.datosLenguaje.tieneEnum)
                    listaTiposDeDatos.push(this.tipos.enum);

                let nuevoTipoDeDato = await generarPreguntas.suggester(
                    [ ...listaTiposDeDatos.map(tipoDeDato => `Tipo de dato ${tipoDeDato}`), ` ${this.simbolos.volver} Cancelar` ],
                    [ ...listaTiposDeDatos, CANCELAR ], "Que tipo de dato se quiere ingresar",
                    generarError.Quit("No se ingresó que tipo de del tipo de datos")
                );

                if (nuevoTipoDeDato == CANCELAR) {
                    new Notice("No se quiso ingresar un tipo de dato");
                    return true;
                }

                if (this.tipo != nuevoTipoDeDato) {
                    this.eliminar();

                    this.tipo = nuevoTipoDeDato;
                    this.id = null;
                    this.valor = null;
                }
                break;

            case this.tipos.primitivo:
                opcion = AGREGAR;
                otrosTiposDeDatosPrimitivos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.primitivo);

                if (otrosTiposDeDatosPrimitivos.length > 0) {
                    let valoresPrimitivos = otrosTiposDeDatosPrimitivos.map(primitivo => primitivo[this.manejador.valor]);
                    let idsPrimitivos = otrosTiposDeDatosPrimitivos.map(primitivo => primitivo[this.manejador.id]);

                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Agregar tipo de dato primitivo`, ...valoresPrimitivos], [AGREGAR, ...idsPrimitivos],
                        "Elegir si usar o crear un tipo de dato primitivo",
                        generarError.Quit("No se ingresó que hacer con el tipo de dato primitivo")
                    );
                }

                if (opcion == AGREGAR) {
                    let nuevoValorPrimitivo = await generarPreguntas.prompt(
                        "Ingresar el tipo de dato primitivo", generarError.Quit("No se ingresó que tipo de dato primitivo")
                    );
                    this.id = this.manejoTipoDeDatos.agregar(this.tipos.primitivo, nuevoValorPrimitivo);

                } else {
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.primitivo, this.id);
                }
                break;

            case `${MODIFICAR}${this.tipos.primitivo}`:
                opcion = AGREGAR;
                otrosTiposDeDatosPrimitivos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.primitivo);

                if (otrosTiposDeDatosPrimitivos.length > 0) {
                    let valoresPrimitivos = otrosTiposDeDatosPrimitivos.map(primitivo => primitivo[this.manejador.valor]);
                    let idsPrimitivos = otrosTiposDeDatosPrimitivos.map(primitivo => primitivo[this.manejador.id]);

                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.modificar} Modificar tipo de dato primitivo`, ...valoresPrimitivos], [AGREGAR, ...idsPrimitivos],
                        "Elegir si usar o modificar un tipo de dato primitivo",
                        generarError.Quit("No se ingresó que hacer con el tipo de dato primitivo")
                    );
                }

                if (opcion == AGREGAR) {
                    let nuevoValorPrimitivo = await generarPreguntas.prompt(
                        "Ingresar el tipo de dato primitivo", generarPreguntas.Quit("No se ingresó que tipo de dato primitivo")
                    );
                    this.manejoTipoDeDatos.actualizar(this.tipos.primitivo, this.id, nuevoValorPrimitivo);

                } else {
                    this.manejoTipoDeDatos.eliminar(this.tipos.primitivo, this.id);
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.primitivo, this.id);
                }
                break;

            case this.tipos.tupla:
                if (!this.valor) this.valor = this.informacion.nuevaTupla();
                await generarPreguntas.formulario(this.valor, "Ingresar la información de la tupla");
                break;

            case this.tipos.array:
                if (!this.valor) this.valor = this.informacion.nuevoArray();
                await generarPreguntas.formulario(this.valor, "Ingresar la información del array");
                break;

            case this.tipos.struct:
                opcion = AGREGAR;
                otrosTiposDeDatosStruct = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.struct);

                if (otrosTiposDeDatosStruct.length > 0) {
                    let valoresStruct = otrosTiposDeDatosStruct
                        .map(estructura => ` ${this.simbolos.elegir} ${estructura[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsStruct = otrosTiposDeDatosStruct.map(estructura => estructura[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Ingresar la información de la estructura`, ...valoresStruct ],
                        [ AGREGAR, ...idsStruct ], "Elegir si usar o crear una estructura",
                        generarError.Quit("No se ingresó que hacer con la estructura")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorStruct = this.informacion.nuevoStruct();
                    let selfStruct = valorStruct.generarSelf();
                    this.id = this.manejoTipoDeDatos.agregar(this.tipos.struct, selfStruct);

                    await generarPreguntas.formulario(valorStruct, "Ingresar la información de la estructura");
                    this.manejoTipoDeDatos.actualizar(this.tipos.struct, this.id, valorStruct);

                } else {
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.struct, this.id);
                }
                break;

            case `${MODIFICAR}${this.tipos.struct}`:
                opcion = AGREGAR;
                otrosTiposDeDatosStruct = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.struct);

                if (otrosTiposDeDatosStruct.length > 0) {
                    let valoresStruct = otrosTiposDeDatosStruct
                        .map(estructura => ` ${this.simbolos.elegir} ${estructura[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsStruct = otrosTiposDeDatosStruct.map(estructura => estructura[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.modificar} Modificar la información de la estructura`, ...valoresStruct ],
                        [ AGREGAR, ...idsStruct ], "Elegir si usar o modificar una estructura",
                        generarError.Quit("No se ingresó que hacer con la estructura")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorStruct = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.struct, this.id);
                    await generarPreguntas.formulario(valorStruct, "Modificar la información de la estructura");

                } else {
                    this.manejoTipoDeDatos.eliminar(this.tipos.struct, this.id);
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.struct, this.id);
                }
                break;

            case this.tipos.generico:
                opcion = AGREGAR;
                otrosTiposDeDatosGenerico = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.generico);

                if (otrosTiposDeDatosGenerico.length > 0) {
                    let valoresGenericos = otrosTiposDeDatosGenerico
                        .map(interfaz => ` ${this.simbolos.elegir} ${interfaz[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsGenericos = otrosTiposDeDatosGenerico
                        .map(interfaz => interfaz[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Ingresar la información del generico`, ...valoresGenericos ],
                        [ AGREGAR, ...idsGenericos ], "Elegir si usar o crear un generico",
                        generarError.Quit("No se ingresó que hacer con un generico")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorGenerico = this.informacion.nuevoGenerico();
                    let selfGenerico = valorGenerico.generarSelf();
                    this.id = this.manejoTipoDeDatos.agregar(this.tipos.generico, selfGenerico);

                    await generarPreguntas.formulario(valorGenerico, "Ingresar la información del generico");
                    this.manejoTipoDeDatos.actualizar(this.tipos.generico, this.id, valorGenerico);

                } else {
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.generico, this.id);
                }
                break;

            case `${MODIFICAR}${this.tipos.generico}`:
                opcion = AGREGAR;
                otrosTiposDeDatosGenerico = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.generico);

                if (otrosTiposDeDatosGenerico.length > 0) {
                    let valoresGenericos = otrosTiposDeDatosGenerico
                        .map(interfaz => ` ${this.simbolos.elegir} ${interfaz[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsGenericos = otrosTiposDeDatosGenerico.map(estructura => estructura[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.modificar} Modificar la información del generico`, ...valoresGenericos ],
                        [ AGREGAR, ...idsGenericos ], "Elegir si usar o modificar un generico",
                        generarError.Quit("No se ingresó que hacer con el generico")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorGenerico = this.manejoTipoDeDatos.obtener(this.tipos.generico, this.id);
                    await generarPreguntas.formulario(valorGenerico, "Ingresar la información del generico");

                } else {
                    this.manejoTipoDeDatos.eliminar(this.tipos.generico, this.id);
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.generico, this.id);
                }
                break;

            case this.tipos.interfaz:
                opcion = AGREGAR;
                otrosTiposDeDatosInterfaz = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.interfaz);

                if (otrosTiposDeDatosInterfaz.length > 0) {
                    let valoresInterfaz = otrosTiposDeDatosInterfaz
                        .map(interfaz => ` ${this.simbolos.elegir} ${interfaz[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsInterfaz = otrosTiposDeDatosInterfaz
                        .map(interfaz => interfaz[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Ingresar la información de la interfaz`, ...valoresInterfaz ],
                        [ AGREGAR, ...idsInterfaz ], "Elegir si usar o crear una interfaz",
                        generarError.Quit("No se ingresó que hacer con una interfaz")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorInterfaz = this.informacion.nuevaInterfaz();
                    let selfInterfaz = valorInterfaz.generarSelf();
                    this.id = this.manejoTipoDeDatos.agregar(this.tipos.interfaz, selfInterfaz);

                    await generarPreguntas.formulario(valorInterfaz, "Ingresar la información de la interfaz");
                    this.manejoTipoDeDatos.actualizar(this.tipos.interfaz, this.id, valorInterfaz);

                } else {
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.interfaz, this.id);
                }
                break;

            case `${MODIFICAR}${this.tipos.interfaz}`:
                opcion = AGREGAR;
                otrosTiposDeDatosInterfaz = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.interfaz);

                if (otrosTiposDeDatosInterfaz.length > 0) {
                    let valoresInterfaz = otrosTiposDeDatosInterfaz
                        .map(interfaz => ` ${this.simbolos.elegir} ${interfaz[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsInterfaz = otrosTiposDeDatosInterfaz.map(estructura => estructura[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.modificar} Modificar la información de la interfaz`, ...valoresInterfaz ],
                        [ AGREGAR, ...idsInterfaz ], "Elegir si usar o modificar una interfaz",
                        generarError.Quit("No se ingresó que hacer con la interfaz")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorInterfaz = this.manejoTipoDeDatos.obtener(this.tipos.interfaz, this.id);
                    await generarPreguntas.formulario(valorInterfaz, "Ingresar la información de la interfaz");

                } else {
                    this.manejoTipoDeDatos.eliminar(this.tipos.interfaz, this.id);
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.interfaz, this.id);
                }
                break;

            case this.tipos.enum:
                opcion = AGREGAR;
                otrosTiposDeDatosEnum = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.enum);

                if (otrosTiposDeDatosEnum.length > 0) {
                    let valoresEnum = otrosTiposDeDatosEnum
                        .map(interfaz => ` ${this.simbolos.elegir} ${interfaz[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsEnum = otrosTiposDeDatosEnum
                        .map(interfaz => interfaz[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Ingresar la información del enum`, ...valoresEnum ],
                        [ AGREGAR, ...idsEnum ], "Elegir si usar o crear un enum",
                        generarError.Quit("No se ingresó que hacer con un enum")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorEnum = this.informacion.nuevoEnum();
                    let selfEnum = valorEnum.generarSelf();
                    this.id = this.manejoTipoDeDatos.agregar(this.tipos.enum, selfEnum);

                    await generarPreguntas.formulario(valorEnum, "Ingresar la información del enum");
                    this.manejoTipoDeDatos.actualizar(this.tipos.enum, this.id, valorEnum);

                } else {
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.enum, this.id);
                }
                break;

            case `${MODIFICAR}${this.tipos.enum}`:
                opcion = AGREGAR;
                otrosTiposDeDatosEnum = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.enum);

                if (otrosTiposDeDatosEnum.length > 0) {
                    let valoresEnum = otrosTiposDeDatosEnum
                        .map(datos => ` ${this.simbolos.elegir} ${interfaz[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsEnum = otrosTiposDeDatosEnum.map(datos => datos[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.modificar} Modificar la información del enum`, ...valoresEnum ],
                        [ AGREGAR, ...idsEnum ], "Elegir si usar o modificar un enum",
                        generarError.Quit("No se ingresó que hacer con el enum")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorEnum = this.manejoTipoDeDatos.obtener(this.tipos.enum, this.id);
                    await generarPreguntas.formulario(valorEnum, "Ingresar la información del enum");

                } else {
                    this.manejoTipoDeDatos.eliminar(this.tipos.enum, this.id);
                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.enum, this.id);
                }
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.tipo);
        if (!this.tipo) {
            valores.push(` ${this.simbolos.agregar} Tipo de dato`);

        } else {
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de dato, donde era ${this.tipo}`);

            switch (this.tipo) {
                case this.tipos.primitivo:
                    if (this.manejoTipoDeDatos.existe(this.tipo, this.id)) {
                        let descripcion = this.manejoTipoDeDatos.obtener(this.tipo, this.id);

                        opciones.push(`${MODIFICAR}${this.tipos.primitivo}`);
                        valores.push(` ${this.simbolos.modificar} Modificar tipo de dato primitivo, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.primitivo);
                        valores.push(` ${this.simbolos.agregar} Tipo de dato primitivo`);
                    }
                    break;
                    
                case this.tipos.tupla:
                    opciones.push(this.tipos.tupla);
                    if (this.valor?.esValido()) {
                        let descripcion = this.valor.descripcionCompleta().replaceAll("\n", "\n\t");
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de una tupla, donde era ${descripcion}`);

                    } else {
                        valores.push(` ${this.simbolos.agregar} Datos de una tupla`);
                    }
                    break;
                    
                case this.tipos.array:
                    opciones.push(this.tipos.array);
                    if (this.valor?.esValido()) {
                        let descripcion = this.valor.descripcionCompleta().replaceAll("\n", "\n\t");
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de un array, donde era ${descripcion}`);

                    } else {
                        valores.push(` ${this.simbolos.agregar} Datos de un array`);
                    }
                    break;
                    
                case this.tipos.struct:
                    let valorStruct = this.manejoTipoDeDatos.obtener(this.tipo, this.id);
                    if (valorStruct?.esValido()) {
                        let descripcion = valorStruct.descripcionCompleta().replaceAll("\n", "\n\t");
                        opciones.push(`${MODIFICAR}${this.tipos.struct}`);
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de una estructra, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.struct);
                        valores.push(` ${this.simbolos.agregar} Datos de una estructura`);
                    }
                    break;

                case this.tipos.generico:
                    let valorGenerico = this.manejoTipoDeDatos.obtener(this.tipo, this.id);
                    if (valorGenerico?.esValido()) {
                        let descripcion = valorGenerico.descripcionCompleta().replaceAll("\n", "\n\t");
                        opciones.push(`${MODIFICAR}${this.tipos.generico}`);
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de un generico, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.generico);
                        valores.push(` ${this.simbolos.agregar} Datos de un generico`);
                    }
                    break;

                case this.tipos.interfaz:
                    let valorInterfaz = this.manejoTipoDeDatos.obtener(this.tipo, this.id);
                    if (valorInterfaz?.esValido()) {
                        let descripcion = valorInterfaz.descripcionCompleta().replaceAll("\n", "\n\t");
                        opciones.push(`${MODIFICAR}${this.tipos.interfaz}`);
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de una interfaz, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.interfaz);
                        valores.push(` ${this.simbolos.agregar} Datos de una interfaz`);
                    }
                    break;
                    
                case this.tipos.enum:
                    let valorEnum = this.manejoTipoDeDatos.obtener(this.tipo, this.id);
                    if (valorEnum?.esValido()) {
                        let descripcion = valorEnum.descripcionCompleta().replaceAll("\n", "\n\t");
                        opciones.push(`${MODIFICAR}${this.tipos.enum}`);
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de un enum, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.enum);
                        valores.push(` ${this.simbolos.agregar} Datos de un enum`);
                    }
                    break;
            }
        }

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.confirmar} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        switch (this.tipo) {
            case this.tipos.primitivo:
                this.manejoTipoDeDatos.eliminar(this.tipo, this.id);
                break;

            case this.tipos.tupla:
            case this.tipos.array:
                this.valor?.eliminar();
                break;

            case this.tipos.struct:
            case this.tipos.interfaz:
            case this.tipos.enum:
            case this.tipos.generico:
                this.manejoTipoDeDatos.obtener(this.tipo, this.id)?.eliminar();
                this.manejoTipoDeDatos.eliminar(this.tipo, this.id);
                break;
        }
    }

    esValido() {
        switch (this.tipo) {
            case this.tipos.array:
            case this.tipos.tupla:
                return this.valor && this.valor.esValido();

            case this.tipos.primitivo:
            case this.tipos.struct:
            case this.tipos.generico:
            case this.tipos.enum:
            case this.tipos.interfaz:
                return this.manejoTipoDeDatos.existe(this.tipo, this.id);

            default: return false;
        }
    }

    generarRepresentacion() {
        return {
            [this.config.id]: this.id,
            [this.config.tipo]: this.tipo,
            [this.config.valor]: this.valor?.generarRepresentacion(),
        };
    }

    descripcionCompleta() {
        if (!this.tipo) return "";

        switch (this.tipo) {
            case this.tipos.primitivo:
                if (!this.manejoTipoDeDatos.existe(this.tipos.primitivo, this.id))
                    return "";
                return this.manejoTipoDeDatos.obtener(this.tipos.primitivo, this.id);

            case this.tipos.tupla:
            case this.tipos.array:
                return this.valor.descripcionCompleta();

            case this.tipos.struct:
            case this.tipos.generico:
            case this.tipos.enum:
            case this.tipos.interfaz:
                return this.manejoTipoDeDatos.obtener(this.tipo, this.id).descripcionCompleta();
        }
    }

    descripcionArgumento() {
        if (!this.tipo) return "";

        switch (this.tipo) {
            case this.tipos.primitivo:
                if (!this.manejoTipoDeDatos.existe(this.tipos.primitivo, this.id))
                    return "";
                return this.manejoTipoDeDatos.obtener(this.tipos.primitivo, this.id);

            case this.tipos.tupla:
            case this.tipos.array:
                return this.valor.descripcionArgumento();

            case this.tipos.struct:
            case this.tipos.generico:
            case this.tipos.enum:
            case this.tipos.interfaz:
                return this.manejoTipoDeDatos.obtener(this.tipo, this.id).descripcionArgumento();
        }
    }
}

class TipoDeDatoMultiple {
    constructor(tp, manejoTipoDeDatos, lenguaje, representacionPrevia = []) {
        const { SIMBOLOS, DATOS: { LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        if (!this.datosLenguaje.multiplesTiposDatos) throw Error(`El lenguaje ${this.lenguajeActual} no tiene tipos de datos multiples`);

        this.simbolos = SIMBOLOS;
        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.datos = [];
        for (let representacionSimple of representacionPrevia) {
            this.datos.push(new TipoDeDatoSimple(tp, this.manejoTipoDeDatos, this.lenguajeActual, representacionSimple));
        }

        let lenguajeActual = this.lenguajeActual;
        this.informacion = {
            nuevoTipoDeDato() { return new TipoDeDatoSimple(tp, manejoTipoDeDatos, lenguajeActual) },
        }
    }

    async actualizarDatos(respuestaDada, generarPreguntas, _generarError) {
        if (respuestaDada == SALIR)
            return true;

        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case AGREGAR:
                let nuevoTipoDeDato = this.informacion.nuevoTipoDeDato();
                await generarPreguntas.formulario(nuevoTipoDeDato, "Ingresar el tipo de dato");
                this.datos.push(nuevoTipoDeDato);
                break;

            case MODIFICAR:
                await generarPreguntas.formulario(this.datos[indice], "Modificar el tipo de dato");
                break;

            case ELIMINAR:
                this.datos[indice].eliminar();
                this.splice(indice, 1);
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        for (let [indice, tipoDeDato] of this.datos.entries()) {
            let descripcion = tipoDeDato.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR}-${indice}`);
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de dato, donde era ${descripcion}`);

            opciones.push(`${ELIMINAR}-${indice}`);
            valores.push(` ${this.simbolos.sacar} Eliminar el tipo de dato, donde era ${descripcion}`);
        }

        if (this.datos.length >= CANTIDAD_MINIMA) {
            opciones.push(AGREGAR);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Tipo de dato`);

        } else {
            opciones.push(AGREGAR);
            valores.push(` ${this.simbolos.agregar} Tipo de dato`);
        }

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.confirmar} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        for (let tipoDeDatoSimple of this.datos) {
            tipoDeDatoSimple.eliminar();
        }
    }

    esValido() {
        return this.datos.length >= CANTIDAD_MINIMA 
            && this.datos.every(tipoDeDatoSimple => tipoDeDatoSimple && tipoDeDatoSimple.esValido());
    }

    generarRepresentacion() {
        return this.datos
            .map(tipoDeDatoSimple => tipoDeDatoSimple?.generarRepresentacion())
            .filter(representacion => representacion !== undefined);
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";

        let descripciones = this.datos.map(tipoDeDatoSimple => tipoDeDatoSimple.descripcionCompleta());
        return this.descripcionPorLenguaje(descripciones);
    }

    descripcionArgumento() {
        if (!this.esValido()) return "";

        let descripciones = this.datos.map(tipoDeDatoSimple => tipoDeDatoSimple.descripcionArgumento());
        return this.descripcionPorLenguaje(descripciones);
    }

    descripcionPorLenguaje(descripciones) {
        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                return descripciones.length > 1
                    ? `${descripciones.join(" | ")}`
                    : descripciones.first();

            case this.lenguajes.rust:
                return descripciones.length > 1
                    ? `(${descripciones.join(", ")})`
                    : descripciones.first();

            case this.lenguajes.c:
                return descripciones.first();

            default:
                return descripciones.length > 1
                    ? `(${descripciones.join(" | ")})`
                    : descripciones.first();
        }
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = null) => {
    const { DATOS: { LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } } = tp.user.constantes();
    let lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;

    return DATOS_LENGUAJES[lenguajeActual].multiplesTiposDatos
        ? new TipoDeDatoMultiple(tp, manejoTipoDeDatos, lenguajeActual, representacionPrevia ? representacionPrevia : [])
        : new TipoDeDatoSimple(tp, manejoTipoDeDatos, lenguajeActual, representacionPrevia ? representacionPrevia : {});
};