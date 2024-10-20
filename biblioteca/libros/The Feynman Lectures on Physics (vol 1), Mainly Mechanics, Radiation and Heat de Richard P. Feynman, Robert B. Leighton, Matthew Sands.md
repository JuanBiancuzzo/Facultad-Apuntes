---
dia: 2024-10-03
etapa: sin-empezar
tipoCita: Libro
numReferencia: 304
tituloObra: The Feynman Lectures on Physics
subtituloObra: Mainly Mechanics, Radiation and Heat
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
volumen: "1"
url: https://www.feynmanlectures.caltech.edu/I_toc.html
capitulos: 
cover: The Feynman Lectures on Physics, Mainly Mechanics, Radiation and Heat de Richard P. Feynman, Robert B. Leighton, Matthew Sands.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - física
orden: 86
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 