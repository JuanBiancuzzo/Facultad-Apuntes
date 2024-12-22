---
dia: 2024-12-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 783
tituloObra: The Art of Debugging with GDB, DDD, and Eclipse
subtituloObra: 
nombreAutores:
  - apellido: Matloff
    nombre: Norman
  - apellido: Salzman
    nombre: Peter Jay
anio: "2008"
editorial: No Starch Press
edicion: "1"
volumen: 
url: 
capitulos: 
cover: The Art of Debugging with GDB, DDD, and Eclipse de Norman Matloff, Peter Jay Salzman.jpg
aliases: 
orden: 604
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


 