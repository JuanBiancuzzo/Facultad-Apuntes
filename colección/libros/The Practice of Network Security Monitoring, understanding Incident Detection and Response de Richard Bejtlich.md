---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 383
tituloObra: The Practice of Network Security Monitoring
subtituloObra: Understanding Incident Detection and Response
nombreAutores:
  - apellido: Bejtlich
    nombre: Richard
anio: "2013"
editorial: No Starch Press
edicion: "1"
volumen: 
url: 
capitulos: 
cover: The Practice of Network Security Monitoring, understanding Incident Detection and Response de Richard Bejtlich.jpg
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


 