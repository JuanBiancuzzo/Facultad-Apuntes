---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 250
tituloObra: How Emotions Are Made
nombreAutores:
  - apellido: Feldman Barrett
    nombre: Lisa
anio: "2017"
editorial: Houghton Mifflin Hardcourt
edicion: 
volumen: 
url: 
capitulos: 
cover: How Emotions Are Made de Lisa Feldman Barrett.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 84
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


 