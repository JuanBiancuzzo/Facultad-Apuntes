---
num_ley: 20094
ley: Ley de Navegación
grupos:
  - Título
  - Capítulo
  - Sección
opt_título: false
opt_capítulo: true
opt_sección: true
art_con_nombre: true
nombre_abreviado: de la Ley de Navegación
tags:
  - legal/cabezera_articulos
---
### Títulos
---
```dataviewjs
	let grupo = "Título";
	let categoria = grupo.toLowerCase();
	let num_categoria = `num_${categoria}`;
	
	let pagina_actual = dv.current();
	let carpeta = pagina_actual.file.folder;
	const paginas = dv.pages(`"${carpeta}"`)
		.where(pagina => {
			if (pagina.file.name.includes("Art. "))
				return false;
			return pagina[num_categoria];
		})
		.sort(pagina => parseInt(pagina[num_categoria]));

	dv.table([grupo, "Artículos"], paginas.map(pagina => {
		let nombre = pagina.file.name.split(", ");
		nombre = nombre.slice(-2)[0];
		let articulos = dv.pages(`"${carpeta}/${nombre}"`)
			.where(pagina => {
				if (!pagina.file.name.startsWith("Art. "))
					return false;
				return pagina.num_articulo;
			}).sort(pagina => parseInt(pagina.num_articulo, 10));

		nombre = `${nombre}, ${pagina[categoria]} [[${pagina.file.path}|?]]`;
		return [nombre, articulos.map(articulo => {
			let nombre_final = `Art. ${articulo.num_articulo}`;
			if (articulo.art_nombre)
				nombre_final += `, ${articulo.art_nombre}`;
			nombre_final += ` [[${articulo.file.path}|?]]`;
			return nombre_final;
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
		.sort(pagina => parseInt(pagina.num_articulo, 10));

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