---
dia: 2024-10-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 402
tituloObra: Computer Systems
subtituloObra: A Programmer's Perspective
nombreAutores:
  - apellido: Bryant
    nombre: Randal
  - apellido: O'Hallaron
    nombre: David
anio: "2015"
editorial: Pearson
edicion: "3"
volumen: 
url: 
capitulos: 
cover: Computer Systems, a Programmer's Perspective de Randal Bryant, David O'Hallaron.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 