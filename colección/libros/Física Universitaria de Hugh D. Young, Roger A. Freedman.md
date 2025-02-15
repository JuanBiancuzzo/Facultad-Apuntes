---
dia: 2024-10-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 361
tituloObra: Física Universitaria
nombreAutores:
  - apellido: Young
    nombre: Hugh D.
  - apellido: Freedman
    nombre: Roger A.
anio: "2009"
editorial: Addison-Wesley Professional
edicion: "12"
volumen: "1"
url: 
capitulos: 
cover: Física Universitaria de Hugh D. Young, Roger A. Freedman.png
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


 