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
anio: "2020"
editorial: O'Reilly Media, Inc.
edicion: 
volumen: 
url: 
capitulos: 
cover: Software Engineering at Google, lessons Learned from Programming Over Time de Titus Winters, Tom Manshreck, Hyrum Wright.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 206
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 