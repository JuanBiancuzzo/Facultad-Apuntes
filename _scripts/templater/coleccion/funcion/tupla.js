const AGREGAR = "agregar";
const MODIFICAR = "modificar";
const ELIMINAR = "eliminar";

const CANTIDAD_MINIMA = 2;

class TipoTupla {
    constructor(tp, padre, manejoTipoDeDatos, lenguaje, representacionPrevia = []) {
        this.cte = tp.user.constantes();
        const { SIMBOLOS, DATOS: { LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } } = this.cte;

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        if (!(this.datosLenguaje.tupla.tieneTupla)) throw Error(`El lenguaje ${this.lenguajeActual} no debería tener tuplas`);

        this.simbolos = SIMBOLOS;
        this.manejoTipoDeDatos = manejoTipoDeDatos;
        this.padre = padre;

        this.datos = [];
        for (let representacionTipoDeDato of representacionPrevia) {
            this.datos.push(tp.user.tipoDeDato().clase(tp, this, this.manejoTipoDeDatos, this.lenguajeActual, representacionTipoDeDato));
        }

        this.crearTipoDeDato = tp.user.tipoDeDato().clase.bind(null, tp, this, this.manejoTipoDeDatos, this.lenguajeActual);
    } 

    async actualizarDatos(respuestaDada, generarPreguntas, _generarError) {
        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case AGREGAR:
                let nuevoTipoDeDato = this.crearTipoDeDato();
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
        for (let tipoDeDato of this.datos) {
            tipoDeDato.eliminar();
        }
    }

    esValido() {
        return this.datos.length >= CANTIDAD_MINIMA 
            && this.datos.every(tipoDeDato => tipoDeDato && tipoDeDato.esValido());
    }

    generarRepresentacion() {
        return this.datos
            .map(tipoDeDato => tipoDeDato?.generarRepresentacion())
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
                return `tuple[${descripciones.join(", ")}]`;

            case this.lenguajes.rust:
                return `(${descripciones.join(", ")})`;

            default:
                return `[${descripciones.join(", ")}]`;
        }
    }
}

module.exports = () => ({
    clase: (tp, padre, manejoTipoDeDatos, lenguaje = null, representacionPrevia = []) => new TipoTupla(tp, padre, manejoTipoDeDatos, lenguaje, representacionPrevia),
});