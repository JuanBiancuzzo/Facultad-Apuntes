<%*
	tR += "---\n";

	let documento = await tp.system.prompt("Cual es el nombre de este documento");
	if (!documento) {
		return salir("No escribió nada, no se generará ningún documento");
	}

	let carpeta = `legal/Articulos/${documento}`;
	try {
		await this.app.vault.createFolder(carpeta);
	} catch {
		new Notice("La carpeta ya existe");
	}

	try {
		await tp.file.move(`${carpeta}/${documento}`);
	} catch {
		return salir("No se pudo crear el documento, posiblemente ya existe");
	}

	tR += `documento: ${documento}\n`;

	let opcionesDeGrupo = ["Parte", "Libro", "Título", "Capítulo", "Sección", "Parágrafo"];
	let grupos = await preguntarContinuamenteConOpciones(
		"Grupos en este documento: ", opcionesDeGrupo
	);
	agregarVector("grupos", grupos);

	let predefinidos = await preguntarContinuamente("Grupo inicial");
	if (predefinidos.length > 0)
		agregarVector("predefinidos", predefinidos);

	for (let grupo of grupos) {
		let opt_grupo = await tp.system.suggester(
			["No es opcional", "Es opcional"], 
			["false", "true"], 
			false, `${grupo} es opcional?`);
		tR += `opt_${grupo.toLowerCase()}: ${opt_grupo}\n`;
	}	

	let artConNombre = await tp.system.suggester(
		["No tienen nombre", "Tienen nombre"], 
		["false", "true"], 
		false, `Los artículos tienen nombre?`);
	tR += `art_con_nombre: ${artConNombre}\n`;

	let nombreAbreviado = await tp.system.prompt(`Cual es la abreviación del ${documento}, como lo sería "del CC y CN"`);
	tR += `nombre_abreviado: ${nombreAbreviado}\n`;
	tR += "tags:\n - cabezera_articulos\n";
	tR += "---\n";

	if (grupos.length > 0) {
		switch (grupos[0].trim().toLowerCase()) {
			case "parte": 
				tR += await tp.file.include("[[Mostrar Parte]]") + "\n";
				break;
			case "libro": 
				tR += await tp.file.include("[[Mostrar Libro]]") + "\n";
				break;
			case "título": 
				tR += await tp.file.include("[[Mostrar Título]]") + "\n";
				break;
			case "capítulo":
				tR += await tp.file.include("[[Mostrar Capítulo]]") + "\n";
				break;
			case "sección":
				tR += await tp.file.include("[[Mostrar Sección]]") + "\n";
				break;
			case "parágrafo":
				tR += await tp.file.include("[[Mostrar Parágrafo]]") + "\n";
				break;
		}
	}

	async function preguntarContinuamenteConOpciones(prompt, opciones) {
		let resultado = await preguntar(prompt, opciones);
		let item = resultado[0];
		opciones = resultado[1];

		let vector = [];
		let item_acumulado = "";
		while (item) {
			vector.push(item);

			item_acumulado += item;
			resultado = await preguntar(`Por ahora: ${item_acumulado}`, opciones);
			item = resultado[0];
			opciones = resultado[1];

			item_acumulado += ", \n";
		}
		
		return vector;
	}

	async function preguntarContinuamente(prompt) {
		let item = await tp.system.prompt(prompt);
		let vector = [];
		let item_acumulado = "";
		while (item) {
			vector.push(item);
			item_acumulado += item;
			item = await tp.system.prompt(`Por ahora: ${item_acumulado}`);
			item_acumulado += ", \n";
		}
		return vector;
	}

	async function preguntar(prompt, opciones) {
		if (!opciones || opciones.length == 0)
			return [undefined, opciones];

		let respuesta = await tp.system.suggester(opcion => opcion, opciones, false, prompt);
		let index = opciones.indexOf(respuesta);
		if (index >= 0)
			opciones.splice(index, 1);
		return [respuesta, opciones];
	}

	function agregarVector(titulo, vector) {
		tR += `${titulo}:\n`;
		tR += vector.map(item => ` - ${item}\n`).join("");
	}

	async function salir(mensaje) {
		let archivoActivo = app.workspace.getActiveFile();
		if (mensaje) new Notice(mensaje);			
		await app.vault.trash(archivoActivo, true);
	}
%>
<% await tp.file.include("[[Mostrar Artículo]]") %>

### Interpretación
---