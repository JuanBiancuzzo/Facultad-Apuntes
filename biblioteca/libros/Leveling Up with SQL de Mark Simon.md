---
dia: 2024-10-13
etapa: sin-empezar
tipoCita: Libro
numReferencia: 345
tituloObra: Leveling Up with SQL
nombreAutores:
  - apellido: Simon
    nombre: Mark
anio: "2023"
editorial: Apress
edicion: 
volumen: 
url: 
capitulos: 
cover: Leveling Up with SQL de Mark Simon.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - lenguajes-de-programación/lenguaje-SQL
orden: 94
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 