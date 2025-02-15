---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 248
tituloObra: Thinking, Fast and Slow
nombreAutores:
  - apellido: Kahneman
    nombre: Daniel
anio: "2011"
editorial: Farrar, Straus and Giroux
edicion: 
volumen: 
url: 
capitulos: 
cover: Thinking, Fast and Slow de Daniel Kahneman.jpg
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


 