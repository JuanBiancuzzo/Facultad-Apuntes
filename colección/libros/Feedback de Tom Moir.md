---
dia: 2025-09-25
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Feedback
numReferencia: 1096
nombreAutores:
  - nombre: Tom
    apellido: Moir
anio: "2020"
editorial: Springer
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

