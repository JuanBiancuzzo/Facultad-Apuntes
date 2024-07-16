---
num_parte: 4
parte: "De la Edición"
listado:
 - "[[Ley de la propiedad intelectual, Ley 11.723|Ley de la propiedad intelectual]]"
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
Hay contrato de edición cuando el [[Sujeto de derecho#Sujeto activo|titular]] del [[Art. 965 del CC y CN, Derecho de propiedad|derecho de propiedad]] sobre una obra intelectual, se obliga a entregarla a un editor y esta a reproducirla, difundirla y venderla.

El titular conserva su derecho de propiedad intelectual, salvo que renunciare a ello en el contrato de edición
