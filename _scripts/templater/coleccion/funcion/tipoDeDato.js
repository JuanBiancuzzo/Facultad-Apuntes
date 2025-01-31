const AGREGAR = "agregar";
const MODIFICAR = "modificar";
const ELIMINAR = "modificar";

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

        this.informacion = {
            nuevaTupla() { return tp.user.tupla(tp, this.manejoTipoDeDatos, this.lenguajeActual) },
            nuevoArray() { return tp.user.array(tp, this.manejoTipoDeDatos, this.lenguajeActual) },
            nuevoStruct() { return tp.user.struct(tp, this.manejoTipoDeDatos, this.lenguajeActual) },
            nuevoGenerico() { return tp.user.interfaz(tp, this.manejoTipoDeDatos, this.lenguajeActual) },
        }
    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        if (respuesta == SALIR)
            return true;

        switch (respuesta) {
            case this.config.tipo:
                let listaTiposDeDatos = [this.tipos.primitivo, this.tipos.array, this.tipos.struct];

                if (this.datosLenguaje.tieneTupla)
                    listaTiposDeDatos.push(this.config.tipo.tupla);
                if (this.datosLenguaje.genericos)
                    listaTiposDeDatos.push(this.config.tipo.generico);

                let nuevoTipoDeDato = await generarPreguntas.suggester(
                    (tipoDeDato) => `Tipo de dato ${tipoDeDato}`, listaTiposDeDatos,
                    "Que tipo de dato se quiere ingresar",
                    generarError.Quit("No se ingresó que tipo de del tipo de datos")
                );

                if (this.tipo != nuevoTipoDeDato) {
                    this.eliminar();

                    this.tipo = nuevoTipoDeDato;
                    this.id = null;
                    this.valor = null;
                }
                break;

            case this.tipos.primitivo:
                let nuevoIdPrimitivo = AGREGAR;
                let otrosTiposDeDatosPrimitivos = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.primitivo);

                if (otrosTiposDeDatosPrimitivos.length > 0) {
                    let valoresPrimitivos = otrosTiposDeDatosPrimitivos.map(({[this.manejador.valor]: valor}) => valor);
                    let idsPrimitivos = otrosTiposDeDatosPrimitivos.map(({[this.manejador.id]: id}) => id);

                    nuevoIdPrimitivo = await generarPreguntas.suggester(
                        [ ` ${this.simbolos.agregar} Agregar tipo de dato primitivo`, ...valoresPrimitivos], [AGREGAR, ...idsPrimitivos],
                        "Elegir si usar o crear un tipo de dato primitivo",
                        generarError.Quit("No se ingresó que hacer con el tipo de dato primitivo")
                    );
                }

                if (nuevoIdPrimitivo == AGREGAR) {
                    let nuevoValorPrimitivo = await generarPreguntas.prompt(
                        "Ingresar el tipo de dato primitivo", generarPreguntas.Quit("No se ingresó que tipo de dato primitivo")
                    );

                    nuevoIdPrimitivo = this.manejoTipoDeDatos.agregar(this.tipos.primitivo, nuevoValorPrimitivo);
                    
                } else if (this.id != nuevoIdPrimitivo) {
                    this.manejoTipoDeDatos.aparicion(this.tipos.primitivo, nuevoIdPrimitivo);

                }

                if (!this.id) this.manejoTipoDeDatos.eliminar(this.tipos.primitivo, this.id);
                this.id = nuevoIdPrimitivo;
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
                let nuevoIdStruct = AGREGAR;
                let otrosTiposDeDatosStruct = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.struct);

                let valorStruct = this.manejoTipoDeDatos.obtener(this.tipos.struct, this.id);
                let mensajeStruct = valorStruct
                    ? ` ${this.simbolos.modificar} Modificar la información de la estructura`
                    : ` ${this.simbolos.agregar} Ingresar la información de la estructura`;

                if (otrosTiposDeDatosStruct.length > 0) {
                    let valoresStruct = otrosTiposDeDatosStruct
                        .map(({ [this.manejador.valor]: valor }) => ` ${this.simbolos.elegir} ${valor.descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsStruct = otrosTiposDeDatosStruct.map(({ [this.manejador.id]: id }) => id);
                    
                    nuevoIdStruct = await generarPreguntas.suggester(
                        mensajeStruct, valoresStruct, idsStruct, "Elegir si usar o crear una estructura",
                        generarError.Quit("No se ingresó que hacer con la estructura")
                    );
                }

                if (nuevoIdPrimitivo == AGREGAR) {
                    let necesitaNuevoStruct = !valorStruct;
                    if (necesitaNuevoStruct) valorStruct = this.informacion.nuevoStruct();

                    await generarPreguntas.formulario(valorStruct, mensajeStruct);

                    if (necesitaNuevoStruct) {
                        this.id = this.manejoTipoDeDatos.agregar(this.tipos.struct, valorStruct);
                    }

                } else if (this.id != nuevoIdPrimitivo) {
                    this.manejoTipoDeDatos.aparicion(this.tipos.struct, this.id);
                }
                break;

            case this.tipos.generico:
                let nuevoIdGenerico = AGREGAR;
                let otrosTiposDeDatosGenerico = this.manejoTipoDeDatos.obtenerInformacion(this.tipos.generico);

                let valorGenerico = this.manejoTipoDeDatos.obtener(this.tipos.struct, this.id);
                let mensajeGenerico = valorGenerico
                    ? ` ${this.simbolos.modificar} Modificar la información de la interfaz`
                    : ` ${this.simbolos.agregar} Ingresar la información de la interfaz`;

                if (otrosTiposDeDatosGenerico.length > 0) {
                    let valoresGenericos = otrosTiposDeDatosGenerico
                        .map(({ [this.manejador.valor]: valor }) => ` ${this.simbolos.elegir} ${valor.descripcionCompleta().replaceAll("\n", "\n\t")}`);
                    let idsGenericos = otrosTiposDeDatosGenerico.map(({ [this.manejador.id]: id }) => id);
                    
                    nuevoIdGenerico = await generarPreguntas.suggester(
                        mensajeGenerico, valoresGenericos, idsGenericos, "Elegir si usar o crear una interfaz",
                        generarError.Quit("No se ingresó que hacer con la interfaz")
                    );
                }

                if (nuevoIdGenerico == AGREGAR) {
                    let necesitaNuevoGenerico = !valorGenerico;
                    if (necesitaNuevoGenerico) valorGenerico = this.informacion.nuevoGenerico();

                    await generarPreguntas.formulario(valorGenerico, mensajeGenerico);

                    if (necesitaNuevoGenerico) {
                        this.id = this.manejoTipoDeDatos.agregar(this.tipos.generico, valorStruct);
                    }

                } else if (this.id != necesitaNuevoGenerico) {
                    this.manejoTipoDeDatos.aparicion(this.tipos.generico, this.id);
                }
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [], valores = [];
        let descripcion;

        opciones.push(this.config.tipo);
        if (!this.tipo) {
            valores.push(` ${this.simbolos.agregar} Tipo de dato`);

        } else {
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de dato, donde era ${this.tipo}`);

            opciones.push(this.tipo);
            switch (this.tipo) {
                case this.tipos.primitivo:
                    descripcion = this.manejoTipoDeDatos.obtener(this.tipo, this.id);
                    valores.push(this.manejoTipoDeDatos.existe(this.tipo, this.id)
                        ? ` ${this.simbolos.modificar} Modificar tipo de dato primitivo, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Tipo de dato primitivo`
                    );
                    break;
                    
                case this.tipos.tupla:
                    descripcion = this.valor.descripcionCompleta().replaceAll("\n", "\n\t");
                    valores.push((this.valor && this.valor.esValido())
                        ? ` ${this.simbolos.modificar} Modificar el dato de una tupla, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Datos de una tupla`
                    );
                    break;
                    
                case this.tipos.array:
                    descripcion = this.valor.descripcionCompleta().replaceAll("\n", "\n\t");
                    valores.push((this.valor && this.valor.esValido())
                        ? ` ${this.simbolos.modificar} Modificar el dato de un array, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Datos de un array`
                    );
                    break;
                    
                case this.tipos.struct:
                    let valorStruct = this.manejoTipoDeDatos.obtener(this.tipo, this.id);
                    descripcion = valorStruct.describir().replaceAll("\n", "\n\t");
                    valores.push((valorStruct && valorStruct.esValido())
                        ? ` ${this.simbolos.modificar} Modificar el dato de una estructra, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Datos de una estructura`
                    );
                    break;
                    
                case this.tipos.generico:
                    let valorGenerico = this.manejoTipoDeDatos.obtener(this.tipo, this.id);
                    descripcion = valorGenerico.describir().replaceAll("\n", "\n\t");
                    valores.push((valorStruct && valorGenerico.esValido())
                        ? ` ${this.simbolos.modificar} Modificar el dato de un generico, donde era ${descripcion}`
                        : ` ${this.simbolos.agregar} Datos de un generico`
                    );
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
                this.valor.eliminar();
                break;

            case this.tipos.struct:
            case this.tipos.generico:
                this.manejoTipoDeDatos.obtener(this.tipo, this.id).eliminar();
                this.manejoTipoDeDatos.eliminar(this.tipo, this.id);
                break;
        }
    }

    esValido() {
        switch (this.tipo) {
            case this.tipos.primitivo:
                return this.manejoTipoDeDatos.existe(this.tipo, this.id);

            case this.tipos.array:
            case this.tipos.tupla:
                return this.valor && this.valor.esValido();

            case this.tipos.struct:
            case this.tipos.generico:
                let valor = this.manejoTipoDeDatos.obtener(this.tipo, this.id);
                return valor && valor.esValido();

            default: return false;
        }
    }

    generarRepresentacion() {
        return {
            [this.config.id]: this.id,
            [this.config.tipo]: this.tipo,
            [this.config.valor]: this.valor,
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

        this.informacion = {
            nuevoTipoDeDato() { return new TipoDeDatoSimple(tp, this.manejoTipoDeDatos, this.lenguajeActual) },
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

        let descripciones = this.datos.map(tipoDeDato => tipoDeDato.descripcionCompleta());
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