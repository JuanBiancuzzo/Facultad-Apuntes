<%* 
	const tArchivo = tp.file.find_tfile(tp.file.path(true));	

	let tipoCita = "Libro";
	let numReferencia = tp.user.generarNumReferencia();
	
	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += `dia: ${dia}\n`;
	tR += `tipoCita: ${tipoCita}\n`;
	tR += `numReferencia: ${parseInt(numReferencia, 10)}\n`;

	try {
        let infoLibro = await tp.user.cita().citar(tp, tipoCita, numReferencia + 1);

		let titulo = infoLibro["tituloObra"];
		let autores = [];
		for (let autore of infoLibro["nombreAutores"]) {
			autores.push(`${autore.nombre} ${autore.apellido}`);
		}
		
        await tp.file.rename(`${titulo} de ${autores.join(", ")}`);

		tR += tp.obsidian.stringifyYaml(infoLibro);
	} catch ({ name: nombre, message: mensaje }) {
		const eliminar = tp.user.eliminar();
		const errorNombre = tp.user.error().nombre;

		console.log(nombre);
		console.log(mensaje);

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
### Resumen
---
<% tp.file.cursor() %>