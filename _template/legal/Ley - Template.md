
```dataviewjs
	let pagina_actual = dv.current();
	let carpeta = `"${pagina_actual.file.folder}"`;
	const paginas = dv.pages(carpeta)
		.where(pagina => pagina.file.name != pagina_actual.file.name)
		.sort(pagina => pagina.num_articulo);

	dv.table(["Artículo", "Contenido"], paginas.map(pagina => {
		let articulo = `Art. ${pagina.num_articulo} [[${pagina.file.path}|?]]`;
		let contenido = pagina.art;
		return [articulo, contenido];
	}));
```