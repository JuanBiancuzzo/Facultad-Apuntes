---
num_sección: 1
sección: Compensación
---
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
			.sort(pagina => pagina.num_articulo);;

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
		return output;
	}));
```