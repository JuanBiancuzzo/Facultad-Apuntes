---
abreviacion: del CC y CN
grupos:
  - Libro
  - Título
  - Capítulo
  - Sección
  - Parágrafo
artConNombre: true
tags:
  - legal/documento
aliases:
  - Ley 26.994
  - CC y CN
---
### Secciones principales
---
```dataviewjs
	await dv.view("_scripts/dataview/legal/mostrarSubSecciones", { paginaActual: dv.current() });
```

### Artículos
---
```dataviewjs
	await dv.view("_scripts/dataview/legal/mostrarArticulos", { paginaActual: dv.current() });
```

<%* 
	const dv = app.plugins.plugins.dataview.api;
	let articulos = dv.pages('"legal/Articulos" and #legal/articulo')
		.filter(articulo => articulo.articulo)
		.map(articulo => { 
			return {
				tArchivo: tp.file.find_tfile(articulo.file.path),
				texto: reconstruirTextos(articulo.articulo)
			};
		});

	console.log(articulos);

	return;

	console.log("Control");
	let modificaciones = [];
	for (let { tArchivo, texto } of articulos) {
		let modificacion = app.fileManager.processFrontMatter(tArchivo, (frontmatter) => {
			frontmatter["articulo"] = texto;
	    });
	    
	    modificaciones.push(modificacion);
	}
	
	await Promise.all(modificaciones);

	function reconstruirTextos(texto) {
		let nuevoTexto = [];

		for (let textoEnumeracion of texto) {
			let resultado = {};
			for (let parte of textoEnumeracion) {
				for (let key of Object.keys(parte)) {
					resultado[key] = parte[key];
				}			
			}

			if (resultado.tipo == "enumeracion") {
				resultado["textos"] = reconstruirTextos(resultado.textos);
			}

			nuevoTexto.push(resultado);
		}

		return nuevoTexto;
	}
_%>