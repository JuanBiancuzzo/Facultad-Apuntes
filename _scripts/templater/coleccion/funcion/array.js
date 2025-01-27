const SALIR = "salir";

class TipoArray {
    constructor(tp, manejoTipoDeDatos, lenguaje) {
        const { 
            SIMBOLOS, DATOS: { 
                FUNCIONES: { array: DATOS_ARRAY },
                LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } 
            } 
        } = tp.user.constantes();

        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[(lenguaje in LENGUAJES) 
            ? lenguaje 
            : LENGUAJES.default
        ];
        this.config = DATOS_ARRAY;
        this.simbolos = SIMBOLOS;

        this.manejoTipoDeDatos = manejoTipoDeDatos;

        this.informacion = {
            _claseTipoDeDato: null,
            get tipoDeDato() {
                if (!this._claseTipoDeDato)
                    this._claseTipoDeDato = tp.user.tipoDeDato(tp, manejoTipoDeDatos, lenguaje);
                return this._claseTipoDeDato;
            },
        };

        this.preguntar = tp.user.preguntar();
        this.error = tp.user.error();
        this.crearPreguntas = tp.user.crearPreguntas;
    }

    obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion) {
        return crearFuncion(TIPOS_DE_DEFAULT.diccionario, () => ({
            [this.config.tipoDeDato]: this.informacion.tipoDeDato.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion),
            [this.config.cantidad]: TIPOS_DE_DEFAULT.simple,
        }));
    }

    async actualizarDatos(tp, datos, respuesta) {
        let salir = false;

        switch (respuesta) {
            case this.config.tipoDeDato:
                datos[this.config.tipoDeDato] = await this.crearPreguntas(
                    tp, this.informacion.parametro.obtenerDefault, this.informacion.parametro.actualizarDatos, 
                    this.informacion.parametro.generarPreguntas, "Ingresar el tipo de dato del array", datos[this.config.tipoDeDato]
                )
                break;

            case this.config.cantidad:
                let cantidad = await this.preguntar.numero(
                    tp, "Cantidad de elementos del array (tiene que ser >0)",
                    this.error.Quit("No se ingresó un número para la cantidad del array")
                );
                if (cantidad <= 0) throw this.error.Quit("Se ingresó un número negativo o cero");

                datos[this.config.cantidad] = cantidad;
                break;

            case SALIR:
                salir = true;
                break;
        }

        return salir;
    }

    generarPreguntas(tp, datos) {
        let opciones = [], valores = [];

        opciones.push(this.config.tipoDeDato);
        valores.push(this.informacion.tipoDeDato.esValido(datos[this.config.tipoDeDato])
            ? ` ${this.simbolos.modificar} Modificar la cantidad que tiene el array, donde era ${this.informacion.tipoDeDato.describir(datos[this.config.tipoDeDato]).replaceAll("\n", "\n\t")}`
            : ` ${this.simbolos.agregar} Tipo de dato del array`
        );

        if (this.datosLenguaje.arrayConCantidad) {
            opciones.push(this.config.cantidad);
            valores.push(datos[this.config.cantidad]
                ? ` ${this.simbolos.modificar} Modificar la cantidad que tiene el array, donde era ${datos[this.config.cantidad]}`
                : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Cantidad de elementos del array`
            );
        }

        if (this.esValido(datos)) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar(datos) {
        if (!datos[this.config.tipoDeDato])
            return;
        this.informacion.tipoDeDato.eliminar(datos[this.config.tipoDeDato]);
    }

    describir(datos) {
        if (!this.esValido(datos)) return "";

        let tipoDeDato = this.informacion.tipoDeDato.describir(datos[this.config.tipoDeDato]);
        let cantidad = datos[this.config.cantidad];

        switch (lenguaje) {
            case this.lenguajes.python:
                return `list[${tipoDeDato}]`;

            case this.lenguajes.rust:
                return (!cantidad || cantidad <= 0)
                    ? `[${tipoDeDato}]`
                    : `[${tipoDeDato}; ${cantidad}]`;

            case this.lenguajes.c:
                return (!cantidad || cantidad <= 0)
                    ? `${tipoDeDato}[]`
                    : `${tipoDeDato}[${cantidad}]`;

            default:
                return (!cantidad || cantidad <= 0)
                    ? `${tipoDeDato}[]`
                    : `${tipoDeDato}[${cantidad}]`;
        }
    }

    esValido(datos) {
        if (!datos) return false;
        return this.informacion.tipoDeDato.esValido(datos[this.config.tipoDeDato]);
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje) => TipoArray(tp, manejoTipoDeDatos, lenguaje);
