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
  - biblioteca/libro
  - nota/investigacion
orden: 192
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 