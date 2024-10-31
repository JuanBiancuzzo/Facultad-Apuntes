---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 375
tituloObra: Skills of a Successful Software Engineer
subtituloObra: 
nombreAutores:
  - apellido: Doglio
    nombre: Fernando
anio: "2022"
editorial: Manning
edicion: 
volumen: 
url: 
capitulos: 
cover: Skills of a Successful Software Engineer de Fernando Doglio.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 210
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 