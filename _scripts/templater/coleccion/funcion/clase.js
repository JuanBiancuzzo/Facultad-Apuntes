const MODIFICAR_CAMPO = "modificar campo";
const ELIMINAR_CAMPO = "eliminar campo";

const MODIFICAR_VARIABLE_ESTATICAS = "modificar variable estatica";
const ELIMINAR_VARIABLE_ESTATICAS = "eliminar variable estatica";

const MODIFICAR_METODO = "modificar metodo";
const ELIMINAR_METODO = "eliminar metodo";

const MODIFICAR_GENERICO = "modificar generico";
const ELIMINAR_GENERICO = "eliminar generico";

const CANTIDAD_MINIMA_CAMPOS = 1;
const CANTIDAD_MINIMA_METODOS = 0;
const CANTIDAD_MINIMA_VARIABLE_ESTATICAS = 0;
const CANTIDAD_MINIMA_GENERICOS = 0;

const SALIR = "salir";

class TipoClase {
    constructor(tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { 
                    clase: DATOS_CLASE, manejador: DATOS_MANEJADOR, 
                    tipoDeDato: { tipo: DATOS_TIPOS }, proxy: DATOS_PROXY,
                }, 
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES },
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        if (!this.datosLenguaje.clase.tieneClase) throw Error(`El lenguaje ${this.lenguajeActual} no tiene clase`);

        this.simbolos = SIMBOLOS;
        this.manejador = DATOS_MANEJADOR;
        this.tipos = DATOS_TIPOS;
        this.config = DATOS_CLASE;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        let esProxy = false;
        if (esProxy) {

            this.datos = {
                _clase: manejoTipoDeDatos.obtener(DATOS_TIPOS.clase, representacionPrevia[DATOS_PROXY.id]),
                campo: representacionPrevia[DATOS_PROXY.campo],
                extra: representacionPrevia[DATOS_PROXY.extra],
                valor: representacionPrevia[DATOS_PROXY.valor],

                get nombre() { return (campo == DATOS_CLASE.nombre) ? this.valor : this._clase.datos.nombre; },
                set nombre(value) {
                    if (campo == DATOS_CLASE.nombre) 
                        this._clase.datos.nombre = value;  
                    else this.valor = value; 
                },

                get descripcion() { return this._clase.datos.descripcion; },
                set descripcion(value) { return this._clase.datos.descripcion = value; },

                get herede() { return this._clase.datos.herede; },
                set herede(value) { return this._clase.datos.herede = value; },

                get variablesEstaticas() { return this._clase.datos.variablesEstaticas; },
                set variablesEstaticas(value) { return this._clase.datos.variablesEstaticas = value; },

                get campos() { return this._clase.datos.campos; },
                set campos(value) { return this._clase.datos.campos = value; },

                get metodos() { return this._clase.datos.metodos; },
                set metodos(value) { return this._clase.datos.metodos = value; },

                get idGenericos() { return this._clase.datos.idGenericos; },
                set idGenericos(value) { return this._clase.datos.idGenericos = value; },
            }

        } else {
            this.datos = {
                nombre: representacionPrevia[this.config.nombre],
                descripcion: representacionPrevia[this.config.descripcion],
                herede: representacionPrevia[this.config.herede],
                variablesEstaticas: [],
                campos: [],
                metodos: [],
                idGenericos: representacionPrevia[this.config.genericos]
                    ? representacionPrevia[this.config.genericos]
                    : []
            }

            let variablesEstaticasPrevias = representacionPrevia[this.config.variableEstaticas]
                ? representacionPrevia[this.config.variableEstaticas] : [];
            for (let variableEstatica of variablesEstaticasPrevias) {
                this.datos.variablesEstaticas.push(tp.user.parametro(tp, this.manejoTipoDeDatos, this.lenguajeActual, variableEstatica));
            }

            let camposPrevios = representacionPrevia[this.config.campos]
                ? representacionPrevia[this.config.campos] : [];
            for (let campo of camposPrevios) {
                this.datos.campos.push(tp.user.parametro(tp, this.manejoTipoDeDatos, this.lenguajeActual, campo));
            }

            let metodosPrevios = representacionPrevia[this.config.metodos]
                ? representacionPrevia[this.config.metodos] : [];
            for (let metodo of metodosPrevios) {
                this.datos.metodos.push(tp.user.funcion(tp, this.manejoTipoDeDatos, this.lenguajeActual, metodo));
            }
        }

