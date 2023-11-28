---
cuatri: 21C1
estado: en-proceso
plan: "1986"
---
### Apuntes
---
```dataviewjs
	function conseguir_nombre(unidad) {
		let relative_path = unidad.rows[0].file.folder;
		let spliteado = relative_path.split("/");
		return spliteado[spliteado.length - 1];
	}

	const pagina_actual = dv.current();
	const carpeta = '"' + pagina_actual.file.folder + '"';
	const paginas = dv.pages(carpeta)
		.where(pagina => {
			if (!pagina.capitulo)
				return false;
			return pagina.file.name != pagina_actual.file.name;
		});

	let unidades = paginas.groupBy(pagina => pagina.capitulo)
		.sort(capitulo => {
			return capitulo.rows[0].capitulo;
		});
		
	for (let unidad of unidades) {		
		dv.table([conseguir_nombre(unidad)], (unidad.rows.file).map(pagina => {
			let path = pagina.path;
			let nombre = pagina.name;
			return ["[[" + path + "|" + nombre + "]]"];
		}));

		dv.el("br", "");
	}
```
