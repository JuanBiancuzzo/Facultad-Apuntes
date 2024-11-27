---
dia: 2024-11-27
etapa: sin-empezar
tipoCita: Libro
numReferencia: 659
tituloObra: Machine Learning
subtituloObra: A Probabilistic Perspective
nombreAutores:
  - apellido: Murphy
    nombre: Kevin P.
anio: "2012"
editorial: Massachusetts Institute of Technology Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Machine Learning, a Probabilistic Perspective de Kevin P. Murphy.jpg
aliases: 
orden: 586
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 