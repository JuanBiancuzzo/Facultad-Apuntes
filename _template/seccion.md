<%*
    const error = tp.user.error();
    const seccion = tp.user.seccion(tp);
    const { CREAR } = tp.user.constantes();
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    try {
        let seccionCrear;
        switch (tp.file.title) {
            case CREAR.carrera: seccionCrear = seccion.carrera; break;
            case CREAR.curso: seccionCrear = seccion.curso; break;
            case CREAR.investigacion: seccionCrear = seccion.investigacion; break;
            case CREAR.proyecto: seccionCrear = seccion.proyecto; break;

            default:
                throw error.Quit(`Se intentó crear una seccion con el nombre: ${tp.file.title}`);
        }

        let { metadata, carpeta, titulo, texto } = await seccionCrear();

        await tp.file.move(`${carpeta}/${titulo}`, tArchivo);
        tR += tp.user.archivo().texto(tp, metadata, texto);

    } catch ({ name: nombre, message: mensaje }) {
        const eliminar = tp.user.eliminar();

        switch (nombre) {
            case error.nombre.quit:
                return await eliminar.directo(tArchivo, mensaje);

            case error.nombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);

            default:
                let nuevoError = new Error(mensaje);
                nuevoError.name = nombre;
                throw nuevoError;
        }
    }
_%>