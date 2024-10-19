---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 280
tituloObra: Black hat python
nombreAutores:
  - apellido: Seitz
    nombre: Justin
anio: "2015"
editorial: No Starch Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Black hat python de Justin Seitz.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 195
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 