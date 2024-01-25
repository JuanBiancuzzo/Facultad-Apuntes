<%*
	tR += "---\n";

	let titulo = tp.file.title;
	let titulos = titulo.split(",");
	let num_paragrafo = titulos[titulos.length - 1].trim().split(" ")[1];
	let paragrafo = await tp.system.prompt(`El nombre del parágrafo ${num_paragrafo}: `);

	await tp.file.rename(`${titulo}, ${paragrafo}`);

	tR += `num_parágrafo: ${parseInt(num_paragrafo)}\n`;
	tR += `parágrafo: ${paragrafo}\n`;

	tR += "---";
%>
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