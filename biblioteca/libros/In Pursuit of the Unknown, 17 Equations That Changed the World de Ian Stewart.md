---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 582
tituloObra: In Pursuit of the Unknown
subtituloObra: 17 Equations That Changed the World
nombreAutores:
  - apellido: Stewart
    nombre: Ian
anio: "2012"
editorial: Basic Books
edicion: "1"
volumen: 
url: 
capitulos: 
cover: In Pursuit of the Unknown, 17 Equations That Changed the World de Ian Stewart.jpg
aliases: 
orden: 501
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
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


 