---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 392
tituloObra: Extreme Privacy
subtituloObra: What It Takes to Disappear
nombreAutores:
  - apellido: Bazzell
    nombre: Michael
anio: 2024
editorial: CreateSpace Independent Publishing Platform
edicion: 4
volumen: 
url: 
capitulos: 
cover: Extreme Privacy, what It Takes to Disappear de Michael Bazzell.jpg
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


 