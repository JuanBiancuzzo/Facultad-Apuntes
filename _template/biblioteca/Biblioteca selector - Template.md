<%*
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();    

    const LIBRO = "Libro";

    let citar = await preguntar.suggester(tp, ["Citar un libro"], [LIBRO],
		"Qué se va a citar?", error.Prompt("No se eligió que se va a citar")
	);
    
    let titulo = tp.file.title;
    if (citar == LIBRO) {
        await tp.file.move(`biblioteca/libros/${titulo}`);
        tR += await tp.file.include("[[Libro - Template]]");
    }
_%>