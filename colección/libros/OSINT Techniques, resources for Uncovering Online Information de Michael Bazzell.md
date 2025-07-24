---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 393
tituloObra: OSINT Techniques
subtituloObra: Resources for Uncovering Online Information
nombreAutores:
  - apellido: Bazzell
    nombre: Michael
anio: 2023
editorial: CreateSpace Independent Publishing Platform
edicion: 2023
volumen: 
url: 
capitulos: 
cover: OSINT Techniques, resources for Uncovering Online Information de Michael Bazzell.jpg
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


 