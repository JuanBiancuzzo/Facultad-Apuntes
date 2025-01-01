<%*
    const { DIRECTORIOS, NOMBRE_SECCIONES } = tp.user.constantes();
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();
    let tArchivo = tp.file.find_tfile(tp.file.path(true));
    let path = tArchivo.path;

    try {
        switch (tp.file.title) {
            case NOMBRE_SECCIONES.facultad:
                let carreras = [
                    [DIRECTORIOS.carrera.informatica, "Ingeniería en Informática"],
                    [DIRECTORIOS.carrera.electronica, "Ingeniería Electrónica"],
                    [DIRECTORIOS.carrera.datos, "Licenciatura en Ciencias de Datos"],
                    [DIRECTORIOS.carrera.fisica, "Licenciatura de Ciencias Físicas"],
                    [DIRECTORIOS.carrera.matematica, "Licenciatura de Ciencias Matemáticas"],
                ];
                if (!carreras.some(([carrera, _]) => path.startsWith(carrera))) {
                    path = await preguntar.suggester(
                        tp, carreras.map(([_, texto]) => texto), carreras.map(([dir, _]) => dir),
                        "Elegir en que carrera se va a agregar una materia",
                        error.Prompt("No se elgió una carrera en la cual crear una materia"),
                    );
                }
                break;

            case NOMBRE_SECCIONES.curso:
                if (!path.startsWith(DIRECTORIOS.curso)) {
                    path = DIRECTORIOS.curso;
                }
                break;

            case NOMBRE_SECCIONES.investigacion:
                if (!path.startsWith(DIRECTORIOS.investigacion)) {
                    path = DIRECTORIOS.investigacion;
                }
                break;

            case NOMBRE_SECCIONES.proyectoPractico:
                if (!path.startsWith(DIRECTORIOS.proyectoPractico)) {
                    path = DIRECTORIOS.proyectoPractico;
                }
                break;

            case NOMBRE_SECCIONES.proyectoInvestigacion:
                if (!path.startsWith(DIRECTORIOS.proyectoInvestigacion)) {
                    path = DIRECTORIOS.proyectoInvestigacion;
                }
                break;

            case NOMBRE_SECCIONES.GDD:
                if (!path.startsWith(DIRECTORIOS.GDD)) {
                    path = DIRECTORIOS.GDD;
                }
                break;
        }

        path = path.split("/");
        let directorioBase = path.at(0);
        let segundoDirectorio = path.at(1);
        let opciones = [], valores = [];

        switch (directorioBase) {
            case DIRECTORIOS.investigacion:
                opciones.push("Ingresar tema de investigación");
                valores.push("Tema Investigacion - Template");
                break;

            case DIRECTORIOS.curso:
                opciones.push("Ingresar un nuevo Curso");
                valores.push("Curso - Template");

                if (segundoDirectorio != undefined) {
                    // Esta en un curso en particular 
                    opciones.push("Ingresar un tema Curso");
                    valores.push("Tema Curso - Template");
                }
                break;

            case DIRECTORIOS.proyectoPractico:
                opciones.push("Ingresar proyecto práctico");
                valores.push("Proyecto practico - Template");
                break;

            case DIRECTORIOS.proyectoInvestigacion:
                opciones.push("Ingresar proyecto de investigación");
                valores.push("Proyecto investigacion - Template");
                break;

            case DIRECTORIOS.GDD:
                opciones.push("Ingresar un GDD");
                valores.push("GDD - Template");
                break;

            case DIRECTORIOS.carrera.informatica:
            case DIRECTORIOS.carrera.electronica:
            case DIRECTORIOS.carrera.datos:
            case DIRECTORIOS.carrera.fisica:
            case DIRECTORIOS.carrera.matematica:
                opciones.push("Ingresar Materia");
                valores.push("Materia - Template");

                let segundoDirectorio = path.at(1);
                if (segundoDirectorio != undefined) {
                    // Esta en una materia en particular 
                    opciones.push("Ingresar un tema de materia");
                    valores.push("Tema materia - Template");
                }
                break;
        }

        if (opciones.length > 0) {
            let template = valores.first();
            if (opciones.length > 1) {
                template = await preguntar.suggester(
                    tp, opciones, valores, "Elegir que tipo de sección se va a crear",
                    error.Prompt("No se elgió un tipo de sección")
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