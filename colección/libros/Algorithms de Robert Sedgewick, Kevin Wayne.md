---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 554
tituloObra: Algorithms
subtituloObra: 
nombreAutores:
  - apellido: Sedgewick
    nombre: Robert
  - apellido: Wayne
    nombre: Kevin
anio: "2011"
editorial: Addison-Wesley Professional
edicion: "4"
volumen: 
url: 
capitulos: 
cover: Algorithms de Robert Sedgewick, Kevin Wayne.jpg
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


