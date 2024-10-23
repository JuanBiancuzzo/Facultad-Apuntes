---
dia: 2024-10-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 403
tituloObra: Code Complete
subtituloObra: A Practical Handbook of Software Construction
nombreAutores:
  - apellido: McConnell
    nombre: Steve
anio: "2004"
editorial: Microsoft Press
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Code Complete, a Practical Handbook of Software Construction de Steve McConnell.jpg
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


 