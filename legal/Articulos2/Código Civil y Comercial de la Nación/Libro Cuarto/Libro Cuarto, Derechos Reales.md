---
num_libro: 4
libro: Derechos Reales
listado:
  - "[[Código Civil y Comercial de la Nación, Ley 26.994|Código Civil y Comercial de la Nación]]"
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
El derecho real es el poder jurídico, de estructura legal, que se ejerce directamente sobre su [[Cosa|objeto]], y que atribuye a su titular las facultades de persecución y preferencia, y las demás previstas en este [[Código Civil y Comercial de la Nación, Ley 26.994|Código]]. Tenemos que notar que el [[Libro Cuarto, Derechos Reales|Libro Cuarto del CC y CN]] 

Son los que comportan, para el [[Sujeto de derecho#Sujeto activo|titular]], la facultad de actuar sobre la [[Cosa|cosa]] dentro de los límites normativos y, para las demás personas, el deber de abstenerse de perturbar ese ejercicio en salvaguardia del derecho fundamental de propiedad reconocido por el [[Art. 17 de la Constitución Nacional|art. 17 de la Constitución Nacional]]. 

Son los derechos definidos en el [[Art. 1882 del CC y CN, Concepto|art. 1882 del Código Civil y Comercial]] como ![[Art. 1882 del CC y CN, Concepto#Artículo]]
![[Art. 1887 del CC y CN, Enumeración#Artículo]]

#### Estructura
---
La regulación de los derechos reales en cuanto a sus elementos, contenido, adquisición, constitución, modificación, transmisión, duración y extinción es establecida sólo por la [[Ley|ley]]. Es nula la configuración de un derecho real no previsto en la ley, o la modificación de su estructura.

#### Persecución y preferencia
---
El derecho real atribuye a su [[Sujeto de derecho#Sujeto activo|titular]] la facultad de perseguir la [[Cosa|cosa]] en poder de quien se encuentra, y de hacer valer su preferencia con respecto a otro derecho real o [[Derechos créditorios o personales|personal]] que haya obtenido oponibilidad posteriormente.

##### Derecho de persecución
---
![[Derecho de persecución#Definición]]

##### Derecho de preferencia
---
![[Derecho de preferencia#Definición]]

#### Cosa propia o ajena
---
![[Art. 1888 del CC y CN, Derechos reales sobre cosa propia o ajena#Interpretación]]

#### Carga o gravamen real
---
Las cosas se presumen sin gravamen, excepto prueba en contrario. Toda duda sobre la existencia de un gravamen real, su extensión o el modo de ejercicio, se interpreta a favor del [[Sujeto de derecho#Sujeto activo|titular]] del bien gravado.

#### Derechos reales principales y accesorios
---
![[Art. 1889 del CC y CN, Derechos reales principales y accessios#Interpretación]]

#### Derechos reales sobre cosas registrables y no registrables
---
![[Art. 1890 del CC y CN, Derechos reales sobre cosas registrables y no registrables#Interpretación]]