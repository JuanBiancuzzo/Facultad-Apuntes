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
orden: 467
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - algoritmos
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


