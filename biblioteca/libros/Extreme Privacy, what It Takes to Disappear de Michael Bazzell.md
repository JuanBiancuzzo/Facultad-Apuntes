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
anio: "2024"
editorial: CreateSpace Independent Publishing Platform
edicion: "4"
volumen: 
url: 
capitulos: 
cover: Extreme Privacy, what It Takes to Disappear de Michael Bazzell.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 320
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 