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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 