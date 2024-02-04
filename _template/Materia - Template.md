<%* 
	let titulo = await tp.system.prompt("Materia:");
	if (!titulo)
		return "";
	
	let codigo = await tp.system.prompt(`El código de ${titulo} es:`);
	if (!codigo)
		return "";
	
	await tp.file.rename(`${titulo} (${codigo})`);
	
	tR += "---\n";

	let anios = [];
	console.log(tp.file.creation_date("YY"));
	for (let anio = tp.file.creation_date("YY"); anio >= 19; anio--) {
		anios.push(anio);
	}
	
	let anio = await tp.system.suggester(terminacion => `Año 20${terminacion}`, 
		anios, false, "En que año se esta cursando esta materia");
	
	let cuatrimestre = await tp.system.suggester([
		"Primer cuatrimestre", "Segundo cuatrimestre"
	], [
		"C1", "C2"
	]);
	
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
	tR += "---";
%>
### Apuntes
---
```dataviewjs
	function conseguir_nombre(unidad) {
		let relative_path = unidad.rows[0].file.folder;
		let spliteado = relative_path.split("/");
		return spliteado[spliteado.length - 1];
	}

	const pagina_actual = dv.current();
	const carpeta = '"' + pagina_actual.file.folder + '"';
	const paginas = dv.pages(carpeta)
		.where(pagina => {
			if (!pagina.capitulo)
				return false;
			return pagina.file.name != pagina_actual.file.name;
		});

	let unidades = paginas.groupBy(pagina => pagina.capitulo)
		.sort(capitulo => {
			return capitulo.rows[0].capitulo;
		});
		
	for (let unidad of unidades) {		
		dv.table([conseguir_nombre(unidad)], (unidad.rows.file).map(pagina => {
			let path = pagina.path;
			let nombre = pagina.name;
			return ["[[" + path + "|" + nombre + "]]"];
		}));

		dv.el("br", "");
	}
```
