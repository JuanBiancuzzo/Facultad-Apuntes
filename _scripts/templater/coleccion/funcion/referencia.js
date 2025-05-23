const AGREGAR = "agregar";
const MODIFICAR = "modificar";

class TipoReferencia {
    constructor(tp, padre, manejoTipoDeDatos, lenguaje, representacionPrevia = null) {
        this.cte = tp.user.constantes();
        const { SIMBOLOS, DATOS: { LENGUAJE: { lenguajes: LENGUAJES, ...DATOS_LENGUAJES } } } = this.cte;

        this.lenguajeActual = (lenguaje in LENGUAJES) ? lenguaje : LENGUAJES.default;
        this.lenguajes = LENGUAJES; 
        this.datosLenguaje = DATOS_LENGUAJES[this.lenguajeActual];

        if (!(this.datosLenguaje.referencia.tieneReferenci)) throw Error(`El lenguaje ${this.lenguajeActual} no debería tener referenicas`);

        this.simbolos = SIMBOLOS;
        this.manejoTipoDeDatos = manejoTipoDeDatos;
        this.padre = padre;

        this.tipoDeDato = representacionPrevia 
            ? tp.user.tipoDeDato().clase(tp, this, this.manejoTipoDeDatos, this.lenguajeActual, representacionPrevia)
            : null;

        this.nuevoTipoDeDato = tp.user.tipoDeDato().clase.bind(null, tp, this, this.manejoTipoDeDatos, lenguajeActual);
    } 

    async actualizarDatos(respuestaDada, generarPreguntas, _generarError) {
        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case AGREGAR:
                let nuevoTipoDeDato = this.nuevoTipoDeDato();
                await generarPreguntas.formulario(nuevoTipoDeDato, "Ingresar el tipo de dato");
                this.datos.push(nuevoTipoDeDato);
                break;

            case MODIFICAR:
                await generarPreguntas.formulario(this.datos[indice], "Modificar el tipo de dato");
                break;
        }
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        if (this.tipoDeDato?.esValido()) {
            opciones.push(AGREGAR);
            valores.push(` ${this.simbolos.agregar} Tipo de dato`);

        } else {
            let descripcion = this.tipoDeDato.descripcionCompleta().replaceAll("\n", "\n\t");

            opciones.push(MODIFICAR);
            valores.push(` ${this.simbolos.modificar} Modificar el tipo de dato, donde es ${descripcion}`);
        }

        return { opciones: opciones, valores: valores };
    }

    eliminar() {
        this.tipoDeDato.eliminar();
    }

    esValido() {
        return this.tipoDeDato?.esValido(); 
    }

    generarRepresentacion() {
        return this.tipoDeDato?.generarRepresentacion();
    }

    descripcionCompleta() {
        if (!this.esValido()) return "";
        return this.descripcionPorLenguaje(this.tipoDeDato.descripcionCompleta());
    }

    descripcionArgumento() {
        if (!this.esValido()) return "";
        return this.descripcionPorLenguaje(this.tipoDeDato.descripcionArgumento());
    }

    descripcionPorLenguaje(descripcion) {
        switch (this.lenguajeActual) {
            case this.lenguajes.c:
                return `${descripcion}*`;

            case this.lenguajes.rust:
                return `&${descripcion}`;

            default:
                return `${descripcion}*`;
        }
    }
}

module.exports = () => ({
    clase: (tp, padre, manejoTipoDeDatos, lenguaje = null, representacionPrevia = []) => new TipoReferencia(tp, padre, manejoTipoDeDatos, lenguaje, representacionPrevia),
});