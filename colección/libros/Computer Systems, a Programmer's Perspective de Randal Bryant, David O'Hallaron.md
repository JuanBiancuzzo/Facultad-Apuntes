---
dia: 2024-10-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 402
tituloObra: Computer Systems
subtituloObra: A Programmer's Perspective
nombreAutores:
  - apellido: Bryant
    nombre: Randal
  - apellido: O'Hallaron
    nombre: David
anio: 2015
editorial: Pearson Education, Inc.
edicion: 2015
volumen: 
url: 
capitulos: 
cover: Computer Systems, a Programmer's Perspective de Randal Bryant, David O'Hallaron.jpg
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
	await dv.view("_scripts/dataview/coleccion/libro/capitulos", { libro: actual, capitulos: actual?.capitulos });
```


 