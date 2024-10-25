---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 246
tituloObra: How to lie with statistics
nombreAutores:
  - apellido: Huff
    nombre: Darrell
anio: "1954"
editorial: W. W. Norton & Company
edicion: 
volumen: 
url: 
capitulos: 
cover: How to lie with statistics de Derrell Huff.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 225
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 