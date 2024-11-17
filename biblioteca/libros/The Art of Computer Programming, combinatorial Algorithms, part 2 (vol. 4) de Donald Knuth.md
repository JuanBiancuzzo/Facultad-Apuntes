---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 559
tituloObra: The Art of Computer Programming
subtituloObra: Combinatorial Algorithms, part 2
nombreAutores:
  - apellido: Knuth
    nombre: Donald
anio: "2022"
editorial: Addison-Wesley Professional
edicion: "1"
volumen: "4"
url: 
capitulos: 
cover: The Art of Computer Programming, combinatorial Algorithms, part 2 (vol. 4) de Donald Knuth.jpg
aliases: 
orden: 472
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


 