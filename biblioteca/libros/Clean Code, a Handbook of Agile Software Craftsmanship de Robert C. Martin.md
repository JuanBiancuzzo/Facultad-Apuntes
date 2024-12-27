---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 551
tituloObra: Clean Code
subtituloObra: A Handbook of Agile Software Craftsmanship
nombreAutores:
  - apellido: Martin
    nombre: Robert C.
anio: "2008"
editorial: Pearson Education, Inc.
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Clean Code, a Handbook of Agile Software Craftsmanship de Robert C. Martin.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
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


 