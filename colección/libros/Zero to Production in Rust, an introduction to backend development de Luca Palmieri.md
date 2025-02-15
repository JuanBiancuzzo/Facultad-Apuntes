---
dia: 2024-11-21
etapa: sin-empezar
tipoCita: Libro
numReferencia: 606
tituloObra: Zero to Production in Rust
subtituloObra: An introduction to backend development
nombreAutores:
  - apellido: Palmieri
    nombre: Luca
anio: "2022"
editorial: Independently published
edicion: 
volumen: 
url: 
capitulos: 
cover: Zero to Production in Rust, an instroduction to backend development de Luca Palmieri.jpg
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


 