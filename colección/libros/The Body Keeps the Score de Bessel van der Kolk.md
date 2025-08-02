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
  - colección/biblioteca/libro
  - nota/colección
  - referencia/libro
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


 