---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 245
tituloObra: Fooled by Randomness
nombreAutores:
  - apellido: Taleb
    nombre: Nissim Nicholas
anio: "2001"
editorial: Random House
edicion: 
volumen: 
url: 
capitulos: 
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
### Resumen
---


 