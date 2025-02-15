---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 337
tituloObra: Grokking Algorithms
subtituloObra: An Illustrated Guide for Programmers and Other Curious People
nombreAutores:
  - apellido: Bhargava
    nombre: Aditya
anio: "2016"
editorial: Manning Publications Co
edicion: 
volumen: 
url: 
capitulos: 
cover: Grokking Algorithms, An Illustrated Guide for Programmers and Other Curious People de Aditya Bhargava.jpg
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


 