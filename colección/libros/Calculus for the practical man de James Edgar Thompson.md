---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 259
tituloObra: Calculus for the practical man
nombreAutores:
  - apellido: Thompson
    nombre: James Edgar
anio: "1923"
editorial: Macmillan Co
edicion: 
volumen: 
url: 
capitulos: 
cover: Calculus for the practical man de James Edgar Thompson.jpg
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
	await dv.view("_scripts/dataview/coleccion/libro/capitulos", { libro: actual, capitulos: actual?.capitulos });
```


 