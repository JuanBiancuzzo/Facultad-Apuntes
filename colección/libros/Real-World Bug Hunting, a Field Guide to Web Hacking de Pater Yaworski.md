---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 384
tituloObra: Real-World Bug Hunting
subtituloObra: A Field Guide to Web Hacking
nombreAutores:
  - apellido: Yaworski
    nombre: Pater
anio: 2019
editorial: No Starch Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Real-World Bug Hunting, a Field Guide to Web Hacking de Pater Yaworski.jpg
aliases: 
tags:
  - colección/biblioteca/libro
  - nota/colección
  - referencia/libro
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


 