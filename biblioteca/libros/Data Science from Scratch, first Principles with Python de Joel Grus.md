---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 575
tituloObra: Data Science from Scratch
subtituloObra: First Principles with Python
nombreAutores:
  - apellido: Grus
    nombre: Joel
anio: "2019"
editorial: O'Reilly Media, Inc.
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Data Science from Scratch, first Principles with Python de Joel Grus.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
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


 