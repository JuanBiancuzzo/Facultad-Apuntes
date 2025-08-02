---
dia: 2024-11-27
etapa: sin-empezar
tipoCita: Libro
numReferencia: 654
tituloObra: Modern Psychometrics
subtituloObra: The Science of Psychological Assessment
nombreAutores:
  - apellido: Rust
    nombre: John
  - apellido: Kosinski
    nombre: Michal
  - apellido: Stillwell
    nombre: David
anio: 2020
editorial: Routledge
edicion: 4
volumen: 
url: 
capitulos: 
cover: Modern Psychometrics, the Science of Psychological Assessment de John Rust, Michal Kosinski, David Stillwell.jpg
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


 