---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 374
tituloObra: JavaScript for Kids
subtituloObra: A Playful Introduction to Programming
nombreAutores:
  - apellido: Morgan
    nombre: Nick
anio: "2014"
editorial: No Starch Press
edicion: 
volumen: 
url: 
capitulos: 
cover: JavaScript for Kids, a Playful Introduction to Programming de Nick Morgan.jpg
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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 