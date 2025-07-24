---
dia: 2024-11-26
etapa: sin-empezar
tipoCita: Libro
numReferencia: 648
tituloObra: Frontiers of Test Validity Theory
subtituloObra: Measurement, Causation, and Meaning
nombreAutores:
  - apellido: Markus
    nombre: Keith A.
  - apellido: Borsboom
    nombre: Denny
anio: 2013
editorial: Routledge
edicion: 2013
volumen: 
url: 
capitulos: 
cover: Frontiers of Test Validity Theory, measurement, Causation, and Meaning de Keith A. Markus, Denny Borsboom.jpg
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


 