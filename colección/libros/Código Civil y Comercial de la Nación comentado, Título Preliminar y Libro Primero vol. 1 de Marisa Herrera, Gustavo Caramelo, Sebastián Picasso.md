---
dia: 2025-09-21
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Código Civil y Comercial de la Nación comentado
undefined: Título Preliminar y Libro Primero
numReferencia: 1088
nombreAutores:
  - nombre: Marisa
    apellido: Herrera
  - nombre: Gustavo
    apellido: Caramelo
  - nombre: Sebastián
    apellido: Picasso
anio: "2015"
editorial: Ministerio de Justicia y Derechos Humanos
volumen: "1"
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

