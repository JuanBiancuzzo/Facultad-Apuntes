---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 583
tituloObra: A new Algebra
subtituloObra: 
nombreAutores:
  - apellido: Barnard
    nombre: Samuel
  - apellido: Child
    nombre: James Mark
anio: 2022
editorial: Legare Street Press
edicion: 
volumen: .nan
url: 
capitulos: 
cover: A new Algebra (vol. 1) de Samuel Barnard, J M Child.jpg
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


 