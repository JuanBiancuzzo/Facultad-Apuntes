---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 280
tituloObra: Black hat python
nombreAutores:
  - apellido: Seitz
    nombre: Justin
anio: 2015
editorial: No Starch Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Black hat python de Justin Seitz.jpg
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


 