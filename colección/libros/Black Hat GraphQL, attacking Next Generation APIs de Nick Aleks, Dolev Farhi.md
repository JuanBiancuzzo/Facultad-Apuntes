---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 387
tituloObra: Black Hat GraphQL
subtituloObra: Attacking Next Generation APIs
nombreAutores:
  - apellido: Aleks
    nombre: Nick
  - apellido: Farhi
    nombre: Dolev
anio: "2023"
editorial: No Starch Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Black Hat GraphQL, attacking Next Generation APIs de Nick Aleks, Dolev Farhi.jpg
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


 