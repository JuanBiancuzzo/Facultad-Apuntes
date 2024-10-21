---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 273
tituloObra: Creating animated cartoons with character
nombreAutores:
  - apellido: Murray
    nombre: Joe
anio: "2010"
editorial: Watson-Guptill Publications
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Creating animated cartoons with character de Joe Murray.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 307
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 