---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 381
tituloObra: Learn Windows PowerShell in a Month of Lunches
subtituloObra: 
nombreAutores:
  - apellido: Jones
    nombre: Don
  - apellido: Hicks
    nombre: Jeffery
anio: "2012"
editorial: Manning Publications Co
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Learn Windows PowerShell in a Month of Lunches de Don Jones, Jeffery Hicks.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - cybersecurity
orden: 43
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 