---
num_capítulo: 1
capítulo: "Disposiciones generales"
---
### Secciones
---
```dataviewjs
	let pagina_actual = dv.current();
	let carpeta = pagina_actual.file.folder;
	const paginas = dv.pages(`"${carpeta}"`)
		.where(pagina => {
			if (pagina.file.name.includes("Parágrafo"))
				return false;
			return pagina.file.name.includes("Sección");
		})
		.sort(pagina => parseInt(pagina.num_sección));

	dv.table(["Sección", "Artículos"], paginas.map(pagina => {
		let nombre = `Sección ${pagina.num_sección}`;
		let articulos = dv.pages(`"${carpeta}/${nombre}"`)
			.where(pagina => {
				if (pagina.file.name.includes("Sección"))
					return false;
				return !pagina.file.name.includes("Parágrafo");
			});

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