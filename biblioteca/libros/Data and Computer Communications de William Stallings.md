---
dia: 2024-10-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 404
tituloObra: Data and Computer Communications
subtituloObra: 
nombreAutores:
  - apellido: Stallings
    nombre: William
anio: "2013"
editorial: Pearson
edicion: "8"
volumen: 
url: 
capitulos: 
cover: Data and Computer Communications de William Stallings.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 