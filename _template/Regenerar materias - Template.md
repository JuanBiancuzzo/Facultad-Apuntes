<%* 
	const dv = this.app.plugins.plugins["dataview"].api;
	
	let archivosModificados = this.app.plugins
		.plugins["obsidian-git"]
		.cachedStatus.all
		.map(); 

	console.log(archivosModificados);

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

	async function modificarMateria(dv, materia, archivoMateria) {
		let contenido = await this.app.vault.read(archivoMateria);
		let patronBuscado = "### Apuntes"
		let indexApuntes = contenido.indexOf(patronBuscado);

		let nuevoContenido = `${contenido.slice(0, indexApuntes + patronBuscado.length)} \n---\n`;

		let unidades = dv.pages(`"${materia}" and -#materia`)
			.where(pagina => pagina.capitulo)
			.groupBy(pagina => parseInt(pagina.capitulo, 10))
			.sort(capitulo => parseInt(capitulo.rows[0].capitulo, 10));
			
		for (let unidad of unidades) {	
			nuevoContenido += `##### ${conseguir_nombre(unidad)} (${unidad.rows.length})\n`;
			nuevoContenido += "---\n";	
			nuevoContenido += (unidad.rows.file).map(pagina => {
				return `* [[${pagina.path}|${pagina.name}]]`;
			}).join("\n");
			nuevoContenido += "\n\n";
		}
		return this.app.vault.modify(archivoMateria, nuevoContenido);
	}

	function conseguir_nombre(unidad) {
		let relative_path = unidad.rows[0].file.folder;
		let spliteado = relative_path.split("/");
		return spliteado[spliteado.length - 1];
	}

	async function salir() {
		let archivoActivo = app.workspace.getActiveFile();
		await app.vault.trash(archivoActivo, true);
	}
%>
