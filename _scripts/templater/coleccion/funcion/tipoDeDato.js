const MODIFICAR_TIPO_DATO = "modificar tipo dato";
const ELIMINAR_TIPO_DATO = "eliminar tipo dato";

const MODIFICAR_VALOR = "modificar";
const ELIMINAR_VALOR = "eliminar valor";

const AGREGAR = "agregar";

const CANTIDAD_MINIMA = 1;

const SALIR = "salir";

class TipoDeDato {
    constructor(tp, manejoTipoDeDatos, lenguaje) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { tipoDeDato: DATOS_TIPO_DE_DATO },
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[(lenguaje in LENGUAJES) 
            ? lenguaje 
            : LENGUAJES.default
        ];
        this.config = DATOS_TIPO_DE_DATO;
        this.tipos = DATOS_TIPO_DE_DATO.tipo;
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.informacion = {
            _claseTupla: null,
            get tupla() {
                if (!this._claseTupla)
                    this._claseTupla = tp.user.tupla(tp, manejoTipoDeDatos, lenguaje);
                return this._claseTupla;
            },

            _claseArray: null,
            get array() {
                if (!this._claseArray)
                    this.claseArray = tp.user.array(tp, manejoTipoDeDatos, lenguaje);
                return this._claseArray;
            },

            _claseStruct: null,
            get struct() {
                if (!this._claseStruct)
                    this.claseStruct = tp.user.struct(tp, manejoTipoDeDatos, lenguaje);
                return this._claseStruct;
            },

            _claseInterfaz: null,
            get interfaz() {
                if (!this._claseInterfaz)
                    this.claseInterfaz = tp.user.interfaz(tp, manejoTipoDeDatos, lenguaje);
                return this._claseInterfaz;
            }
        };

