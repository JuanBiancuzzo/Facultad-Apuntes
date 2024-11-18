---
dia: 2024-11-15
etapa: sin-empezar
tipoCita: Libro
numReferencia: 539
tituloObra: Fundamentals of Engineering Electromagnetics
subtituloObra: 
nombreAutores:
  - apellido: Cheng
    nombre: David K.
anio: "2019"
editorial: Pearson Education, Inc.
edicion: 
volumen: 
url: 
capitulos: 
cover: Fundamentals of Engineering Electromagnetics de David K. Cheng.jpg
aliases: 
orden: 451
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


 