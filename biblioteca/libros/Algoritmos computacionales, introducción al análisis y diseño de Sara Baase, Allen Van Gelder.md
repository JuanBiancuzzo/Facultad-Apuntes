---
dia: 2024-10-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 401
tituloObra: Algoritmos computacionales
subtituloObra: Introducción al análisis y diseño
nombreAutores:
  - apellido: Baase
    nombre: Sara
  - apellido: Van Gelder
    nombre: Allen
anio: "2000"
editorial: Addison Wesley
edicion: "3"
volumen: 
url: 
capitulos: 
cover: Algoritmos computacionales, introducción al análisis y diseño de Sara Baase, Allen Van Gelder.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 