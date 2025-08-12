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
anio: 1996
editorial: Wiley-IEEE Press
edicion: 
volumen: 
url: https://archive.org/details/distributedopera0000sinh_g0q4
capitulos: 
cover: Distributed Operating Systems, concepts and Design de Pradeep K. Sinha.jpg
aliases: 
tags:
  - carrera/ingeniería-en-informática/tpp/Propuesta
  - colección/biblioteca/libro
  - nota/colección
  - nota/facultad
  - referencia/libro
vinculoFacultad:
  - tema: Propuesta
    capitulo: 1
    materia: Trabajo Profesional de Ingeniería Informática
    carrera: Ingeniería en informática
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


 