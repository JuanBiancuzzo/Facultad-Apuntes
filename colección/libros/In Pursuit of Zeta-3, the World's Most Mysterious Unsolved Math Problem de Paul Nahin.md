---
dia: 2024-11-19
etapa: sin-empezar
tipoCita: Libro
numReferencia: 598
tituloObra: In Pursuit of Zeta-3
subtituloObra: The World's Most Mysterious Unsolved Math Problem
nombreAutores:
  - apellido: Nahin
    nombre: Paul
anio: "2021"
editorial: Princeton University Press
edicion: 
volumen: 
url: 
capitulos: 
cover: In Pursuit of Zeta-3, the World's Most Mysterious Unsolved Math Problem de Paul Nahin.jpg
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


 