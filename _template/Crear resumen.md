<%*
	let template = await tp.file.find_tfile("Resumen - Template");
	let titulo = await tp.system.prompt("Nombre del capitulo:");
	let carpeta = await this.app.vault.getAbstractFileByPath("referencias");

	tp.file.create_new(template, titulo, true, carpeta);
_%>