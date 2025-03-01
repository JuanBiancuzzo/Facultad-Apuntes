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
  - colección/biblioteca/libro
  - nota/investigacion
  - carrera/ingeniería-en-informática/tpp/Propuesta
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


 