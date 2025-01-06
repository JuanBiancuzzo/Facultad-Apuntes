---
dia: 2024-11-07
etapa: sin-empezar
tipoCita: Libro
numReferencia: 485
tituloObra: Building Scientific Apparatus
subtituloObra: 
nombreAutores:
  - apellido: Moore
    nombre: John H.
  - apellido: Davis
    nombre: Christopher C.
  - apellido: Coplan
    nombre: Michael A.
anio: "2009"
editorial: Cambridge University Press
edicion: "4"
volumen: 
url: 
capitulos: 
cover: Building Scientific Apparatus de John H. Moore, Christopher C. Davis, Michael A. Coplan.jpg
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


 