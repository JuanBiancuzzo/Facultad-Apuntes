---
dia: 2024-11-19
etapa: sin-empezar
tipoCita: Libro
numReferencia: 599
tituloObra: The Mathematical Principles of Natural Philosophy
subtituloObra: The Principia
nombreAutores:
  - apellido: Newton
    nombre: Isaac
  - apellido: Motte
    nombre: Andrew
anio: "2018"
editorial: CreateSpace Independent Publishing Platform
edicion: 
volumen: 
url: 
capitulos: 
cover: The Mathematical Principles of Natural Philosophy, the Principia de Isaac Newton, Andrew Motte.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 