---
dia: 2024-12-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 781
tituloObra: Using the GNU Compiler Collection
subtituloObra: 
nombreAutores:
  - apellido: Stallman
    nombre: Richard
anio: "2004"
editorial: Free Software Foundation
edicion: 
volumen: 
url: 
capitulos: 
cover: Using the GNU Compiler Collection de Richard Stallman.jpg
aliases: 
tags:
  - colección/biblioteca/libro
  - nota/colección
  - referencia/libro
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


 