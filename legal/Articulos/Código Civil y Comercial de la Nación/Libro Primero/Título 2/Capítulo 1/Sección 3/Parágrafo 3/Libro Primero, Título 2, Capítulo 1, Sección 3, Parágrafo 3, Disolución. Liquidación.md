---
num_parágrafo: 3
parágrafo: Disolución. Liquidación
listado:
 - "[[Libro Primero, Parte General|Libro Primero]]"
 - "[[Libro Primero, Título 2, Persona jurídica|Título 2]]"
 - "[[Libro Primero, Título 2, Capítulo 1, Sección 3, Persona jurídica privada|Sección 3]]"
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
		if (pagina.cont_art) {
			output.push(["", pagina.cont_art]);
		}
	
		return output;
	}));
```