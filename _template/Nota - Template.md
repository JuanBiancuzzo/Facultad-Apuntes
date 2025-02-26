<%*
    const { DIRECTORIOS, TAGS, TEMPLATE } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;
    let seguidorRef = tp.user.seguidorReferencias().new(dv);

    const GENERADOR = {
        nota: {
            facultad: tp.user.nota().notaFacultad,
            curso: tp.user.nota().notaCurso,
            investigacion: tp.user.nota().notaInvestigacion,
            proyecto: tp.user.nota().notaProyecto,
        },
        coleccion: {
            estructuraDatos: tp.user.estructuraDeDatos().crear,
            libreriaFunciones: tp.user.libreriaFunciones().crear,
            libro: tp.user.libro(tp).crear.bind(null, seguidorRef),
            paper: tp.user.paper(tp).crear.bind(null, seguidorRef),
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
                // ingresarOpcion("Ingresar un componente", TEMPLATE.coleccion.componente);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.dataStructures) {
                ingresarOpcion("Ingresar una estructura de datos", GENERADOR.coleccion.estructuraDatos);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.distribuciones) {
                // ingresarOpcion("Ingresar una función de distribución", TEMPLATE.coleccion.distribucion);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.documentos) {
                // ingresarOpcion("Ingresar un documento legal", TEMPLATE.coleccion.documentoLegal);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.funciones) {
                ingresarOpcion("Ingresar una función de programación", GENERADOR.coleccion.libreriaFunciones);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.libros) {
                ingresarOpcion("Ingresar un libro", GENERADOR.coleccion.libro);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.papers) {
                // ingresarOpcion("Ingresar un paper o RFC", TEMPLATE.coleccion.paper);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.programas) {
                // ingresarOpcion("Ingresar programa", TEMPLATE.coleccion.programa);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.recetas) {
                // ingresarOpcion("Ingresar receta", TEMPLATE.coleccion.receta);
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
        if (opciones.length > 0) {
            let generador = valores.first();
            if (opciones.length > 1) {
                generador = await preguntar.suggester(
                    tp, opciones, valores, "Elegir que tipo de nota se va a usar",
                    error.Prompt("No se elgió un tipo de nota")
                );
            }

            let { metadata, carpeta, titulo, texto } = await generador(tp);

            await tp.file.move(`${carpeta}/${titulo}`, tArchivo);
            tR += tp.user.archivo().texto(tp, metadata, texto);
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
_%>