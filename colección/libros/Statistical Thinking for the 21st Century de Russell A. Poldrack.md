---
dia: 2024-11-24
etapa: sin-empezar
tipoCita: Libro
numReferencia: 632
tituloObra: Statistical Thinking for the 21st Century
subtituloObra: 
nombreAutores:
  - apellido: Poldrack
    nombre: Russell A.
anio: 2018
editorial: Stanford University
edicion: 
volumen: 
url: 
capitulos: 
cover: Statistical Thinking for the 21st Century de Russell A. Poldrack.png
aliases: 
tags:
  - colección/biblioteca/libro
  - nota/colección
  - referencia/libro
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/coleccion/libro/capitulos", { libro: actual, capitulos: actual?.capitulos });
```


 