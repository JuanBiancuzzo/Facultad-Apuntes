<%* 
	const error = tp.user.error();
	const preguntar = tp.user.preguntar();

	const dv = this.app.plugins.plugins.dataview.api;

	let tArchivo = tp.file.find_tfile(tp.file.path(true));
	let carpeta = tp.file.folder(true);

	let titulo = tp.file.title;

	if (titulo.startsWith("Untitle")) {
		titulo = await preguntar.prompt(tp, "Nombre:", "No se ingresó un nombre para la nota");
		if (paginaHecha = tp.file.find_tfile(titulo)) { // CAMBIARRRRRR
			let leaf = await app.workspace.getLeaf("tab");
			await leaf.openFile(paginaHecha);
			throw error.Quit("Este archivo ya existe");
		}
	}

	let resumenes = dv.pages(`"${carpeta}" and #resumen`)
		.sort(resumen => resumen.capitulo);
	let resumen;
	
	switch (resumenes.length) {
		case 0: throw new Error("No es una nota posible");
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

	await tp.file.move(`${resumen.file.folder}/${titulo}`, tArchivo);
	
	let dia = tp.file.creation_date("YYYY-MM-DD");
	let tag = resumen.tags.find(tag => tag != "resumen");
	
	tR += "---\n";
	tR += `dia: ${dia}\n`;
	tR += `tags: \n - ${tag}\n - nota/facultad\n`;
	tR += "---\n";
_%>
### Definición
---
<% tp.file.cursor() %>