---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 370
tituloObra: Crafting Interpreters
subtituloObra: 
nombreAutores:
  - apellido: Nystrom
    nombre: Robert
anio: "2015"
editorial: Robert Nystrom
edicion: 
volumen: 
url: https://www.craftinginterpreters.com/
capitulos: 
cover: Crafting Interpreters de Robert Nystrom.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 