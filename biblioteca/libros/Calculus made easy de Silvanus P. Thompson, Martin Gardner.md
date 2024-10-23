---
dia: 2024-10-11
etapa: sin-empezar
tipoCita: Libro
numReferencia: 340
tituloObra: Calculus made easy
nombreAutores:
  - apellido: Thompson
    nombre: Silvanus P.
  - apellido: Gardner
    nombre: Martin
anio: "1998"
editorial: St. Martin's Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Calculus made easy de Silvanus P. Thompson, Martin Gardner.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 18
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 