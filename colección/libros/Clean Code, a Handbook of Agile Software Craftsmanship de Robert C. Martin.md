---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 551
tituloObra: Clean Code
subtituloObra: A Handbook of Agile Software Craftsmanship
nombreAutores:
  - apellido: Martin
    nombre: Robert C.
anio: 2008
editorial: Pearson Education, Inc.
edicion: 2008
volumen: 
url: 
capitulos: 
cover: Clean Code, a Handbook of Agile Software Craftsmanship de Robert C. Martin.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
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


 