const ELIMINAR_PARAMETRO = "eliminar parametro";

const SALIR = "salir";

class Funcion {
    constructor(tp, manejoTipoDeDatos, lenguaje = null) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { funcion: { firma: DATOS_FIRMA } }, LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        this.config = DATOS_FIRMA;
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.informacion = {
            _claseParametro: null,
            get parametro() {
                if (!this._claseParametro)
                    this._claseParametro = tp.user.parametro(tp, manejoTipoDeDatos, lenguaje);
                return this._claseParametro;
            },

            _claseReturn: null,
            get return() {
                if (!this._claseReturn)
                    this._claseReturn = tp.user.return(tp, manejoTipoDeDatos, lenguaje);
                return this._claseReturn;
            },
        };

        this.preguntar = tp.user.preguntar();
        this.error = tp.user.error();
        this.crearPreguntas = tp.user.crearPreguntas;

        this.obtenerDefault = this.obtenerDefault.bind(this);
        this.actualizarDatos = this.actualizarDatos.bind(this);
        this.generarPreguntas = this.generarPreguntas.bind(this);
        this.eliminar = this.eliminar.bind(this);
        this.describir = this.describir.bind(this);
        this.esValido = this.esValido.bind(this);
    }

    obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion) {
        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [this.config.nombreFuncion]: TIPOS_DE_DEFAULT.simple,
            [this.config.descripcion]: TIPOS_DE_DEFAULT.simple,
            [this.config.parametros]: crearFuncion(
                TIPOS_DE_DEFAULT.array, 
                () => this.informacion.parametro.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion),
            ),
            [this.config.return]: this.informacion.return.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion),
        }));
    }

    async actualizarDatos(tp, datos, respuestaDada) {
        let salir = false;
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombreFuncion:
                datos[this.config.nombreFuncion] = await this.preguntar.prompt(
                    tp, datos[this.config.nombreFuncion]
                    ? `Nuevo nombre de la función, donde antes era ${datos[this.config.nombreFuncion]}`
                    : "Nombre de la función",
                    this.error.Quit("No se ingresó el nombre de la función")
                );
                break;

            case this.config.descripcion:
                datos[this.config.descripcion] = await this.preguntar.prompt(
                    tp, datos[this.config.descripcion]
                    ? `Nueva descripción de la función, donde antes era ${datos[this.config.descripcion]}`
                    : "Descripción de la función",
                    this.error.Quit("No se ingresó la descripción de la función")
                );
                break;

            case this.config.parametros:
                let parametroPrevio;
                if (indice) parametroPrevio = datos[this.config.parametros][indice];

                let parametro = await this.crearPreguntas(
                    tp, this.informacion.parametro.obtenerDefault, this.informacion.parametro.actualizarDatos,
                    this.informacion.parametro.generarPreguntas, "Ingresar los datos del parámetro", parametroPrevio
                );

                if (indice) {
                    datos[this.config.parametros][indice] = parametro;
                } else {
                    datos[this.config.parametros].push(parametro);
                }
                break;

            case ELIMINAR_PARAMETRO:
                let parametroEliminado = datos[this.config.parametros].pop();
                this.informacion.parametro.eliminar(parametroEliminado);
                break;

            case this.config.return:
                datos[this.config.return] = await this.crearPreguntas(
                    tp, this.informacion.return.obtenerDefault, this.informacion.return.actualizarDatos,
                    this.informacion.return.generarPreguntas, "Ingresar los datos del tipo de dato que se devuelve",
                    datos[this.config.return] ? datos[this.config.return] : null
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

        opciones.push(this.config.nombreFuncion);
        valores.push(datos[this.config.nombreFuncion]
            ? ` ${this.simbolos.modificar} Modificar el nombre de la función, donde era ${datos[this.config.nombreFuncion]}`
            : ` ${this.simbolos.agregar} Nombre de la función`
        )

        opciones.push(this.config.descripcion);
        valores.push(datos[this.config.descripcion]
            ? ` ${this.simbolos.modificar} Modificar la descripción de la función, donde era ${datos[this.config.descripcion]}`
            : ` ${this.simbolos.agregar} Descripción de la función`
        )

        for (let [indice, parametro] of datos[this.config.parametros].entries()) {
            let descripcion = this.informacion.parametro.describir(parametro)
                .replaceAll("\n", "\n\t");

            opciones.push(`${this.config.parametros}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el parámetro, donde es ${descripcion}`);
        }

        if (datos[this.config.parametros].length > 0) {
            let ultimoParametro = datos[this.config.parametros].last();
            let descripcion = this.informacion.parametro.describir(ultimoParametro)
                .replaceAll("\n", "\n\t");

            opciones.push(ELIMINAR_PARAMETRO);
            valores.push(` ${this.simbolos.sacar} Eliminar el parámetro, donde es ${descripcion}`);
        }

        opciones.push(this.config.parametros);
        valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Parámetro`);

        let simboloReturnOpcional = this.datosLenguaje.returnOpcional ? `${this.simbolos.opcional} ` : "";
        let describirReturnValue = this.informacion.return.describir(datos[this.config.return])
            .replaceAll("\n", "\n\t");

        opciones.push(this.config.return);
        valores.push(this.informacion.return.esValido(datos[this.config.return])
            ? ` ${this.simbolos.modificar} Modificar el valor de retorno de la función, donde era ${describirReturnValue}`
            : ` ${this.simbolos.agregar} ${simboloReturnOpcional}Valor de retorno de la función`
        )

        if (this.esValido(datos)) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar(datos) {
        if (!datos) return;

        for (let parametro of datos[this.config.parametros]) {
            this.informacion.parametro.eliminar(parametro);
        }
        this.informacion.return.eliminar(datos[this.config.return]);
    }

    describir(datos) {
        if (!this.esValido(datos)) return "";

        let nombre = datos[this.config.nombreFuncion];
        let parametros = datos[this.config.parametros]
            .map(param => this.informacion.parametro.describir(param));
        let returnValue = this.informacion.return.describir(datos[this.config.return])

        let descripcion = "";
        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                descripcion = `def ${nombre}(${parametros.join(", ")})`;
                if (this.informacion.return.esValido(datos[this.config.return])) {
                    descripcion += ` -> ${returnValue}`;
                }
                break;

            case this.lenguajes.c:
                descripcion = `${returnValue} ${nombre}(${parametros.join(", ")})`;
                break;

            case this.lenguajes.rust:
                descripcion = `fn ${nombre}(${parametros.join(", ")})`;
                if (this.informacion.parametro.esValido(datos[this.config.return])) {
                    descripcion += ` -> ${returnValue}`;
                }
                break;

            default:
                descripcion = `function ${nombre} :: `;
                descripcion += parametros.length > 0
                    ? parametros.join(", ")
                    : "()";

                if (this.informacion.return.esValido(datos[this.config.return])) {
                    descripcion += ` -> ${returnValue}`;
                };
                break;
        }

        return descripcion;
    }

    esValido(datos) {
        if (!datos) return false;

        return (this.informacion.return.esValido(datos[this.config.return]) || this.datosLenguaje.returnOpcional)
            && [this.config.nombreFuncion, this.config.descripcion].every(key => datos[key]);
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null) => new Funcion(tp, manejoTipoDeDatos, lenguaje);