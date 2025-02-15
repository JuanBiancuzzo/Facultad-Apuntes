---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 246
tituloObra: How to lie with statistics
nombreAutores:
  - apellido: Huff
    nombre: Darrell
anio: "1954"
editorial: W. W. Norton & Company
edicion: 
volumen: 
url: 
capitulos: 
cover: How to lie with statistics de Derrell Huff.jpg
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


 