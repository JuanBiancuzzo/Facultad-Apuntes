<%*
    const preguntar = tp.user.preguntar();
    const error = tp.user.error();    

    const LIBRO = "Libro";
    const PAPER = "Paper";

    let citar = await preguntar.suggester(tp, [ "Citar un libro", "Citar un paper" ], [LIBRO, PAPER],
		"Qué se va a citar?", error.Prompt("No se eligió que se va a citar")
	);
    
    let carpeta = undefined;
    let template = undefined;
    if (citar == LIBRO) {
        carpeta = "libros";
        template = "Libro - Template"; 
    } else if (citar == PAPER) {
        carpeta = "papers";
        template = "Paper - Template";
    }

    if (carpeta && template) {
        let titulo = tp.file.title;
        await tp.file.move(`biblioteca/${carpeta}/${titulo}`);
        tR += await tp.file.include(`[[${template}]]`);
    }
_%>