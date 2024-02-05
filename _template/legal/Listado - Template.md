<%*
	let carpetas = tp.file.folder(true).split("/");
	let carpeta_relativa = carpetas.slice(0, 3).join("/");
	
	let grupos = carpetas.slice(3)
		.map(carpeta => obtenerGrupoSobreCarpeta(carpeta));

	let titulo = tp.file.title.split("-");
	titulo = titulo[titulo.length - 1];
	let archivos = app.vault.getMarkdownFiles()
		.filter(archivo => {
			if (!archivo.path.startsWith(carpeta_relativa))
				return false;
			if (archivo.basename.includes(titulo))
				return false;
			return !archivo.basename.startsWith("Art. ");
		});

	let listado = [];
	for (let [grupo, parte] of grupos) {
		carpeta_relativa += `/${grupo}`;
		let archivo = archivos.find(archivo => {
			let path = archivo.path.replaceAll(`/${archivo.name}`);
			return path.includes(carpeta_relativa) && !path.includes(`${carpeta_relativa}/`);
		});
		if (archivo !== undefined)
			listado.push(archivo);
	}
	
	tR += "listado:\n";
	grupos = grupos.map(resultado => { 
		return [resultado[0].replaceAll(",", ""), resultado[1]]; 
	});
	
	let links = listado.map(archivo => {
		let grupoActual = grupos[0][0];
	
		for (let [grupo, _] of grupos) {
			if (!archivo.basename.includes(grupo)) {
				return `[[${archivo.basename}|${grupoActual}]]`;
			} else {
				grupoActual = grupo;
			}
		}
		return `[[${archivo.basename}|${grupoActual}]]`;
	});

	if (links.length == 0) {
		let cuerpo_legal = carpetas[2];
		let cabecera = archivos.find(archivo => archivo.basename.includes(cuerpo_legal));
		links.push(`[[${cabecera.basename}|${cuerpo_legal}]]`);
	}
	
	for (let link of links) {
		tR += ` - "${link}"\n`;
	}

	

	function obtenerGrupoSobreCarpeta(carpeta) {
		let parte = undefined;
		let hay_numero = false;
		let tokens = carpeta.trim().split(" ");
		
		for (let token of tokens) {
			if (esNumero(token)) {
				hay_numero = true;
			} else {
				parte = token;
			}
		}
		if (!hay_numero)
			parte = tokens[0];
		return [carpeta, parte];
	}

	function esNumero(token) {
		token = token.trim().toLowerCase();
		const nombres_numeros = ["primer", "segund", "tercer", "cuart", "quint", "sext", "septim", "octav", "noven", "décim"];
		if (nombres_numeros.some(nombre => token.includes(nombre))) 
			return true;
		return !isNaN(parseInt(token, 10));
	}
%>