---
num_parágrafo: 1
parágrafo: Obligaciones simplemente mancomunadas
listado:
 - "[[Libro Tercero, Derechos Personales|Libro Tercero]]"
 - "[[Libro Tercero, Título 1, Obligaciones en general|Título 1]]"
 - "[[Libro Tercero, Título 1, Capítulo 3, Clases de obligaciones|Capítulo 3]]"
 - "[[Libro Tercero, Título 1, Capítulo 3, Sección 7, Obligaciones de sujeto plural|Sección 7]]"
---
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