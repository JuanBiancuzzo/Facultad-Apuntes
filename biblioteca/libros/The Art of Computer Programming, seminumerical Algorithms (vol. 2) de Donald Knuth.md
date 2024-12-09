---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 556
tituloObra: The Art of Computer Programming
subtituloObra: Seminumerical Algorithms
nombreAutores:
  - apellido: Knuth
    nombre: Donald
anio: "1997"
editorial: Addison-Wesley Professional
edicion: "3"
volumen: "2"
url: 
capitulos: 
cover: The Art of Computer Programming, seminumerical Algorithms (vol. 2) de Donald Knuth.jpg
aliases: 
orden: 469
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


 