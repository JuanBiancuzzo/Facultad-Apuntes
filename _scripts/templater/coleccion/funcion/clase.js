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

class TipoClase {
    constructor(tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        if (!representacionPrevia) representacionPrevia = {};

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

        this.nombre = representacionPrevia[this.config.nombre];
        this.descripcion = representacionPrevia[this.config.descripcion];
        this.herede = representacionPrevia[this.config.herede];
        this.variablesEstaticas = [];
        this.campos = [];
        this.metodos = [];
        this.idGenericos = representacionPrevia[this.config.genericos]
            ? representacionPrevia[this.config.genericos]
            : [];

        let variablesEstaticasPrevias = representacionPrevia[this.config.variableEstaticas]
            ? representacionPrevia[this.config.variableEstaticas] : [];
        for (let variableEstatica of variablesEstaticasPrevias) {
            this.variablesEstaticas.push(tp.user.parametro().clase(tp, this.manejoTipoDeDatos, this.lenguajeActual, variableEstatica));
        }

        let camposPrevios = representacionPrevia[this.config.campos]
            ? representacionPrevia[this.config.campos] : [];
        for (let campo of camposPrevios) {
            this.campos.push(tp.user.parametro().clase(tp, this.manejoTipoDeDatos, this.lenguajeActual, campo));
        }

        let metodosPrevios = representacionPrevia[this.config.metodos]
            ? representacionPrevia[this.config.metodos] : [];
        for (let metodo of metodosPrevios) {
            this.metodos.push(tp.user.funcion().clase(tp, this.manejoTipoDeDatos, this.lenguajeActual, metodo));
        }

        this.crearCampo = tp.user.parametro().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearVariableEstatica = tp.user.parametro().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearMetodo = tp.user.funcion().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
        this.crearGenerico = tp.user.generico().clase.bind(null, tp, this.manejoTipoDeDatos, this.lenguajeActual);
    } 

    async definirGenericos(generarPreguntas, generarError) {

    }

    preguntarDatos(datosRecolectados = []) {
        for (let campo of this.campos) {
            if (campo?.esValido()) {
                campo.preguntarDatos(datosRecolectados);
            }
        }

        for (let variableEstatica of this.variablesEstaticas) {
            if (variableEstatica?.esValido()) {
                variableEstatica.preguntarDatos(datosRecolectados);
            }
        }

        for (let metodo of this.metodos) {
            if (metodo?.esValido()) {
                metodo.preguntarDatos(datosRecolectados);
            }
        }

        return datosRecolectados;
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre de la clase, donde antes era ${this.nombre}`
                        : "Nombre de la clase",
                    generarError.Quit("No se ingresó el nombre de la clase")
                );
                break;

            case this.config.descripcion:
                this.descripcion = await generarPreguntas.prompt(
                    this.descripcion
                        ? `Nueva descripción de la clase, donde antes era ${this.descripcion}`
                        : "Descripción de la clase",
                    generarError.Quit("No se ingresó la descripción de la clase")
                );
                break;

            case this.config.variableEstaticas: 
                let nuevaVariableEstatica = this.crearVariableEstatica();
                await generarPreguntas.formulario(nuevaVariableEstatica, "Ingresar los datos de la variable estatica");
                this.variablesEstaticas.push(nuevaVariableEstatica);
                break;

            case MODIFICAR_VARIABLE_ESTATICAS:
                await generarPreguntas.formulario(this.variablesEstaticas[indice], "Modificar los datos de la variable estatica");
                break;

            case ELIMINAR_VARIABLE_ESTATICAS:
                let variableEstaticaEliminar = this.variablesEstaticas.pop();
                variableEstaticaEliminar.eliminar();
                break;

            case this.config.campos:
                let nuevoCampo = this.crearCampo();
                await generarPreguntas.formulario(nuevoCampo, "Ingresar los datos del campo");
                this.campos.push(nuevoCampo);
                break;

            case MODIFICAR_CAMPO:
                await generarPreguntas.formulario(this.campos[indice], "Modificar los datos del campo");
                break;

            case ELIMINAR_CAMPO:
                let campoEliminar = this.campos.pop();
                campoEliminar.eliminar();
                break;

            case this.config.metodos:
                let nuevoMetodo = this.crearMetodo();
                await generarPreguntas.formulario(nuevoMetodo, "Ingresar los datos del método");
                this.metodos.push(nuevoMetodo);
                break;

            case MODIFICAR_METODO:
                await generarPreguntas.formulario(this.metodos[indice], "Modificar los datos del método");
                break;

            case ELIMINAR_METODO:
                let metodoEliminar = this.metodos.pop();
                metodoEliminar.eliminar();
                break;

            case this.config.genericos:
                let nuevoGenerico = this.crearGenerico();
                let nuevoIdGenerico = this.manejoTipoDeDatos.agregar(this.tipos.generico, nuevoGenerico);
                await generarPreguntas.formulario(nuevoGenerico, "Ingresar los datos del generico");
                this.idGenericos.push(nuevoIdGenerico);
                break;

            case MODIFICAR_GENERICO:
                let genericoModificar = this.manejoTipoDeDatos.obtener(this.tipos.generico, this.idGenericos[indice]);
                await generarPreguntas.formulario(genericoModificar, "Modificar los datos del generico");
                break;

            case ELIMINAR_GENERICO:
                let idGenericoEliminar = this.idGenericos.pop();
                this.manejoTipoDeDatos.eliminar(this.tipos.generico, idGenericoEliminar);
                break;

            case this.config.herede:
                this.herede = await generarPreguntas.prompt(
                    this.herede
                        ? `Nueva herencia para la clase, donde antes era ${this.herede}`
                        : "De que hereda la clase",
                    generarError.Quit("No se ingresó la herencia de la clase")
                );
                break;
        }
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre de la clase, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre de la clase`
        )

