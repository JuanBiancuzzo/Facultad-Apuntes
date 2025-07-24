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
edicion: 1997
volumen: 1997
url: 
capitulos: 
cover: The Art of Computer Programming, fundamental Algorithms (vol. 1) de Donald Knuth.jpg
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


 