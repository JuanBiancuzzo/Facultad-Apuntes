---
dia: 2024-10-11
etapa: sin-empezar
tipoCita: Libro
numReferencia: 341
tituloObra: Gentleman Programming Book
nombreAutores:
  - apellido: Buscaglia
    nombre: Alan
anio: "2024"
editorial: Alan Buscaglia
edicion: 
volumen: 
url: 
capitulos: 
cover: Gentleman Programming Book de Alan Buscaglia.png
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---
