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
anio: 2019
editorial: Addison-Wesley Professional
edicion: 
volumen: 
url: 
capitulos: 
cover: The Pragmatic Programmer, your journey to mastery de David Thomas, Andrew Hunt.jpg
aliases: 
tags:
  - colección/biblioteca/libro
  - nota/colección
  - referencia/libro
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


 