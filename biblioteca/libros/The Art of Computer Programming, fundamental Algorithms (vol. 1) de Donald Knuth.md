---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 555
tituloObra: The Art of Computer Programming
subtituloObra: Fundamental Algorithms
nombreAutores:
  - apellido: Knuth
    nombre: Donald
anio: "1997"
editorial: Addison-Wesley Professional
edicion: "3"
volumen: "1"
url: 
capitulos: 
cover: The Art of Computer Programming, fundamental Algorithms (vol. 1) de Donald Knuth.jpg
aliases: 
orden: 468
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 