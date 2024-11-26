<%* 
	const preguntar = tp.user.preguntar();
	const error = tp.user.error();
	const mantenerOrden = tp.user.mantenerOrden();
	const tArchivo = tp.file.find_tfile(tp.file.path(true));

	const REFERENCIA_TEMPLATE = tp.file.find_tfile("_template/investigacion/Referencia - Template.md")
	const ETAPA_TEMPLATE = tp.file.find_tfile("_template/investigacion/Etapa - Template.md")

	const DEJAR_CITAR = "cita rapida";
	const NUEVA_CITA = "nueva cita";
	const SALIR = "salir";
	const dv = app.plugins.plugins.dataview.api;

	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await preguntar.prompt(tp, "Nombre:", error.Prompt("No se ingresó un nombre para la nota"));
	}
	
	let carpeta = tp.file.folder(true);

	let directorios = carpeta.split("/");
	let posiblesCursos = [];
	let opcionCursos;
	for (let i = 1; i <= directorios.length; i++) {
		let opcionCursos = dv.pages(`"${directorios.slice(0, i).join("/")}" and #proyecto/curso`);
		if (opcionCursos.length > 0) posiblesCursos = opcionCursos;
	}
		
	let cursos = posiblesCursos.sort(materia => materia.file.name);
	let curso;
	switch (cursos.length) {
		case 0: throw error.Quit("No es una nota posible");
		case 1: curso = cursos[0]; break;
		default:
			curso = await preguntar.suggester(
				tp, curso => curso.file.name, cursos,
				"Que materia se incluye esta nota?",
				error.Prompt("No se eligió una materia para la nota")
			);
			break;
	}

	let carpetaResumen = curso.file.folder;
	if (carpeta.startsWith(carpetaResumen)) carpetaResumen = carpeta;
	let resumenes = dv.pages(`"${carpetaResumen}" and #resumen/curso`)
		.sort(resumen => resumen.capitulo);
		
	let resumen;
	switch (resumenes.length) {
		case 0: throw error.Quit("No es una nota posible");
		case 1: resumen = resumenes[0]; break;
		default:
			resumen = await preguntar.suggester(
				tp, resumen => {
					let repre = `${resumen.file.folder.split("/").pop()}`;
					if (resumen.multiple) 
						repre += `, Parte ${resumen.parte}`;
					return repre;
				}, 
				resumenes, 
				"Que tema se incluye esta nota?",
				error.Prompt("No se eligió un tema para la nota")
			);
			
			break;
	}
	
	let tag = resumen.file.folder.trim().replaceAll(",", "").replaceAll(" ", "-");

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
	if (curso.esOnline) {
		numReferencias.push(1); // Modificar para citar un curso online
	}
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
	tR += "---\n";
	tR += await app.vault.read(ETAPA_TEMPLATE);
	tR += "\n";
_%>
# Definición
---
<% tp.file.cursor() %>

<%*
if (numReferencias.length > 0) {
	tR += await app.vault.read(REFERENCIA_TEMPLATE);
}
%>