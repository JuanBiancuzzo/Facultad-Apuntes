---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 281
tituloObra: Designing data-intensive applications
nombreAutores:
  - apellido: Kleppmann
    nombre: Martin
anio: "2017"
editorial: O'Reilly
edicion: 
volumen: 
url: 
capitulos: 
cover: Designing data-intensive applications de Martin Kleppmann.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 342
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 