<%* 
	const tArchivo = tp.file.find_tfile(tp.file.path(true));	
	const describir = tp.user.describir();
	const mantenerOrden = tp.user.mantenerOrden();
	const CARACTERES_INVALIDOS = tp.user.constantes().caracteresInvalidos;
	const AGREGADO = " y otros";
	const MAX_NOMBRE = 252;

	const tipoCita = "Paper";
	let numReferencia = tp.user.generarNumReferencia();
	
	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += `dia: ${dia}\n`;
	tR += "etapa: sin-empezar\n";
	tR += `tipoCita: ${tipoCita}\n`;
	tR += `numReferencia: ${parseInt(numReferencia, 10)}\n`;

	let infoPaper = {};
	try {
        infoPaper = await tp.user.cita().citar(tp, tipoCita, numReferencia + 1);

		let autores = [];
		let exceso = false;
		for (let autore of infoPaper.autores.slice(0, -1)) {
			let nuevoAutore = `${infoPaper.tituloInforme} de ${autore.nombre} ${autore.apellido}`;
			if (`${infoPaper.tituloInforme} de ${[...autores, nuevoAutore].join(", ")}`.length + AGREGADO.length <= MAX_NOMBRE)
				autores.push(`${autore.nombre} ${autore.apellido}`);
			else 
				exceso = true;

		}
		let autore = infoPaper.autores[infoPaper.autores.length - 1];
		let nuevoAutore = `${autore.nombre} ${autore.apellido}`;
		if (`${infoPaper.tituloInforme} de ${[...autores, nuevoAutore].join(", ")}`.length <= MAX_NOMBRE)
			autores.push(nuevoAutore);
		else 
			exceso = true;
		
		let nombreArchivo = `${infoPaper.tituloInforme} de ${autores.join(", ")}${exceso ? AGREGADO : ""}`;

		nombreArchivo = nombreArchivo.replaceAll(":", ",");
		nombreArchivo = nombreArchivo.replaceAll('"', "'");
		CARACTERES_INVALIDOS.forEach(caracterInvalido => nombreArchivo = nombreArchivo.replaceAll(caracterInvalido, ""));

        await tp.file.move(`biblioteca/papers/${nombreArchivo}`);

		tR += tp.obsidian.stringifyYaml(infoPaper);

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

	tR += `orden: ${mantenerOrden.siguienteValorOrden()}\n`;
	tR += `tags: \n - referencia/${tipoCita.toLowerCase()}\n - biblioteca/paper\n - nota/investigacion\n`;
	tR += "---";

%>
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
<% tp.file.cursor() %>