        this.preguntar = tp.user.preguntar();
        this.error = tp.user.error();
        this.crearPreguntas = tp.user.crearPreguntas;
    }

    obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion) {
        let tipoDeDatosCantidad = this.datosLenguaje.multiplesTiposDatos
            ? TIPOS_DE_DEFAULT.array
            : TIPOS_DE_DEFAULT.simple;

        return crearFuncion(tipoDeDatosCantidad, () => {
            return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
                [this.tipos.self]: TIPOS_DE_DEFAULT.simple,
                [this.config.valor]: TIPOS_DE_DEFAULT.simple,
                [this.config.id]: TIPOS_DE_DEFAULT.simple,
            }));
        });
    }

    async actualizarDatos(_tp, datos, respuestaDada) {
        let salir = false;
        let [respuesta, indice] = respuestaDada.split("-");

        let datosPrevios = datos;
        if (!(this.datosLenguaje.multiplesTiposDatos)) {
            datosPrevios = [datos];
            indice = 0;
        }

        let listaTiposDeDatos = [ this.tipos.primitivo, this.tipos.array, this.tipos.struct ];

        if (this.datosLenguaje.tieneTupla) 
            listaTiposDeDatos.push(this.config.tipo.tupla);
        if (this.datosLenguaje.genericos) 
            listaTiposDeDatos.push(this.config.tipo.generico);

        switch (respuesta) {
            case MODIFICAR_TIPO_DATO:
                let tipoDeDatoModificado = await this.preguntar.suggester(
                    _tp, (tipoDeDato) => `Tipo de dato ${tipoDeDato}`, listaTiposDeDatos,
                    "Que tipo de dato se quiere ingresar",
                    this.error.Quit("No se ingresó que tipo de del tipo de datos")
                );

                if (datos[indice][this.tipos.self] != tipoDeDatoModificado) {
                    this.eliminar(datos);

                    datos[indice][this.tipos.self] = tipoDeDatoModificado;
                    datos[indice][this.config.valor] = null;
                    datos[indice][this.config.id] = null;
                }
                break;

            case this.tipos.self:
                let nuevoTipoDeDato = await this.preguntar.suggester(
                    _tp, (tipoDeDato) => `Tipo de dato ${tipoDeDato}`, listaTiposDeDatos,
                    "Que tipo de dato se quiere ingresar",
                    this.error.Quit("No se ingresó que tipo de del tipo de datos")
                );

                if (this.datosLenguaje.multiplesTiposDatos) {
                    datos.push({ [this.tipos.self]: nuevoTipoDeDato });

                } else if (datos[this.tipos.self] != nuevoTipoDeDato) {
                    this.eliminar(datos);

                    datos[this.tipos.self] = nuevoTipoDeDato;
                    datos[this.config.valor] = null;
                    datos[this.config.id] = null;
                }
                break;

            case ELIMINAR_TIPO_DATO:
                if (datosPrevios[indice][this.config.id]) {
                    this.eliminar(datos);
                }
                datos.splice(indice, 1);
                break;

            case this.tipos.primitivo:
                let idPrimitivo = AGREGAR;
                if (manejoTipoDeDatos.length > 0) {
                    idPrimitivo = await this.preguntar.suggester(
                        _tp, [
                            ` ${this.simbolos.agregar} Agregar tipo de dato primitivo`,
                            ...this.manejoTipoDeDatos.obtenerInformacion(this.tipos.primitivo)[this.config.valor]
                        ], [AGREGAR, ...this.manejoTipoDeDatos.obtenerInformacion(this.tipos.primitivo)[this.config.id]],
                        "Elegir si usar o crear un tipo de dato primitivo",
                        this.error.Quit("No se ingresó que hacer con el tipo de dato primitivo")
                    );
                }

                if (idPrimitivo == AGREGAR) {
                    let nuevoValorPrimitivo = await this.preguntar.prompt(
                        _tp, "Ingresar el tipo de dato primitivo",
                        error.Quit("No se ingresó que tipo de dato primitivo"),
                    );

                    idPrimitivo = manejoTipoDeDatos.agregar(this.tipos.primitivo, nuevoValorPrimitivo);
                }

                if (this.datosLenguaje.multiplesTiposDatos) {
                    datos[indice][this.config.id] = idPrimitivo;
                } else {
                    datos[this.config.id] = idPrimitivo;
                }
                break;

            case `${MODIFICAR_VALOR}${this.tipos.primitivo}`:
                let nuevoValorPrimitivo = await this.preguntar.prompt(
                    _tp, "Modificar el tipo de dato primitivo",
                    this.error.Quit("No se ingresó que tipo de dato primitivo"),
                );
                manejoTipoDeDatos.actualizar(this.tipos.primitivo, datos[indice][this.config.id], nuevoValorPrimitivo);
                break;

            case `${MODIFICAR_VALOR}${this.tipos.tupla}`:
            case this.tipos.tupla:
                let tuplaPrevia = datosPrevios[indice][this.config.valor];

                let valorTupla = await this.crearPreguntas(
                    _tp, this.informacion.tupla.obtenerDefault, this.informacion.tupla.actualizarDatos,
                    this.informacion.tupla.generarPreguntas, "Ingresar la información de la tupla", tuplaPrevia
                );

                if (this.datosLenguaje.multiplesTiposDatos) {
                    datos[indice][this.config.valor] = valorTupla;
                } else {
                    datos[this.config.valor] = valorTupla;
                }
                break;

            case `${MODIFICAR_VALOR}${this.tipos.array}`:
            case this.tipos.array:
                let arrayPrevio = datosPrevios[indice][this.config.valor];

                let valorArray = await this.crearPreguntas(
                    _tp, this.informacion.array.obtenerDefault, this.informacion.array.actualizarDatos,
                    this.informacion.array.generarPreguntas, "Ingresar la información del array", arrayPrevio
                );

                if (this.datosLenguaje.multiplesTiposDatos) {
                    datos[indice][this.config.valor] = valorArray;
                } else {
                    datos[this.config.valor] = valorArray;
                }
                break;

            case `${MODIFICAR_VALOR}${this.tipos.struct}`:
            case this.tipos.struct:
                let structPrevio = this.manejoTipoDeDatos.obtener(this.tipos.struct, datosPrevios[indice][this.config.id]);

                let valorStruct = await this.crearPreguntas(
                    _tp, this.informacion.struct.obtenerDefault, this.informacion.struct.actualizarDatos,
                    this.informacion.struct.generarPreguntas, "Ingresar la información de la estructura", structPrevio
                );

                if (datosPrevios[indice][this.config.id]) {
                    this.manejoTipoDeDatos.actualizar(this.tipos.struct, datosPrevios[indice][this.config.id], valorStruct);

                } else {
                    let nuevoId = this.manejoTipoDeDatos.agregar(this.tipos.struct, valorStruct);
                    if (this.datosLenguaje.multiplesTiposDatos) {
                        datos[indice][this.config.id] = nuevoId;
                    } else {
                        datos[this.config.id] = nuevoId;
                    }
                }
                break;

            case `${MODIFICAR_VALOR}${this.tipos.generico}`:
            case this.tipos.generico:
                let interfazPrevia = this.manejoTipoDeDatos.obtener(this.tipos.generico, datosPrevios[indice][this.config.id]);

                let valorInterfaz = await this.crearPreguntas(
                    _tp, this.informacion.interfaz.obtenerDefault, this.informacion.interfaz.actualizarDatos,
                    this.informacion.interfaz.generarPreguntas, "Ingresar la información de la interfaz", interfazPrevia
                );

                if (datosPrevios[indice][this.config.id]) {
                    this.manejoTipoDeDatos.actualizar(this.tipos.generico, datosPrevios[indice][this.config.id], valorInterfaz);

                } else {
                    let nuevoId = this.manejoTipoDeDatos.agregar(this.tipos.generico, valorInterfaz);
                    if (this.datosLenguaje.multiplesTiposDatos) {
                        datos[indice][this.config.id] = nuevoId;
                    } else {
                        datos[this.config.id] = nuevoId;
                    }
                }
                break;

            case ELIMINAR_VALOR:
                this.manejoTipoDeDatos.eliminar(datos[indice][this.tipos.self], datos[indice][this.config.id]);
                datos[indice][this.config.valor] = null;
                break;

            case SALIR:
                salir = true;
                break;
        }

        return salir;
    }

    generarPreguntasMultiple(datos, opcional) {
        let opciones = [], valores = [];

        let textoOpcional = opcional ? `${this.simbolos.opcional} ` : "";

        if (!(datos && datos[this.tipos.self])) {
            opciones.push(this.tipos.self);
            valores.push(` ${this.simbolos.agregar} ${textoOpcional}Tipo de dato`)

        } else {
            opciones.push(MODIFICAR_TIPO_DATO);
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de dato, donde era ${datos[this.tipos.self]}`);

            opciones.push(ELIMINAR_TIPO_DATO);
            valores.push(` ${this.simbolos.sacar} Eliminar el tipo de dato, donde era ${datos[this.tipos.self]}`);

            let descripcion;
            switch (datos[this.tipos.self]) {
                case this.tipos.primitivo:
                    if (this.manejoTipoDeDatos.existe(this.tipos.primitivo, datos[this.config.id])) {
                        descripcion = this.manejoTipoDeDatos.obtener(this.tipos.primitivo, datos[this.config.id]);

                        opciones.push(`${MODIFICAR_VALOR}${this.tipos.primitivo}`);
                        valores.push(` ${this.simbolos.modificar} Modificar el tipo de dato primitivo, donde era ${descripcion}`);

                        opciones.push(ELIMINAR_VALOR);
                        valores.push(` ${this.simbolos.sacar} Eliminar el tipo de dato, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.primitivo);
                        valores.push(` ${this.simbolos.agregar} ${textoOpcional}Tipo de dato primitivo`);
                    }

                    break;

                case this.tipos.tupla:
                    if (this.informacion.tupla.esValido(datos[this.config.valor])) {
                        descripcion = this.informacion.tupla.describir(datos[this.config.valor])
                            .replaceAll("\n", "\n\t");

                        opciones.push(`${MODIFICAR_VALOR}${this.tipos.tupla}`);
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de una tupla, donde era ${descripcion}`);

                        opciones.push(ELIMINAR_VALOR);
                        valores.push(` ${this.simbolos.sacar} Eliminar el dato de una tupla, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.tupla);
                        valores.push(` ${this.simbolos.agregar} ${textoOpcional}Datos de una tupla`);
                    }
                    break;

                case this.tipos.array:
                    if (this.informacion.array.esValido(datos[this.config.valor])) {
                        descripcion = infoArray.describir(tp, datos[this.config.valor])
                            .replaceAll("\n", "\n\t");

                        opciones.push(`${MODIFICAR_VALOR}${this.tipos.array}`);
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de un array, donde era ${descripcion}`);

                        opciones.push(ELIMINAR_VALOR);
                        valores.push(` ${this.simbolos.sacar} Eliminar el dato de un array, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.array);
                        valores.push(` ${this.simbolos.agregar} ${textoOpcional}Datos de un array`);
                    }
                    break;

                case this.tipos.struct:
                    let valorStruct = this.manejoTipoDeDatos.obtener(this.tipos.struct, datos[this.config.id]);
                    if (this.informacion.struct.esValido(valorStruct)) {
                        descripcion = this.informacion.struct.describir(valorStruct)
                            .replaceAll("\n", "\n\t");

                        opciones.push(`${MODIFICAR_VALOR}${this.tipos.struct}`);
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de una estructura, donde era ${descripcion}`);

                        opciones.push(ELIMINAR_VALOR);
                        valores.push(` ${this.simbolos.sacar} Eliminar el dato de una estructura, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.struct);
                        valores.push(` ${this.simbolos.agregar} ${textoOpcional}Datos de una estructura`);
                    }
                    break;

                case this.tipos.generico:
                    let valorInterfaz = this.manejoTipoDeDatos.obtener(this.tipos.generico, datos[this.config.id]);
                    if (this.informacion.interfaz.esValido(valorInterfaz)) {
                        descripcion = this.informacion.interfaz.describir(valorInterfaz)
                            .replaceAll("\n", "\n\t");

                        opciones.push(`${MODIFICAR_VALOR}${this.tipos.generico}`);
                        valores.push(` ${this.simbolos.modificar} Modificar el dato de un generico, donde era ${descripcion}`);

                        opciones.push(ELIMINAR_VALOR);
                        valores.push(` ${this.simbolos.sacar} Eliminar el dato de un un generico, donde era ${descripcion}`);

                    } else {
                        opciones.push(this.tipos.generico);
                        valores.push(` ${this.simbolos.agregar} ${textoOpcional}Datos de un generico`);
                    }
                    break;
            }
        }

        return { opciones: opciones, valores: valores };
    }

    generarPreguntasSimple(datos) {
        let opciones = [], valores = [];
        let descripcion;

        opciones.push(this.tipos.self);
        if (!datos[this.tipos.self]) {
            valores.push(` ${this.simbolos.agregar} Tipo de dato`)

        } else {
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de dato, donde era ${datos[this.tipos.self]}`);

            switch (datos[this.tipos.self]) {
                case this.tipos.primitivo:
                    descripcion = this.manejoTipoDeDatos.obtener(this.tipos.primitivo, datos[this.config.id]);

                    opciones.push(this.tipos.primitivo);
                    valores.push(this.manejoTipoDeDatos.existe(this.tipos.primitivo, datos[this.config.id])
                        ? ` ${this.simbolos.modificar} Modificar el tipo de dato primitivo, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Tipo de dato primitivo`
                    );
                    break;

                case this.tipos.tupla:
                    descripcion = this.informacion.tupla.describir(datos[this.config.valor])
                        .replaceAll("\n", "\n\t");

                    opciones.push(this.tipos.tupla);
                    valores.push(this.informacion.tupla.esValido(datos[this.config.valor])
                        ? ` ${this.simbolos.modificar} Modificar el dato de una tupla, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Datos de una tupla`
                    );
                    break;

                case this.tipos.array:
                    descripcion = this.informacion.array.describir(datos[this.config.valor])
                        .replaceAll("\n", "\n\t");

                    opciones.push(this.tipos.array);
                    valores.push(this.informacion.array.esValido(datos[this.config.valor])
                        ? ` ${this.simbolos.modificar} Modificar el dato de un array, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Datos de un array`
                    );
                    break;

                case this.tipos.struct:
                    let valorStruct = this.manejoTipoDeDatos.obtener(this.tipos.struct, datos[this.config.id]);
                    descripcion = this.informacion.struct.describir(valorStruct)
                        .replaceAll("\n", "\n\t");

                    opciones.push(this.tipos.struct);
                    valores.push(this.informacion.struct.esValido(valorStruct)
                        ? ` ${this.simbolos.modificar} Modificar el dato de una estructra, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Datos de una estructura`
                    );
                    break;

                case this.tipos.generico:
                    let valorInterfaz = this.manejoTipoDeDatos.obtener(this.tipos.generico, datos[this.config.id]);
                    descripcion = this.informacion.interfaz.describir(valorInterfaz)
                        .replaceAll("\n", "\n\t");

                    opciones.push(this.tipos.generico);
                    valores.push(this.informacion.interfaz.esValido(valorInterfaz)
                        ? ` ${this.simbolos.modificar} Modificar el dato de un generico, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Datos de un generico`
                    );
                    break;
            }
        }

        return { opciones: opciones, valores: valores };
    }
    
    generarPreguntas(_tp, datos) {
        let opciones = [], valores = [];

        if (this.datosLenguaje.multiplesTiposDatos) {
            for (let [indice, tipoDeDato] of datos.entries()) {
                let { opciones: nuevasOpciones, valores: nuevosValores } = this.generarPreguntasMultiple(tipoDeDato);

                opciones = opciones.concat(nuevasOpciones.map(opcion => `${opcion}-${indice}`));
                valores = valores.concat(nuevosValores);
            }

            let { opciones: nuevasOpciones, valores: nuevosValores } = this.generarPreguntasMultiple(null, datos.length >= CANTIDAD_MINIMA);

            opciones = opciones.concat(nuevasOpciones.map(opcion => `${opcion}-${datos.length}`));
            valores = valores.concat(nuevosValores);

        } else {
            let { opciones: nuevasOpciones, valores: nuevosValores } = this.generarPreguntasSimple(datos);

            opciones = nuevasOpciones;
            valores = nuevosValores;
        }

        if (this.esValido(datos)) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };

    }

    eliminar(datos) {
        if (!this.esValido(datos)) return;

        if (!this.datosLenguaje.multiplesTiposDatos) {
            datos = [ datos ];
        }

        for (let tipoDeDato of datos) {
            switch (tipoDeDato[this.tipos.sefl]) {
                case this.tipos.primitivo:
                    this.manejoTipoDeDatos.eliminar(this.tipos.primitivo, datos[this.config.id]);
                    break;
                
                case this.tipos.tupla:
                    this.informacion.tupla.eliminar(tipoDeDato);
                    break;
                
                case this.tipos.array:
                    this.informacion.array.eliminar(tipoDeDato);
                    break;
                
                case this.tipos.struct:
                    this.informacion.struct.eliminar(tipoDeDato);
                    break;
                
                case this.tipos.generico:
                    this.informacion.generico.eliminar(tipoDeDato);
                    break;
            }
        }
    }

    describir(datos) {
        if (!this.esValido(datos)) return "";

        if (!this.datosLenguaje.multiplesTiposDatos) {
            datos = [datos];
        }

        let descripciones = datos.map(tipoDeDato => {
            if (!tipoDeDato[this.tipos.self]) return "";

            switch (tipoDeDato[this.tipos.self]) {
                case this.tipos.primitivo:
                    if (!this.manejoTipoDeDatos.existe(this.tipos.primitivo, tipoDeDato[this.config.id]))
                        return "";
                    return this.manejoTipoDeDatos.obtener(this.tipos.primitivo, tipoDeDato[this.config.id]);

                case this.tipos.tupla:
                    return this.informacion.tupla.describir(tipoDeDato[this.config.valor]);

                case this.tipos.array:
                    return this.informacion.array.describir(tipoDeDato[this.config.valor]);

                case this.tipos.struct:
                    if (!this.manejoTipoDeDatos.existe(this.tipos.struct, tipoDeDato[this.config.id]))
                        return "";
                    return this.informacion.struct.describir(this.manejoTipoDeDatos.obtener(this.tipos.struct, tipoDeDato[this.config.id]));

                case this.tipos.generico:
                    if (!this.manejoTipoDeDatos.existe(this.tipos.generico, tipoDeDato[this.config.id]))
                        return "";
                    return this.informacion.interfaz.describir(this.manejoTipoDeDatos.obtener(this.tipos.generico, tipoDeDato[this.config.id]));
            }
        });

        switch (lenguaje) {
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

    esValido(datos) {
        if (!datos) return false;

        if (!this.datosLenguaje.multiplesTiposDatos) {
            datos = [datos];
        }

        return datos.length >= CANTIDAD_MINIMA && datos.every(tipoDeDato => {
            switch (tipoDeDato[this.tipos.self]) {
                case this.tipos.primitivo:
                    return this.manejoTipoDeDatos.existe(this.tipos.primitivo, tipoDeDato[this.config.id]);

                case this.tipos.tupla:
                    return this.informacion.tupla.esValido(tipoDeDato[this.config.valor]);

                case this.tipos.array:
                    return this.informacion.array.esValido(tipoDeDato[this.config.valor]);

                case this.tipos.struct:
                    return this.informacion.struct.esValido(
                        this.manejoTipoDeDatos.obtener(this.tipos.struct, tipoDeDato[this.config.id]),
                    );

                case this.tipos.generico:
                    return this.informacion.interfaz.esValido(
                        this.manejoTipoDeDatos.obtener(this.tipos.generico, tipoDeDato[this.config.id])
                    );

                default: return false;
            }
        });

    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje) => TipoDeDato(tp, manejoTipoDeDatos, lenguaje);