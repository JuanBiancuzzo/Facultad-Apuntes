---
dia: 2024-10-09
etapa: sin-empezar
tipoCita: Libro
numReferencia: 328
tituloObra: Structure and Interpretation of Computer Programs
nombreAutores:
  - apellido: Abelson
    nombre: Harold
  - apellido: Sussman
    nombre: Gerald Jay
anio: "1996"
editorial: " e Massachuses Institute of Technology"
edicion: "2"
volumen: 
url: https://web.mit.edu/6.001/6.037/sicp.pdf
capitulos: 
cover: Structure and Interpretation of Computer Programs de Harold Abelson, Gerald Jay Sussman.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 365
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 