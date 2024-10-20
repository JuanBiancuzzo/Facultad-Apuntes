---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 394
tituloObra: Game Programming Patterns
subtituloObra: 
nombreAutores:
  - apellido: Nystrom
    nombre: Robert
anio: "2014"
editorial: Genever Benning
edicion: 
volumen: 
url: 
capitulos: 
cover: Game Programming Patterns de Robert Nystrom.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 108
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 