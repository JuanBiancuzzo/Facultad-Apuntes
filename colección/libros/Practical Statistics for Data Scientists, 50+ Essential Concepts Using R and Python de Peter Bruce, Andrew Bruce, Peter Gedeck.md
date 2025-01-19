---
dia: 2024-11-19
etapa: sin-empezar
tipoCita: Libro
numReferencia: 603
tituloObra: Practical Statistics for Data Scientists
subtituloObra: 50+ Essential Concepts Using R and Python
nombreAutores:
  - apellido: Bruce
    nombre: Peter
  - apellido: Bruce
    nombre: Andrew
  - apellido: Gedeck
    nombre: Peter
anio: "2020"
editorial: O'Reilly Media, Inc.
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Practical Statistics for Data Scientists, 50+ Essential Concepts Using R and Python de Peter Bruce, Andrew Bruce, Peter Gedeck.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
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


 