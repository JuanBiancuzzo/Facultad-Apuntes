---
dia: 2024-01-12
materia: legal
capitulo: 1
---
### Definición
---
En general, en materia contractual las [[Norma jurídica|normas]] del Código Civil y Comercial de la Nación son supletorias porque suplen la voluntad de las partes, debido a que el [[Art. 958 del CC y CN, Libertad de contratación|art. 958 del CC y CN]]
![[Art. 958 del CC y CN, Libertad de contratación#Artículo]]

Coincidentemente, el [[Art. 962 del CC y CN, Carácter de las normas legales|art. 962 del CC y CN]]
![[Art. 962 del CC y CN, Carácter de las normas legales#Artículo]]

# Artículos
---
```dataviewjs
	let carpeta = `"legal/Articulos/Código Civil y Comercial de la Nación"`;
	const libros = dv.pages(carpeta)
		.where(pagina => pagina.num_articulo && pagina.título != "preliminar")
		.sort(pagina => pagina.num_articulo)
		.groupBy(pagina => pagina.libro)
		.sort(grupo => {
			let num_libro = conseguirNombre(grupo, "libro").split(" ")[1].trim();
			switch (num_libro) {
				case "Primero": return 1;
				case "Segundo": return 2;
				case "Tercero": return 3;
				case "Cuarto": return 4;
				case "Quinto": return 5;
				case "Sexto": return 6;
			}
		});

	const tituloPreliminar = dv.pages(carpeta)
		.where(pagina => pagina.num_articulo && pagina.título == "preliminar")
		.sort(pagina => pagina.num_articulo)
		.groupBy(pagina => pagina.título);

	let niveles = ["libro", "título", "capítulo", "sección", "parágrafo"];
	mostrarGrupo(tituloPreliminar, 2, 1);
	mostrarGrupo(libros, 2, 0);

	function mostrarGrupo(grupo, nivelHeader, numNivel) {
		if (grupo.length == 0) { return; }
		if (numNivel >= niveles.length) { return mostrarArticulos(grupo); }

		let nivel = niveles[numNivel];
		for (let parte of grupo) {
			dv.header(nivelHeader, conseguirNombre(parte, nivel));
			dv.el("p", "---");
			//dv.el("br", "");
			parte = parte.rows;

			let sub = niveles[numNivel + 1];
			let parteSinSub = parte.where(pagina => {
				if (sub == undefined) { return true; }
				return !pagina[sub];
			});
			if (parteSinSub.length > 0) { mostrarArticulos(parteSinSub); }
			
			let subParte = parte.where(pagina => pagina[sub])
				.sort(pagina => parseInt(pagina[`num_${sub}`]))
				.groupBy(pagina => pagina[sub]);

			mostrarGrupo(subParte, nivelHeader + 1, numNivel + 1);
		}
	}

	function mostrarArticulos(articulos) {
		dv.table(["Artículo", "Contenido"], articulos.map(pagina => {
			let articulo = `Art. ${pagina.num_articulo} [[${pagina.file.path}|?]]`;
			let contenido = pagina.art;
			return [articulo, contenido];
		}));
	}

	function conseguirNombre(grupo, nivel) {
		switch (nivel) {
			case "parágrafo": 
				return `Parágrafo ${grupo.rows[0].parágrafo}`;
			case "sección": 
				return `Sección ${grupo.rows[0].sección}`;
			case "capítulo": 
				return `Capítulo ${grupo.rows[0].capítulo}`;
			case "título": 
				return `Título ${grupo.rows[0].título}`;
			case "libro":return grupo.rows[0].libro;
		}
	}
```
