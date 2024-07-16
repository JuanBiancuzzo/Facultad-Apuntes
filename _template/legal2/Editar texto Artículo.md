<%*
    const mostrarTexto = tp.user.mostrarTexto();

    let texto = tp.frontmatter["articulo"];
    

    console.log(texto);
    if (!texto) {
        const mensaje = "No es un artículo el que se quiere editar";
        console.log(mensaje);
        new Notice(mensaje);
    }
    let nuevoTexto = await mostrarTexto.preguntar(tp, texto);
    console.log(nuevoTexto);

_%>