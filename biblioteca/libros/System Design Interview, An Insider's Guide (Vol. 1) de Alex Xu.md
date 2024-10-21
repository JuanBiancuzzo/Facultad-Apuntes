---
dia: 2024-10-09
etapa: sin-empezar
tipoCita: Libro
numReferencia: 326
tituloObra: "System Design Interview: An Insider's Guide"
nombreAutores:
  - apellido: Xu
    nombre: Alex
anio: "2020"
editorial: Byte Code LLC
edicion: "2"
volumen: "1"
url: 
capitulos: 
cover: System Design Interview, An Insider's Guide (Vol. 1) de Alex Xu.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 312
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 