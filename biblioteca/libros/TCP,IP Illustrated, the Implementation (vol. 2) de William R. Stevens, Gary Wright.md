---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 578
tituloObra: TCP/IP Illustrated
subtituloObra: The Implementation
nombreAutores:
  - apellido: Stevens
    nombre: William R.
  - apellido: Wright
    nombre: Gary
anio: "2017"
editorial: Addison-Wesley Professional
edicion: "1"
volumen: "2"
url: 
capitulos: 
cover: TCP,IP Illustrated, the Implementation (vol. 2) de William R. Stevens, Gary Wright.jpg
aliases:
  - TCP/IP Illustrated, the Implementation (vol. 2) de William R. Stevens, Gary Wright
orden: 497
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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```


 