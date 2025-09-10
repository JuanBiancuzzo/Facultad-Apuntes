---
dia: 2025-09-08
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Elements of Information Theory
numReferencia: 1061
nombreAutores:
  - nombre: Thomas M.
    apellido: Cover
  - nombre: Joy Aloysius
    apellido: Thomas
anio: "2006"
editorial: Wiley-Interscience
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

