---
dia: 2024-10-09
etapa: sin-empezar
tipoCita: Libro
numReferencia: 328
tituloObra: Structure and Interpretation of Computer Programs
nombreAutores:
  - apellido: Abelson
    nombre: Harold
  - apellido: Sussman
    nombre: Gerald Jay
anio: 1996
editorial: Massachusetts Institute of Technology Press
edicion: 1996
volumen: 
url: https://web.mit.edu/6.001/6.037/sicp.pdf
capitulos: 
cover: Structure and Interpretation of Computer Programs de Harold Abelson, Gerald Jay Sussman.jpg
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


 