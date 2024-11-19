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
anio: "2022"
editorial: Legare Street Press
edicion: 
volumen: "1"
url: 
capitulos: []
cover: A new Algebra (vol. 1) de Samuel Barnard, J M Child.jpg
aliases: []
orden: 502
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```


 