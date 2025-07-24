---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 250
tituloObra: How Emotions Are Made
nombreAutores:
  - apellido: Feldman Barrett
    nombre: Lisa
anio: 2017
editorial: Houghton Mifflin Hardcourt
edicion: 
volumen: 
url: 
capitulos: 
cover: How Emotions Are Made de Lisa Feldman Barrett.jpg
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


 