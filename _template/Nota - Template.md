<%*
    const DIRECTORIOS = tp.user.constantes().DIRECTORIOS;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    const dv = app.plugins.plugins.dataview.api;
    
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let tPadre = tArchivo.parent;

	if (!tPadre || tPadre.isRoot()) {
		return;
	}

    let path = `${tPadre.path}/${tArchivo.basename}`.split("/");
    let directorioBase = path.at(0);

    let opciones = [], valores = [];

    switch (directorioBase) {
        case DIRECTORIOS.referencias: 
            opciones.push("Ingresar referencia");
            valores.push("Referencia simple - Template");
            break;

        case DIRECTORIOS.investigacion: 
            opciones.push("Ingresar nota de investigación");
            valores.push("Nota investigacion - Template");
            break;
        
        case DIRECTORIOS.curso: 
            opciones.push("Ingresar nota de curso");
            valores.push("Nota curso - Template");
            break;

        case DIRECTORIOS.proyectoPractico: 
            opciones.push("Ingresar nota de proyecto");
            valores.push("Nota proyecto - Template");
            break;

        case DIRECTORIOS.proyectoInvestigacion: 
            opciones.push("Ingresar nota de investigación en el proyecto");
            valores.push("Nota investigacion - Template");
            break;

        case DIRECTORIOS.GDD: 
            opciones.push("Ingresar un GDD");
            valores.push("Nota proyecto - Template");
            break;

        case DIRECTORIOS.carrera.informatica: 
        case DIRECTORIOS.carrera.electronica: 
        case DIRECTORIOS.carrera.datos: 
        case DIRECTORIOS.carrera.fisica: 
        case DIRECTORIOS.carrera.matematica: 
            opciones.push("Ingresar nota de materia");
            valores.push("Definicion - Template");
            break;

        case DIRECTORIOS.coleccion.self: 
            const DIRECT_COLECCION = DIRECTORIOS.coleccion;
            let segundoDirectorio = path.at(1);

            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.componentes) {
                opciones.push("Ingresar un componente");
                valores.push("Componente - Template");

            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.dataStructures) {
                opciones.push("Ingresar una estructura de datos");
                valores.push("Estructura de datos - Template");

            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.distribuciones) {
                opciones.push("Ingresar una función de distribución");
                valores.push("Distribucion - Template");

            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.documentos) {
                opciones.push("Ingresar un documento legal");
                valores.push("Documento legal - Template");

            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.funciones) {
                opciones.push("Ingresar una función de programación");
                valores.push("Funcion - Template");

            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.libros) {
                opciones.push("Ingresar un libro");
                valores.push("Libro - Template");

            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.papers) {
                opciones.push("Ingresar un paper o RFC");
                valores.push("Paper - Template");

            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.programas) {
                opciones.push("Ingresar programa");
                valores.push("Programa - Template");

            }
            if (segundoDirectorio == undefined || segundoDirectorio == DIRECT_COLECCION.recetas) {
                opciones.push("Ingresar receta");
                valores.push("Receta - Template");

            }
            break;
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
                let error = new Error(mensaje);
                error.name = nombre;
                throw error;
        }
    }
_%>