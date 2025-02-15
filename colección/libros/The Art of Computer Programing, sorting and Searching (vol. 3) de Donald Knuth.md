---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 557
tituloObra: The Art of Computer Programing
subtituloObra: Sorting and Searching
nombreAutores:
  - apellido: Knuth
    nombre: Donald
anio: "1998"
editorial: Addison-Wesley Professional
edicion: "2"
volumen: "3"
url: 
capitulos: 
cover: The Art of Computer Programing, sorting and Searching (vol. 3) de Donald Knuth.jpg
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


 