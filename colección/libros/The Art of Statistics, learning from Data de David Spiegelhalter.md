---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 365
tituloObra: The Art of Statistics
subtituloObra: Learning from Data
nombreAutores:
  - apellido: Spiegelhalter
    nombre: David
anio: "2019"
editorial: Penguin Books
edicion: 
volumen: 
url: 
capitulos: 
cover: The Art of Statistics, learning from Data de David Spiegelhalter.jpg
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


 