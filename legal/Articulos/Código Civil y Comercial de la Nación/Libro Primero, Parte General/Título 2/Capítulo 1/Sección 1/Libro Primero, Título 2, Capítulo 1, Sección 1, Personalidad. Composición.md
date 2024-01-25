---
num_sección: 1
sección: Personalidad. Composición
listado:
 - "[[Libro Primero, Parte General|Libro Primero]]"
 - "[[Libro Primero, Título 2, Persona jurídica|Título 2]]"
 - "[[Libro Primero, Título 2, Capítulo 1, Parte general|Capítulo 1]]"
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