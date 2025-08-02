---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 379
tituloObra: Introducing Python
subtituloObra: Modern Computing in Simple Packages
nombreAutores:
  - apellido: Lubanovic
    nombre: Bill
anio: "2014"
editorial: O'Reilly Media, Inc.
edicion: 
volumen: 
url: 
capitulos: 
cover: Introducing Python, modern Computing in Simple Packages de Bill Lubanovic.jpg
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


 