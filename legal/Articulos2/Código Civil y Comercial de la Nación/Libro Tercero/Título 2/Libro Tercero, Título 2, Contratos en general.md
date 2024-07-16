---
num_título: 2
título: Contratos en general
listado:
  - "[[Libro Tercero, Derechos Personales|Libro Tercero]]"
---
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
El contrato es el principal instrumento de que se valen los hombres para urdir entre ellos el tejido infinito de sus [[Relación jurídica|relaciones jurídicas]], es decir, es la principal fuente de [[Obligación|obligaciones]]. La persona vive contratando o cumpliendo contratos, desde operaciones de gran envergadura hasta contratos cotidianos que la persona realiza muchas veces sin advertir que está contratado: Así ocurre cuando trabaja en relación de dependencia ([[Art. 21 de la ley de Contrato de Trabajo, Contrato de trabajo|contrato de trabajo]]), cuando sube a un colectivo ([[Contrato de transporte|contrato de transporte]]), cuando compra golosinas ([[Contrato del consumidor|compraventa]]), cuando adquiere entradas para ir al cine o al fútbol ([[Contrato de espectáculo público|contrato de espectáculo público]])

El contrato adquiere su máxima importancia en un régimen de [[Economía|economía]] capitalista liberal. Desde el punto de vista ético, la importancia de los contratos se aprecia desde un doble ángulo
* Hay una cuestión [[Moral|moral]] envuelta en el deber de hacer honor a la palabra empeñada
* Los contratos deben ser un instrumento de la realización del bien común
