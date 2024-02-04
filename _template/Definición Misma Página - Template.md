<%*
	const activeFile = app.workspace.getActiveFile();
	const carpetaActual = activeFile.path.split("/").slice(0, -1).join("/");
	
	let template = await tp.file.find_tfile("Definición - Template");
	let carpeta = this.app.vault.getAbstractFileByPath(carpetaActual);
	await tp.file.create_new(template, "Untitle", true, carpeta);
%>