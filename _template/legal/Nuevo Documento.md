<%*
	let nombre_archivo = await tp.system.prompt("Cual es el nombre de este documento");
	if (!nombre_archivo) {
		new Notice("No escribió nada, no se generará ningún documento");
		return;
	}

	let carpeta = "legal/Articulos";
	let paginas = this.app.vault.getMarkdownFiles().filter(archivo => {
		return !archivo.path.startsWith(carpeta);
	});

	if (paginas.some(pagina => pagina.basename === nombre_archivo)) {
		new Notice("Ya existe un documento con ese nombre");
		return;
	}
		
	carpeta += `/${nombre_archivo}`;
	await this.app.vault.createFolder(carpeta);
	carpeta = await this.app.vault.getAbstractFileByPath(carpeta);

	let template = await tp.file.find_tfile("legal/Documento - Template");
	await tp.file.create_new(template, nombre_archivo, true, carpeta);
%>