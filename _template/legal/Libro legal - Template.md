<%*
	tR += "---\n";
	
	let titulo = tp.file.title;
	let num_libro = 0;
	
	if (titulo == "Libro Primero, Parte General") {
		num_libro = 1;
	} else if (titulo == "Libro Segundo, Relaciones de Familia") {
		num_libro = 2;
	} else if (titulo == "Libro Tercero, Derechos Personales") {
		num_libro = 3;
	} else if (titulo == "Libro Cuarto, Derechos Reales") {
		num_libro = 4;
	} else if (titulo == "Libro Quinto, Transmisión de Derechos por causa de muerte") {
		num_libro = 5;
	} else if (titulo == "Libro Sexto, Disposiciones comunes a los Derechos personales y reales") {
		num_libro = 6;
	}
	
	tR += `num_libro: ${num_libro}\n`;

	tR += `libro: ${titulo.split(",")[1].trim()}\n`;
	
	let carpetas = tp.file.folder(true);
	
	let grupos = carpetas.split("/").slice(3).map(grupo => {
		if (grupo.includes(",")) { grupo = grupo.split(",")[0]; }
		return grupo;
	}).map(grupo => {
		return [grupo + ",", grupo.split(" ")[0]];
	});

	let listado = app.vault.getMarkdownFiles().filter(archivo => {
		return archivo.path.startsWith("legal/Articulos/Código Civil y Comercial de la Nación"); 
	}).filter(archivo => {
		return !archivo.basename.startsWith("Art.");
	}).filter(archivo => {
		let enCamino = grupos.length > 0;
		let any = false;
		for (let [grupo, nombre] of grupos.slice(0, grupos.length - 1)) {			
			if (archivo.basename.includes(nombre)) {
				let hay_igual = archivo.basename.includes(grupo);
				enCamino &= hay_igual;
				any |= hay_igual;
			}	
		}
		let [ultimoGrupo, ultimoNombre] = grupos[grupos.length - 1];
		if (archivo.basename.includes(ultimoNombre)) {
			enCamino = false;
		}

		return enCamino && any;
	});
	
	tR += "listado:\n";
	grupos = grupos.map(resultado => { 
		return [resultado[0].replace(",", ""), resultado[1]]; 
	});
	
	let links = listado.map(archivo => {
		let grupoActual = grupos[0][0];
		for (let [grupo, nombre] of grupos) {
			if (!archivo.basename.includes(grupo)) {
				return `[[${archivo.basename}|${grupoActual}]]`;
			} else {
				grupoActual = grupo;
			}
		}
		return `[[${archivo.basename}|${grupoActual}]]`;
	});

	for (let link of links) {
		tR += ` - "${link}"\n`;
	}
	tR += "---";
%>
### Títulos
---
```dataviewjs
	let pagina_actual = dv.current();
	let carpeta = pagina_actual.file.folder;
	const paginas = dv.pages(`"${carpeta}"`)
		.where(pagina => {
			if (pagina.file.name.includes("Parágrafo"))
				return false;
			if (pagina.file.name.includes("Sección"))
				return false;
			if (pagina.file.name.includes("Capítulo"))
				return false;
			return pagina.file.name.includes("Título");
		})
		.sort(pagina => pagina.file.name.split(" ")[1]);

	dv.table(["Título", "Artículos"], paginas.map(pagina => {
		let nombre = `Título ${pagina.num_título}`;
		let articulos = dv.pages(`"${carpeta}/${nombre}"`)
			.where(pagina => {
				if (pagina.file.name.includes("Título"))
					return false;
				if (pagina.file.name.includes("Capítulo"))
					return false;
				if (pagina.file.name.includes("Sección"))
					return false;
				return !pagina.file.name.includes("Parágrafo");
			})
			.sort(pagina => pagina.num_título);
		
		nombre = `${nombre} [[${pagina.file.path}|?]]`;
		return [nombre, articulos.map(articulo => {
			let num_art = articulo.num_articulo;
			let art_nombre = articulo.art_nombre;
			let path = articulo.file.path;
			return `Art. ${num_art}, ${art_nombre} [[${path}|?]]`;
		})];
	}));
```


### Artículos
---
```dataviewjs
	let pagina_actual = dv.current();
	let carpeta = `"${pagina_actual.file.folder}"`;
	const paginas = dv.pages(carpeta)
		.where(pagina => {
			return pagina.file.name != pagina_actual.file.name && pagina.num_articulo;
		})
		.sort(pagina => pagina.num_articulo);

	dv.table(["Artículo", "Contenido"], paginas.flatMap(pagina => {
		let articulo = `Art. ${pagina.num_articulo} [[${pagina.file.path}|?]]`;
		let contenido = pagina.art;

		let output = [[articulo, contenido]];

		if (pagina.incisos) { 
			output.push(["", pagina.incisos]);
		}
		if (pagina.cont_art) {
			output.push(["", pagina.cont_art]);
		}
	
		return output;
	}));
```