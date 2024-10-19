---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 276
tituloObra: The web applications hacke's handbook
nombreAutores:
  - apellido: Stuttard
    nombre: Dafydd
  - apellido: Pinto
    nombre: Marcus
anio: "2011"
editorial: Wiley Publishing
edicion: "2"
volumen: 
url: 
capitulos: 
cover: The web applications hacke's handbook de Dafydd Stuttard, Marcus Pinto.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 97
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 