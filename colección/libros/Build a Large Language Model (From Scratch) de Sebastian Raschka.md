---
dia: 2024-11-27
etapa: sin-empezar
tipoCita: Libro
numReferencia: 656
tituloObra: Build a Large Language Model (From Scratch)
subtituloObra: 
nombreAutores:
  - apellido: Raschka
    nombre: Sebastian
anio: 2024
editorial: Manning Publications Co
edicion: 
volumen: 
url: 
capitulos: 
cover: Build a Large Language Model (From Scratch) de Sebastian Raschka.jpg
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


 