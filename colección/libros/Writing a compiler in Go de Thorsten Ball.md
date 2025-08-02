---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 333
tituloObra: Writing a compiler in Go
nombreAutores:
  - apellido: Ball
    nombre: Thorsten
anio: 2018
editorial: Thorsten Ball
edicion: 
volumen: 
url: 
capitulos: 
cover: Writing a Compiler in Go de Thorsten Ball.jpg
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


 