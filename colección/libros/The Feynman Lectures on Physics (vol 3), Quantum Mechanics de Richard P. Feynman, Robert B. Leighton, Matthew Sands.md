---
dia: 2024-10-03
etapa: sin-empezar
tipoCita: Libro
numReferencia: 306
tituloObra: The Feynman Lectures on Physics
nombreAutores:
  - apellido: Feynman
    nombre: Richard P.
  - apellido: Leighton
    nombre: Robert B.
  - apellido: Sands
    nombre: Matthew
subtituloObra: Quantum Mechanics
anio: 1964
editorial: Addison-Wesley Professional
edicion: 
volumen: .nan
url: https://www.feynmanlectures.caltech.edu/III_toc.html
capitulos: 
cover: The Feynman Lectures on Physics, Quantum Mechanics de Richard P. Feynman, Robert B. Leighton, Matthew Sands.jpg
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


 