const MODIFICAR_PLAN = "modificar plan";
const ELIMINAR_PLAN = "eliminar plan";

const DEFAULT_ESTADO = "Carrera sin empezar";

const CANTIDAD_MINIMA_PLANES = 1;

const SALIR = "salir";

class Carrera {
    constructor(tp, representacionPrevia = {}) {
        const { SIMBOLOS, DATOS: { CARRERA: DATOS_CARRERA }  } = tp.user.constantes();

        this.simbolos = SIMBOLOS;
        this.config = DATOS_CARRERA;

        this.nombre = representacionPrevia[this.config.nombre];
        this.estado = representacionPrevia[this.config.estado]
            ? representacionPrevia[this.config.estado] : DEFAULT_ESTADO;
        this.planes = representacionPrevia[this.config.planesDeEstudio]
            ? representacionPrevia[this.config.planesDeEstudio] : [];
        this.codigo = representacionPrevia[this.config.tieneCodigoLaMateria]
            ? representacionPrevia[this.config.tieneCodigoLaMateria] : false;
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        if (respuestaDada == SALIR)
            return true;

        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                this.nombre = await generarPreguntas.prompt(
                    "Nuevo nombre para la carrera", 
                    generarError.Quit("No se ingresó el nombre")
                );
                break;

            case this.config.estado:
                this.estado = await generarPreguntas.prompt(
                    "Nuevo estado de la carrera", 
                    generarError.Quit("No se ingresó el estado")
                );
                break;

            case MODIFICAR_PLAN:
                this.planes[indice] = await generarPreguntas.prompt(
                    "Modificar el plan de estudio",
                    generarError.Quit("No se ingresó el plan de estudio")
                );

                break;
            
            case this.config.planesDeEstudio:
                this.planes.push(await generarPreguntas.prompt(
                    "Ingresar nuevo plan de estudio",
                    generarError.Quit("No se ingresó el plan de estudio")
                ));
                break;

            case ELIMINAR_PLAN:
                this.planes.pop();
                break;

            case this.config.tieneCodigoLaMateria:
                this.codigo = !this.codigo;
                break;
        }

        return false;
    }

    generarPreguntas() {
        let opciones = [];
        let valores = [];

        opciones.push(this.config.nombre);
        valores.push(this.nombre
            ? ` ${this.simbolos.modificar} Modificar el nombre de la carrera, donde era ${this.nombre}`
            : ` ${this.simbolos.agregar} Nombre de la carrera`
        );

        opciones.push(this.config.estado);
        valores.push(this.estado
            ? ` ${this.simbolos.modificar} Modificar el estado, donde era ${this.estado}`
            : ` ${this.simbolos.agregar} Estado de la carrera`
        );

        for (let [indice, plan] of this.planes.entries()) {
            opciones.push(`${MODIFICAR_PLAN}-${indice}`);
            valores.push(` ${this.simbolos.modificar} Modificar el plan, donde era ${plan}`);
        }

        let cantidadPlanes = this.planes.length;
        if (cantidadPlanes > 0) {
            opciones.push(ELIMINAR_PLAN);
            valores.push(` ${this.simbolos.sacar} Eliminar el plan: ${this.planes[cantidadPlanes - 1]}`);
        }

        opciones.push(this.config.planesDeEstudio);
        valores.push(this.planes < CANTIDAD_MINIMA_PLANES
            ? ` ${this.simbolos.agregar} Agregar plan de estudios`
            : ` ${this.simbolos.agregar} ${this.simbolos.opcional} Agregar plan de estudios`
        );

        opciones.push(this.config.tieneCodigoLaMateria);
        valores.push(this.codigo
            ? ` ${this.simbolos.sacar} Las materias tienen código`
            : ` ${this.simbolos.agregar} Las materias no tienen código`
        )

        if (this.esValido()) {
            opciones.push(SALIR);
            valores.push(` ${this.simbolos.volver} Confirmar datos`);
        }

        return { opciones: opciones, valores: valores };
    }

    esValido() {
        return this.planes.length >= CANTIDAD_MINIMA_PLANES && this.estado && this.nombre;
    }

    generarRepresentacion() {
        return {
            [this.config.nombre]: this.nombre,
            [this.config.estado]: this.estado,
            [this.config.planesDeEstudio]: this.planes,
            [this.config.tieneCodigoLaMateria]: this.codigo,
        }
    }

    descripcion() {
        return this.nombre;
    }
}

async function crearCarrera(tp) {
    const { 
        SECCIONES, DATAVIEW: { carrera: DV_CARRERA, ...DATAVIEW },
        TAGS: { facultad: TAGS_FACULTAD }, DATOS: { CARRERA: DATOS_CARRERA } 
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const tagPorNombre = tp.user.tagPorNombre;

    let carrera = new Carrera(tp);
    await preguntar.formulario(tp, carrera, "Ingresar la información de la carrera");

    let texto = `${"#".repeat(SECCIONES.mapa.nivel)} ${SECCIONES.mapa.texto}\n---\n`;
    texto += `\`\`\`dataviewjs\n\tawait dv.view("${DATAVIEW.self}/${DV_CARRERA.mapa}", { carrera: dv.current() });\n\`\`\`\n\n`;
    texto += `${"#".repeat(SECCIONES.materias.nivel)} ${SECCIONES.materias.texto}\n---\n`;
    texto += `\`\`\`dataviewjs\n\tawait dv.view("${DATAVIEW.self}/${DV_CARRERA.materias}", { carrera: dv.current() });\n\`\`\`\n`;

    return {
        metadata: {
            [DATOS_CARRERA.tags]: [
                `${TAGS_FACULTAD.self}/${TAGS_FACULTAD.carrera}`,
                `${TAGS_FACULTAD.carrera}/${tagPorNombre(carrera.nombre.toLowerCase())}`,
            ],
            ...carrera.generarRepresentacion(),
        },
        carpeta: carrera.nombre.toLowerCase(),
        titulo: carrera.nombre,
        texto: texto,
    };
}

module.exports = (tp) => ({
    clase: (representacionPrevia = {}) => new Carrera(tp, representacionPrevia),
    crear: crearCarrera.bind(null, tp),
});