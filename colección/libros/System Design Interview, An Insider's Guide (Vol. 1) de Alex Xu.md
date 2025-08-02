---
dia: 2024-10-09
etapa: sin-empezar
tipoCita: Libro
numReferencia: 326
tituloObra: "System Design Interview: An Insider's Guide"
nombreAutores:
  - apellido: Xu
    nombre: Alex
anio: 2020
editorial: Byte Code LLC
edicion: 2
volumen: 1
url: 
capitulos: 
cover: System Design Interview, An Insider's Guide (Vol. 1) de Alex Xu.jpg
aliases: 
tags:
  - colección/biblioteca/libro
  - nota/colección
  - referencia/libro
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


 