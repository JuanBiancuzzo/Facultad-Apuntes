<%* 
	const error = tp.user.error();
	const preguntar = tp.user.preguntar();
	const dv = this.app.plugins.plugins.dataview.api;

	const REFERENCIA_TEMPLATE = tp.file.find_tfile("_template/investigacion/Referencia - Template.md")
	const ETAPA_TEMPLATE = tp.file.find_tfile("_template/investigacion/Etapa - Template.md")
	const SALIR = "Salir";

	let tArchivo = tp.file.find_tfile(tp.file.path(true));
	let carpeta = tp.file.folder(true);

	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await preguntar.prompt(tp, "Nombre:", error.Prompt("No se ingresó un nombre para la nota"));
	}

	let materias = dv.pages(`"${carpeta}" and #materia`)
		.sort(materia => materia.file.name);
	let materia;
	switch (materias.length) {
		case 0: throw error.Quit("No es una nota posible");
		case 1: materia = materias[0]; break;
		default:
			materia = await preguntar.suggester(
				tp, materia => materia.file.name, materias,
				"Que materia se incluye esta nota?",
				error.Prompt("No se eligió una materia para la nota")
			);
			break;
	}
	if (materia.equivalencia) materia = dv.page(materia.equivalencia.path);

	let resumenes = dv.pages(`"${materia.file.folder}" and #resumen`)
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
	
	let dia = tp.file.creation_date("YYYY-MM-DD");
	let tagsResumen = resumen.tags.filter(tag => tag != "resumen");
	
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
			let tags = frontmatter["tags"] ? frontmatter["tags"] : [];
			frontmatter["tags"] = tags.concat(tagsResumen.filter(tag => tags.indexOf(tag) < 0));
		});

		throw error.Quit("Este archivo ya existe");
	}

	await tp.file.move(`${resumen.file.folder}/${titulo}`, tArchivo);

	let referenciasResumen = resumen.referencias ? resumen.referencias.sort(ref => ref) : [];
	let archivosReferencia = dv.pages('#referencia')
		.flatMap(referencia => tp.user.cita().metadata(tp, referencia))
		.sort(ref => ref.numReferencia);
	let referenciasMostrar = referenciasResumen.map(ref => tp.user.cita().describir(archivosReferencia[ref - 1]));

	let referenciasDefinicion = [];
	let respuesta;

	while (referenciasResumen.length > 0) {
		respuesta = await preguntar.suggester(
			tp, [...referenciasMostrar, "Salir"], [...referenciasResumen, SALIR],
			"Que referecia vas a incluir?",
			error.Prompt("No se eligió una referencia")
		);

		if (respuesta == SALIR) break;

		referenciasDefinicion.push(respuesta);

		let indice = referenciasResumen.indexOf(respuesta);
		referenciasResumen.splice(indice, 1);
		referenciasMostrar.splice(indice, 1);
	}
	
	tR += "---\n";
	tR += tp.obsidian.stringifyYaml({ 
		dia: dia,
		etapa: "empezado",
		referencias: referenciasDefinicion,
		tags: [...tagsResumen, "nota/facultad"],
	});
	tR += "---\n";
	tR += await app.vault.read(ETAPA_TEMPLATE);
	tR += "\n";
_%>
# Definición
---
<% tp.file.cursor() %>

<%*
    if (referenciasDefinicion.length > 0) {
		tR += await app.vault.read(REFERENCIA_TEMPLATE);
    }
_%>