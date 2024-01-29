---
num_título: 2
título: Contratos en general
listado:
  - "[[Libro Tercero, Derechos Personales|Libro Tercero]]"
---
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

		nombre = `${nombre}, \n${pagina.capítulo} [[${pagina.file.path}|?]]`;
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

### Interpretación
---
Como enuncia el [[Art. 957 del CC y CN, Definición|art. 957 del CC y CN]] la definición de contrato es: ![[Art. 957 del CC y CN, Definición#Artículo]]
![[Art. 957 del CC y CN, Definición#Interpretación]]

El [[Código Civil y Comercial de la Nación (CC y CN)|código]] se inclina por formular estas distinciones, pues el artículo. 957 se refiere a las relaciones jurídicas patrimoniales, en tanto que el [[Art. 1003 del CC y CN, Disposiciones generales|artículo 1003]] establece que el objeto del contrato debe ser susceptible de valoración económica.

El código ha puesto particular énfasis en que la [[Ley|ley]] sea aplicada de conformidad con la [[Constitución Nacional|Constitución]] y los tratados de derechos humanos. Así, el [[Art. 1 del CC y CN, Fuentes y aplicación|artículo 1°]] dispone que ![[Art. 1 del CC y CN, Fuentes y aplicación#Artículo]]
El [[Art. 2 del CC y CN, Interpretación|artículo 2°]] añade que ![[Art. 12 del CC y CN, Orden público. Fraude a la ley#Artículo]]
Cierto es que la pirámide normativa consagrada por la [[Constitución Nacional|Constitución Nacional]], en el [[Art. 75 de la Ley 24.430, de la Constitución Nacional#Inciso N°22|artículo 75, inciso 22, párrafos 2° y 3°]], pone por encima de todo a la propia Constitución y a los tratados de derechos humanos, pero debe recordarse también que la referida norma, en su párrafo 1°, otorga a los tratados y concordatos jerarquía superior a las leyes, por lo que la aplicación del propio Código no podrá prescindir de tales tratados y concordatos, a pesar de que no hayan sido mencionados

#### Importancia del contrato
---
El contrato es el principal instrumento de que se valen los hombres para urdir entre ellos el tejido infinito de sus [[Relación jurídica|relaciones jurídicas]], es decir, es la principal fuente de [[Obligación|obligaciones]]. La persona vive contratando o cumpliendo contratos, desde operaciones de gran envergadura hasta contratos cotidianos que la persona realiza muchas veces sin advertir que está contratado: Así ocurre cuando trabaja en relación de dependencia ([[Contrato de trabajo|contrato de trabajo]]), cuando sube a un colectivo ([[Contrato de transporte|contrato de transporte]]), cuando compra golosinas ([[Contrato del consumidor|compravente]]), cuando adquiere entradas para ir al cine o al fútbol ([[Contrato de espectáculo público|contrato de espectáculo público]])

El contrato adquiere su máxima importancia en un régimen de [[Economía|economía]] capitalista liberal. Desde el punto de vista ético, la importancia de los contratos se aprecia desde un doble ángulo
* Hay una cuestión [[Moral|moral]] envuelta en el deber de hacer honor a la palabra empeñada
* Los contratos deben ser un instrumento de la realización del bien común
