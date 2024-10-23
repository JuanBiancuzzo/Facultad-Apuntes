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
  - biblioteca/libro
  - nota/investigacion
orden: 255
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 