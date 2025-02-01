const ELIMINAR_PARAMETRO = "eliminar parametro";
const MODIFICAR_PARAMETRO = "modificar parametro";

const MODIFICAR_RETURN = "modificar return";

const CANTIDAD_MINIMA = 0;

const SALIR = "salir";

class Funcion {
    constructor(tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { funcion: DATOS_FUNCION }, LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        this.config = DATOS_FUNCION;
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.nombre = representacionPrevia[this.config.nombreFuncion];
        this.descripcion = representacionPrevia[this.config.descripcion];
        this.parametros = [];

        let parametrosPrevios = representacionPrevia[this.config.parametros] 
            ? representacionPrevia[this.config.parametros] : [];
        for (let parametroPrevio of parametrosPrevios) {
            this.parametros.push(tp.user.parametro(tp, this.manejoTipoDeDatos, this.lenguajeActual, parametroPrevio));
        }

        if (representacionPrevia[this.config.return]) {
            this.return = tp.user.retrun(tp, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia[this.config.return]);
        }

        let lenguajeActual = this.lenguajeActual;
        this.informacion = {
            nuevoParametro() {
                return tp.user.parametro(tp, manejoTipoDeDatos, lenguajeActual);
            },

            nuevoReturn() {
                return tp.user.return(tp, manejoTipoDeDatos, lenguajeActual);
            },
        };
    } 

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR)
            return true;

        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombreFuncion:
                this.nombre = await generarPreguntas.prompt(
                    this.nombre
                        ? `Nuevo nombre de la función, donde antes era ${this.nombre}`
                        : "Nombre de la función",
                    generarError.Quit("No se ingresó el nombre de la función")
                );
                break;

            case this.config.descripcion:
                this.descripcion = await generarPreguntas.prompt(
                    this.descripcion
                        ? `Nueva descripción de la función, donde antes era ${this.descripcion}`
                        : "Descripción de la función",
                    generarError.Quit("No se ingresó la descripción de la función")
                );
                break;

            case this.config.parametros:
                let nuevoParametro = this.informacion.nuevoParametro();
                await generarPreguntas.formulario(nuevoParametro, "Ingresar los datos del parámetro");
                this.parametros.push(nuevoParametro);
                break;
            
            case MODIFICAR_PARAMETRO:
                await generarPreguntas.formulario(this.parametros[indice], "Modificar los datos del parámetro");
                break;

            case ELIMINAR_PARAMETRO:
                let parametroEliminado = this.parametros.pop();
                parametroEliminado.eliminar();
                break;

            case this.config.return:
                this.return = this.informacion.nuevoReturn();
                await generarPreguntas.formulario(this.return, "Ingresar los datos del tipo de dato que se devuelve");
                break;

            case MODIFICAR_RETURN:
                await generarPreguntas.formulario(this.return, "Modificar los datos del tipo de dato que se devuelve");
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        opciones.push(this.config.nombreFuncion);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre de la función, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre de la función`
        )

        opciones.push(this.config.descripcion);
        valores.push(this.descripcion
            ? ` ${this.simbolos.modificar} Modificar la descripción de la función, donde era ${this.descripcion}`
            : ` ${this.simbolos.agregar} Descripción de la función`
        )

        for (let [indice, parametro] of this.parametros.entries()) {
            let descripcion = parametro.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR_PARAMETRO}-${indice}`);
            valores.push(`️ ${this.simbolos.modificar} Modificar el parámetro, donde es ${descripcion}`);
        }

        if (this.parametros.length > 0) {
            let descripcion = this.parametros.last().descripcionCompleta()
                .replaceAll("\n", "\n\t");

            opciones.push(ELIMINAR_PARAMETRO);
            valores.push(` ${this.simbolos.sacar} Eliminar el parámetro, donde es ${descripcion}`);
        }

        if (this.parametros.length >= CANTIDAD_MINIMA) {
            opciones.push(this.config.parametros);
            valores.push(` ${this.simbolos.agregar} ${this.simbolos.opcional} Parámetro`);

        } else {
            opciones.push(this.config.parametros);
            valores.push(` ${this.simbolos.agregar} Parámetro`);
        }

        if (this.return?.esValido()) {
            let descripcion = this.return.descripcionCompleta().replaceAll("\n", "\n\t");
            opciones.push(MODIFICAR_RETURN);
            valores.push(` ${this.simbolos.modificar} Modificar el valor de retorno de la función, donde era ${descripcion}`);

        } else {
            let simboloReturnOpcional = this.datosLenguaje.returnOpcional ? `${this.simbolos.opcional} ` : "";
            opciones.push(this.config.return);
            valores.push(` ${this.simbolos.agregar} ${simboloReturnOpcional}Valor de retorno de la función`);
        }

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        for (let parametro of this.parametros) {
            parametro.eliminar();
        }

        if (this.return) {
            this.return.eliminar();
        }
    }

    esValido() {
        return this.nombre && this.descripcion && this.parametros.every(parametro => parametro && parametro.esValido())
            && ((this.return && this.return.esValido()) || this.datosLenguaje.returnOpcional);
    }

    generarRepresentacion() {
        return {
            [this.config.nombreFuncion]: this.nombre,
            [this.config.descripcion]: this.descripcion,
            [this.config.parametros]: this.parametros
                .map(parametro => parametro?.generarRepresentacion())
                .filter(representacion => representacion !== undefined),
            [this.config.return]: this.return?.generarRepresentacion(),
        }
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";

        let parametros = this.parametros.map(param => param.descripcionCompleta());

        let descripcion = "";
        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                descripcion = `def ${this.nombre}(${parametros.join(", ")})`;
                if (this.return && this.return.esValido()) {
                    descripcion += ` -> ${this.return.descripcionArgumento()}`;
                }
                descripcion += `:\n\tpass`;
                break;

            case this.lenguajes.c:
                descripcion = `${this.return.descripcionArgumento()} ${this.nombre}(${parametros.join(", ")});`;
                break;

            case this.lenguajes.rust:
                descripcion = `fn ${this.nombre}(${parametros.join(", ")})`;
                if (this.return && this.return.esValido()) {
                    descripcion += ` -> ${this.return.descripcionArgumento()}`;
                };
                descripcion += ";";
                break;

            default:
                descripcion = `function ${this.nombre} :: `;
                descripcion += parametros.length > 0 ? parametros.join(", ") : "()";

                if (this.return && this.return.esValido()) {
                    descripcion += ` -> ${this.return.descripcionArgumento()}`;
                };
                break;
        }

        return descripcion;
    }

    descripcionArgumento() {
        if (!this.esValido()) return "";

        let parametros = this.parametros.map(param => param.descripcionArgumento());

        let descripcion = "";
        switch (this.lenguajeActual) {
            case this.lenguajes.python:
                let descripcionReturn = (this.return && this.return.esValido())
                    ? this.return.descripcionArgumento()
                    : "None";
                descripcion = `${this.nombre} Callable[[${parametros.join(", ")}], ${descripcionReturn}]`;
                break;

            case this.lenguajes.c:
                descripcion = `${this.return.descripcionArgumento()} (*${this.nombre})(${parametros.join(", ")});`;
                break;

            case this.lenguajes.rust:
                descripcion = `${this.nombre}: fn (${parametros.join(", ")})`;
                if (this.return && this.return.esValido()) {
                    descripcion += ` -> ${this.return.descripcionArgumento()}`;
                };
                break;

            default:
                descripcion = `${this.nombre} function :: `;
                descripcion += parametros.length > 0 ? parametros.join(", ") : "()";

                if (this.return && this.return.esValido()) {
                    descripcion += ` -> ${this.return.descripcionArgumento()}`;
                };
                break;
        }

        return descripcion;
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje = null, representacionPrevia = {}) => new Funcion(tp, manejoTipoDeDatos, lenguaje, representacionPrevia);