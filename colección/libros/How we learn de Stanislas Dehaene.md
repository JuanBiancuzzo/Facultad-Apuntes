---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 249
tituloObra: How we learn
nombreAutores:
  - apellido: Dehaene
    nombre: Stanislas
anio: 2020
editorial: Viking Press
edicion: 
volumen: 
url: 
capitulos: 
cover: How we learn de Stanislas Dehaene.jpg
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


 