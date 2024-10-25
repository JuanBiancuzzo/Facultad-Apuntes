---
dia: 2024-10-09
etapa: sin-empezar
tipoCita: Libro
numReferencia: 325
tituloObra: Operating Systems, Three Easy Pieces
nombreAutores:
  - apellido: Arpaci-Desseau
    nombre: Ramzi H.
  - apellido: Arpaci-Desseau
    nombre: Andrea C.
anio: "2014"
editorial: Arpaci-Desseau Books
edicion: 
volumen: 
url: 
capitulos: 
cover: Operating Systems, Three Easy Pieces de Ramzi H. Arpaci-Desseau, Andrea C. Arpaci-Desseau.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 358
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 