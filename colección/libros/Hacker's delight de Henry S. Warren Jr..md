---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 272
tituloObra: Hacker's delight
nombreAutores:
  - apellido: Warren Jr.
    nombre: Henry S.
anio: 2012
editorial: Pearson Education, Inc.
edicion: 2
volumen: 
url: 
capitulos: 
cover: Hacker's delight de Henry S. Warren Jr.jpg
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


 