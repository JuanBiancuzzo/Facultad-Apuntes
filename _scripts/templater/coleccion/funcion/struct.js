const MODIFICAR_CAMPO = "modificar campo";
const ELIMINAR_CAMPO = "eliminar campo";

const MODIFICAR_VARIABLE_ESTATICAS = "modificar variable estatica";
const ELIMINAR_VARIABLE_ESTATICAS = "eliminar variable estatica";

const CANTIDAD_MINIMA_CAMPOS = 1;
const CANTIDAD_MINIMA_VARIABLE_ESTATICAS = 0;

const SALIR = "salir";

class TipoStruct {
    constructor(tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { struct: DATOS_STRUCT, manejador: DATOS_MANEJADOR, tipoDeDato: { tipo: DATOS_TIPOS } }, 
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES },
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        if (!this.datosLenguaje.struct.tieneStruct) throw Error(`El lenguaje ${this.lenguajeActual} no tiene struct`);

        this.simbolos = SIMBOLOS;
        this.manejador = DATOS_MANEJADOR;
        this.tipos = DATOS_TIPOS;
        this.config = DATOS_STRUCT;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.nombre = representacionPrevia[this.config.nombre];
        this.descripcion = representacionPrevia[this.config.descripcion];
        this.herede = representacionPrevia[this.config.herede];
        this.variablesEstaticas = [];
        this.campos = []; 

        let variablesEstaticasPrevias = representacionPrevia[this.config.variableEstaticas] 
            ? representacionPrevia[this.config.variableEstaticas] : [];
        for (let variableEstatica of variablesEstaticasPrevias) {
            this.variablesEstaticas.push(tp.user.parametro(tp, this.manejoTipoDeDatos, this.lenguajeActual, variableEstatica));
        }

        let camposPrevios = representacionPrevia[this.config.campos] 
            ? representacionPrevia[this.config.campos] : [];
        for (let campo of camposPrevios) {
            this.campos.push(tp.user.parametro(tp, this.manejoTipoDeDatos, this.lenguajeActual, campo));
        }

        let lenguajeActual = this.lenguajeActual;
        this.informacion = {
            nuevoCampo() { return tp.user.parametro(tp, manejoTipoDeDatos, lenguajeActual); },
            nuevaVariableEstatica() { return tp.user.parametro(tp, manejoTipoDeDatos, lenguajeActual); },
            nuevoGenerico() { return tp.user.generico(tp, manejoTipoDeDatos, lenguajeActual); }
        }
        this.clonar = this.generarClone.bind(this, tp);
    } 

    generarClone(tp) {
        return new TipoStruct(tp, this.manejoTipoDeDatos, this.lenguajeActual, this.generarRepresentacion());
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
        return datosRecolectados;
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre del struct, donde antes era ${this.nombre}`
                        : "Nombre del struct",
                    generarError.Quit("No se ingresó el nombre del struct")
                );
                break;

            case this.config.descripcion:
                this.descripcion = await generarPreguntas.prompt(
                    this.descripcion
                        ? `Nueva descripción del struct, donde antes era ${this.descripcion}`
                        : "Descripción del struct",
                    generarError.Quit("No se ingresó la descripción del struct")
                );
                break;

            case this.config.variableEstaticas: 
                let nuevaVariableEstatica = this.informacion.nuevaVariableEstatica();
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
                let nuevoCampo = this.informacion.nuevoCampo();
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

            case this.config.herede:
                this.herede = await generarPreguntas.prompt(
                    this.herede
                        ? `Nueva herencia para el struct, donde antes era ${this.herede}`
                        : "De que hereda el struct",
                    generarError.Quit("No se ingresó la herencia del struct")
                );
                break;
        }
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre del struct, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del struct`
        )

        opciones.push(this.config.descripcion);
        valores.push(this.descripcion
            ? ` ${this.simbolos.modificar} Modificar la descripción del struct, donde era ${this.descripcion}`
            : ` ${this.simbolos.agregar} Descripción del struct`
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

        if (this.datosLenguaje.struct.herencia) {
            opciones.push(this.config.herede);
            valores.push(this.herede
                ? ` ${this.simbolos.modificar} Modificar la estructura de la que herede, donde era ${this.herede}`
                : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Estructura de la que herede`
            );
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
    }

    esValido() {
        return this.campos.length >= CANTIDAD_MINIMA_CAMPOS 
            && (!this.datosLenguaje.struct.variableEstaticas 
                || (this.variablesEstaticas.length >= CANTIDAD_MINIMA_VARIABLE_ESTATICAS
                    && this.variablesEstaticas.every(variableEstatica => variableEstatica?.esValido())
                )
            ) && this.nombre && this.descripcion
            && this.campos.every(campo => campo?.esValido());
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
        }
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";

        let _descripcionVariableEstatica = this.variablesEstaticas.map(variableEstatica => variableEstatica.descripcionArgumento());
        let descripcionCampos = this.campos.map(campo => campo.descripcionArgumento());

        switch (this.lenguajeActual) {
            case this.lenguajes.c:
                return `struct ${this.nombre} { \n\t${descripcionCampos.join(";\n\t")} \n };`;

            case this.lenguajes.rust:
                return `struct ${this.nombre} { \n\t${descripcionCampos.join(",\n\t")} \n }`;

            default:
                return `struct ${this.nombre}${this.herede ? ` :: ${this.herede}` : ""} then\n\t${descripcionCampos.join("\n\t")}\nend`;
        }
    }

    descripcionArgumento() {
        if (!this.esValido()) return "";

        switch (this.lenguajeActual) {
            case this.lenguajes.c:
            case this.lenguajes.rust:
                return `struct ${this.nombre}`;

            default:
                return `struct ${this.nombre}${this.herede ? ` :: ${this.herede}` : ""}`;
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

async function crearStruct() {
    
}

module.exports = () => ({
    clase: (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new TipoStruct(tp, manejoTipoDeDatos, lenguaje, representacionPrevia),
    crear: crearStruct,
})