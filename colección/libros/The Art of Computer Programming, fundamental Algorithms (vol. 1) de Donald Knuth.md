---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 555
tituloObra: The Art of Computer Programming
subtituloObra: Fundamental Algorithms
nombreAutores:
  - apellido: Knuth
    nombre: Donald
anio: 1997
editorial: Addison-Wesley Professional
edicion: 3
volumen: 1
url: 
capitulos: 
cover: The Art of Computer Programming, fundamental Algorithms (vol. 1) de Donald Knuth.jpg
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


 