<%* 
	const dv = app.plugins.plugins["dataview"].api;
	const tArchivo = tp.file.find_tfile(tp.file.path(true));

	const tagsMetaInfo = [ "resumen", "materia" ];
	const regenerar = tp.user.regenerar();
	const RESUMEN = "Resumen";
	const MATERIA = "Materia";

	const resumenes = dv.pages("#resumen");

	let archivosModificar = (await app.plugins
		.plugins["obsidian-git"]
		.updateCachedStatus()) // consigo todos los archivos modificados
		.all
		.map(archivo => dv.page(archivo.path)); // consigo su representa	ción en dv
	
	let tagsModificados = archivosModificar
		.filter(archivo => archivo && tp.user.whiteList().archivoFacultad(archivo.file.path)) // filtro para obtener los archivos únicamente de la facu
		.filter(archivo => !dv.array(archivo.tags).some(tag => tagsMetaInfo.includes(tag) ) ) // Saco a los archivos que son resumenes o materias
		.filter(archivo => archivo.tags.includes("nota")) // Mantengo todos los que sean notas
		.flatMap(archivo => { 
			let resultado = [];
			for (let tag of archivo.tags) {
				let resumen = resumenes.find(resumen => resumen.tags.includes(tag));
				if (resumen) resultado.push({ tag: tag, carpeta: resumen.file.folder });
			}
			return resultado;
		}) // Consigo todos los tags
		.filter(({ tag, carpeta }) => tag != "nota") // Saco el tag de nota
		.flatMap(({ tag, carpeta }) => {
			return [
				{ tipo: RESUMEN, tag: tag, carpeta: carpeta },
				{ tipo: MATERIA, tag: tag.split("/")[0], carpeta: carpeta }
			];
		}); // conseguimos los path que se deben modificar

	// Sacamos los repetidos que generamos
	tagsModificados = dv.array(tagsModificados).distinct(({ tipo, tag, carpeta }) => tag);

	console.log(tagsModificados);

	let resumenesModificar = tagsModificados
		.flatMap(({ tipo, tag, carpeta }) => (tipo == MATERIA) ? [] : [ { tag: tag, carpeta: carpeta } ]);
	
	let tareas = [];
	for (let { tag, carpeta } of resumenesModificar) {
		let spliteado = carpeta.split("/");
		const materia = `${spliteado[0].charAt(0).toUpperCase()}${spliteado[0].slice(1)}`;
		const nombreResumen = spliteado[1];
		
		let tarea = regenerar.resumen(tp, dv, carpeta, tag)
			.then((_) => mostrarMensaje(`Se regeneró: ${nombreResumen} de ${materia}`));
		tareas.push(tarea);
	}
	await Promise.all(tareas).then((_) => mostrarMensaje("Resumenes regenerados"));	

	let materiasModificar = tagsModificados
		.flatMap(({ tipo, tag, carpeta }) => (tipo == RESUMEN) ? [] : [ { tag: tag, carpeta: carpeta.split("/")[0] } ]);

	console.log(materiasModificar);

	tareas = [];
	for (let { tag, carpeta } of materiasModificar) {
		let materia = `${carpeta.charAt(0).toUpperCase()}${carpeta.slice(1)}`;
		let tarea = regenerar.materia(tp, dv, carpeta)
			.then((_) => mostrarMensaje(`Se regeneró: ${materia}`));
		tareas.push(tarea);
	}

	await Promise.all(tareas).then((_) => mostrarMensaje("Materias regenerados"));	

	function mostrarMensaje(mensaje) {
		console.log(mensaje);
		new Notice(mensaje);
	}
%>
