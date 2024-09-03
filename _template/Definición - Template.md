<%* 
	const error = tp.user.error();
	const preguntar = tp.user.preguntar();

	const dv = this.app.plugins.plugins.dataview.api;

	let tArchivo = tp.file.find_tfile(tp.file.path(true));
	let carpeta = tp.file.folder(true);

	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await preguntar.prompt(tp, "Nombre:", error.Prompt("No se ingresó un nombre para la nota"));
	}

	let resumenes = dv.pages(`"${carpeta}" and #resumen`)
		.sort(resumen => resumen.capitulo);
		
	let resumen;
	switch (resumenes.length) {
		case 0: throw error.Quit("No es una nota posible");
		case 1: resumen = resumenes[0]; break;
		default:
			resumen = await preguntar.suggester(
				tp, resumen => {
					let repre = `${resumen.file.folder.split("/")[1]}`;
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
	let tag = resumen.tags.find(tag => tag != "resumen");
	
	let paginaHecha = tp.file.find_tfile(titulo);
	if (paginaHecha && paginaHecha.path != `${carpeta}/${titulo}.md`) {
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
			let index = frontmatter["tags"]?.indexOf(tag);
			if (!index || index < 0) {
				if (frontmatter["tags"]) {
					frontmatter["tags"].push(tag);
				} else {
					frontmatter["tags"] = [ tag ];
				}
			} 
		});

		 throw error.Quit("Este archivo ya existe");
	}

	await tp.file.move(`${resumen.file.folder}/${titulo}`, tArchivo);
	
	tR += "---\n";
	tR += `dia: ${dia}\n`;
	tR += `tags: \n - ${tag}\n - nota/facultad\n`;
	tR += "---\n";
_%>
### Definición
---
<% tp.file.cursor() %>