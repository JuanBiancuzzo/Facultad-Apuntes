---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 281
tituloObra: Designing data-intensive applications
nombreAutores:
  - apellido: Kleppmann
    nombre: Martin
anio: 2017
editorial: O'Reilly Media, Inc.
edicion: 
volumen: 
url: 
capitulos: 
cover: Designing data-intensive applications de Martin Kleppmann.jpg
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


 