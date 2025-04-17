const CREAR = "crear";
const SACAR = "sacar";
const AGREGAR = "agregar";

class SeleccionReferencias {
	constructor(tp, numReferenciasPrevias = null) {
        const { SIMBOLOS } = tp.user.constantes();
        const referencia = tp.user.referencia();
        const dv = app.plugins.plugins.dataview.api;

        this.simbolos = SIMBOLOS;
		this.referencias = referencia.obtenerReferencias(tp, dv);

		if (!numReferenciasPrevias) numReferenciasPrevias = [];
        this.refereciasActuales = numReferenciasPrevias.map(num => {
            return this.referencias.find(referencia => referencia.obtenerNumReferencia() == num);
        });

        let seguidorRef = tp.user.seguidorReferencias(tp).new(dv);
        this.informacion = {
            async crearReferencia() { return await referencia.generar(tp, seguidorRef); },
        };
	}

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        let [ respuesta, indice ] = respuestaDada.split("-");
        switch (respuesta) {
            case CREAR:
                let { referencia: nuevaReferencia } = await this.informacion.crearReferencia();
                this.refereciasActuales.push(nuevaReferencia);
                break;

            case AGREGAR:
                let referenciasAgregables = this.referencias
                    .filter(referencia => !this.refereciasActuales.some(referenciaActual => referenciaActual == referencia))
                    .sort(referencia => -referencia.obtenerNumReferencia());

                let referenciaAgregar = await generarPreguntas.suggester(
                    (referencia) => ` ${this.simbolos.agregar} [${referencia.obtenerNumReferencia()}] ${referencia.describir()}`, 
                    referenciasAgregables, "Agregar referencia",
                    generarError.Quit("No se ingresó una referencia a agregar"),
                );

                this.refereciasActuales.push(referenciaAgregar);
                break;

            case SACAR:
                this.refereciasActuales.splice(indice, 1);
                break;
        }
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        valores.push(` ${this.simbolos.agregar} Crear referencia`)
        opciones.push(CREAR);

        for (let [indice, referenciaActual] of this.refereciasActuales.entries()) {
            valores.push(` ${this.simbolos.sacar} Sacar ${referenciaActual.describir()}`);
            opciones.push(`${SACAR}-${indice}`);
        }

        valores.push(` ${this.simbolos.agregar} Agregar referencia`)
        opciones.push(AGREGAR);

        return { opciones, valores };
    }

    esValido() {
        return true;
    }

    obtenerReferencias() {
        return this.refereciasActuales.map(referencia => referencia.obtenerNumReferencia());
    }
}

module.exports = () => ({
    clase: (tp, numReferenciasPrevias = null) => new SeleccionReferencias(tp, numReferenciasPrevias),
});
