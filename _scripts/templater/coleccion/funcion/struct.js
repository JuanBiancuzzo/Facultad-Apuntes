const MODIFICAR_CAMPO = "modificar campo";
const ELIMINAR_CAMPO = "eliminar campo";

const CANTIDAD_MINIMA = 1;

const SALIR = "salir";

class TipoStruct {
    constructor(tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { struct: DATOS_STRUCT }, LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES },
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        this.simbolos = SIMBOLOS;
        this.config = DATOS_STRUCT;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.nombre = representacionPrevia[this.config.nombreStruct];
        this.descripcion = representacionPrevia[this.config.descripcion];
        this.herede = representacionPrevia[this.config.herede];
        this.campos = []; 

        let camposPrevios = representacionPrevia[this.config.campos] ? representacionPrevia[this.config.campos] : [];
        for (let campo of camposPrevios) {
            this.campos.push(tp.user.parametro(tp, this.manejoTipoDeDatos, this.lenguajeActual, campo));
        }

        let lenguajeActual = this.lenguajeActual;
        this.informacion = {
            nuevoCampo() { return tp.user.parametro(tp, manejoTipoDeDatos, lenguajeActual); }
        }
    } 

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR)
            return true;

        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombreStruct:
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

            case MODIFICAR_CAMPO:
                await generarPreguntas.formulario(this.campos[indice], "Modificar los datos del campo");
                break;

            case this.config.campos:
                let nuevoCampo = this.informacion.nuevoCampo();
                await generarPreguntas.formulario(nuevoCampo, "Ingresar los datos del campo");
                this.campos.push(nuevoCampo);
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

        return false;
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombreStruct);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre del struct, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre del struct`
        )

        opciones.push(this.config.descripcion);
        valores.push(this.descripcion
            ? ` ${this.simbolos.modificar} Modificar la descripción del struct, donde era ${this.descripcion}`
            : ` ${this.simbolos.agregar} Descripción del struct`
        );

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

        if (this.campos.length >= CANTIDAD_MINIMA) {
            opciones.push(this.config.campos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Campo`);

        } else {
            opciones.push(this.config.campos);
            valores.push(` ${this.simbolos.agregar} Campo`);
        }

        if (this.datosLenguaje.structHerencia) {
            opciones.push(this.config.herede);
            valores.push(this.herede
                ? ` ${this.simbolos.modificar} Modificar la estructura de la que herede, donde era ${this.herede}`
                : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Estructura de la que herede`
            );
        }

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        for (let campo of this.campos) {
            campo.eliminar();
        }
    }

    esValido() {
        return this.campos.length >= CANTIDAD_MINIMA && this.nombre && this.descripcion
            && this.campos.every(campo => campo && campo.esValido());
    }

    generarRepresentacion() {
        return {
            [this.config.nombreStruct]: this.nombre,
            [this.config.descripcion]: this.descripcion,
            [this.config.herede]: this.herede,
            [this.config.campos]: this.campos
                .map(campo => campo?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
        }
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";

        let descripcionCampos = this.campos.map(campo => campo.descripcionArgumento());

        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                return `class ${this.nombre}${this.herede ? `(${this.herede})` : ""}:\n\t${descripcionCampos.join("\n\t")}`;

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
            case this.lenguajes.python:
                return `class ${this.nombre}${this.herede ? `(${this.herede})` : ""}`;

            case this.lenguajes.c:
            case this.lenguajes.rust:
                return `struct ${this.nombre}`;

            default:
                return `struct ${this.nombre}${this.herede ? ` :: ${this.herede}` : ""} end`;
        }
    }

    generarSelf() {
        let descripcion = () => {
            return `Self ${this.nombre ? this.nombre : ""}`;
        };
        return {
            descripcionCompleta: descripcion,
            descripcionArgumento: () => descripcion,
            esValido: () => true,
        }
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new TipoStruct(tp, manejoTipoDeDatos, lenguaje, representacionPrevia);