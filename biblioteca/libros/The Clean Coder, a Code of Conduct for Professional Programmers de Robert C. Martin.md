---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 552
tituloObra: The Clean Coder
subtituloObra: A Code of Conduct for Professional Programmers
nombreAutores:
  - apellido: Martin
    nombre: Robert C.
anio: "2011"
editorial: Pearson Education, Inc.
edicion: "1"
volumen: 
url: 
capitulos: 
cover: The Clean Coder, a Code of Conduct for Professional Programmers de Robert C. Martin.jpg
aliases: 
orden: 465
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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```


 