---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 269
tituloObra: The elements of mechanical design
nombreAutores:
  - apellido: Skakoon
    nombre: James G.
anio: "2008"
editorial: ASME
edicion: 
volumen: 
url: 
capitulos: 
cover: The elements of mechanical design de James G. Skakoon.jpg
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


 