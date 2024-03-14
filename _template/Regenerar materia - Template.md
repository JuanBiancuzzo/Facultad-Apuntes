<%* 
	const dv = this.app.plugins.plugins["dataview"].api;

	let materias = dv.pages("#materia")
		.map(materia => materia.file.name);

	console.log(materias);

	let contenido = dv.pages("#materia")
		.map(materia => {
			let carpetaMateria = materia.file.path.split("/")[0];
			let pathSeparado = materia.file.path.split(".");
			let path = pathSeparado.slice(0, pathSeparado.length - 1).join(".");
			let tFile = tp.file.find_tfile(path);
			return [carpetaMateria, tFile];
		});

	console.log(contenido);
	
	let seleccionActualizar = await tp.system.suggester(materias, contenido, false,
		"Que matería querés regenerar?");
	
	if (!seleccionActualizar)
		return salir("No se seleccionó materia a regenerar");

	let [carpetaMateria, tFile] = seleccionActualizar;
	await modificarMateria(dv, carpetaMateria, tFile);
	
	return salir(`Se regeneró ${tFile.basename}`);

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

	async function salir(mensaje) {
		let archivoActivo = app.workspace.getActiveFile();
		new Notice(mensaje);
		await app.vault.trash(archivoActivo, true);
	}
%>
