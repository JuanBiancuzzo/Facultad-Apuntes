<%* 
	tR += "---\n";

	let carpeta = tp.file.folder(true);
	let carpetas = carpeta.split("/");

	let cuerpo_legal = carpetas[2];
	tR += `cuerpo_legal: ${cuerpo_legal}\n`;

	let titulo = tp.file.title;
	let num_articulo = titulo.split(" ")[1];
	tR += `num_articulo: ${parseInt(num_articulo)}\n`;

	if (titulo.split(",").length > 1) {
		let art_nombre = titulo.split(",")[1].trim();
		tR += `art_nombre: ${art_nombre}\n`;
	}

	let articulo = await tp.system.prompt(`Artículo N°${num_articulo} enuncia: `);
	tR += `art: "${articulo}"\n`;

	let num_inciso = await tp.system.prompt("Cantidadad de incisos: ");
	tR += "incisos: \n"
	let incisos = [];
	for (let i = 0; i < num_inciso; i++) {
		let inciso = await tp.system.prompt(`Inciso N°${i + 1}: `);
		incisos[i] = inciso;
		tR += ` - "${inciso}" \n`;
	}

	let cont_art = undefined;
	if (incisos.length > 0) {
		cont_art = await tp.system.prompt("Continuación del artículo: ");
		if (cont_art != "" && cont_art != undefined) {
			tR += `cont_art: ${cont_art}\n`;
		}
	}

	for (let grupo of carpetas.slice(3)) {
		let [categoria, valor] = categoriaValor(grupo);
		tR += `${categoria.toLowerCase()}: ${valor}\n`;
	}
	
	tR += await tp.file.include("[[Crear Grupos]]");

	tR += await tp.file.include("[[Listado archivo - Template]]");
	
	tR += "---";

	function categoriaValor(carpeta) {
		return [
			obtenerGrupo(carpeta),
			tenerNumeroGrupo(carpeta),
		];
	}

	function obtenerGrupo(carpeta) {
		let tokens = carpeta.trim().split(" ");
		let parte = undefined;
		let hay_numero = false;
		
		for (let token of tokens) {
			if (esNumero(token)) {
				hay_numero = true;
			} else {
				parte = token;
			}
		}
		return hay_numero ? parte : tokens[0];
	}

	function esNumero(token) {
		token = token.trim().toLowerCase();
		const nombres_numeros = ["primer", "segund", "tercer", "cuart", "quint", "sext", "septim", "octav", "noven", "décim"];
		if (nombres_numeros.some(nombre => token.includes(nombre))) 
			return true;
		return !isNaN(parseInt(token, 10));
	}

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

		for (let parte of conjunto.replace(".", "").split(" ")) {
			if (isNaN(parseInt(parte, 10)))
				continue;
			if (numero === undefined)
				numero = 0;
			numero += parseInt(parte, 10);
		}
		
		return (numero === undefined) ? 0 : numero;
	}
%>
### Artículo
---
<%*
	tR += `"${articulo}"\n\n`;
	for (let i = 0; i < incisos.length; i++) {
		tR += `#### Inciso N°${i + 1}\n---\n`;
		tR += `"${incisos[i]}"\n\n`;
	}
	if (cont_art != undefined && cont_art != "") {
		tR += `#### Sigue el artículo\n---\n`;
		tR += `"${cont_art}"\n\n`;
	}
%>
### Interpretación
---
