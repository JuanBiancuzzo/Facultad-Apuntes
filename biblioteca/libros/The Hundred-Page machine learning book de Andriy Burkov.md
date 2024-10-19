---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 366
tituloObra: The Hundred-Page machine learning book
subtituloObra: 
nombreAutores:
  - apellido: Burkov
    nombre: Andriy
anio: "2019"
editorial: Eleven Languages
edicion: 
volumen: 
url: 
capitulos: 
cover: The Hundred-Page machine learning book de Andriy Burkov.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 256
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 