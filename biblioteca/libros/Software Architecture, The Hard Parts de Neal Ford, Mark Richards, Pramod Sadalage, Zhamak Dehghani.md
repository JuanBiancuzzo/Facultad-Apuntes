---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 332
tituloObra: Software Architecture, The Hard Parts
nombreAutores:
  - apellido: Ford
    nombre: Neal
  - apellido: Richards
    nombre: Mark
  - apellido: Sadalage
    nombre: Pramod
  - apellido: Dehghani
    nombre: Zhamak
anio: "2021"
editorial: O'Reilly Media, Inc.
edicion: 
volumen: 
url: 
capitulos: 
cover: Software Architecture, The Hard Parts de Neal Ford, Mark Richards, Pramod Sadalage, Zhamak Dehghani.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 187
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 