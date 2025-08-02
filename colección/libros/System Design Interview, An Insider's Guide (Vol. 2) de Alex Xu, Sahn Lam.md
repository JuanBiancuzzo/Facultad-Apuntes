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
anio: 2022
editorial: Byte Code LLC
edicion: 
volumen: .nan
url: 
capitulos: 
cover: System Design Interview, An Insider's Guide (Vol. 2) de Alex Xu, Sahn Lam.jpg
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


 