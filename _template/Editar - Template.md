<%*
    const { 
        DIRECTORIOS, REFERENCIAS, TAGS: { facultad: TAGS_FACULTAD },
        DATOS: { ARCHIVO: DATOS_ARCHIVO, REFERENCIAS: DATOS_REFERENCIAS },
    } = tp.user.constantes();
    const dv = app.plugins.plugins.dataview.api;
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();

    let seguidorRef = tp.user.seguidorReferencias(tp).new(dv);
    const EDITOR = {
        coleccion: {
            libro: tp.user.libro(tp).editar.bind(null, seguidorRef),
        },
        seccion: {
            resumenMateria: tp.user.seccionResumenMateria(tp).editar,
        },
    };

    const tArchivo = tp.file.find_tfile(tp.file.path(true));
    const dvArchivo = dv.page(tp.file.path(true));

    let carpeta = tArchivo.parent.path.split("/");
    if (carpeta.last().trim() == DIRECTORIOS.imagenes) carpeta.pop();
    carpeta = carpeta.join("/");
    if (carpeta == "") carpeta = "/";

    let opciones = [], valores = [];
    let ingresarOpcion = (opcion, valor) => {
        if (!valores.includes(valor)) {
            opciones.push(opcion);
            valores.push(valor);
        }
    };

    switch (true) {
        case dvArchivo[DATOS_ARCHIVO.tags].includes(`${TAGS_FACULTAD.self}/${TAGS_FACULTAD.resumen}`):
            ingresarOpcion("Editar resumen de la materia", EDITOR.seccion.resumenMateria);
            break;
    }

    switch (dvArchivo[DATOS_REFERENCIAS.tipoCita]) {
        case REFERENCIAS.libro: ingresarOpcion("Editar un libro", EDITOR.coleccion.libro); break;
    }

    try {
        let editor;
        switch (opciones.length) {
            case 0:
                throw Error("No había opciones para elegir");
            
            case 1:
                editor = valores.first();
                await editor({ tArchivo, dvArchivo });
                break;

            default:
                editor = await preguntar.suggester(
                    tp, opciones, valores, "Elegir que tipo de edición que se va a hacer",
                    error.Prompt("No se elgió un tipo de edición")
                );
                await editor({ tArchivo, dvArchivo });
                break;
        }

    } catch ({ name: nombre, message: mensaje }) {

        switch (nombre) {
            case error.nombre.quit:
            case error.nombre.prompt:
                console.log(mensaje);
                new Notice(mensaje);
                break;

            default:
                let errorNuevo = new Error(mensaje);
                errorNuevo.name = nombre;
                throw errorNuevo;
        }
    }
_%>