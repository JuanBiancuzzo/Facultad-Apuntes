---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 330
tituloObra: Database Internals
subtituloObra: A Deep Dive into How Distributed Data Systems Work
nombreAutores:
  - apellido: Petrov
    nombre: Alex
anio: 2019
editorial: O'Reilly Media, Inc.
edicion: 2019
volumen: 
url: 
capitulos: 
cover: Database Internals, A Deep Dive into How Distributed Data Systems Work de Alex Petrov.jpg
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


 