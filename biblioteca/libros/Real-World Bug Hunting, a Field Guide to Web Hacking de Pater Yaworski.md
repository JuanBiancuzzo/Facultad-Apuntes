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
anio: "2019"
editorial: No Starch Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Real-World Bug Hunting, a Field Guide to Web Hacking de Pater Yaworski.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 320
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 