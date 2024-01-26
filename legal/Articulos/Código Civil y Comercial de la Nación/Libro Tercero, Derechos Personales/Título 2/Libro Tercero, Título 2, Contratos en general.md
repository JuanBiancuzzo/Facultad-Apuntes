---
num_título: 2
título: Contratos en general
listado:
  - "[[Libro Tercero, Derechos Personales|Libro Tercero]]"
---
### Capítulos
---
```dataviewjs
	let pagina_actual = dv.current();
	let carpeta = pagina_actual.file.folder;
	const paginas = dv.pages(`"${carpeta}"`)
		.where(pagina => {
			if (pagina.file.name.includes("Sección"))
				return false;
			return pagina.file.name.includes("Capítulo");
		})
		.sort(pagina => parseInt(pagina.num_capítulo));

	dv.table(["Capítulo", "Artículos"], paginas.map(pagina => {
		let nombre = `Capítulo ${pagina.num_capítulo}`;
		let articulos = dv.pages(`"${carpeta}/${nombre}"`)
			.where(pagina => {
				if (pagina.file.name.includes("Capítulo"))
					return false;
				if (pagina.file.name.includes("Sección"))
					return false;
				return !pagina.file.name.includes("Parágrafo");
			}).sort(pagina => pagina.num_articulo);

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
		if (pagina.cont_art) {
			output.push(["", pagina.cont_art]);
		}
	
		return output;
	}));
```

### Interpretación
---
Como enuncia el [[Art. 957 del CC y CN, Definición|art. 957 del CC y CN]] la definción de contrato es: ![[Art. 957 del CC y CN, Definición#Artículo]]
![[Art. 957 del CC y CN, Definición#Interpretación]]