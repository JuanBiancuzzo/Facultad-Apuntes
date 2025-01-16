<%*
    const seccion = tp.user.seccion();
    const error = tp.user.error();
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    try {
        let [ tipo, ...argumentos ] = tp.file.title.split("-").map(t => t.trim());
        let obtenerInformacion = seccion.obtenerCreacion(tp, tipo);
        let { metadata, carpeta, titulo, texto } = obtenerInformacion(tp, argumentos);

        await tp.file.move(`${carpeta}/${titulo}`, tArchivo);
        tR += seccion.textoDeArchivos(tp, metadata, texto);

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