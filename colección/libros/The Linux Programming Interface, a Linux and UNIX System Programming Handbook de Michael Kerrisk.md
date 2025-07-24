---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 576
tituloObra: The Linux Programming Interface
subtituloObra: A Linux and UNIX System Programming Handbook
nombreAutores:
  - apellido: Kerrisk
    nombre: Michael
anio: 2010
editorial: No Starch Press
edicion: 2010
volumen: 
url: 
capitulos: 
cover: The Linux Programming Interface, a Linux and UNIX System Programming Handbook de Michael Kerrisk.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
  - carrera/ingeniería-en-informática/tpp/Propuesta
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


 