---
dia: 2024-11-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 625
tituloObra: Distributed Systems
subtituloObra: Principles and Paradigms
nombreAutores:
  - apellido: Tanenbaum
    nombre: Andrew S.
anio: 2016
editorial: CreateSpace Independent Publishing Platform
edicion: 2
volumen: 
url: 
capitulos: 
cover: Distributed Systems, pRinciples and Paradigms de Andrew S. Tanenbaum.jpg
aliases: 
tags:
  - carrera/ingeniería-en-informática/tpp/Propuesta
  - colección/biblioteca/libro
  - nota/colección
  - nota/facultad
  - referencia/libro
vinculoFacultad:
  - "[[ingeniería en informática/tpp/Propuesta/Resumen.md]]"
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


 