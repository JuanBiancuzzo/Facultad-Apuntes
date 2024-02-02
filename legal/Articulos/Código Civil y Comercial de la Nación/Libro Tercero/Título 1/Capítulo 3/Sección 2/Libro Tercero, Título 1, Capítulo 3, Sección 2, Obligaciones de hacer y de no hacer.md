---
num_sección: 2
sección: Obligaciones de hacer y de no hacer
listado:
 - "[[Libro Tercero, Derechos Personales|Libro Tercero]]"
 - "[[Libro Tercero, Título 1, Obligaciones en general|Título 1]]"
 - "[[Libro Tercero, Título 1, Capítulo 3, Clases de obligaciones|Capítulo 3]]"
---
### Parágrafos
---
```dataviewjs
	let grupo = "Parágrafo";
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
			}).sort(pagina => pagina.num_articulo);

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

### Interpretación
---
#### Hacer como prestación de un servició
---
Como enuncia el [[Art. 774 del CC y CN, Prestación de un servicio|art. 774 del CC y CN]]

![[Art. 774 del CC y CN, Prestación de un servicio#Artículo]]

#### Hacer como realización de un hecho
---
Como enuncia el [[Art. 775 del CC y CN, Realización de un hecho|art. 775 del CC y CN]]

![[Art. 775 del CC y CN, Realización de un hecho#Artículo]]

#### Hacer como incorporación de terceros
---
Como enuncia el [[Art. 776 del CC y CN, Incorporación de terceros|art. 776 del CC y CN]]

![[Art. 776 del CC y CN, Incorporación de terceros#Artículo]]

#### Hacer como ejecución forzada
---
Como enuncia el [[Art. 777 del CC y CN, Ejecución forzada|art. 777 del CC y CN]]

![[Art. 777 del CC y CN, Ejecución forzada#Artículo]]