        opciones.push(this.config.descripcion);
        valores.push(this.descripcion
            ? ` ${this.simbolos.modificar} Modificar la descripción de la clase, donde era ${this.descripcion}`
            : ` ${this.simbolos.agregar} Descripción de la clase`
        );

        if (this.datosLenguaje.struct.variableEstatica) {
            for (let [indice, variableEstable] of this.variablesEstaticas.entries()) {
                let descripcion = variableEstable.descripcionCompleta().replaceAll("\n", "\n\t");

                opciones.push(`${MODIFICAR_VARIABLE_ESTATICAS}-${indice}`);
                valores.push(`️ ${this.simbolos.modificar} Modificar la variable estatica, donde es ${descripcion}`);
            }

            if (this.variablesEstaticas.length > 0) {
                let descripcion = this.variablesEstaticas.last().descripcionCompleta().replaceAll("\n", "\n\t");

                opciones.push(ELIMINAR_VARIABLE_ESTATICAS);
                valores.push(` ${this.simbolos.sacar} Eliminar la variable estatica, donde es ${descripcion}`);
            }

            if (this.variablesEstaticas.length >= CANTIDAD_MINIMA_VARIABLE_ESTATICAS) {
                opciones.push(this.config.variableEstaticas);
                valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Variable estatica`);

            } else {
                opciones.push(this.config.variableEstaticas);
                valores.push(` ${this.simbolos.agregar} Variable estatica`);
            }
        }

        for (let [indice, campo] of this.campos.entries()) {
            let descripcion = campo.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_CAMPO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el campos, donde es ${descripcion}`);
        }

        if (this.campos.length > 0) {
            let descripcion = this.campos.last().descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(ELIMINAR_CAMPO);
            valores.push(` ${this.simbolos.sacar} Eliminar el campo, donde es ${descripcion}`);
        }

        if (this.campos.length >= CANTIDAD_MINIMA_CAMPOS) {
            opciones.push(this.config.campos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Campo`);

        } else {
            opciones.push(this.config.campos);
            valores.push(` ${this.simbolos.agregar} Campo`);
        }

        for (let [indice, metodo] of this.metodos.entries()) {
            let descripcion = metodo.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_METODO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el método, donde es ${descripcion}`);
        }

        if (this.metodos.length > 0) {
            let descripcion = this.metodos.last().descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(ELIMINAR_METODO);
            valores.push(` ${this.simbolos.sacar} Eliminar el método, donde es ${descripcion}`);
        }

