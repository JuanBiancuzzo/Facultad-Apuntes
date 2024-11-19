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
  - biblioteca/libro
  - nota/investigacion
  - cybersecurity
orden: 95
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


 