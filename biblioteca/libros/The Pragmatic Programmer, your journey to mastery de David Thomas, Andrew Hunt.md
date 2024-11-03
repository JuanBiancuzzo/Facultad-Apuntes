---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 371
tituloObra: The Pragmatic Programmer
subtituloObra: Your journey to mastery
nombreAutores:
  - apellido: Thomas
    nombre: David
  - apellido: Hunt
    nombre: Andrew
anio: "2019"
editorial: Addison Wesley
edicion: "2"
volumen: 
url: 
capitulos: 
cover: The Pragmatic Programmer, your journey to mastery de David Thomas, Andrew Hunt.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 253
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 