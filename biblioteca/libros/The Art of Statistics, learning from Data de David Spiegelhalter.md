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
  - biblioteca/libro
  - nota/investigacion
orden: 81
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 