---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 367
tituloObra: Deep Learning
subtituloObra: 
nombreAutores:
  - apellido: Goodfellow
    nombre: Ian
  - apellido: Bengio
    nombre: Yoshua
  - apellido: Courville
    nombre: Aaron
anio: "2016"
editorial: Massachusetts Institute of Technology Press
edicion: 
volumen: 
url: https://www.deeplearningbook.org/
capitulos: 
cover: Deep Learning de Ian Goodfellow, Yoshua Bengio, Aaron Courville.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 259
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 