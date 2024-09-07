<%* 
	const tArchivo = tp.file.find_tfile(tp.file.path(true));	

	let tipoCita = "Libro";
	let numReferencia = tp.user.generarNumReferencia(dv);
	
	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += `dia: ${dia}\n`;
	tR += `tipoCita: ${tipoCita}\n`;
	tR += `numReferencia: ${parseInt(numReferencia, 10)}\n`;

	try {
        let infoLibro = await tp.user.cita().citar(tp, tipoCita);

		let titulo = infoLibro["tituloObra"];
		let autores = [];
		for (let {autore: autore} of infoLibro["nombreAutores"]) {
			let [{nombre: nombre}, {apellido: apellido}] = autore;
			autores.push(`${nombre} ${apellido}`);
		}
		
        await tp.file.rename(`${titulo} de ${autores.join(", ")}`);
		
		tR += tp.user.cita().mostrar(infoLibro);
	} catch ({ name: nombre, message: mensaje }) {
		const eliminar = tp.user.eliminar();
		const errorNombre = tp.user.error().nombre;

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