<%*
	let num_articulo = await tp.system.prompt("Artículo n°: ");

	let CCYCN = 2;
	let CP = 3;
	let CN = 4;

	let de_donde = await tp.system.suggester(
		[
			"Código Civil y Comercial de la Nación",
			"Código Penal",
			"Constitución Nacional"
		],
		[CCYCN, CP, CN]);

	if (de_donde != CCYCN && de_donde != CP && de_donde != CN) {
		return;
	}

	let titulo = `Art. ${num_articulo} `;
	let carpeta = "legal/Articulos/";
	
	if (de_donde == CCYCN) {
		let nombre = await tp.system.prompt("Nombre: ");
		titulo += "del CC y CN, " + nombre;
		carpeta += "Código Civil y Comercial de la Nación";
	} else if (de_donde == CP) {
		titulo += "del Código Penal";
		carpeta += "Código Penal";
	} else if (de_donde == CN) {
		titulo += "de la Constitución Nacional";
		carpeta += "Constitución Nacional";
	}

	let template = await tp.file.find_tfile("Artículo - Template");
	carpeta = await this.app.vault.getAbstractFileByPath(carpeta);
	tp.file.create_new(template, titulo, true, carpeta);
%>