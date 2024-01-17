---
dia: 2024-01-12
materia: legal
capitulo: 1
---
### Definición
---
En general, en materia contractual las [[Norma jurídica|normas]] del Código Civil y Comercial de la Nación son supletorias porque suplen la voluntad de las partes, debido a que el [[Art. 958 del CC y CN, Libertad de contratación|art. 958 del CC y CN]]
![[Art. 958 del CC y CN, Libertad de contratación#Artículo]]

Coincidentemente, el [[Art. 962 del CC y CN, Carácter de las normas legales|art. 962 del CC y CN]]
![[Art. 962 del CC y CN, Carácter de las normas legales#Artículo]]

### Artículos
---
```dataviewjs
	let carpeta = `"legal/Articulos/Código Civil y Comercial de la Nación"`;
	const paginas = dv.pages(carpeta)
		.sort(pagina => pagina.num_articulo);

	dv.table(["Artículo", "Contenido"], paginas.map(pagina => {
		let articulo = `Art. ${pagina.num_articulo}: ${pagina.art_nombre} [[${pagina.file.path}|?]]`;
		let contenido = pagina.art;
		return [articulo, contenido];
	}));
```