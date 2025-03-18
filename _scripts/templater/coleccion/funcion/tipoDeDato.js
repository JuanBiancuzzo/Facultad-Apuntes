const AGREGAR = "agregar";
const MODIFICAR = "modificar";
const ELIMINAR = "eliminar";
const CANCELAR = "cancelar";

const CANTIDAD_MINIMA = 1;

class TipoDeDatoSimple {
    constructor(tp, padre, manejoTipoDeDatos, lenguaje, representacionPrevia = {}) {
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
        this.padre = padre;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.id = representacionPrevia[this.config.id];
        this.tipo = representacionPrevia[this.config.tipo];

        switch (representacionPrevia[this.config.tipo]) {
            case this.tipos.tupla:
                this.valor = tp.user.tupla().clase(tp, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia[this.config.valor]);
                break;

            case this.tipos.array:
                this.valor = tp.user.array().clase(tp, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia[this.config.valor]);
                break;

            case this.tipos.referencia:
                this.valor = tp.user.referencia().clase(tp, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia[this.config.valor]);
                break;
        }

        this.crearTupla = tp.user.tupla().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearReferencia = tp.user.referencia().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearArray = tp.user.array().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearClase = tp.user.clase().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearStruct = tp.user.struct().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearGenerico = tp.user.generico().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearInterfaz = tp.user.interfaz().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearEnum = tp.user.enum().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        let opcion, otrosTiposDeDatos;

        switch (respuesta) {
            case this.config.tipo:
                let listaTiposDeDatos = [ this.tipos.primitivo ];

                if (this.datosLenguaje.array.tieneArray)            listaTiposDeDatos.push(this.tipos.array);
                if (this.datosLenguaje.tupla.tieneTupla)            listaTiposDeDatos.push(this.tipos.tupla);
                if (this.datosLenguaje.referencia.tieneReferencia)  listaTiposDeDatos.push(this.tipos.referencia);
                if (this.datosLenguaje.clase.tieneClase)            listaTiposDeDatos.push(this.tipos.clase);
                if (this.datosLenguaje.clase.tieneStruct)           listaTiposDeDatos.push(this.tipos.struct);
                if (this.datosLenguaje.enum.tieneEnum)              listaTiposDeDatos.push(this.tipos.enum);
                if (this.datosLenguaje.interfaz.tieneInterfaz)      listaTiposDeDatos.push(this.tipos.interfaces);
                if (this.datosLenguaje.generico.tieneGenericos && this.manejoTipoDeDatos.obtenerInformacion(this.tipos.generico).lenght > 0)
                    listaTiposDeDatos.push(this.tipos.generico);

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
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.primitivo);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresPrimitivos = otrosTiposDeDatos.map(primitivo => primitivo[this.manejador.valor]);
                    let idsPrimitivos = otrosTiposDeDatos.map(primitivo => primitivo[this.manejador.id]);

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
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.primitivo);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresPrimitivos = otrosTiposDeDatos.map(primitivo => primitivo[this.manejador.valor]);
                    let idsPrimitivos = otrosTiposDeDatos.map(primitivo => primitivo[this.manejador.id]);

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
                if (!this.valor) {
                    this.valor = this.crearTupla();
                    await generarPreguntas.formulario(this.valor, "Ingresar la información de la tupla");

                } else {
                    await generarPreguntas.formulario(this.valor, "Modificar la información de la tupla");
                }
                break;

            case this.tipos.array:
                if (!this.valor) {
                    this.valor = this.crearArray();
                    await generarPreguntas.formulario(this.valor, "Ingresar la información del array");

                } else {
                    await generarPreguntas.formulario(this.valor, "Modificar la información del array");
                }
                break;

            case this.tipos.referencia:
                if (!this.valor) {
                    this.valor = this.crearReferencia();
                    await generarPreguntas.formulario(this.valor, "Ingresar la información de la referencia");
                    
                } else {
                    await generarPreguntas.formulario(this.valor, "Modificar la información de la referencia");
                }
                break;
            
