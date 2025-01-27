const MODIFICAR_CAMPO = "modificar campo";
const ELIMINAR_CAMPO = "eliminar campo";

const CANTIDAD_MINIMA = 1;

const SALIR = "salir";

class TipoStruct {
    constructor(tp, manejoTipoDeDatos, lenguaje) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { struct: DATO_STRUCT },
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[(lenguaje in LENGUAJES) 
            ? lenguaje 
            : LENGUAJES.default
        ];
        this.config = DATO_STRUCT;
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.informacion = {
            _claseParametro: null,
            get parametro() {
                if (!this._claseParametro)
                    this._claseParametro = tp.user.parametro(tp, manejoTipoDeDatos, lenguaje);
                return this._claseParametro;
            },
        };

        this.preguntar = tp.user.preguntar();
        this.error = tp.user.error();
        this.crearPreguntas = tp.user.crearPreguntas;
    }

    obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion) {
        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [this.config.nombreStruct]: TIPOS_DE_DEFAULT.simple,
            [this.config.descripcion]: TIPOS_DE_DEFAULT.simple,
            [this.config.campos]: crearFuncion(
                TIPOS_DE_DEFAULT.array,
                () => this.informacion.parametro.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion)
            ),
            [this.config.herede]: TIPOS_DE_DEFAULT.simple,
        }));
    }

    async actualizarDatos(tp, datos, respuestaDada) {
        let salir = false;
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombreStruct:
                datos[this.config.nombreStruct] = await this.preguntar.prompt(
                    tp, datos[this.config.nombreStruct]
                    ? `Nuevo nombre del struct, donde antes era ${datos[this.config.nombreStruct]}`
                    : "Nombre del struct",
                    this.error.Quit("No se ingresó el nombre del struct")
                );
                break;

            case this.config.descripcion:
                datos[this.config.descripcion] = await this.preguntar.prompt(
                    tp, datos[this.config.descripcion]
                    ? `Nueva descripción del struct, donde antes era ${datos[this.config.descripcion]}`
                    : "Descripción del struct",
                    this.error.Quit("No se ingresó la descripción del struct")
                );
                break;

            case MODIFICAR_CAMPO:
            case this.config.campos:
                let campoPrevio;
                if (indice) campoPrevio = datos[this.config.campos][indice];

                let campo = await this.crearPreguntas(
                    tp, this.informacion.parametro.obtenerDefault, this.informacion.parametro.actualizarDatos, 
                    this.informacion.parametro.generarPreguntas, "Ingresar los datos del campo", campoPrevio
                );

                if (indice) {
                    datos[this.config.campos][indice] = campo;
                } else {
                    datos[this.config.campos].push(campo);
                }
                break;

            case ELIMINAR_CAMPO:
                let campoEliminar = datos[this.config.campos].pop();
                this.informacion.parametro.eliminar(campoEliminar);
                break;

            case this.config.herede:
                datos[this.config.herede] = await this.preguntar.prompt(
                    tp, datos[this.config.herede]
                    ? `Nueva herencia para el struct, donde antes era ${datos[this.config.herede]}`
                    : "De que hereda el struct",
                    this.error.Quit("No se ingresó la herencia del struct")
                );
                break;

            case SALIR:
                salir = true;
                break;
        }

        return salir;
    }

    generarPreguntas(tp, datos) {
        let opciones = [], valores = [];

        opciones.push(this.config.nombreStruct);
        valores.push(datos[this.config.nombreStruct]
            ? ` ${this.simbolos.modificar} Modificar el nombre del struct, donde era ${datos[this.config.nombreStruct]}`
            : ` ${this.simbolos.agregar} Nombre del struct`
        )

        opciones.push(this.config.descripcion);
        valores.push(datos[this.config.descripcion]
            ? ` ${this.simbolos.modificar} Modificar la descripción del struct, donde era ${datos[this.config.descripcion]}`
            : ` ${this.simbolos.agregar} Descripción del struct`
        );

        for (let [indice, campo] of datos[this.config.campos].entries()) {
            opciones.push(`${MODIFICAR_CAMPO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el campos, donde es ${this.informacion.parametro.describir(campo)}`);
        }

        if (datos[this.config.campos].length > 0) {
            let ultimoCampo = datos[this.config.campos].last();
            opciones.push(ELIMINAR_CAMPO);
            valores.push(` ${this.simbolos.sacar} Eliminar el campo, donde es ${this.informacion.parametro.describir(ultimoCampo)}`);

            opciones.push(this.config.campos);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Campo`);

        } else {
            opciones.push(this.config.campos);
            valores.push(` ${this.simbolos.agregar} Campo`);
        }

        if (this.datosLenguaje.structHerencia) {
            opciones.push(this.config.herede);
            valores.push(datos[this.config.herede]
                ? ` ${this.simbolos.modificar} Modificar la estructura de la que herede, donde era ${datos[this.config.herede]}`
                : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Estructura de la que herede`
            );
        }

        if (this.esValido(datos)) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar(datos) {
        if (datos[this.config.campos].length == 0)
            return;

        for (let campo of datos[this.config.campos]) {
            this.informacion.parametro.eliminar(campo);
        }
    }

    describir(datos) {
        if (!this.esValido(datos)) return "";

        let nombre = datos[this.config.nombreStruct];
        let herencia = datos[this.config.herede];
        let campos = datos[this.config.campos]
            .map(campo => this.informacion.parametro.describir(campo));

        switch (lenguaje) {
            case this.lenguajes.python:
                return `class ${nombre}${herencia ? `(${herencia})` : ""}:\n\t${campos.join("\n\t")}`;

            case this.lenguajes.c:
                return `struct ${nombre} { \n\t${campos.join(";\n\t")} \n };`;

            case this.lenguajes.rust:
                return `struct ${nombre} { \n\t${campos.join(",\n\t")} \n }`;

            default:
                return `struct ${nombre}${herencia ? ` :: ${herencia}` : ""} then\n\t${campos.join("\n\t")}\nend`;
        }
    }

    describirReducida(datos) {
        if (!this.esValido(datos)) return "";

        let nombre = datos[this.config.nombreStruct];
        let herencia = datos[this.config.herede];

        switch (lenguaje) {
            case this.lenguajes.python:
                return `class ${nombre}${herencia ? `(${herencia})` : ""}`;

            case this.lenguajes.c:
            case this.lenguajes.rust:
                return `struct ${nombre}`;

            default:
                return `struct ${nombre}${herencia ? ` :: ${herencia}` : ""} end`;
        }
    }

    esValido(datos) {
        if (!datos) return false;

        return datos[this.config.campos].length >= CANTIDAD_MINIMA 
            && [this.config.nombreStruct, this.config.descripcion].every(key => datos[key])
            && datos[this.config.campos].every(campo => this.informacion.parametro.esValido(campo));

    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje) => TipoStruct(tp, manejoTipoDeDatos, lenguaje);