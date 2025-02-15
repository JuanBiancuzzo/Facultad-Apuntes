---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 558
tituloObra: The Art of Computer Programming
subtituloObra: Combinatorial Algorithms, Parte 1
nombreAutores:
  - apellido: Knuth
    nombre: Donald
anio: "2011"
editorial: Addison-Wesley Professional
edicion: "1"
volumen: "4"
url: 
capitulos: 
cover: The Art of Computer Programming, combinatorial Algorithms, Parte 1 (vol. 4) de Donald Knuth.jpg
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


 