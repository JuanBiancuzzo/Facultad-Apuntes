class Distribucion {
    constructor(tp, representacionPrevia) {
        const { SIMBOLOS, DATOS: { DISTRIBUCION: DATOS_DISTRIBUCION } } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.config = DATOS_DISTRIBUCION;
        this.tipos = {
            [DATOS_DISTRIBUCION.tipo.discreta]: "Distribución discreta",
            [DATOS_DISTRIBUCION.tipo.continua]: "Distribución continua",
            [DATOS_DISTRIBUCION.tipo.multi]: "Distribución multivariada",
        };

        this.tipo = representacionPrevia[this.config.tipo.self];
        this.nombre = representacionPrevia[this.config.nombre];
    }

    async actualizarDatos(respuesta, generarPreguntas, generarError) {
        switch (respuesta) {
            case this.config.tipo:
                this.tipo = await generarPreguntas.suggester(
                    Object.values(this.tipos), Object.keys(this.tipos),
                    "Que tipo de distribución se quiere generar?",
                    generarError.Quit("No se eligió el tipo de la distribución"),
                );
                break;
            
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    "Que nombre va a tener la distribución",
                    generarError.Quit("No se ingresó el nombre de la distribución")
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
            : ` ${this.simbolos.agregar} Tipo de distribución`
        );

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre, donde era ${this.describir()}`
            : ` ${this.simbolos.agregar} Nombre de la distribución`
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
        return `Distribución ${this.nombre}`;
    }
}

class Relacion {}

async function crearDistribucion(tp, tipoDistribucion) {
    const {
        SECCIONES, ETAPAS, FORMATO_DIA,
        DIRECTORIOS: { coleccion: { distribuciones: DIR_DISTRIBUCIONES, ...DIR_COLECCION } },
        DATOS: { ARCHIVO: DATOS_ARCHIVO, DISTRIBUCION: { tipo: DATOS_TIPOS } },
        TAGS: { coleccion: { distribuciones: TAGS_DISTRIBUCIONES, ...TAGS_COLECCION }, nota: TAGS_NOTAS },
        DATAVIEW: { coleccion: { distribuciones: DV_DISTRIBUCIONES }, ...DATAVIEW },
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();

    let distribucion = new Distribucion(tp, { [DATOS_TIPOS.self]: tipoDistribucion });
    await preguntar.formulario(tp, distribucion, "Ingresar la información de la distribución")

    let carpeta = {
        [DATOS_TIPOS.discreta]: DIR_DISTRIBUCIONES.discreto, [DATOS_TIPOS.continua]: DIR_DISTRIBUCIONES.continua,
        [DATOS_TIPOS.multi]: DIR_DISTRIBUCIONES.multi,
    };
    let tag = {
        [DATOS_TIPOS.discreta]: TAGS_DISTRIBUCIONES.discreta, [DATOS_TIPOS.continua]: TAGS_DISTRIBUCIONES.continua,
        [DATOS_TIPOS.multi]: TAGS_DISTRIBUCIONES.multi,
    };

    let texto = `${"#".repeat(SECCIONES.definicion.nivel)} ${SECCIONES.definicion.texto}\n---\n\n\n`;
    texto += `${"#".repeat(SECCIONES.notacion.nivel)} ${SECCIONES.notacion.texto}\n$$ X \\sim $$\n\n`;
    texto += `${"#".repeat(SECCIONES.relaciones.nivel)} ${SECCIONES.relaciones.texto}\n---\n`;
    texto += `\`\`\`dataviewjs\n\tawait dv.view("${DATAVIEW.self}/${DV_DISTRIBUCIONES.relaciones}", { distribucion: dv.current() });\n\`\`\`\n`;

    return {
        metadata: {
            [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.tags]: [ 
                `${TAGS_NOTAS.self}/${TAGS_NOTAS.coleccion}`,
                `${TAGS_COLECCION.self}/${TAGS_DISTRIBUCIONES.self}/${TAGS_DISTRIBUCIONES.distribucion}`,
                `${TAGS_DISTRIBUCIONES.self}/${tag[tipoDistribucion]}`
            ],
            ...distribucion.generarRepresentacion()
        },
        carpeta: `${DIR_COLECCION.self}/${DIR_DISTRIBUCIONES.self}/${carpeta[tipoDistribucion]}`,
        titulo: distribucion.describir(),
        texto,
    }
}

async function crearRelacion(tp) {
    const {
        SECCIONES, ETAPAS, FORMATO_DIA,
        DIRECTORIOS: { coleccion: { distribuciones: DIR_DISTRIBUCIONES, ...DIR_COLECCION } },
        DATOS: { ARCHIVO: DATOS_ARCHIVO, RELACION_DISTRIBUCION: DATOS_RELACION },
        TAGS: { coleccion: { distribuciones: TAGS_DISTRIBUCIONES, ...TAGS_COLECCION }, nota: TAGS_NOTAS },
        DATAVIEW: { coleccion: { distribuciones: DV_DISTRIBUCIONES }, ...DATAVIEW },
    } = tp.user.constantes();

    return {
        metadata: {
            [DATOS_ARCHIVO.etapa]: ETAPAS.sinEmpezar,
            [DATOS_ARCHIVO.dia]: tp.file.creation_date(FORMATO_DIA),
            [DATOS_ARCHIVO.tags]: [ 
                `${TAGS_COLECCION.self}/${TAGS_DISTRIBUCIONES.self}/${TAGS_DISTRIBUCIONES.relacion}`,
                `${TAGS_DISTRIBUCIONES.self}/${TAGS_DISTRIBUCIONES.relacion}`,
                `${TAGS_NOTAS.self}/${TAGS_NOTAS.coleccion}`,
            ]

        },
        carpeta: `${DIR_COLECCION.self}/${DIR_DISTRIBUCIONES.self}/${DIR_DISTRIBUCIONES.relaciones}`,
        titulo: "",
        texto: "",
    }
}

async function crear(tp) {
    const { 
        SIMBOLOS, DATOS: { 
            DISTRIBUCION: { tipo: TIPO_DISTRIBUCION }, RELACION_DISTRIBUCION: { tipo: TIPO_RELACION },
        } 
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

     
    const eleccion = await preguntar.suggester(
        tp, [ "Distribución discreta", "Distribución continua", "Distribución multivariada", "Relación entre distribuciones" ]
            .map(opcion => ` ${SIMBOLOS.elegir} ${opcion}`),
        [ TIPO_DISTRIBUCION.discreta, TIPO_DISTRIBUCION.continua, TIPO_DISTRIBUCION.multi, TIPO_RELACION.relacion ], 
        "Que distribucion o que relacion se quiere crear",
        error.Prompt("No se eligio que hacer con las distribuciones"),
    );

    return eleccion == TIPO_RELACION.relacion 
        ? await crearRelacion(tp) 
        : await crearDistribucion(tp, eleccion);
}

module.exports = () => ({
    crear: crear,
    claseDistribucion: (...argumentos) => new Distribucion(...argumentos),
    claseRelacion: (...argumentos) => new Relacion(...argumentos),
});