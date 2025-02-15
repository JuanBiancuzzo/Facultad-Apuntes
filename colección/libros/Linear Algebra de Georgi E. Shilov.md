---
dia: 2024-11-19
etapa: sin-empezar
tipoCita: Libro
numReferencia: 601
tituloObra: Linear Algebra
subtituloObra: 
nombreAutores:
  - apellido: Shilov
    nombre: Georgi E.
anio: "1977"
editorial: Dover Publications
edicion: 
volumen: 
url: 
capitulos: 
cover: Linear Algebra de Georgi E. Shilov.jpg
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


 