---
dia: 2025-09-08
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Bayesian Methods for Hackers
undefined: Probabilistic Programming and Bayesian Inference
numReferencia: 1059
nombreAutores:
  - nombre: Cameron
    apellido: Davidson-Pilon
anio: "2015"
editorial: Addison-Wesley Professional
edicion: "1"
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

