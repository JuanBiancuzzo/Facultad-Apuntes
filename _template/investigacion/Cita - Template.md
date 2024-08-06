<%* 
	const tArchivo = tp.file.find_tfile(tp.file.path(true));	

	let titulo = tp.file.title;
	let [numReferencia, tipoCita] = titulo.split("-")
		.map(texto => texto.trim());
	
	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += `dia: ${dia}\n`;
	tR += `tipoCita: ${tipoCita}\n`;
	tR += `numReferencia: ${parseInt(numReferencia, 10)}\n`;

	try {
		tR += await tp.user.cita().citar(tp, tipoCita);
	} catch ({ name: nombre, message: mensaje }) {
		const eliminar = tp.user.eliminar();
        switch (nombre) {
            case errorNombre.quit:
                return await eliminar.directo(tArchivo, mensaje);
                
            case errorNombre.prompt:
                return await eliminar.preguntar(tp, tArchivo, mensaje);
        }
	}
	tR += `tags: \n - referencia/${tipoCita.toLowerCase()}\n`;
	tR += "---";
%>