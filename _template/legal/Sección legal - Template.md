<%*
	tR += "---\n";

	let titulo = tp.file.title;
	let titulos = titulo.split(",");
	let num_seccion = titulos[titulos.length - 1].trim().split(" ")[1];
	let seccion = await tp.system.prompt(`El nombre de la sección ${num_seccion}: `);

	await tp.file.rename(`${titulo}, ${seccion}`);

	tR += `num_sección: ${parseInt(num_seccion)}\n`;
	tR += `sección: ${seccion}\n`;

	tR += "---";
%>
### Parágrafo
---
```dataviewjs
	let pagina_actual = dv.current();
	let carpeta = pagina_actual.file.folder;
	const paginas = dv.pages(`"${carpeta}"`)
		.where(pagina => pagina.file.name.includes("Parágrafo"))
		.sort(pagina => parseInt(pagina.num_parágrafo));

	dv.table(["Parágrafo", "Artículos"], paginas.map(pagina => {
		let nombre = `Parágrafo ${pagina.num_parágrafo}`;
		let articulos = dv.pages(`"${carpeta}/${nombre}"`)
			.where(pagina => !pagina.file.name.includes("Parágrafo"))
			.sort(pagina => pagina.num_articulo);

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
		.where(pagina => pagina.file.name != pagina_actual.file.name && pagina.título)
		.sort(pagina => pagina.num_articulo);

	dv.table(["Artículo", "Contenido"], paginas.map(pagina => {
		let articulo = `Art. ${pagina.num_articulo} [[${pagina.file.path}|?]]`;
		let contenido = pagina.art;
		return [articulo, contenido];
	}));
```