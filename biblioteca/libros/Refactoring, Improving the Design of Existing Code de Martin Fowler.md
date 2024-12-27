---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 339
tituloObra: Refactoring, Improving the Design of Existing Code
nombreAutores:
  - apellido: Fowler
    nombre: Martin
anio: "2019"
editorial: Addison-Wesley Professional
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Refactoring, Improving the Design of Existing Code de Martin Fowler.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
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


 