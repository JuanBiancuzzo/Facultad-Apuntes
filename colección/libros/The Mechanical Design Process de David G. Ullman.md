---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 270
tituloObra: The Mechanical Design Process
nombreAutores:
  - apellido: Ullman
    nombre: David G.
anio: 1991
editorial: The McGraw-Hill Companies
edicion: 4
volumen: 
url: 
capitulos: 
cover: The Mechanical Design Process de David G. Ullman.jpg
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


 