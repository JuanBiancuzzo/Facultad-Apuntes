<%*
	let num_ley = await tp.system.prompt("N° de la ley:");
	if (num_ley == "" || num_ley == undefined)
		return;

	let ley = await tp.system.prompt(`Ley N° ${num_ley} tiene de nombre:`);
	if (ley == "" || ley == undefined)
		return;

	let nombre_archivo = `${ley}, Ley ${num_ley}`;

	let carpeta = "legal/Articulos";
	let paginas = this.app.vault.getMarkdownFiles().filter(archivo => {
		return !archivo.path.startsWith(carpeta);
	});

	if (paginas.some(pagina => pagina.basename === nombre_archivo))
		return;

	carpeta = `legal/Articulos/${ley}`;
	await this.app.vault.createFolder(carpeta);
	carpeta = await this.app.vault.getAbstractFileByPath(carpeta);

	let template = await tp.file.find_tfile("legal/Ley - Template");
	await tp.file.create_new(template, nombre_archivo, true, carpeta);
%>