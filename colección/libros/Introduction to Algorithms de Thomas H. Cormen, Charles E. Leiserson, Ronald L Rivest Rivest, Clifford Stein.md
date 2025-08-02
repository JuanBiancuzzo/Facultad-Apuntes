---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 338
tituloObra: Introduction to Algorithms
nombreAutores:
  - apellido: Cormen
    nombre: Thomas H.
  - apellido: Leiserson
    nombre: Charles E.
  - apellido: Rivest
    nombre: Ronald L Rivest
  - apellido: Stein
    nombre: Clifford
anio: "2009"
editorial: Massachusetts Institute of Technology Press
edicion: "3"
volumen: 
url: 
capitulos: 
cover: Introduction to Algorithms de Thomas H. Cormen, Charles E. Leiserson, Ronald L Rivest Rivest, Clifford Stein.jpg
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


 