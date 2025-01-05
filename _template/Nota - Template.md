<%*
    const { DIRECTORIOS, TAGS, TEMPLATE } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let tPadre = tArchivo.parent;

	if (!tPadre || tPadre.isRoot()) {
		return;
	}

    let carpeta = `${tPadre.path}/${tArchivo.basename}`;
    let directorio = carpeta.split("/")
    let directorioBase = directorio.at(0);

    let opciones = [], valores = [];
    let ingresarOpcion = (opcion, valor) => {
        if (!opciones.includes(opcion)) {
            opciones.push(opcion);
            valores.push(valor);
        }
    };

    // Agregar opciones por directorio
    switch (directorioBase) {
        case DIRECTORIOS.referencias: ingresarOpcion("Ingresar referencia", TEMPLATE.referencia.general); break;
        case DIRECTORIOS.investigacion: ingresarOpcion("Ingresar nota de investigación", TEMPLATE.nota.investigacion); break;
        case DIRECTORIOS.curso: ingresarOpcion("Ingresar nota de curso", TEMPLATE.nota.curso); break;
        case DIRECTORIOS.proyectoPractico: ingresarOpcion("Ingresar nota de proyecto", TEMPLATE.nota.proyecto); break;
        case DIRECTORIOS.proyectoInvestigacion: 
            ingresarOpcion("Ingresar nota de investigación en el proyecto", TEMPLATE.nota.investigacion);
            ingresarOpcion("Ingresar nota de proyecto", TEMPLATE.nota.proyecto);
            break;

        case DIRECTORIOS.GDD: ingresarOpcion("Ingresar un GDD", TEMPLATE.nota.proyecto); break;

        case DIRECTORIOS.carrera.informatica: 
        case DIRECTORIOS.carrera.electronica: 
        case DIRECTORIOS.carrera.datos: 
        case DIRECTORIOS.carrera.fisica: 
        case DIRECTORIOS.carrera.matematica: 
            ingresarOpcion("Ingresar nota de materia", TEMPLATE.nota.materia);
            break;

        case DIRECTORIOS.coleccion.self: 
            const DIRECT_COLECCION = DIRECTORIOS.coleccion;
            let segundoDirectorio = directorio.at(1);

            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.componentes) {
                ingresarOpcion("Ingresar un componente", TEMPLATE.coleccion.componente);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.dataStructures) {
                ingresarOpcion("Ingresar una estructura de datos", TEMPLATE.coleccion.estructuraDatos);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.distribuciones) {
                ingresarOpcion("Ingresar una función de distribución", TEMPLATE.coleccion.distribucion);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.documentos) {
                ingresarOpcion("Ingresar un documento legal", TEMPLATE.coleccion.documentoLegal);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.funciones) {
                ingresarOpcion("Ingresar una función de programación", TEMPLATE.coleccion.funcion);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.libros) {
                ingresarOpcion("Ingresar un libro", TEMPLATE.coleccion.libro);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.papers) {
                ingresarOpcion("Ingresar un paper o RFC", TEMPLATE.coleccion.paper);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.programas) {
                ingresarOpcion("Ingresar programa", TEMPLATE.coleccion.programa);
            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.recetas) {
                ingresarOpcion("Ingresar receta", TEMPLATE.coleccion.receta);
            }
            break;
    }

    const dv = app.plugins.plugins.dataview.api;
    if (dv.pages(`"${carpeta}" and #${TAGS.investigacion.self}`).length > 0)  {
        ingresarOpcion("Ingresar referencia", TEMPLATE.referencia.general);
    }
    if (dv.pages(`"${carpeta}" and #${TAGS.curso.self}`).length > 0)  {
        ingresarOpcion("Ingresar nota de curso", TEMPLATE.nota.curso)
    }
    if (dv.pages(`"${carpeta}" and #${TAGS.proyecto.self}/${TAGS.proyecto.practico.self}`).length > 0)  {
        ingresarOpcion("Ingresar nota de proyecto", TEMPLATE.nota.proyecto)
    }
    if (dv.pages(`"${carpeta}" and #${TAGS.proyecto.self}/${TAGS.proyecto.investigacion.self}`).length > 0)  {
        ingresarOpcion("Ingresar nota de investigación en el proyecto", TEMPLATE.nota.investigacion);
        ingresarOpcion("Ingresar nota de proyecto", TEMPLATE.nota.proyecto);
    }
    if (dv.pages(`"${carpeta}" and #${TAGS.proyecto.self}/${TAGS.proyecto.juego.self}`).length > 0)  {
        ingresarOpcion("Ingresar un GDD", TEMPLATE.nota.proyecto)
    }

    try {
        if (opciones.length > 0) {
            let template = valores.first();
            if (opciones.length > 1) {
                template = await preguntar.suggester(
                    tp, opciones, valores, "Elegir que tipo de nota se va a usar",
                    error.Prompt("No se elgió un tipo de nota")
                );
            }

            tR += await tp.file.include(`[[${template}]]`);
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