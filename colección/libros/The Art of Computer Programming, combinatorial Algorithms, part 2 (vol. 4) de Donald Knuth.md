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
anio: 2022
editorial: Addison-Wesley Professional
edicion: 
volumen: 4
url: 
capitulos: 
cover: The Art of Computer Programming, combinatorial Algorithms, part 2 (vol. 4) de Donald Knuth.jpg
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


 