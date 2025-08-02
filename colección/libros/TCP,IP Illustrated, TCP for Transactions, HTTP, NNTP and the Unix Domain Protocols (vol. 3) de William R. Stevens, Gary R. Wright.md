---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 579
tituloObra: TCP/IP Illustrated
subtituloObra: TCP for Transactions, HTTP, NNTP and the Unix Domain Protocols
nombreAutores:
  - apellido: Stevens
    nombre: William R.
  - apellido: Wright
    nombre: Gary R.
anio: 1996
editorial: Addison-Wesley Professional
edicion: 
volumen: 3
url: 
capitulos: 
cover: TCP,IP Illustrated, TCP for Transactions, HTTP, NNTP and the Unix Domain Protocols (vol. 3) de William R. Stevens, Gary R. Wright.jpg
aliases:
  - TCP/IP Illustrated, TCP for Transactions, HTTP, NNTP and the Unix Domain Protocols (vol. 3) de William R. Stevens, Gary R. Wright
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


 