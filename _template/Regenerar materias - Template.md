<%* 
	const dv = app.plugins.plugins["dataview"].api;
	
	let archivosModificados = (await app.plugins
		.plugins["obsidian-git"]
		.updateCachedStatus())
		.all; 

	console.log(archivosModificados);
	return;

	let materias = dv.pages("#materia")
		.map(materia => {
			let carpetaMateria = materia.file.path.split("/")[0];
			let pathSeparado = materia.file.path.split(".");
			let path = pathSeparado.slice(0, pathSeparado.length - 1).join(".");
			let tFile = tp.file.find_tfile(path);
			return [carpetaMateria, tFile];
		});

	let archivosActualizar = [];
	for ([carpetaMateria, tFile] of materias) {
		if (archivosModificados.some(archivo => {
			return archivo.path.split("/")[0] == carpetaMateria;
		})) {
			archivosActualizar.push([carpetaMateria, tFile]);
		}
	}

	let esperaModificaciones = [];
	for (let [carpetaMateria, tFile] of archivosActualizar) {
		let tareaActualizar = modificarMateria(dv, carpetaMateria, tFile)
			.then((_) => new Notice(`Se regeneró ${tFile.basename}`));
		 esperaModificaciones.push(tareaActualizar);
	}
	await Promise.all(esperaModificaciones).then((_) => {
		new Notice("Ya se regeneró todas las materias");
	});

	return salir();

	async function salir() {
		let archivoActivo = app.workspace.getActiveFile();
		await app.vault.trash(archivoActivo, true);
	}
%>
