---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 376
tituloObra: Pro MERN Stack
subtituloObra: Full Stack Web App Development with Mongo, Express, React and Node
nombreAutores:
  - apellido: Subramanian
    nombre: Vasan
anio: "2019"
editorial: Apress
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Pro MERN Stack, full Stack Web App Development with Mongo, Express, React and Node de Vasan Subramanian.jpg
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


 