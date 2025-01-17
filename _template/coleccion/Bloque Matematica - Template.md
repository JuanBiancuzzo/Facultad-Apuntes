<%*
    const bloqueMatematica = tp.user.bloqueMatematica();

    try {
        let datosPrevios = { path: `${tp.file.folder(true)}/${tp.file.title}` };
        let resultado = await tp.user.crearPreguntas(
            tp, bloqueMatematica.obtenerDefault, bloqueMatematica.actualizarDatos, 
            bloqueMatematica.generarPreguntas, "Generar bloque", 
            datosPrevios
        );

        await bloqueMatematica.agregarDatos(tp, resultado);
        tR += bloqueMatematica.representacion(tp, resultado);

    } catch ({ name:_, message: mensaje }) {
        console.log(mensaje);
        new Notice(mensaje);
    }
_%>