---
dia: 2024-11-27
etapa: sin-empezar
tipoCita: Libro
numReferencia: 660
tituloObra: Dive into Deep Learning
subtituloObra: 
nombreAutores:
  - apellido: Zhang
    nombre: Aston
  - apellido: Lipton
    nombre: Zachary C.
  - apellido: Li
    nombre: Mu
  - apellido: Smola
    nombre: Alexander J.
anio: "2023"
editorial: Cambridge University Press
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Dive into Deep Learning de Aston Zhang, Zachary C. Lipton, Mu Li, Alexander J. Smola.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 