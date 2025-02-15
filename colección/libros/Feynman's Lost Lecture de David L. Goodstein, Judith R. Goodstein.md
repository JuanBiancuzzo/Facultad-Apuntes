---
dia: 2024-10-03
etapa: sin-empezar
tipoCita: Libro
numReferencia: 307
tituloObra: Feynman's Lost Lecture
nombreAutores:
  - apellido: Goodstein
    nombre: David L.
  - apellido: Goodstein
    nombre: Judith R.
anio: "1997"
editorial: Vintage
edicion: 
volumen: 
url: https://archive.org/details/12073960FeynmanSLostLecture
capitulos: 
cover: Feynman's Lost Lecture de David L. Goodstein, Judith R. Goodstein.jpg
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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 