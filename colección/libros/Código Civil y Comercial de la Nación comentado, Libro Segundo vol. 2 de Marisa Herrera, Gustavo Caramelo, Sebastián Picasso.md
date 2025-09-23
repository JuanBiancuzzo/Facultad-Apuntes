---
dia: 2025-09-21
etapa: sin-empezar
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
tipoCita: Libro
tituloObra: Código Civil y Comercial de la Nación comentado
numReferencia: 1089
nombreAutores:
  - nombre: Marisa
    apellido: Herrera
  - nombre: Gustavo
    apellido: Caramelo
  - nombre: Sebastián
    apellido: Picasso
anio: "2015"
editorial: Ministerio de Justicia y Derechos Humanos
volumen: "2"
capitulos: []
aliases: []
undefined: Libro Segundo
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

