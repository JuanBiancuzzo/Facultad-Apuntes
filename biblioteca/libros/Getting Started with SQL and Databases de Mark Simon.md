---
dia: 2024-10-13
etapa: sin-empezar
tipoCita: Libro
numReferencia: 344
tituloObra: Getting Started with SQL and Databases
nombreAutores:
  - apellido: Simon
    nombre: Mark
anio: "2023"
editorial: Apress
edicion: 
volumen: 
url: 
capitulos: 
cover: Getting Started with SQL and Databases de Mark Simon.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - lenguajes-de-programación/lenguaje-SQL
orden: 47
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```


 