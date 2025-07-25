---
dia: 2024-11-26
etapa: sin-empezar
tipoCita: Libro
numReferencia: 644
tituloObra: Modern Psychometrics with R
subtituloObra: 
nombreAutores:
  - apellido: Mair
    nombre: Patrick
anio: 2018
editorial: Springer
edicion: 
volumen: 
url: 
capitulos: 
cover: Modern Psychometrics with R de Patrick Mair.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
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


 