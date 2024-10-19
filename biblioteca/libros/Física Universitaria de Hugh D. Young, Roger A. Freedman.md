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
editorial: Addison Wesley
edicion: "12"
volumen: "1"
url: 
capitulos: 
cover: Física Universitaria de Hugh D. Young, Roger A. Freedman.png
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 42
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 