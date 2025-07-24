---
dia: 2024-10-11
etapa: sin-empezar
tipoCita: Libro
numReferencia: 341
tituloObra: Gentleman Programming Book
nombreAutores:
  - apellido: Buscaglia
    nombre: Alan
anio: 2024
editorial: Alan Buscaglia
edicion: 
volumen: 
url: 
capitulos: 
cover: Gentleman Programming Book de Alan Buscaglia.png
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
