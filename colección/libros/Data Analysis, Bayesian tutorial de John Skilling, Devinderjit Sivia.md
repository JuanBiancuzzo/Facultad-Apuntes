---
dia: 2025-09-08
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Data Analysis
undefined: Bayesian tutorial
numReferencia: 1064
nombreAutores:
  - nombre: John
    apellido: Skilling
  - nombre: Devinderjit
    apellido: Sivia
anio: "2006"
editorial: Oxford University Press
edicion: "2"
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

