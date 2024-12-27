---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 368
tituloObra: Designing Machine Learning Systems
subtituloObra: An Iterative Process for Production-Ready Applications
nombreAutores:
  - apellido: Huyen
    nombre: Chip
anio: "2022"
editorial: O'Reilly Media, Inc.
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Designing Machine Learning Systems, an Iterative Process for Production-Ready Applications de Chip Huyen.jpg
aliases: 
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


 