<%* 
	const preguntar = tp.user.preguntar();
	const error = tp.user.error();
	const mantenerOrden = tp.user.mantenerOrden();
	const tArchivo = tp.file.find_tfile(tp.file.path(true));

	const DEJAR_CITAR = "cita rapida";
	const NUEVA_CITA = "nueva cita";
	const SALIR = "salir";
	const dv = app.plugins.plugins.dataview.api;

	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await preguntar.prompt(tp, "Nombre:", error.Prompt("No se ingresó un nombre para la nota"));
	}
	
	let carpeta = tp.file.folder(true);
	let posiblesCursos = dv.pages(`"${carpeta}" and #proyecto/curso`)
		.filter(pagina => pagina.file.folder == carpeta);

	if (posiblesCursos.length == 0) {
		new Notice("No hay cursos");
		return;
	}
	let curso = posiblesCursos[0];
	let tag = curso.file.folder.trim().replaceAll(",", "").replaceAll(" ", "-");

	let paginaHecha = tp.file.find_tfile(titulo);
	if (paginaHecha && paginaHecha.stat.ctime != tArchivo.stat.ctime) {
		let path = `${paginaHecha.parent.path}/${titulo}.md`;
		let leafAUsar;

        app.workspace.iterateRootLeaves((leaf) => {
            let tArchivoActual = leaf.view.file;
            if (!tArchivoActual) 
                return;

            if (tArchivoActual.path == path) 
                leafAUsar = leaf;
        });

        if (!leafAUsar) leafAUsar = await app.workspace.getLeaf("tab");
		await leafAUsar.openFile(paginaHecha);

		await app.fileManager.processFrontMatter(paginaHecha, (frontmatter) => {
			let tagsActual = frontmatter["tags"] ? frontmatter["tags"] : [];
			let index = tagsActual.indexOf(tag);
			if (index < 0) tagsActual.push(tag);
			frontmatter["tags"] = tagsActual;

			let numReferenciasActual = frontmatter["referencias"] ? frontmatter["referencias"].map(num => parseInt(num, 10)) : [];
			for (let numReferencia of numReferencias) {
				if (numReferenciasActual.indexOf(numReferencia) < 0)
					numReferenciasActual.push(numReferencia)
			}
			frontmatter["referencias"] = numReferenciasActual.map(num => `${num}`);
		});

		throw error.Quit("Este archivo ya existe");
	}

	await tp.file.move(`${curso.file.folder}/${titulo}`, tArchivo);

	let referenciasResumen = curso.referencias ? curso.referencias.sort(ref => ref).slice() : [];
	let archivosReferencia = dv.pages('#referencia')
		.flatMap(referencia => tp.user.cita().metadata(tp, referencia))
		.sort(ref => ref.numReferencia);
	let referenciasMostrar = referenciasResumen.map(ref => tp.user.cita().describir(archivosReferencia[ref - 1]));

	let respuesta;
	let numReferencias = [];
	while (referenciasResumen.length > 0) {
		respuesta = await preguntar.suggester(
			tp, [...referenciasMostrar, "Salir"], [...referenciasResumen, SALIR],
			"Que referecia vas a incluir?",
			error.Prompt("No se eligió una referencia")
		);

		if (respuesta == SALIR) break;

		numReferencias.push(respuesta);

		let indice = referenciasResumen.indexOf(respuesta);
		referenciasResumen.splice(indice, 1);
		referenciasMostrar.splice(indice, 1);
	}

	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += tp.obsidian.stringifyYaml({
		dia: dia,
		etapa: "sin-empezar",
		orden: mantenerOrden.siguienteValorOrden(),
		referencias: numReferencias,
		tags: [tag, "nota/investigacion"]
	});
	tR += "---";
%>
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
<% tp.file.cursor() %>
<%*
if (numReferencias.length > 0) {
	tR += "\n\n\n";
	tR += await tp.file.include("[[Referencia - Template]]");
}
%>