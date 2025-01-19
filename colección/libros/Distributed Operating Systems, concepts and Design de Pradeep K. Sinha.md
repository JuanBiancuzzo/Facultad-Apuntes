---
dia: 2024-11-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 627
tituloObra: Distributed Operating Systems
subtituloObra: Concepts and Design
nombreAutores:
  - apellido: Sinha
    nombre: Pradeep K.
anio: "1996"
editorial: Wiley-IEEE Press
edicion: 
volumen: 
url: https://archive.org/details/distributedopera0000sinh_g0q4
capitulos: 
cover: Distributed Operating Systems, concepts and Design de Pradeep K. Sinha.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
  - ingeniería-en-informática/tpp/Propuesta
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


 