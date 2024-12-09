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
orden: 307
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 