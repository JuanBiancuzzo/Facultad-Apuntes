---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 369
tituloObra: Software Engineering at Google
subtituloObra: Lessons Learned from Programming Over Time
nombreAutores:
  - apellido: Winters
    nombre: Titus
  - apellido: Manshreck
    nombre: Tom
  - apellido: Wright
    nombre: Hyrum
anio: 2020
editorial: O'Reilly Media, Inc.
edicion: 
volumen: 
url: 
capitulos: 
cover: Software Engineering at Google, lessons Learned from Programming Over Time de Titus Winters, Tom Manshreck, Hyrum Wright.jpg
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


 