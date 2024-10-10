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
editorial: Massachusetts Institute of Technology
edicion: "3"
volumen: 
url: 
capitulos: 
cover: Introduction to Algorithms de Thomas H. Cormen, Charles E. Leiserson, Ronald L Rivest Rivest, Clifford Stein.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 