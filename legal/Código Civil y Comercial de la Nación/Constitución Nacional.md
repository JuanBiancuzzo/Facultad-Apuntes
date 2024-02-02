---
dia: 2024-01-30
materia: legal
capitulo: 1
---
### Artículos
---
```dataviewjs
	let carpeta = `"legal/Articulos/Constitución Nacional"`;
	const paginas = dv.pages(carpeta)
		.sort(pagina => pagina.num_articulo);

	dv.table(["Artículo", "Contenido"], paginas.map(pagina => {
		let articulo = `Art. ${pagina.num_articulo} [[${pagina.file.path}|?]]`;
		let contenido = pagina.art;
		return [articulo, contenido];
	}));
```