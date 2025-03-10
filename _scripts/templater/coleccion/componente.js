class Componente {
    constructor(tp, representacionPrevia = {}) {
        const {
            SIMBOLOS, DATOS: { COMPONENTES: DATOS_COMPONENTES },
        } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.config = DATOS_COMPONENTES;
        this.tipos = {
            [DATOS_COMPONENTES.tipo.actuador]: "Actuador",
            [DATOS_COMPONENTES.tipo.micro]: "Microprocesador",
            [DATOS_COMPONENTES.tipo.placa]: "Placa de desarrollo",
            [DATOS_COMPONENTES.tipo.sensor]: "Sensor",
            [DATOS_COMPONENTES.tipo.integrado]: "Circuito integrado",
        }

        this.nombre = representacionPrevia[this.config.nombre];
        this.tipo = representacionPrevia[this.config.tipo.self];
    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        switch (respuesta) {
            case this.config.tipo:
                this.tipo = await generarPreguntas.suggester(
                    Object.values(this.tipos), Object.keys(this.tipos),
                    "Que tipo de componente se quiere generar?",
                    generarError.Quit("No se eligió el tipo de la componente"),
                );
                break;
            
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    "Que nombre va a tener el componente",
                    generarError.Quit("No se ingresó el nombre de la componente")
                );
                break;
        }
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.tipo);
        valores.push(this.tipo in this.tipos
            ? ` ${this.simbolos.modificar} Modificar el tipo, donde era ${this.tipos[this.tipo].toLowerCase()}`
            : ` ${this.simbolos.agregar} Tipo de componente`
        );

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre, donde era ${this.describir()}`
            : ` ${this.simbolos.agregar} Nombre del componente`
        )

        return { opciones, valores };
    }

    esValido() {
        return this.nombre && this.tipo in this.tipos;
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
            [this.config.tipo.self]: this.tipo,
        }
    }

    describir() {
        return `Componente ${this.nombre}`;
    }
}

async function crearComponente(tp) {
    const { 
        FORMATO_DIA, ETAPAS, SECCIONES, DATOS: { ARCHIVO: DATOS_ARCHIVO, COMPONENTES: DATOS_COMPONENTES },
        TAGS: { coleccion: { componentes: TAGS_COMPONENTES, ...TAGS_COLECCION }, nota: TAGS_NOTA },
        DIRECTORIOS: { coleccion: { componentes: DIR_COMPONENTES, ...DIR_COLECCION } },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const carpeta = {
        [DATOS_COMPONENTES.tipo.actuador]: DIR_COMPONENTES.actuadores,
        [DATOS_COMPONENTES.tipo.micro]: DIR_COMPONENTES.micros,
        [DATOS_COMPONENTES.tipo.placa]: DIR_COMPONENTES.placas,
        [DATOS_COMPONENTES.tipo.sensor]: DIR_COMPONENTES.sensores,
        [DATOS_COMPONENTES.tipo.integrado]: DIR_COMPONENTES.integrados,
    };
    const tag = {
        [DATOS_COMPONENTES.tipo.actuador]: TAGS_COMPONENTES.actuador,
        [DATOS_COMPONENTES.tipo.micro]: TAGS_COMPONENTES.micro,
        [DATOS_COMPONENTES.tipo.placa]: TAGS_COMPONENTES.placa,
        [DATOS_COMPONENTES.tipo.sensor]: TAGS_COMPONENTES.sensor,
        [DATOS_COMPONENTES.tipo.integrado]: TAGS_COMPONENTES.integrado,
    };

    let componente = new Componente(tp);
    await preguntar.formulario(tp, componente, "Ingresar la información del componente");

    return {
        metadata: {
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
            [DATOS_ARCHIVO.tags]: [
                `${TAGS_COLECCION.self}/${TAGS_COMPONENTES.self}/${TAGS_COMPONENTES.componente}`,
                `${TAGS_COMPONENTES.self}/${tag[componente.tipo]}`,
                `${TAGS_NOTA.self}/${TAGS_NOTA.coleccion}`,
            ],
            ...componente.generarRepresentacion()
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_COMPONENTES.self}/${carpeta[componente.tipo]}`,
        titulo: componente.describir(),
        texto: `${SECCIONES.seccion(SECCIONES.definicion)}\n---\n`
            + "<% tp.file.cursor() %>\n\n",
    }
}

module.exports = () => ({
    crear: crearComponente,
    clase: (tp, representacionPrevia = {}) => new Componente(tp, representacionPrevia),
});