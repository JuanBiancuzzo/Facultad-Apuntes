---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 334
tituloObra: Writing an interpreter in Go
nombreAutores:
  - apellido: Ball
    nombre: Thorsten
anio: "2016"
editorial: Thorsten Ball
edicion: 
volumen: 
url: 
capitulos: 
cover: Writing an interpreter in go de Thorsten Ball.jpg
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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 