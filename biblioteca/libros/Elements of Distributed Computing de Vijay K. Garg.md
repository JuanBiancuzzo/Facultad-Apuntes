---
dia: 2024-11-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 626
tituloObra: Elements of Distributed Computing
subtituloObra: 
nombreAutores:
  - apellido: Garg
    nombre: Vijay K.
anio: "2002"
editorial: Wiley-IEEE Press
edicion: 
volumen: 
url: https://archive.org/details/elementsofdistri0000garg
capitulos: 
cover: Elements of Distributed Computing de Vijay K. Garg.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - ingeniería-en-informática/tpp
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


 