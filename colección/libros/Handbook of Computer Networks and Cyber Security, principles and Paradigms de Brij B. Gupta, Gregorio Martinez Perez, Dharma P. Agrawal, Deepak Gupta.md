---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 391
tituloObra: Handbook of Computer Networks and Cyber Security
subtituloObra: Principles and Paradigms
nombreAutores:
  - apellido: Gupta
    nombre: Brij B.
  - apellido: Perez
    nombre: Gregorio Martinez
  - apellido: Agrawal
    nombre: Dharma P.
  - apellido: Gupta
    nombre: Deepak
anio: "2020"
editorial: Springer
edicion: 
volumen: 
url: 
capitulos: 
cover: Handbook of Computer Networks and Cyber Security, principles and Paradigms de Brij B. Gupta, Gregorio Martinez Perez, Dharma P. Agrawal, Deepak Gupta.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
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


 