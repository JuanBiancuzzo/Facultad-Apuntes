---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 247
tituloObra: The Body Keeps the Score
nombreAutores:
  - apellido: van der Kolk
    nombre: Bessel
anio: "2014"
editorial: Viking Press
edicion: 
volumen: 
url: 
capitulos: 
cover: The Body Keeps the Score de Bessel van der Kolk.jpg
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


 