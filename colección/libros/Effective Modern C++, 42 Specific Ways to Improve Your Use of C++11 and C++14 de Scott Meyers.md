---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 562
tituloObra: Effective Modern C++
subtituloObra: 42 Specific Ways to Improve Your Use of C++11 and C++14
nombreAutores:
  - apellido: Meyers
    nombre: Scott
anio: "2014"
editorial: O'Reilly Media, Inc.
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Effective Modern C++, 42 Specific Ways to Improve Your Use of C++11 and C++14 de Scott Meyers.jpg
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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 