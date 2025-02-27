<%*
    const error = tp.user.error();
    const proyecto = tp.user.proyecto(tp);
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    try {
        let { metadata, carpeta, titulo, texto } = proyecto.seccion();

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