---
dia: 2026-03-10
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Control System Design
numReferencia: 1107
nombreAutores:
  - nombre: Graham Clifford
    apellido: Goodwin
  - nombre: Stefan F.
    apellido: Graebe
  - nombre: Mario E.
    apellido: Salgado
anio: "2000"
editorial: Pearson Education, Inc.
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

