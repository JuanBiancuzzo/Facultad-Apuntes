<%* 
	let titulo = await tp.system.prompt("Materia:");
	if (!titulo) return await salir();
	
	let codigo = await tp.system.prompt(`El código de ${titulo} es:`);
	if (!codigo) return await salir();
	codigo = codigo.replaceAll(".", "");

	let reducido = await tp.system.prompt(`Nombre de la materia ${titulo} reducido:`);
	if (!reducido) return await salir();

	try {
		await this.app.vault.createFolder(reducido);
		await tp.file.rename(`${titulo} (${codigo})`);		
		await tp.file.move(`${reducido}/${titulo} (${codigo})`);
	} catch {
		return salir();
	}	
	
	tR += "---\n";

	let anios = [];
	for (let anio = tp.file.creation_date("YY"); anio >= 19; anio--) {
		anios.push(anio);
	}
	
	let anio = await tp.system.suggester(terminacion => `Año 20${terminacion}`, 
		anios, false, "En que año se esta cursando esta materia");
	
	let cuatrimestre = await tp.system.suggester(
		["Primer cuatrimestre", "Segundo cuatrimestre"], ["C1", "C2"]
	);
	
	tR += `cuatri: ${anio}${cuatrimestre}\n`;

	let estado = await tp.system.suggester(estado => {
		estado = estado.replaceAll("-", " ");
		return `${estado.charAt(0).toUpperCase()}${estado.slice(1)}`;
	}, ["no-empezado", "cursando", "en-proceso", "terminado"], 
	false, "Cuál es el estado de la materia?");

	let plan = await tp.system.suggester(plan => {
		return `Plan ${plan}`;
	}, [2023, 2009, 1986], false, "Cuál es el plan de la materia");
	
	tR += `codigo: ${codigo}\n`;
	tR += `plan: ${plan}\n`;

	tR += `estado: ${estado}\n`;

	tR += "tags: materia\n";
	
	tR += "---";

	async function salir() {
		let archivoActivo = app.workspace.getActiveFile();
		new Notice("Se elimina el archivo, ya que no se pudo crear");
		await app.vault.trash(archivoActivo, true);
	}
%>
### Apuntes
---
