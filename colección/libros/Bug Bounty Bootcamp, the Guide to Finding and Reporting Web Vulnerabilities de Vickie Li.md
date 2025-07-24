---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 385
tituloObra: Bug Bounty Bootcamp
subtituloObra: The Guide to Finding and Reporting Web Vulnerabilities
nombreAutores:
  - apellido: Li
    nombre: Vickie
anio: 2021
editorial: No Starch Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Bug Bounty Bootcamp, the Guide to Finding and Reporting Web Vulnerabilities de Vickie Li.jpg
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
