---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 564
tituloObra: Introduction to Machine Learning with Python
subtituloObra: A Guide for Data Scientists
nombreAutores:
  - apellido: Müller
    nombre: Andreas C.
  - apellido: Guido
    nombre: Sarah
anio: "2016"
editorial: O'Reilly Media, Inc.
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Introduction to Machine Learning with Python, a Guide for Data Scientists de Andreas C. Müller, Sarah Guido.jpg
aliases: 
orden: 479
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


 