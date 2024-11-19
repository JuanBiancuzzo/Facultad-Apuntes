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
anio: "2010"
editorial: No Starch Press
edicion: "1"
volumen: 
url: 
capitulos: 
cover: The Linux Programming Interface, a Linux and UNIX System Programming Handbook de Michael Kerrisk.jpg
aliases: 
orden: 495
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - ingeniería-en-informática/tpp
  - sistemas-operativos
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 