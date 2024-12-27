---
dia: 2024-12-03
etapa: sin-empezar
tipoCita: Libro
numReferencia: 690
tituloObra: Practical electronics for inventors
subtituloObra: 
nombreAutores:
  - apellido: Scherz
    nombre: Paul
  - apellido: Monk
    nombre: Simon
anio: "2016"
editorial: The McGraw-Hill Companies
edicion: "4"
volumen: 
url: 
capitulos: 
cover: Practical electronics for inventors de Paul Scherz, Simon Monk.jpg
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


 