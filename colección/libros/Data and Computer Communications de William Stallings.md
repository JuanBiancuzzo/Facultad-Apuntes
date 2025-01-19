---
dia: 2024-10-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 404
tituloObra: Data and Computer Communications
subtituloObra: 
nombreAutores:
  - apellido: Stallings
    nombre: William
anio: "2013"
editorial: Pearson Education, Inc.
edicion: "8"
volumen: 
url: 
capitulos: 
cover: Data and Computer Communications de William Stallings.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 