### Capítulos
---
```dataviewjs
	let grupo = "Capítulo";
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