---
cuatri: 24C1
estado: cursando
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
### Artículos
---
```dataviewjs
	function conseguir_nombre(unidad) {
		return unidad.rows[0].cuerpo_legal;
	}

	const unidades = dv.pages('"legal/Articulos"')
		.where(pagina => pagina.cuerpo_legal)
		.sort(pagina => pagina.num_articulo)
		.groupBy(pagina => pagina.cuerpo_legal);
		
	for (let unidad of unidades) {		
		dv.header(3, conseguir_nombre(unidad));
		dv.table(["Artículos", "Contenido"], (unidad.rows).flatMap(pagina => {
			let articulo = `[[${pagina.file.path}|Art. ${pagina.num_articulo}]]`;
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
		dv.el("br", "");
	}
```
