<%*
	tR += "---\n";
	
	let titulo = tp.file.title;
	let num_libro = 0;
	
	if (titulo == "Libro Primero - Parte General") {
		num_libro = 1;
	} else if (titulo == "Libro Segundo - Relaciones de Familia") {
		num_libro = 2;
	} else if (titulo == "Libro Tercero - Derechos Personales") {
		num_libro = 3;
	} else if (titulo == "Libro Cuarto - Derechos Reales") {
		num_libro = 4;
	} else if (titulo == "Libro Quinto - Transmisión de Derechos por causa de muerte") {
		num_libro = 5;
	} else if (titulo == "Libro Sexto - Disposiciones comunes a los Derechos personales y reales") {
		num_libro = 6;
	}
	
	tR += `num_libro: ${num_libro}\n`;
	console.log(titulo);
	tR += `libro: ${titulo.split("-")[1].trim()}\n`;
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

		return [`${nombre} [[${pagina.file.path}|?]]`, articulos.map(articulo => {
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
		.where(pagina => pagina.file.name != pagina_actual.file.name && pagina.título)
		.sort(pagina => pagina.num_articulo);

	dv.table(["Artículo", "Contenido"], paginas.map(pagina => {
		let articulo = `Art. ${pagina.num_articulo} [[${pagina.file.path}|?]]`;
		let contenido = pagina.art;
		return [articulo, contenido];
	}));
```