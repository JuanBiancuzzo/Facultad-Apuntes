---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 373
tituloObra: Web Development for beginners
subtituloObra: Learn HTML/CSS/Javascript step by step with this Coding Guide, Programming Fuide for beginners, Website development
nombreAutores:
  - apellido: Mastery
    nombre: White Belt
anio: "2020"
editorial: White Belt Mastery
edicion: 
volumen: 
url: 
capitulos: 
cover: Web Development for beginners, learn HTML,CSS,Javascript step by step with this Coding Guide, Programming Fuide for beginners, Website development de White Belt Mastery.jpg
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


 