const MODIFICAR_PLAN = "modificar plan";
const ELIMINAR_PLAN = "eliminar plan";

const DEFAULT_ESTADO = "Carrera sin empezar";

const CANTIDAD_MINIMA_PLANES = 1;

class Carrera {
    constructor(tp, representacionPrevia = {}) {
        const { 
            SIMBOLOS, DATOS: { CARRERA: DATOS_CARRERA }, TAGS: { facultad: TAGS_FACULTAD } 
        } = tp.user.constantes();
        const seccionMateria = tp.user.seccionMateria(tp);

        this.simbolos = SIMBOLOS;
        this.config = DATOS_CARRERA;
        this.tagPorNombre = tp.user.tagPorNombre;
        this.tags = TAGS_FACULTAD;
        this.materias = [];

        this.nombre = representacionPrevia[this.config.nombre];
        this.estado = representacionPrevia[this.config.estado]
            ? representacionPrevia[this.config.estado] : DEFAULT_ESTADO;
        this.planes = representacionPrevia[this.config.planesDeEstudio]
            ? representacionPrevia[this.config.planesDeEstudio] : [];
        this.codigo = representacionPrevia[this.config.tieneCodigoLaMateria]
            ? representacionPrevia[this.config.tieneCodigoLaMateria] : false;

        let padre = this;
        this.informacion = {
            materiaNueva(representacion) { return seccionMateria.clase(padre, representacion); },
        };

        this.recalcularMaterias();
    }

    recalcularMaterias() {
        const dv = app.plugins.plugins.dataview.api;
        this.materias = [];

        if (!this.nombre) {
            return;
        }

        dv.pages(`#${this.tags.self}/${this.tags.materia} and #${this.tags.carrera}/${this.tagPorNombre(this.nombre.toLowerCase())}`)
            .forEach(materia => this.materias.push(this.informacion.materiaNueva(materia)));
    }

    async actualizarDatos(respuestaDada, generarPreguntas, generarError) {
        let [ respuesta, indice ] = respuestaDada.split("-");

        switch (respuesta) {
            case this.config.nombre:
                let nuevoNombre = await generarPreguntas.prompt(
                    "Nuevo nombre para la carrera", 
                    generarError.Quit("No se ingresó el nombre")
                );

                if (nuevoNombre != this.nombre) {
                    this.nombre = nuevoNombre;
                    this.recalcularMaterias();
                }
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

    obtenerDirectorio() {
        return this.nombre.toLowerCase();
    }

    obtenerTags() {
        return [
            `${this.tags.self}/${this.tags.carrera}`,
            `${this.tags.carrera}/${this.tagPorNombre(this.nombre.toLowerCase())}`,
        ];
    }

    obtenerPlanesDeEstudio() {
        return this.planes;
    }

    tieneCodigoParaMateria() {
        return this.codigo;
    }

    obtenerMaterias() {
        return this.materias;
    }

    eleccionMasPrecisa(path, datos) {
        let resultado = this.materias.flatMap(materia => materia.eleccionMasPrecisa(path, datos));

        if (resultado.length == 0 && path.includes(this.obtenerDirectorio()))
            resultado.push(this);

        datos.numero += 1;
        return resultado;
    }
}

async function editarCarrera(tp, archivo) {
    let { tArchivo: tCarrera, dvArchivo: carrera } = archivo;
}

async function crearCarrera(tp) {
    const { 
        SECCIONES, DATAVIEW: { carrera: DV_CARRERA, ...DATAVIEW }, DATOS: { CARRERA: DATOS_CARRERA }
    } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const dataview = tp.user.dataview();

    let carrera = new Carrera(tp);
    await preguntar.formulario(tp, carrera, "Ingresar la información de la carrera");

    let texto = `${"#".repeat(SECCIONES.mapa.nivel)} ${SECCIONES.mapa.texto}\n---\n`;
    texto += dataview.crearSeccion(`await dv.view("${DATAVIEW.self}/${DV_CARRERA.mapa}", { carrera: dv.current() });`);
    texto += `${"#".repeat(SECCIONES.materias.nivel)} ${SECCIONES.materias.texto}\n---\n`;
    texto += dataview.crearSeccion(`await dv.view("${DATAVIEW.self}/${DV_CARRERA.materias}", { carrera: dv.current() });`);

    return {
        metadata: {
            [DATOS_CARRERA.tags]: carrera.obtenerTags(),
            ...carrera.generarRepresentacion(),
        },
        carpeta: carrera.obtenerDirectorio(),
        titulo: carrera.nombre,
        texto: texto,
    };
}

module.exports = (tp) => ({
    clase: (representacionPrevia = {}) => new Carrera(tp, representacionPrevia),
    crear: crearCarrera.bind(null, tp),
    editar: editarCarrera.bind(null, tp),
});