<%*
	tR += "---\n";

	function hasNumber(str) { return /[0-9]/.test(str); }

	let titulo = tp.file.title;
	let titulos = titulo.split(",");
	let num_titulo = titulos[titulos.length - 1].trim().split(" ")[1];
	let titulo_nombre = num_titulo;

	if (hasNumber(titulo_nombre)) {
		titulo_nombre = await tp.system.prompt(`El nombre del título ${num_titulo}: `);
		await tp.file.rename(`${titulo}, ${titulo_nombre}`);
		num_titulo = parseInt(num_titulo);
	} 
	
	tR += `num_título: ${num_titulo}\n`;
	tR += `título: "${titulo_nombre}"\n`;
	
	let carpetas = tp.file.folder(true);
	
	let grupos = carpetas.split("/").slice(3).map(grupo => {
		if (grupo.includes(",")) { grupo = grupo.split(",")[0]; }
		return grupo;
	}).map(grupo => {
		return [grupo + ",", grupo.split(" ")[0]];
	});

	let listado = app.vault.getMarkdownFiles().filter(archivo => {
		return archivo.path.startsWith("legal/Articulos/Código Civil y Comercial de la Nación"); 
	}).filter(archivo => {
		return !archivo.basename.startsWith("Art.");
	}).filter(archivo => {
		let enCamino = grupos.length > 0;
		let any = false;
		for (let [grupo, nombre] of grupos.slice(0, grupos.length - 1)) {			
			if (archivo.basename.includes(nombre)) {
				let hay_igual = archivo.basename.includes(grupo);
				enCamino &= hay_igual;
				any |= hay_igual;
			}	
		}
		let [ultimoGrupo, ultimoNombre] = grupos[grupos.length - 1];
		if (archivo.basename.includes(ultimoNombre)) {
			enCamino = false;
		}

		return enCamino && any;
	});
	
	tR += "listado:\n";

	let links = listado.map(archivo => {
		let grupoActual = grupos[0][0];
		for (let [grupo, nombre] of grupos) {
			if (!archivo.basename.includes(grupo)) {
				return `[[${archivo.basename}|${grupoActual}]]`;
			} else {
				grupoActual = grupo;
			}
		}
		return `[[${archivo.basename}|${grupoActual}]]`;
	});

	for (let link of links) {
		tR += ` - "${link}"\n`;
	}
	tR += "---";
%>
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
		if (pagina.cont_art) {
			output.push(["", pagina.cont_art]);
		}
	
		return output;
	}));
```