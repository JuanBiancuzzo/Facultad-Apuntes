<%*
    const mostrarTexto = tp.user.mostrarTexto();
    const tArchivo = tp.file.find_tfile(tp.file.path(true));

    let texto = tp.frontmatter["articulo"];
    
    if (!texto) {
        const mensaje = "No es un artículo el que se quiere editar";
        console.log(mensaje);
        new Notice(mensaje);
    }
    
    let nuevoTexto = await mostrarTexto.preguntar(tp, texto);
    let modificacion = await app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
        frontmatter["articulo"] = nuevoTexto;
    });

_%>