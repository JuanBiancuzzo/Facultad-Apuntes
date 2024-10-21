---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 272
tituloObra: Hacker's delight
nombreAutores:
  - apellido: Warren Jr.
    nombre: Henry S.
anio: "2012"
editorial: Pearson Education
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Hacker's delight de Henry S. Warren Jr.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 164
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 