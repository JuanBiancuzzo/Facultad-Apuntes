---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 580
tituloObra: Cybersecurity Ops with bash
subtituloObra: Attack, Defend, and Analyze from the Command Line
nombreAutores:
  - apellido: Troncone
    nombre: Paul
  - apellido: Albing
    nombre: Carl
anio: "2019"
editorial: O'Reilly Media, Inc.
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Cybersecurity Ops with bash, attack, Defend, and Analyze from the Command Line de Paul Troncone, Carl Albing.jpg
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


 