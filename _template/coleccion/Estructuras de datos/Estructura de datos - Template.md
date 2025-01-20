<%*
    const error = tp.user.error();
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let { metadata, carpeta, titulo, texto } = await tp.user.estructuraDeDatos().crear.estructura(tp);

    await tp.file.move(`${carpeta}/${titulo}`, tArchivo);
    tR += tp.user.archivo().texto(tp, metadata, texto);
_%>