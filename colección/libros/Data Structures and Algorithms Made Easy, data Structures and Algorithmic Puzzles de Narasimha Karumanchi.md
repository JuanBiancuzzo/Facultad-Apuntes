---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 553
tituloObra: Data Structures and Algorithms Made Easy
subtituloObra: Data Structures and Algorithmic Puzzles
nombreAutores:
  - apellido: Karumanchi
    nombre: Narasimha
anio: "2026"
editorial: CareerMonk Publications
edicion: "5"
volumen: 
url: 
capitulos: 
cover: Data Structures and Algorithms Made Easy, data Structures and Algorithmic Puzzles de Narasimha Karumanchi.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
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


 