---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 575
tituloObra: Data Science from Scratch
subtituloObra: First Principles with Python
nombreAutores:
  - apellido: Grus
    nombre: Joel
anio: "2019"
editorial: O'Reilly Media, Inc.
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Data Science from Scratch, first Principles with Python de Joel Grus.jpg
aliases: 
orden: 494
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 