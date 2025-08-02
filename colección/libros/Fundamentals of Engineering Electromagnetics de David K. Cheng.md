---
dia: 2024-11-15
etapa: sin-empezar
tipoCita: Libro
numReferencia: 539
tituloObra: Fundamentals of Engineering Electromagnetics
subtituloObra: 
nombreAutores:
  - apellido: Cheng
    nombre: David K.
anio: 2019
editorial: Pearson Education, Inc.
edicion: 
volumen: 
url: 
capitulos: 
cover: Fundamentals of Engineering Electromagnetics de David K. Cheng.jpg
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


 