        if (this.metodos.length >= CANTIDAD_MINIMA_METODOS) {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Método`);

        } else {
            opciones.push(this.config.metodos);
            valores.push(` ${this.simbolos.agregar} Métodos`);
        }

        if (this.datosLenguaje.struct.herencia) {
            opciones.push(this.config.herede);
            valores.push(this.herede
                ? ` ${this.simbolos.modificar} Modificar la estructura de la que herede, donde era ${this.herede}`
                : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Estructura de la que herede`
            );
        }

        if (this.datosLenguaje.generico.tieneGenericos) {
            for (let [indice, idGenerico] of this.idGenericos.entries()) {
                let generico = this.manejoTipoDeDatos.obtener(this.tipos.generico, idGenerico);
                let descripcion = generico.descripcionCompleta().replaceAll("\n", "\n\t");

                opciones.push(`${MODIFICAR_GENERICO}-${indice}`);
                valores.push(`️ ${this.simbolos.modificar} Modificar el generico, donde es ${descripcion}`);
            }

            if (this.idGenericos.length > 0) {
                let ultiloGenerico = this.manejoTipoDeDatos.obtener(this.tipos.generico, this.idGenericos.last());
                let descripcion = ultiloGenerico.descripcionCompleta().replaceAll("\n", "\n\t");

                opciones.push(ELIMINAR_GENERICO);
                valores.push(` ${this.simbolos.sacar} Eliminar el generico, donde es ${descripcion}`);
            }

            if (this.idGenericos.length >= CANTIDAD_MINIMA_GENERICOS) {
                opciones.push(this.config.genericos);
                valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Generico`);

            } else {
                opciones.push(this.config.genericos);
                valores.push(` ${this.simbolos.agregar} Genericos`);
            }
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        for (let variableEstatica of this.variablesEstaticas) {
            variableEstatica.eliminar();
        }

        for (let campo of this.campos) {
            campo.eliminar();
        }

        for (let metodo of this.metodos) {
            metodo.eliminar();
        }

        for (let generico of this.idGenericos) {
            generico.eliminar();
        }
    }

    esValido() {
        return this.campos.length >= CANTIDAD_MINIMA_CAMPOS 
            && this.metodos.length >= CANTIDAD_MINIMA_METODOS 
            && this.idGenericos.length >= CANTIDAD_MINIMA_GENERICOS 
            && (!this.datosLenguaje.struct.variableEstaticas 
                || (this.variablesEstaticas.length >= CANTIDAD_MINIMA_VARIABLE_ESTATICAS
                    && this.variablesEstaticas.every(variableEstatica => variableEstatica?.esValido())
                )
            ) && this.nombre && this.descripcion
            && this.campos.every(campo => campo?.esValido())
            && this.metodos.every(metodo => metodo?.esValido())
            && this.idGenericos.every(generico => generico?.esValido());
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
            [this.config.descripcion]: this.descripcion,
            [this.config.herede]: this.herede,
            [this.config.variableEstaticas]: this.variablesEstaticas
                .map(variableEstatica => variableEstatica?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
            [this.config.campos]: this.campos
                .map(campo => campo?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
            [this.config.metodos]: this.metodos
                .map(metodo => metodo?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
            [this.config.genericos]: this.idGenericos
                .map(generico => generico?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
        }
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";
        let descripcionVariableEstatica = this.variablesEstaticas.map(variableEstatica => variableEstatica.descripcionArgumento());
        let descripcionCampos = this.campos.map(campo => campo.descripcionArgumento());
        let descripcionMetodo = this.metodos.length > 0 
            ? this.metodos.map(metodo => `\n\n\t${metodo.descripcionCompleta().replaceAll("\n", "\n\t")}`)
            : "";
        let descripcionGenericos = this.idGenericos.map(generico => generico.descripcionArgumento());

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                let titulo = `class ${this.nombre}${this.herede ? `(${this.herede})` : ""}`;
                let variablesEstaticas = this.variablesEstaticas.length > 0 
                    ? `${descripcionVariableEstatica.map(variable => `\t${variable}\n`)}\n`
                    : "";
                let parametros = `def __init__(self${descripcionCampos.map(campo => `, ${campo}`)}):\n\t\tpass`;
                
                return `${titulo}:\n\t${variablesEstaticas}${parametros}${descripcionMetodo}`;

            default:
                let genericos = `<${descripcionGenericos.join(", ")}>`;
                return `class ${this.nombre}${genericos}${this.herede ? ` :: ${this.herede}` : ""} then\n\t${descripcionCampos.join("\n\t")}${descripcionMetodo}\nend`;
        }
    }

    descripcionArgumento() {
        if (!this.esValido()) return "";

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
            default:
                return `class ${this.nombre}${this.herede ? ` :: ${this.herede}` : ""}`;
        }
    }

    generarSelf() {
        let descripcion = () => `Self ${this.nombre ? this.nombre : ""}`;
        return {
            descripcionCompleta: descripcion,
            descripcionArgumento: descripcion,
            esValido: () => true,
        }
    }
}

async function crearClase() {

}

module.exports = () => ({
    clase: (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new TipoClase(tp, manejoTipoDeDatos, lenguaje, representacionPrevia),
    crear: crearClase
})