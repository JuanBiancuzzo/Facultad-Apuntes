---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 395
tituloObra: Programming Game AI by Example
subtituloObra: 
nombreAutores:
  - apellido: Buckland
    nombre: Mat
anio: "2004"
editorial: Jones & Bartlett Learning
edicion: 
volumen: 
url: 
capitulos: 
cover: Programming Game AI by Example de Mat Buckland.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 336
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```


 