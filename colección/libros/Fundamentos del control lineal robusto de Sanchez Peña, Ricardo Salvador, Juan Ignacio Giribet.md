---
dia: 2026-03-10
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Fundamentos del control lineal robusto
numReferencia: 1108
nombreAutores:
  - nombre: Sanchez
    apellido: Peña
  - nombre: Ricardo
    apellido: Salvador
  - nombre: Juan Ignacio
    apellido: Giribet
anio: "2021"
editorial: Eudeba
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

