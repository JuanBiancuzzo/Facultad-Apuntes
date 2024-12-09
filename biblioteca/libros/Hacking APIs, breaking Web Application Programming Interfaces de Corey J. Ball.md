---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 386
tituloObra: Hacking APIs
subtituloObra: Breaking Web Application Programming Interfaces
nombreAutores:
  - apellido: Ball
    nombre: Corey J.
anio: "2022"
editorial: No Starch Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Hacking APIs, breaking Web Application Programming Interfaces de Corey J. Ball.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 206
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


 