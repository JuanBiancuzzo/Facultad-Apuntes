---
num_capítulo: 5
capítulo: "Objeto"
listado:
 - "[[Libro Tercero, Derechos Personales|Libro Tercero]]"
 - "[[Libro Tercero, Título 2, Contratos en general|Título 2]]"
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
Como regla, toda prestación puede ser objeto de contrato. En línea con la precedente afirmación, el [[Código Civil y Comercial de la Nación, Ley 26.994|Código Civil y Comercial]] ha establecido, de manera expresa, aquellas prestaciones que no pueden ser objeto del [[Contrato|contrato]]

Como enuncia el [[Art. 1004 del CC y CN, Objetos prohibidos|artículo 1004]] ![[Art. 1004 del CC y CN, Objetos prohibidos#Artículo]]
Añade el [[Art. 279 del CC y CN, Objeto|artículo 279]] que el hecho tampoco puede ser contrario a las buenas costumbres. ![[Art. 1004 del CC y CN, Objetos prohibidos#Interpretación]]
Por lo tanto, volvemos a reiterar que toda prestación puede ser objeto del contrato, a menos que encuadre en alguna de las prohibiciones expuestas precedentemente.

Como enuncia el [[Art. 1003 del CC y CN, Disposiciones generales|artículo 1003]] ![[Art. 1003 del CC y CN, Disposiciones generales#Artículo]]
#### Determinación del objeto
---
![[Art. 1003 del CC y CN, Disposiciones generales#Interpretación]]