            case this.tipos.class:
                opcion = AGREGAR;
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.class);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresClase = otrosTiposDeDatos
                        .map(datos => ` ${this.simbolos.elegir} ${datos[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsClase = otrosTiposDeDatos.map(datos => datos[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Ingresar la información de la clase`, ...valoresClase ],
                        [ AGREGAR, ...idsClase ], "Elegir si usar o crear una clase",
                        generarError.Quit("No se ingresó que hacer con la clase")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorClase = this.crearClase();
                    let selfClase = valorClase.generarSelf();
                    this.id = this.manejoTipoDeDatos.agregar(this.tipos.clase, selfClase);

                    await generarPreguntas.formulario(valorClase, "Ingresar la información de la clase");
                    this.manejoTipoDeDatos.actualizar(this.tipos.clase, this.id, valorClase);

                } else {
                    let idModificado = await this.preguntarNuevoGenerico(this.tipos.clase, opcion);
                    if (idModificado != opcion) {
                        this.id = opcion;
                        this.manejoTipoDeDatos.aparicion(this.tipos.clase, this.id);
                    } else {
                        this.id = idModificado;
                    }
                }
                break;

            case `${MODIFICAR}${this.tipos.struct}`:
                opcion = AGREGAR;
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.clase);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresClase = otrosTiposDeDatos
                        .map(datos => ` ${this.simbolos.elegir} ${datos[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsClase = otrosTiposDeDatos.map(datos => datos[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.modificar} Modificar la información de la clase`, ...valoresClase ],
                        [ AGREGAR, ...idsClase ], "Elegir si usar o modificar una clase",
                        generarError.Quit("No se ingresó que hacer con la clase")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorClase = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.clase, this.id);
                    await generarPreguntas.formulario(valorClase, "Modificar la información de la clase");

                } else {
                    this.manejoTipoDeDatos.eliminar(this.tipos.clase, this.id);

                    let idModificado = await this.preguntarNuevoGenerico(this.tipos.clase, opcion);
                    if (idModificado != opcion) {
                        this.id = opcion;
                        this.manejoTipoDeDatos.aparicion(this.tipos.clase, this.id);
                    } else {
                        this.id = idModificado;
                    }
                }
                break;

            case this.tipos.struct:
                opcion = AGREGAR;
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.struct);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresStruct = otrosTiposDeDatos
                        .map(estructura => ` ${this.simbolos.elegir} ${estructura[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsStruct = otrosTiposDeDatos.map(estructura => estructura[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Ingresar la información de la estructura`, ...valoresStruct ],
                        [ AGREGAR, ...idsStruct ], "Elegir si usar o crear una estructura",
                        generarError.Quit("No se ingresó que hacer con la estructura")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorStruct = this.crearStruct();
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
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.struct);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresStruct = otrosTiposDeDatos
                        .map(estructura => ` ${this.simbolos.elegir} ${estructura[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsStruct = otrosTiposDeDatos.map(estructura => estructura[this.manejador.id]);
                    
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
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.generico);
                {
                    let valoresGenericos = otrosTiposDeDatos
                        .map(generico => ` ${this.simbolos.elegir} ${generico[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsGenericos = otrosTiposDeDatos
                        .map(generico => generico[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester( 
                        valoresGenericos, idsGenericos, "Elegir si usar o crear un generico",
                        generarError.Quit("No se ingresó que hacer con un generico")
                    );

                    this.id = opcion;
                    this.manejoTipoDeDatos.aparicion(this.tipos.generico, this.id);
                }
                break;

            case `${MODIFICAR}${this.tipos.generico}`:
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.generico);
                {
                    let valoresGenericos = otrosTiposDeDatos
                        .map(generico => ` ${this.simbolos.elegir} ${generico[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsGenericos = otrosTiposDeDatos.map(estructura => estructura[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.modificar} Modificar la información del generico`, ...valoresGenericos ],
                        [ AGREGAR, ...idsGenericos ], "Elegir si usar o modificar un generico",
                        generarError.Quit("No se ingresó que hacer con el generico")
                    );

                    if (this.id != opcion) {
                        this.manejoTipoDeDatos.eliminar(this.tipos.generico, this.id);
                        this.id = opcion;
                        this.manejoTipoDeDatos.aparicion(this.tipos.generico, this.id);
                    }
                }
                break;

            case this.tipos.interfaz:
                opcion = AGREGAR;
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.interfaz);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresInterfaz = otrosTiposDeDatos
                        .map(interfaz => ` ${this.simbolos.elegir} ${interfaz[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsInterfaz = otrosTiposDeDatos
                        .map(interfaz => interfaz[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Ingresar la información de la interfaz`, ...valoresInterfaz ],
                        [ AGREGAR, ...idsInterfaz ], "Elegir si usar o crear una interfaz",
                        generarError.Quit("No se ingresó que hacer con una interfaz")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorInterfaz = this.crearInterfaz();
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
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.interfaz);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresInterfaz = otrosTiposDeDatos
                        .map(interfaz => ` ${this.simbolos.elegir} ${interfaz[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsInterfaz = otrosTiposDeDatos.map(estructura => estructura[this.manejador.id]);
                    
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
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.enum);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresEnum = otrosTiposDeDatos
                        .map(interfaz => ` ${this.simbolos.elegir} ${interfaz[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsEnum = otrosTiposDeDatos
                        .map(interfaz => interfaz[this.manejador.id]);
                    
                    opcion = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Ingresar la información del enum`, ...valoresEnum ],
                        [ AGREGAR, ...idsEnum ], "Elegir si usar o crear un enum",
                        generarError.Quit("No se ingresó que hacer con un enum")
                    );
                }

                if (opcion == AGREGAR) {
                    let valorEnum = this.crearEnum();
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
                otrosTiposDeDatos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.enum);

                if (otrosTiposDeDatos.length > 0) {
                    let valoresEnum = otrosTiposDeDatos
                        .map(datos => ` ${this.simbolos.elegir} ${datos[this.manejador.valor].descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsEnum = otrosTiposDeDatos.map(datos => datos[this.manejador.id]);
                    
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

                case this.tipos.referencia:
                    opciones.push(this.tipos.referencia);
                    if (this.valor?.esValido()) {
                        let descripcion = this.valor.descripcionCompleta().replaceAll("\n", "\n\t");
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de una referencia, donde era ${descripcion}`);

                    } else {
                        valores.push(` ${this.simbolos.agregar} Datos de una referencia`);
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

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        switch (this.tipo) {
            case this.tipos.primitivo:
                this.manejoTipoDeDatos.eliminar(this.tipo, this.id);
                break;

            case this.tipos.tupla:
            case this.tipos.array:
            case this.tipos.referencia:
                this.valor?.eliminar();
                break;

            case this.tipos.struct:
            case this.tipos.interfaz:
            case this.tipos.clase:
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
            case this.tipos.referencia:
            case this.tipos.tupla:
                return this.valor && this.valor.esValido();

            case this.tipos.primitivo:
            case this.tipos.struct:
            case this.tipos.enum:
            case this.tipos.clase:
            case this.tipos.generico:
            case this.tipos.interfaz:
                return this.manejoTipoDeDatos.existe(this.tipo, this.id);

            default: return false;
        }
    }

    async preguntarNuevoGenerico(tipo, id, generarPreguntas, generarError) {
        let clonar = this.manejoTipoDeDatos.obtener(tipo, id).clonar();

        let nuevaDefinicion = await clonar.definirGenericos(generarPreguntas, generarError);
        return nuevaDefinicion ? this.manejoTipoDeDatos.agregar(tipo, clonar) : id;
    }

    generarRepresentacion() {
        switch (this.tipo) {
            case this.tipos.array:
            case this.tipos.tupla:
            case this.tipos.referencia:
                return { 
                    [this.config.tipo]: this.tipo, 
                    [this.config.valor]: this.valor?.generarRepresentacion() 
                };

            case this.tipos.primitivo:
            case this.tipos.struct:
            case this.tipos.clase:
            case this.tipos.enum:
            case this.tipos.generico:
            case this.tipos.interfaz:
                return { 
                    [this.config.tipo]: this.tipo, 
                    [this.config.id]: this.id, 
                };

            default: return {};
        }
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
            case this.tipos.referencia:
                return this.valor.descripcionCompleta();

            case this.tipos.struct:
            case this.tipos.clase:
            case this.tipos.enum:
            case this.tipos.generico:
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
            case this.tipos.referencia:
                return this.valor.descripcionArgumento();

            case this.tipos.struct:
            case this.tipos.clase:
            case this.tipos.enum:
            case this.tipos.interfaz:
            case this.tipos.generico:
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

        if (!this.datosLenguaje.tipoDeDato.multiples) throw Error(`El lenguaje ${this.lenguajeActual} no tiene tipos de datos multiples`);

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

    preguntarDatos(datosRecolectados = []) {
        for (let tipoDeDato of this.datos) {
            if (tipoDeDato?.esValido()) {
                tipoDeDato.preguntarDatos(datosRecolectados);
            }
        }
        return datosRecolectados;
    }

    async actualizarDatos(respuestaDada, generarPreguntas, _generarError) {
        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case AGREGAR:
                let nuevoTipoDeDato = this.crearTipoDeDato();
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

module.exports = () => ({
    clase: (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = null) => {
        const { DATOS: { LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } } = tp.user.constantes();
        let lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;

        return DATOS_LENGUAJES[lenguajeActual].tipoDeDato.multples
            ? new TipoDeDatoMultiple(tp, manejoTipoDeDatos, lenguajeActual, representacionPrevia ? representacionPrevia : [])
            : new TipoDeDatoSimple(tp, manejoTipoDeDatos, lenguajeActual, representacionPrevia ? representacionPrevia : {});
    },
});