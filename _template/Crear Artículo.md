<%*
	let num_articulo = await tp.system.prompt("Artículo n°: ");

	const CCYCN = 2;
	const CP = 3;
	const CN = 4;
	const valores = [CCYCN, CP, CN];

	let de_donde = await tp.system.suggester(
		[
			"Código Civil y Comercial de la Nación",
			"Código Penal",
			"Constitución Nacional",
		], valores);

	if (!valores.includes(de_donde)) { return; }

	let titulo = `Art. ${num_articulo} `;
	let carpeta = "legal/Articulos/";

	switch (de_donde) {
		case CCYCN: 
			let nombre = await tp.system.prompt("Nombre: ");
			titulo += "del CC y CN, " + nombre;
			carpeta += "Código Civil y Comercial de la Nación";
			break;
		case CP: 
			titulo += "del Código Penal";
			carpeta += "Código Penal";
			break;
		default:
			let num_ley = await tp.system.prompt("Ley N°: ");
			titulo += `de la Ley ${num_ley}, de la Constitución Nacional`;
			carpeta += `Constitución Nacional/Ley ${num_ley}`;
	}

	let template = await tp.file.find_tfile("Artículo - Template");
	let existe_carpeta = await tp.file.exists(carpeta);
	if (!existe_carpeta) {
		await this.app.vault.createFolder(carpeta);
	}
	carpeta = await this.app.vault.getAbstractFileByPath(carpeta);
	tp.file.create_new(template, titulo, true, carpeta);
%>