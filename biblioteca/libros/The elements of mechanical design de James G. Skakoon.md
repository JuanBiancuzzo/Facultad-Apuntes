---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 269
tituloObra: The elements of mechanical design
nombreAutores:
  - apellido: Skakoon
    nombre: James G.
anio: "2008"
editorial: ASME
edicion: 
volumen: 
url: 
capitulos: 
cover: The elements of mechanical design de James G. Skakoon.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 220
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 