<%*
	let tipo_archivo = await tp.system.suggester([
		"Definición", "Artículo", "Ninguna",
	], [0, 1, 2 ]);	

	let template = undefined;
	if (tipo_archivo == 0) {
		template = await tp.file.find_tfile("Definición - Template");
	} else if (tipo_archivo == 1) {
		
	}

	if (template == undefined) return;
		
	let carpeta = await this.app.vault.getAbstractFileByPath(tp.file.folder());
	tp.file.create_new(template, "Untitle", true, carpeta);
_%>