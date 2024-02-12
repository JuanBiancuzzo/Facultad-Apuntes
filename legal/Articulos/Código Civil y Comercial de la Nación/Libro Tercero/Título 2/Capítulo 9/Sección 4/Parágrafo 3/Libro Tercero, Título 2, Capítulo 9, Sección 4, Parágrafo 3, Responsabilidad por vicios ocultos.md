---
num_parágrafo: 3
parágrafo: "Responsabilidad por vicios ocultos"
listado:
 - "[[Libro Tercero, Derechos Personales|Libro Tercero]]"
 - "[[Libro Tercero, Título 2, Contratos en general|Título 2]]"
 - "[[Libro Tercero, Título 2, Capítulo 9, Efectos|Capítulo 9]]"
 - "[[Libro Tercero, Título 2, Capítulo 9, Sección 4, Obligación de saneamiento|Sección 4]]"
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
		let articulo = `Art. ${pagina.num_articulo}`;
		if (pagina.art_nombre)
			articulo += `, ${pagina.art_nombre}`;
		articulo += `[[${pagina.file.path}|?]]`;
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

