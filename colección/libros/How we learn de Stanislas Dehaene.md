---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 249
tituloObra: How we learn
nombreAutores:
  - apellido: Dehaene
    nombre: Stanislas
anio: "2020"
editorial: Viking Press
edicion: 
volumen: 
url: 
capitulos: 
cover: How we learn de Stanislas Dehaene.jpg
aliases: 
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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 