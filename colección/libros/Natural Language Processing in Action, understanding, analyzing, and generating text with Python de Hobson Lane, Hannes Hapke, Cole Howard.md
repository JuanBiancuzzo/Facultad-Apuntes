---
dia: 2024-11-27
etapa: sin-empezar
tipoCita: Libro
numReferencia: 662
tituloObra: Natural Language Processing in Action
subtituloObra: Understanding, analyzing, and generating text with Python
nombreAutores:
  - apellido: Lane
    nombre: Hobson
  - apellido: Hapke
    nombre: Hannes
  - apellido: Howard
    nombre: Cole
anio: "2019"
editorial: Manning Publications Co
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Natural Language Processing in Action, understanding, analyzing, and generating text with Python de Hobson Lane, Hannes Hapke, Cole Howard.jpg
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


 