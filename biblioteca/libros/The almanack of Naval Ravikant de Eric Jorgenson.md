---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 244
tituloObra: The almanack of Naval Ravikant
nombreAutores:
  - apellido: Jorgenson
    nombre: Eric
anio: "2020"
editorial: Magrathea Publishing
edicion: 
volumen: 
url: 
capitulos: 
cover: The almanack of Naval Ravikant de Eric Jorgenson.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/mostarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 