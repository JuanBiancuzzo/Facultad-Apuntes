---
dia: 2024-10-03
etapa: sin-empezar
tipoCita: Libro
numReferencia: 305
tituloObra: The Feynman Lectures on Physics
subtituloObra: Mainly Electromagnetism and Matter
nombreAutores:
  - apellido: Feynman
    nombre: Richard P.
  - apellido: Leighton
    nombre: Robert B.
  - apellido: Sands
    nombre: Matthew
anio: "1964"
editorial: Addison Wesley
edicion: 
volumen: "2"
url: https://www.feynmanlectures.caltech.edu/II_toc.html
capitulos: 
cover: The Feynman Lectures on Physics, Mainly Electromagnetism and Matter de Richard P. Feynman, Robert B. Leighton, Matthew Sands.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - física
orden: 47
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 