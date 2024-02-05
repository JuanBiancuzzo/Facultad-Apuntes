<%*
	tR += "---\n";

	let titulo = tp.file.title;
	let titulos = titulo.split("-");
	
	let grupo = titulos[0];
	let subgrupo = titulos[1];

	titulos = titulos[2].split(",");
	titulo = titulos.join(",");

	let ultimo_elemento = titulos[titulos.length - 1];
	
	let nombre_grupo = undefined;
	let num_grupo = ultimo_elemento.includes(grupo) ? 
		tenerNumeroGrupo(ultimo_elemento.trim()) : 
		tenerNumeroGrupo(titulos[titulos.length - 2].trim());

	if (num_grupo > 0 && ultimo_elemento.includes(grupo)) {
		nombre_grupo = await tp.system.prompt(`El nombre del ${grupo.toLowerCase()} ${num_grupo}: `);
		titulo += `, ${nombre_grupo}`;
	} else if (num_grupo > 0) {
		nombre_grupo = ultimo_elemento;
	} else {
		nombre_grupo = ultimo_elemento.replaceAll(grupo, "").trim();
	}

	await tp.file.rename(titulo);

	tR += `num_${grupo.toLowerCase()}: ${parseInt(num_grupo)}\n`;
	tR += `${grupo.toLowerCase()}: "${nombre_grupo}"\n`;
	
	tR += await tp.file.include("[[Listado - Template]]");
	
	tR += "---\n";

	switch (subgrupo.trim().toLowerCase()) {
		case "libro":
			tR += await tp.file.include("[[Mostrar Libro]]") + "\n\n";
			break;
		case "título":
			tR += await tp.file.include("[[Mostrar Título]]") + "\n\n";
			break;
		case "capítulo":
			tR += await tp.file.include("[[Mostrar Capítulo]]") + "\n\n";
			break;
		case "sección":
			tR += await tp.file.include("[[Mostrar Sección]]") + "\n\n";
			break;
		case "parágrafo":
			tR += await tp.file.include("[[Mostrar Parágrafo]]") + "\n\n";
			break;
	}

	tR += await tp.file.include("[[Mostrar Artículo]]") + "\n\n";

	tR += await tp.file.include("[[Mostrar Interpretación]]") + "\n";

	function tenerNumeroGrupo(conjunto) {
		let numero = undefined;	
		const nombres_numeros = ["primer", "segund", "tercer", "cuart", "quint", "sext", "septim", "octav", "noven", "décim"];
	
		for (let parte of conjunto.split(" ")) {
			parte = parte.toLowerCase();
			if (!nombres_numeros.some(nombre => parte.includes(nombre)))
				continue;
			if (numero === undefined)
				numero = 0;
			numero += nombres_numeros.findIndex(nombre => {
				return parte.includes(nombre);
			}) + 1;
		}
		if (numero !== undefined) 
			return numero;

		for (let parte of conjunto.replaceAll(".", "").split(" ")) {
			if (isNaN(parseInt(parte, 10)))
				continue;
			if (numero === undefined)
				numero = 0;
			numero += parseInt(parte, 10);
		}
		
		return (numero === undefined) ? 0 : numero;
	}
%>