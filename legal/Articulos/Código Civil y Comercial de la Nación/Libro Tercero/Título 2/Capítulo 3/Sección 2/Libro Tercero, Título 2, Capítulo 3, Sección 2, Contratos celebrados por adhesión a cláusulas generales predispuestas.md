---
num_sección: 2
sección: Contratos celebrados por adhesión a cláusulas generales predispuestas
listado:
 - "[[Libro Tercero, Derechos Personales|Libro Tercero]]"
 - "[[Libro Tercero, Título 2, Capítulo 3, Formación del consentimiento|Capítulo 3]]"
 - "[[Libro Tercero, Título 2, Contratos en general|Título 2]]"
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
Los contratos por adhesión a cláusulas predispuestas, también llamados contratos prerredactados, son aquellos contratos en los que uno de los contratantes presta su conformidad o, con fuerza expresiva, adhiere a cláusulas generales predispuestas unilateralmente por la otra parte o por un tercero, sin que el adherente haya participado en su redacción ([[Art. 984 del CC y CN, Definición|art. 984]]).

Como es fácil advertir, las partes no se encuentran en un mismo plano de igualdad jurídica a la hora de celebrar el contrato, como ocurre en el llamado contrato paritario, en el que tienen la posibilidad real de discutir el contenido contractual, pues no existe entre ellas desigualdad jurídica o, al menos, esta no es notoria. En cambio, en los contratos por adhesión, las diferencias se patentizan en el hecho de que la redacción del contrato es impuesta por una de las partes y a la otra no le queda otra opción que aceptarla o no contratar.

Estos contratos por adhesión constituyen el grueso de los negocios contractuales modernos. Piénsese en los contratos de seguro, tarjeta de crédito, apertura de cuenta corriente bancaria, compraventa de automotores sin uso, compraventa de cosas mediante planes de ahorro previo, clubes de campo, cementerios privados, tiempo compartido, leasing, servicio de medicina prepaga, etcétera.

En algunos casos, dentro de este contrato prerredactado, existe un cuerpo de disposiciones impuestas por el estipulante que están concebidas para la generalidad de los negocios que ese sujeto pueda celebrar en el futuro, más allá del contrato en sí mismo que se quiere realizar. Justamente por ello, cuando estas disposiciones están concebidas para una generalidad de negocios se les reconoce caracteres de generalidad, abstracción, uniformidad y tipicidad, y se les da el nombre de condiciones generales de contratación.

#### Requisitos
---
![[Art. 985 del CC y CN, Requisitos#Interpretación]]

#### Cláusulas particulares
---
![[Art. 986 del CC y CN, Cláusulas particulares#Interpretación]]

#### Clausulas abusivas
---
![[Art. 988 del CC y CN, Cláusulas abusivas#Interpretación]]

#### Interpretación
---
![[Art. 987 del CC y CN, Interpretación#Interpretación]]

#### Control judicial
---
![[Art. 989 del CC y CN, Control judicial de las cláusulas abusivas#Interpretación]]