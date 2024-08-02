<%* 
	const preguntar = tp.user.preguntar();
	const error = tp.user.error();

	const DEJAR_CITAR = "cita rapida";
	const NUEVA_CITA = "nueva cita";
	const dv = app.plugins.plugins.dataview.api;
	
	let carpeta = tp.file.folder(true);
	let posiblesIndices = dv.pages(`"${carpeta}" and #Índice`)
		.filter(pagina => pagina.file.folder == carpeta);

	if (posiblesIndices.length == 0) {
		return;
	}	

	let referencias = dv.pages('"_referencias"')
		.flatMap(referencia => {
			let desc = tp.user.cita().metadata(tp, referencia);
			if (!desc) {
				console.log("El siguiente archivo tuvo un erro al describirse");
				console.log(referencia);
				return [];
			}
			return [ desc ];
		})
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
				await tp.user.cita().generar(tp, numReferencia) 
			} catch (_) { 
				continue; 
			}

			numReferencias.push(numReferencia);
		} else {
			numReferencias.push(citar);
		}

		citar = await preguntar.suggester(tp, opciones, valores,
			"Agregar una cita", error.Prompt("No se eligió una acción a hacer"), 13
		);	
	}

	const dia = tp.file.creation_date("YYYY-MM-DD");
	
	tR += "---\n"; 
	tR += `dia: ${dia}\n`;
	tR += "etapa: sin-empezar\n";

	tR += "referencias: \n";
	for (let numRef of numReferencias) {
		tR += ` - "${numRef}"\n`;
	}
	tR += "tags: \n - nota/investigacion\n";
	tR += "---";
%>
```dataviewjs
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: dv.current().etapa });
```
### Definición
---
<% tp.file.cursor() %>


### Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```