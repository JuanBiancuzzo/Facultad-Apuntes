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


 