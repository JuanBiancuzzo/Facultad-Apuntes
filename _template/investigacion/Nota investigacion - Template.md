<%* 
	const preguntar = tp.user.preguntar();
	const error = tp.user.error();
	const mantenerOrden = tp.user.mantenerOrden();
	const tArchivo = tp.file.find_tfile(tp.file.path(true));

	const DEJAR_CITAR = "cita rapida";
	const NUEVA_CITA = "nueva cita";
	const dv = app.plugins.plugins.dataview.api;

	let titulo = tp.file.title;
	if (titulo.startsWith("Untitle")) {
		titulo = await preguntar.prompt(tp, "Nombre:", error.Prompt("No se ingresó un nombre para la nota"));
	}
	
	let carpeta = tp.file.folder(true);
	let posiblesIndices = dv.pages(`"${carpeta}" and #Índice`)
		.filter(pagina => pagina.file.folder == carpeta);

	if (posiblesIndices.length == 0) {
		return;
	}
	let indice = posiblesIndices[0];

	let referencias = dv.pages('#referencia')
		.flatMap(referencia => tp.user.cita().metadata(tp, referencia))
		.sort(ref => -ref.numReferencia);

	let opciones = ["No citar ahora", "Nueva cita", ...referencias.map(ref => tp.user.cita().describir(ref))];
	let valores = [DEJAR_CITAR, NUEVA_CITA, ...referencias.map(ref => ref.numReferencia)];
	
	let citar = await preguntar.suggester(tp, opciones, valores,
		"Agregar una cita", error.Prompt("No se eligió una acción a hacer"), 13
	);

	let numReferencias = [];
	while (true) {
		if (citar === DEJAR_CITAR) {
			break;

		} else if (citar === NUEVA_CITA) {
			let numReferencia = tp.user.generarNumReferencia(dv);
			
			try { 
				await tp.user.cita().generar(tp, numReferencia);
			} catch (_) { 
				continue; 
			}

			numReferencias.push(numReferencia);
		} else {
			numReferencias.push(citar);
		}

		opciones[0] = "Dejar de citar";

		citar = await preguntar.suggester(tp, opciones, valores,
			"Agregar una cita", error.Prompt("No se eligió una acción a hacer"), 13
		);	
	}

	let tag = indice.file.folder.trim()
		.split(" ")
		.filter(token => token.trim() != "-" && token.trim() != "")
		.join("-");

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

	await tp.file.move(`${indice.file.folder}/${titulo}`, tArchivo);

	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += `dia: ${dia}\n`;
	tR += "etapa: sin-empezar\n";
	tR += `orden: ${mantenerOrden.siguienteValorOrden()}\n`;

	tR += "referencias: \n";
	for (let numRef of numReferencias) {
		tR += ` - "${numRef}"\n`;
	}
	tR += `tags: \n - ${tag}\n - nota/investigacion\n`;
	tR += "---";
%>
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
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