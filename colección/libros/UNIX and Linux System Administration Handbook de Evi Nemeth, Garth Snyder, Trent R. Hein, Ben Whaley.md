---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 335
tituloObra: UNIX and Linux System Administration Handbook
nombreAutores:
  - apellido: Nemeth
    nombre: Evi
  - apellido: Snyder
    nombre: Garth
  - apellido: Hein
    nombre: Trent R.
  - apellido: Whaley
    nombre: Ben
anio: "2011"
editorial: Pearson Education, Inc.
edicion: "4"
volumen: 
url: 
capitulos: 
cover: UNIX and Linux System Administration Handbook de Evi Nemeth, Garth Snyder, Trent R. Hein, Ben Whaley.jpg
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


 