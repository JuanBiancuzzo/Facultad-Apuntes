---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 378
tituloObra: Algorithms
subtituloObra: Notes for Professionals
nombreAutores:
  - apellido: Stack Overflow
    nombre: ""
anio: "2017"
editorial: GoalKicker
edicion: 
volumen: 
url: https://goalkicker.com/AlgorithmsBook/
capitulos: 
cover: Algorithms, notes for Professionals de Stack Overflow.png
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


 