        let lenguajeActual = this.lenguajeActual;
        this.informacion = {
            nuevoCampo() { return tp.user.parametro(tp, manejoTipoDeDatos, lenguajeActual); },
            nuevaVariableEstatica() { return tp.user.parametro(tp, manejoTipoDeDatos, lenguajeActual); },
            nuevoMetodo() { return tp.user.funcion(tp, manejoTipoDeDatos, lenguajeActual); },
            nuevoGenerico() { return tp.user.generico(tp, manejoTipoDeDatos, lenguajeActual); },
        }
    } 

    async definirGenericos(generarPreguntas, generarError) {

    }

    preguntarDatos(datosRecolectados = []) {
        for (let campo of this.datos.campos) {
            if (campo?.esValido()) {
                campo.preguntarDatos(datosRecolectados);
            }
        }

        for (let variableEstatica of this.datos.variablesEstaticas) {
            if (variableEstatica?.esValido()) {
                variableEstatica.preguntarDatos(datosRecolectados);
            }
        }

        for (let metodo of this.datos.metodos) {
            if (metodo?.esValido()) {
                metodo.preguntarDatos(datosRecolectados);
            }
        }

        return datosRecolectados;
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR)
            return true;

        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                this.datos.nombre = await generarPreguntas.prompt(
                    this.datos.nombre
                        ? `Nuevo nombre de la clase, donde antes era ${this.datos.nombre}`
                        : "Nombre de la clase",
                    generarError.Quit("No se ingresó el nombre de la clase")
                );
                break;

            case this.config.descripcion:
                this.datos.descripcion = await generarPreguntas.prompt(
                    this.datos.descripcion
                        ? `Nueva descripción de la clase, donde antes era ${this.datos.descripcion}`
                        : "Descripción de la clase",
                    generarError.Quit("No se ingresó la descripción de la clase")
                );
                break;

            case this.config.variableEstaticas: 
                let nuevaVariableEstatica = this.informacion.nuevaVariableEstatica();
                await generarPreguntas.formulario(nuevaVariableEstatica, "Ingresar los datos de la variable estatica");
                this.datos.variablesEstaticas.push(nuevaVariableEstatica);
                break;

            case MODIFICAR_VARIABLE_ESTATICAS:
                await generarPreguntas.formulario(this.datos.variablesEstaticas[indice], "Modificar los datos de la variable estatica");
                break;

            case ELIMINAR_VARIABLE_ESTATICAS:
                let variableEstaticaEliminar = this.datos.variablesEstaticas.pop();
                variableEstaticaEliminar.eliminar();
                break;

            case this.config.campos:
                let nuevoCampo = this.informacion.nuevoCampo();
                await generarPreguntas.formulario(nuevoCampo, "Ingresar los datos del campo");
                this.datos.campos.push(nuevoCampo);
                break;

            case MODIFICAR_CAMPO:
                await generarPreguntas.formulario(this.datos.campos[indice], "Modificar los datos del campo");
                break;

            case ELIMINAR_CAMPO:
                let campoEliminar = this.datos.campos.pop();
                campoEliminar.eliminar();
                break;

            case this.config.metodos:
                let nuevoMetodo = this.informacion.nuevoMetodo();
                await generarPreguntas.formulario(nuevoMetodo, "Ingresar los datos del método");
                this.datos.metodos.push(nuevoMetodo);
                break;

            case MODIFICAR_METODO:
                await generarPreguntas.formulario(this.datos.metodos[indice], "Modificar los datos del método");
                break;

            case ELIMINAR_METODO:
                let metodoEliminar = this.datos.metodos.pop();
                metodoEliminar.eliminar();
                break;

            case this.config.genericos:
                let nuevoGenerico = this.informacion.nuevoGenerico();
                let nuevoIdGenerico = this.manejoTipoDeDatos.agregar(this.tipos.generico, nuevoGenerico);
                await generarPreguntas.formulario(nuevoGenerico, "Ingresar los datos del generico");
                this.datos.idGenericos.push(nuevoIdGenerico);
                break;

            case MODIFICAR_GENERICO:
                let genericoModificar = this.manejoTipoDeDatos.obtener(this.tipos.generico, this.datos.idGenericos[indice]);
                await generarPreguntas.formulario(genericoModificar, "Modificar los datos del generico");
                break;

            case ELIMINAR_GENERICO:
                let idGenericoEliminar = this.datos.idGenericos.pop();
                this.manejoTipoDeDatos.eliminar(this.tipos.generico, idGenericoEliminar);
                break;

            case this.config.herede:
                this.datos.herede = await generarPreguntas.prompt(
                    this.datos.herede
                        ? `Nueva herencia para la clase, donde antes era ${this.datos.herede}`
                        : "De que hereda la clase",
                    generarError.Quit("No se ingresó la herencia de la clase")
                );
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.datos.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre de la clase, donde era ${this.datos.nombre}`
            : ` ${this.simbolos.agregar} Nombre de la clase`
        )

        opciones.push(this.config.descripcion);
        valores.push(this.datos.descripcion
            ? ` ${this.simbolos.modificar} Modificar la descripción de la clase, donde era ${this.datos.descripcion}`
            : ` ${this.simbolos.agregar} Descripción de la clase`
        );

        if (this.datosLenguaje.struct.variableEstatica) {
            for (let [indice, variableEstable] of this.datos.variablesEstaticas.entries()) {
                let descripcion = variableEstable.descripcionCompleta().replaceAll("\n", "\n\t");

                opciones.push(`${MODIFICAR_VARIABLE_ESTATICAS}-${indice}`);
                valores.push(`️ ${this.simbolos.modificar} Modificar la variable estatica, donde es ${descripcion}`);
            }

            if (this.datos.variablesEstaticas.length > 0) {
                let descripcion = this.datos.variablesEstaticas.last().descripcionCompleta().replaceAll("\n", "\n\t");

                opciones.push(ELIMINAR_VARIABLE_ESTATICAS);
                valores.push(` ${this.simbolos.sacar} Eliminar la variable estatica, donde es ${descripcion}`);
            }

            if (this.datos.variablesEstaticas.length >= CANTIDAD_MINIMA_VARIABLE_ESTATICAS) {
                opciones.push(this.config.variableEstaticas);
                valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Variable estatica`);

            } else {
                opciones.push(this.config.variableEstaticas);
                valores.push(` ${this.simbolos.agregar} Variable estatica`);
            }
        }

        for (let [indice, campo] of this.datos.campos.entries()) {
            let descripcion = campo.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_CAMPO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el campos, donde es ${descripcion}`);
        }

        if (this.datos.campos.length > 0) {
            let descripcion = this.datos.campos.last().descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(ELIMINAR_CAMPO);
            valores.push(` ${this.simbolos.sacar} Eliminar el campo, donde es ${descripcion}`);
        }

        if (this.datos.campos.length >= CANTIDAD_MINIMA_CAMPOS) {
            opciones.push(this.config.campos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Campo`);

        } else {
            opciones.push(this.config.campos);
            valores.push(` ${this.simbolos.agregar} Campo`);
        }

        for (let [indice, metodo] of this.datos.metodos.entries()) {
            let descripcion = metodo.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_METODO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el método, donde es ${descripcion}`);
        }

        if (this.datos.metodos.length > 0) {
            let descripcion = this.datos.metodos.last().descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(ELIMINAR_METODO);
            valores.push(` ${this.simbolos.sacar} Eliminar el método, donde es ${descripcion}`);
        }

        if (this.datos.metodos.length >= CANTIDAD_MINIMA_METODOS) {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Método`);

        } else {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} Métodos`);
        }

        if (this.datosLenguaje.struct.herencia) {
            opciones.push(this.config.herede);
            valores.push(this.datos.herede
                ? ` ${this.simbolos.modificar} Modificar la estructura de la que herede, donde era ${this.datos.herede}`
                : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Estructura de la que herede`
            );
        }

        if (this.datosLenguaje.generico.tieneGenericos) {
            for (let [indice, idGenerico] of this.datos.idGenericos.entries()) {
                let generico = this.manejoTipoDeDatos.obtener(this.tipos.generico, idGenerico);
                let descripcion = generico.descripcionCompleta().replaceAll("\n", "\n\t");

                opciones.push(`${MODIFICAR_GENERICO}-${indice}`);
                valores.push(`️ ${this.simbolos.modificar} Modificar el generico, donde es ${descripcion}`);
            }

            if (this.datos.idGenericos.length > 0) {
                let ultiloGenerico = this.manejoTipoDeDatos.obtener(this.tipos.generico, this.datos.idGenericos.last());
                let descripcion = ultiloGenerico.descripcionCompleta().replaceAll("\n", "\n\t");

                opciones.push(ELIMINAR_GENERICO);
                valores.push(` ${this.simbolos.sacar} Eliminar el generico, donde es ${descripcion}`);
            }

            if (this.datos.idGenericos.length >= CANTIDAD_MINIMA_GENERICOS) {
                opciones.push(this.config.genericos);
                valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Generico`);

            } else {
                opciones.push(this.config.genericos);
                valores.push(` ${this.simbolos.agregar} Genericos`);
            }
        }

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        for (let variableEstatica of this.datos.variablesEstaticas) {
            variableEstatica.eliminar();
        }

        for (let campo of this.datos.campos) {
            campo.eliminar();
        }

        for (let metodo of this.datos.metodos) {
            metodo.eliminar();
        }

        for (let generico of this.datos.idGenericos) {
            generico.eliminar();
        }
    }

    esValido() {
        return this.datos.campos.length >= CANTIDAD_MINIMA_CAMPOS 
            && this.datos.metodos.length >= CANTIDAD_MINIMA_METODOS 
            && this.datos.idGenericos.length >= CANTIDAD_MINIMA_GENERICOS 
            && (!this.datosLenguaje.struct.variableEstaticas 
                || (this.datos.variablesEstaticas.length >= CANTIDAD_MINIMA_VARIABLE_ESTATICAS
                    && this.datos.variablesEstaticas.every(variableEstatica => variableEstatica?.esValido())
                )
            ) && this.datos.nombre && this.datos.descripcion
            && this.datos.campos.every(campo => campo?.esValido())
            && this.datos.metodos.every(metodo => metodo?.esValido())
            && this.datos.idGenericos.every(generico => generico?.esValido());
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.datos.nombre,
            [this.config.descripcion]: this.datos.descripcion,
            [this.config.herede]: this.datos.herede,
            [this.config.variableEstaticas]: this.datos.variablesEstaticas
                .map(variableEstatica => variableEstatica?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
            [this.config.campos]: this.datos.campos
                .map(campo => campo?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
            [this.config.metodos]: this.datos.metodos
                .map(metodo => metodo?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
            [this.config.genericos]: this.datos.idGenericos
                .map(generico => generico?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
        }
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";
        let descripcionVariableEstatica = this.datos.variablesEstaticas.map(variableEstatica => variableEstatica.descripcionArgumento());
        let descripcionCampos = this.datos.campos.map(campo => campo.descripcionArgumento());
        let descripcionMetodo = this.datos.metodos.length > 0 
            ? this.datos.metodos.map(metodo => `\n\n\t${metodo.descripcionCompleta().replaceAll("\n", "\n\t")}`)
            : "";
        let descripcionGenericos = this.datos.idGenericos.map(generico => generico.descripcionArgumento());

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                let titulo = `class ${this.datos.nombre}${this.datos.herede ? `(${this.datos.herede})` : ""}`;
                let variablesEstaticas = this.datos.variablesEstaticas.length > 0 
                    ? `${descripcionVariableEstatica.map(variable => `\t${variable}\n`)}\n`
                    : "";
                let parametros = `def __init__(self${descripcionCampos.map(campo => `, ${campo}`)}):\n\t\tpass`;
                
                return `${titulo}:\n\t${variablesEstaticas}${parametros}${descripcionMetodo}`;

            default:
                let genericos = `<${descripcionGenericos.join(", ")}>`;
                return `class ${this.datos.nombre}${genericos}${this.datos.herede ? ` :: ${this.datos.herede}` : ""} then\n\t${descripcionCampos.join("\n\t")}${descripcionMetodo}\nend`;
        }
    }

    descripcionArgumento() {
        if (!this.esValido()) return "";

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
            default:
                return `class ${this.datos.nombre}${this.datos.herede ? ` :: ${this.datos.herede}` : ""}`;
        }
    }

    generarSelf() {
        let descripcion = () => `Self ${this.datos.nombre ? this.datos.nombre : ""}`;
        return {
            descripcionCompleta: descripcion,
            descripcionArgumento: descripcion,
            esValido: () => true,
        }
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new TipoClase(tp, manejoTipoDeDatos, lenguaje, representacionPrevia);