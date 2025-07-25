---
dia: 2024-10-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 403
tituloObra: Code Complete
subtituloObra: A Practical Handbook of Software Construction
nombreAutores:
  - apellido: McConnell
    nombre: Steve
anio: 2004
editorial: Microsoft Press
edicion: 2
volumen: 
url: 
capitulos: 
cover: Code Complete, a Practical Handbook of Software Construction de Steve McConnell.jpg
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


 