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
  - biblioteca/libro
  - nota/investigacion
orden: 138
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


 