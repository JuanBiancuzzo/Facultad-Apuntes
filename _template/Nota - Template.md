<%*
    const { DIRECTORIOS, TAGS, TEMPLATE } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;
    let seguidorRef = tp.user.seguidorReferencias(tp).new(dv);

    const GENERADOR = {
        nota: {
            facultad: tp.user.nota().notaFacultad.bind(null, tp),
            curso: tp.user.nota().notaCurso.bind(null, tp),
            investigacion: tp.user.nota().notaInvestigacion.bind(null, tp),
            proyecto: tp.user.nota().notaProyecto.bind(null, tp),
        },
        coleccion: {
            estructuraDatos: tp.user.estructuraDeDatos().crear.bind(null, tp),
            libreriaFunciones: tp.user.libreriaFunciones().crear.bind(null, tp),
            libro: tp.user.libro(tp).crear.bind(null, seguidorRef),
            paper: tp.user.paper(tp).crear.bind(null, seguidorRef),
            componente: tp.user.componente().crear.bind(null, tp),
            distribucion: tp.user.distribucion().crear.bind(null, tp),
            documentolegal: tp.user.documentolegal().crear.bind(null, tp),
            programa: tp.user.documentolegal().crear.bind(null, tp),
            receta: tp.user.receta().crear.bind(null, tp),
        },
    };
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let tPadre = tArchivo.parent;

	if (!tPadre || tPadre.isRoot()) {
		return;
	}

    let carpeta = tPadre.path;
    let directorio = carpeta.split("/");
    let directorioBase = directorio.at(0);

    let opciones = [], valores = [];
    let ingresarOpcion = (opcion, valor) => {
        if (!valores.includes(valor)) {
            opciones.push(opcion);
            valores.push(valor);
        }
    };

    // Agregar opciones por directorio
    switch (directorioBase) {
        case DIRECTORIOS.referencias: ingresarOpcion("Ingresar referencia", GENERADOR.referencia); break;
        case DIRECTORIOS.investigacion: ingresarOpcion("Ingresar nota de investigación", GENERADOR.nota.investigacion); break;
        case DIRECTORIOS.curso: ingresarOpcion("Ingresar nota de curso", GENERADOR.nota.curso); break;
        case DIRECTORIOS.proyectoPractico: ingresarOpcion("Ingresar nota de proyecto", GENERADOR.nota.proyecto); break;
        case DIRECTORIOS.proyectoInvestigacion: 
            ingresarOpcion("Ingresar nota de investigación en el proyecto", GENERADOR.nota.investigacion);
            ingresarOpcion("Ingresar nota de proyecto", GENERADOR.nota.proyecto);
            break;

        case DIRECTORIOS.GDD: ingresarOpcion("Ingresar un GDD", GENERADOR.nota.proyecto); break;

        case DIRECTORIOS.carrera.informatica: 
        case DIRECTORIOS.carrera.electronica: 
        case DIRECTORIOS.carrera.datos: 
        case DIRECTORIOS.carrera.fisica: 
        case DIRECTORIOS.carrera.matematica: 
            ingresarOpcion("Ingresar nota de materia", GENERADOR.nota.facultad);
            break;

        case DIRECTORIOS.coleccion.self: 
            const DIRECT_COLECCION = DIRECTORIOS.coleccion;
            let segundoDirectorio = directorio.at(1);

            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.componentes) {
                ingresarOpcion("Ingresar un componente", GENERADOR.coleccion.componente);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.dataStructures) {
                ingresarOpcion("Ingresar una estructura de datos", GENERADOR.coleccion.estructuraDatos);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.distribuciones.self) {
                ingresarOpcion("Ingresar una función de distribución", GENERADOR.coleccion.distribucion);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.documentos) {
                ingresarOpcion("Ingresar un documento legal", GENERADOR.coleccion.documentoLegal);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.funciones) {
                ingresarOpcion("Ingresar una función de programación", GENERADOR.coleccion.libreriaFunciones);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.libros) {
                ingresarOpcion("Ingresar un libro", GENERADOR.coleccion.libro);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.papers) {
                ingresarOpcion("Ingresar un paper o RFC", GENERADOR.coleccion.paper);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.programas) {
                ingresarOpcion("Ingresar programa", GENERADOR.coleccion.programa);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.recetas) {
                ingresarOpcion("Ingresar receta", GENERADOR.coleccion.receta);
            }
            break;
    }

    if (dv.pages(`"${carpeta}" and #${TAGS.investigacion.self}/${TAGS.investigacion.indice}`).length > 0)  {
        ingresarOpcion("Ingresar nota de investigación", GENERADOR.nota.investigacion);
    }
    if (dv.pages(`"${carpeta}" and (#${TAGS.materia} or #${TAGS.resumenMateria})`).length > 0)  {
        ingresarOpcion("Ingresar nota de materia", GENERADOR.nota.facultad);
    }
    if (dv.pages(`"${carpeta}" and #${TAGS.curso.self}`).length > 0)  {
        ingresarOpcion("Ingresar nota de curso", GENERADOR.nota.curso)
    }
    if (dv.pages(`"${carpeta}" and #${TAGS.proyecto.self}/${TAGS.proyecto.practico.self}`).length > 0)  {
        ingresarOpcion("Ingresar nota de proyecto", GENERADOR.nota.proyecto)
    }
    if (dv.pages(`"${carpeta}" and #${TAGS.proyecto.self}/${TAGS.proyecto.investigacion.self}`).length > 0)  {
        ingresarOpcion("Ingresar nota de investigación en el proyecto", GENERADOR.nota.investigacion);
        ingresarOpcion("Ingresar nota de proyecto", GENERADOR.nota.proyecto);
    }
    if (dv.pages(`"${carpeta}" and #${TAGS.proyecto.self}/${TAGS.proyecto.juego.self}`).length > 0)  {
        ingresarOpcion("Ingresar un GDD", GENERADOR.nota.proyecto)
    }

    try {
        switch (opciones.length) {
            case 0:
                const mensaje = "No había opciones para elegir";
                console.log(mensaje);
                new Notice(mensaje);
                break;
            
            case 1:
                tR += await crearArchivo(valores.first());
                break;

            default:
                let generador = await preguntar.suggester(
                    tp, opciones, valores, "Elegir que tipo de nota se va a usar",
                    error.Prompt("No se elgió un tipo de nota")
                );
                tR += await crearArchivo(generador);
                break;
        }

    } catch ({ name: nombre, message: mensaje }) {
        const eliminar = tp.user.eliminar();

        switch (nombre) {
            case error.nombre.quit:
                return await eliminar.directo(tArchivo, mensaje);

            case error.nombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);

            default:
                let errorNuevo = new Error(mensaje);
                errorNuevo.name = nombre;
                throw errorNuevo;
        }
    }

    async function crearArchivo(generador) {
        let { metadata, carpeta, titulo, texto } = await generador();

        await tp.file.move(`${carpeta}/${titulo}`, tArchivo);
        return tp.user.archivo().texto(tp, metadata, texto);
    }
_%>