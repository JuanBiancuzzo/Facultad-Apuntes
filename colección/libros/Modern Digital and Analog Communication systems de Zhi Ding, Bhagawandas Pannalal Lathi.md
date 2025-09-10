---
dia: 2025-09-08
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Modern Digital and Analog Communication systems
numReferencia: 1085
nombreAutores:
  - nombre: Zhi
    apellido: Ding
  - nombre: Bhagawandas Pannalal
    apellido: Lathi
anio: "2009"
editorial: Oxford University Press
edicion: "4"
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

