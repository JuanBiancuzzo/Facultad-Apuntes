---
dia: 2024-11-21
etapa: sin-empezar
tipoCita: Libro
numReferencia: 606
tituloObra: Zero to Production in Rust
subtituloObra: An instroduction to backend development
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
orden: 518
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - lenguajes-de-programación/lenguaje-Rust
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 