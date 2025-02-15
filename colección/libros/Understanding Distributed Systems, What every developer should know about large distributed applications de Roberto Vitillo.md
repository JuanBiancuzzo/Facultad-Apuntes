---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 331
tituloObra: Understanding Distributed Systems
subtituloObra: What every developer should know about large distributed applications
nombreAutores:
  - apellido: Vitillo
    nombre: Roberto
anio: "2021"
editorial: Roberto Vitillo
edicion: 
volumen: 
url: 
capitulos: 
cover: Understanding Distributed Systems, What every developer should know about large distributed applications.jpg
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


 