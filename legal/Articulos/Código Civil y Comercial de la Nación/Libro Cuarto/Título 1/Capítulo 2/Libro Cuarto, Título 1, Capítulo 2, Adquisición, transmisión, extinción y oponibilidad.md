---
num_capítulo: 2
capítulo: "Adquisición, transmisión, extinción y oponibilidad"
listado:
 - "[[Libro Cuarto, Derechos Reales|Libro Cuarto]]"
 - "[[Libro Cuarto, Título 1, Disposiciones generales|Título 1]]"
---
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
La adquisición derivada por actos entre vivos de un [[Libro Cuarto, Derechos Reales|derecho real]] requiere la concurrencia de [[Art. 1892 del CC y CN, Título y modos suficientes|título y modo suficiente]].

Donde se entiende por título, el [[Acto jurídico|acto jurídico]] revestido de las formas establecidas por la [[Ley|ley]], que tiene por finalidad transmitir o constituir el derecho real. El modo suficiente se puede dar de distintas formas, la tradición posesoria y la inscripción registral

#### Prescripción
---
Dicho de un [[Derecho|derecho]], de una responsabilidad o de una [[Obligación|obligación]]: Extinguirse por haber transcurrido cierto período de tiempo, especialmente un plazo legal

En términos legales, por el transcurso del tiempo se pueden dar

##### Prescripción adquisitiva
---
![[Art. 1897 del CC y CN, Prescripción adquisitiva#Interpretación]]

##### Prescripción liberatoria
---
Lo que prescribe es una [[Obligación|obligación]], el deudor queda liberado de ella.
