---
dia: 2025-09-08
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Elements of Causal Inference
undefined: Foundations and Learning Algorithms
numReferencia: 1062
nombreAutores:
  - nombre: Jonas
    apellido: Peters
  - nombre: Dominik
    apellido: Janzing
  - nombre: Bernhard
    apellido: Scholkopf
anio: "2017"
editorial: Massachusetts Institute of Technology Press
capitulos: []
aliases: []
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

