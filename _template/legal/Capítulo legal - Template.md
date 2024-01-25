<%*
	tR += "---\n";

	let titulo = tp.file.title;
	let titulos = titulo.split(",");
	let num_capitulo = titulos[titulos.length - 1].trim().split(" ")[1];
	let capitulo = await tp.system.prompt(`El nombre del capítulo ${num_capitulo}: `);

	await tp.file.rename(`${titulo}, ${capitulo}`);

	tR += `num_capítulo: ${parseInt(num_capitulo)}\n`;
	tR += `capítulo: "${capitulo}"\n`;

	tR += "---";
%>
### Secciones
---
```dataviewjs
	let pagina_actual = dv.current();
	let carpeta = pagina_actual.file.folder;
	const paginas = dv.pages(`"${carpeta}"`)
		.where(pagina => {
			if (pagina.file.name.includes("Parágrafo"))
				return false;
			return pagina.file.name.includes("Sección");
		})
		.sort(pagina => parseInt(pagina.num_sección));

	dv.table(["Sección", "Artículos"], paginas.map(pagina => {
		let nombre = `Sección ${pagina.num_sección}`;
		let articulos = dv.pages(`"${carpeta}/${nombre}"`)
			.where(pagina => {
				if (pagina.file.name.includes("Sección"))
					return false;
				return !pagina.file.name.includes("Parágrafo");
			}).sort(pagina => pagina.num_articulo);
		
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
		return output;
	}));
```