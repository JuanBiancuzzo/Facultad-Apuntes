---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 379
tituloObra: Introducing Python
subtituloObra: Modern Computing in Simple Packages
nombreAutores:
  - apellido: Lubanovic
    nombre: Bill
anio: "2014"
editorial: O'Reilly Media
edicion: 
volumen: 
url: 
capitulos: 
cover: Introducing Python, modern Computing in Simple Packages de Bill Lubanovic.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 59
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 