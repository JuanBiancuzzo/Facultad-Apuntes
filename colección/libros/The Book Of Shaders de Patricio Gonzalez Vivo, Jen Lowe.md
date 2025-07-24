---
dia: 2024-12-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 693
tituloObra: The Book Of Shaders
subtituloObra: 
nombreAutores:
  - apellido: Gonzalez Vivo
    nombre: Patricio
  - apellido: Lowe
    nombre: Jen
anio: 2015
editorial: Patricio Gonzalez Vivo
edicion: 
volumen: 
url: https://thebookofshaders.com/
capitulos: 
cover: The Book Of Shaders de Patricio Gonzalez Vivo, Jen Lowe.png
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


 