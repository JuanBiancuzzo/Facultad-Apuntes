const AGREGAR = "agregar";
const MODIFICAR = "modificar";
const ELIMINAR = "eliminar";

const CANTIDAD_MINIMA = 2;

const SALIR = "salir";

class TipoTupla {
    constructor(tp, manejoTipoDeDatos, lenguaje) {
        const { 
            SIMBOLOS, DATOS: { LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } 
        } = tp.user.constantes();

        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[(lenguaje in LENGUAJES) 
            ? lenguaje 
            : LENGUAJES.default
        ];

        if (!(this.datosLenguaje.tieneTupla)) throw Error(`El lenguaje ${lenguaje} no debería tener tuplas`);

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
        return crearFuncion(
            TIPOS_DE_DEFAULT.array,
            () => this.informacion.tipoDeDato.obtenerDefault(TIPOS_DE_DEFAULT, crearFuncion)
        );
    }

    async actualizarDatos(tp, datos, respuestaDada) {
        let salir = false;
        let [respuesta, indice] = respuestaDada.split("-");

        switch (respuesta) {
            case AGREGAR:
                let nuevoTipoDeDato = await this.crearPreguntas(
                    tp, this.informacion.tipoDeDato.obtenerDefault, this.informacion.tipoDeDato.actualizarDatos, 
                    this.informacion.tipoDeDato.generarPreguntas, "Ingresar el tipo de dato de la tupla"
                );
                datos.push(nuevoTipoDeDato);
                break;

            case MODIFICAR:
                datos[indice] = await this.crearPreguntas(
                    tp, this.informacion.tipoDeDato.obtenerDefault, this.informacion.tipoDeDato.actualizarDatos, 
                    this.informacion.tipoDeDato.generarPreguntas, "Modificar el tipo de dato de la tupla", datos[indice]
                );
                break;

            case ELIMINAR:
                this.informacion.tipoDeDato.eliminar(datos[indice]);
                datos.splice(indice, 1);
                break;

            case SALIR:
                salir = true;
                break;
        }

        return salir;
    }

    generarPreguntas(tp, datos) {
        const { SIMBOLOS } = tp.user.constantes();
        const infoTipoDeDato = tp.user.tipoDeDato();
        let opciones = [], valores = [];

        for (let [indice, tipoDeDato] of datos.entries()) {
            let descripcion = infoTipoDeDato.describir(tp, tipoDeDato, manejoTipoDeDatos, lenguaje)
                .replaceAll("\n", "\n\t");

            opciones.push(`${MODIFICAR}-${indice}`);
            valores.push(`️ ${SIMBOLOS.modificar} Modificar el tipo de dato, donde es ${descripcion}`);

            opciones.push(`${ELIMINAR}-${indice}`);
            valores.push(`️ ${SIMBOLOS.sacar} Eliminar el tipo de dato, donde es ${descripcion}`);
        }

        if (datos.length >= CANTIDAD_MINIMA) {
            opciones.push(AGREGAR);
            valores.push(` ${SIMBOLOS.agregar} ${SIMBOLOS.opcional} Tipo de dato`);

        } else {
            opciones.push(AGREGAR);
            valores.push(` ${SIMBOLOS.agregar} Tipo de dato`);
        }

        if (esValido(tp, datos, manejoTipoDeDatos, lenguaje)) {
            opciones.push(SALIR);
            valores.push(` ${SIMBOLOS.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar(datos) {
        for (let tipoDeDato of datos) {
            this.informacion.tipoDeDato.eliminar(tipoDeDato);
        }
    }

    describir(datos) {
        if (!this.esValido(datos)) return "";

        let tiposDeDato = datos.map(tipoDeDato => this.informacion.tipoDeDato.describir(tipoDeDato));

        switch (lenguaje) {
            case this.lenguajes.python:
                return `tuple[${tiposDeDato.join(", ")}]`;

            case this.lenguajes.rust:
                return `(${tiposDeDato.join(", ")})`;

            default:
                return `[${tiposDeDato.join(", ")}]`;
        }
    }

    esValido(datos) {
        if (!datos) return false;

        return datos.length >= CANTIDAD_MINIMA 
            && datos.every(tipoDeDato => this.informacion.tipoDeDato.esValido(tipoDeDato));
    }
}

module.exports = (tp, manejoTipoDeDatos, lenguaje) => TipoTupla(tp, manejoTipoDeDatos, lenguaje);