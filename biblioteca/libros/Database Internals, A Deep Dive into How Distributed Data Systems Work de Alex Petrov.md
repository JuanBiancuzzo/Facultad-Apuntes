---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 330
tituloObra: Database Internals
subtituloObra: A Deep Dive into How Distributed Data Systems Work
nombreAutores:
  - apellido: Petrov
    nombre: Alex
anio: "2019"
editorial: O'Reilly
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Database Internals, A Deep Dive into How Distributed Data Systems Work de Alex Petrov.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 217
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 