---
dia: 2024-11-07
etapa: sin-empezar
tipoCita: Libro
numReferencia: 485
tituloObra: Building Scientific Apparatus
subtituloObra: 
nombreAutores:
  - apellido: Moore
    nombre: John H.
  - apellido: Davis
    nombre: Christopher C.
  - apellido: Coplan
    nombre: Michael A.
anio: "2009"
editorial: Cambridge University Press
edicion: "4"
volumen: 
url: 
capitulos: 
cover: Building Scientific Apparatus de John H. Moore, Christopher C. Davis, Michael A. Coplan.jpg
aliases: 
orden: 400
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


 