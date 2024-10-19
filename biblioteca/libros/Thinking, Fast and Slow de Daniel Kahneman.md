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
  - biblioteca/libro
  - nota/investigacion
orden: 259
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 