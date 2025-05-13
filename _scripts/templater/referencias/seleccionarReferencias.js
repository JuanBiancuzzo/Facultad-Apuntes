const CREAR = "crear";
const SACAR = "sacar";
const PREFERIDA = "preferida";
const AGREGAR = "agregar";

class SeleccionReferencias {
	constructor(constantes, referencia, obtenerReferencias, dv, seguidorReferencias, numReferenciasPrevias = null, numOpcionesPreferidas = null) {
        const { SIMBOLOS } = constantes;

        this.simbolos = SIMBOLOS;
		this.referencias = obtenerReferencias(dv);

		if (!numReferenciasPrevias) numReferenciasPrevias = [];
        numReferenciasPrevias = numReferenciasPrevias.map(num => parseInt(num, 10));

		if (!numOpcionesPreferidas) numOpcionesPreferidas = [];
        numOpcionesPreferidas = numOpcionesPreferidas.map(num => parseInt(num, 10));


        this.refereciasActuales = numReferenciasPrevias
            .filter(num => !numOpcionesPreferidas.includes(num))
            .map(num => {
                return this.referencias.find(referencia => referencia.obtenerNumReferencia() == num);
            });

        this.opcionesPreferidas = numOpcionesPreferidas.map(num => ({
            ref: this.referencias.find(referencia => referencia.obtenerNumReferencia() == num), 
            elegida: numReferenciasPrevias.includes(num),
        }));

        let seguidorRef = seguidorReferencias.new(dv);
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
                    .filter(referencia => !this.opcionesPreferidas.some(({ ref: referenciaPreferida }) => referenciaPreferida == referencia))
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

            case PREFERIDA:
                this.opcionesPreferidas[indice].elegida = !this.opcionesPreferidas[indice].elegida;
                break;
        }
    }

    generarPreguntas() {
        let opciones = [], valores = [];

        valores.push(` ${this.simbolos.agregar} Crear referencia`)
        opciones.push(CREAR);

        for (let [indice, opcionPreferida] of this.opcionesPreferidas.entries()) {
            let { ref: referenciaPreferida, elegida } = opcionPreferida;
            let simbolo = elegida ? this.simbolos.confirmar : this.simbolos.elegir;

            valores.push(` ${simbolo} Elegir ${referenciaPreferida.describir()}`);
            opciones.push(`${PREFERIDA}-${indice}`);
        }

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
        return this.opcionesPreferidas
            .filter(({ elegida }) => elegida)
            .map(({ ref }) => ref.obtenerNumReferencia())
            .concat(this.refereciasActuales.map(referencia => referencia.obtenerNumReferencia()));
    }
}

module.exports = (tp) => ({
    clase: SeleccionReferencias.bind(
        null, 
        tp.user.constantes(), 
        tp.user.referencia(), 
        tp.user.referencia().obtenerReferencias.bind(null, tp), 
        app.plugins.plugins.dataview.api, 
        tp.user.seguidorReferencias(tp)
    ),
    // clase: (tp, numReferenciasPrevias = null, numOpcionesPreferidas = null) => new SeleccionReferencias(tp, numReferenciasPrevias, numOpcionesPreferidas),
});
