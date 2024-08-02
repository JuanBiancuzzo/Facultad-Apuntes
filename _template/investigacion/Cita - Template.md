<%* 
	const tArchivo = tp.file.find_tfile(tp.file.path(true));

	const dia = tp.file.creation_date("YYYY-MM-DD");
	tR += `dia: ${dia}\n`;
	

	let titulo = tp.file.title;
	let [numReferencia, tipoCita] = titulo.split("-")
		.map(texto => texto.trim());
	
	tR += "---\n"; 
	tR += `tipoCita: ${tipoCita}\n`;
	tR += `numReferencia: ${parseInt(numReferencia, 10)}\n`;
	tR += "---";

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
%>