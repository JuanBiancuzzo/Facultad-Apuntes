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
  - colección/biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 