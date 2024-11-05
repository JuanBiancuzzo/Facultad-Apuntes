---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 377
tituloObra: C Programming Language
subtituloObra: 
nombreAutores:
  - apellido: Kernighan
    nombre: Brian W.
  - apellido: Ritchie
    nombre: Dennis M.
anio: "1988"
editorial: Pearson
edicion: "2"
volumen: 
url: 
capitulos: 
cover: C Programming Language de Brian W. Kernighan, Dennis M. Ritchie.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 238
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 