---
num_parte: 6
parte: "De la venta"
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
El autor o sus derechohabientes pueden enajenar o ceder total o parcialmente su obra. La validez es por el plazo que determina la ley y el adquirente no puede alterar su título, forma y contenido 

El autor conserva el derecho a exigir fidelidad de su título y texto y la mención de su nombre 

Debe registrarse en el Registro Nacional de la Propiedad Intelectual
