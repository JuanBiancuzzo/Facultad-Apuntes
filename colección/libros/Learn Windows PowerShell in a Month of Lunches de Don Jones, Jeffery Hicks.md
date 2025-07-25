---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 381
tituloObra: Learn Windows PowerShell in a Month of Lunches
subtituloObra: 
nombreAutores:
  - apellido: Jones
    nombre: Don
  - apellido: Hicks
    nombre: Jeffery
anio: 2012
editorial: Manning Publications Co
edicion: 
volumen: 
url: 
capitulos: 
cover: Learn Windows PowerShell in a Month of Lunches de Don Jones, Jeffery Hicks.jpg
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


 