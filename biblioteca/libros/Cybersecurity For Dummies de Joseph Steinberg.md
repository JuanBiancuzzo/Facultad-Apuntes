---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 271
tituloObra: Cybersecurity For Dummies
nombreAutores:
  - apellido: Steinberg
    nombre: Joseph
anio: "2022"
editorial: Wiley
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Cybersecurity For Dummies de Joseph Steinberg.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 10
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 