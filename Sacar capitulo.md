<%*
	const dv = app.plugins.plugins.dataview.api;

	let notas = dv.pages("#nota")
		.filter(nota => nota.capitulo);
	console.log(notas.length)

	let tareas = notas.map(nota => {
		let tNota = tp.file.find_tfile(nota.file.path);
		return app.fileManager.processFrontMatter(tNota, (frontmatter) => {
			frontmatter["capitulo"] = undefined;
		});
	});

	await Promise.all(tareas).then((_) => console.log("Terminado"));

	return;
%>