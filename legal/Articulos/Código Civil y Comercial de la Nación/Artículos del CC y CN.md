
```dataviewjs
const pagina_actual = dv.current();
const carpeta = '"' + pagina_actual.file.folder + '"';
const titulos = dv.pages(carpeta)
		.where(pagina => pagina.file.name != pagina_actual.file.name)
		.sort(pagina => pagina.num_articulo)
		.map(pagina => {
			let articulo = pagina.file.name.split(",")[1];
			let num = pagina.num_articulo;
			return [`Art. ${num}: ${articulo}`];
		});

dv.table(["Artículos"], titulos);
```
