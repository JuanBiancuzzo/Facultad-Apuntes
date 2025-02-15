---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 372
tituloObra: Site Reliability Engineering
subtituloObra: How Google Runs Production Systems
nombreAutores:
  - apellido: Murphy
    nombre: Niall Richard
  - apellido: Beyer
    nombre: Betsy
  - apellido: Jones
    nombre: Chris
  - apellido: Petoff
    nombre: Jennifer
anio: "2016"
editorial: O'Reilly Media, Inc.
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Site Reliability Engineering, how Google Runs Production Systems de Niall Richard Murphy, Betsy Beyer, Chris Jones, Jennifer Petoff.jpg
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


 