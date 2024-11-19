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
editorial: O'Reilly Media, Inc.
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
orden: 310
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


 