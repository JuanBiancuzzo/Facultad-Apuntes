---
num_sección: 11
sección: Contratos
listado:
 - "[[Libro Sexto, Disposiciones comunes a los Derechos personales y reales|Libro Sexto,]]"
 - "[[Libro Sexto, Título 4, Disposición de derecho internacional privado|Título 4,]]"
 - "[[Libro Sexto, Título 4, Capítulo 3, Parte especial|Capítulo 3,]]"
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
			.sort(pagina => pagina.num_articulo);

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

### Interpretación
---