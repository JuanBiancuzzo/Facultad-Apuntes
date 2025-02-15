---
dia: 2024-10-09
etapa: sin-empezar
tipoCita: Libro
numReferencia: 327
tituloObra: "System Design Interview: An Insider's Guide"
nombreAutores:
  - apellido: Xu
    nombre: Alex
  - apellido: Lam
    nombre: Sahn
anio: "2022"
editorial: Byte Code LLC
edicion: 
volumen: "2"
url: 
capitulos: 
cover: System Design Interview, An Insider's Guide (Vol. 2) de Alex Xu, Sahn Lam.jpg
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


 