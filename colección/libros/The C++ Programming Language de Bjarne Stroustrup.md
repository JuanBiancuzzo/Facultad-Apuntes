---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 560
tituloObra: The C++ Programming Language
subtituloObra: 
nombreAutores:
  - apellido: Stroustrup
    nombre: Bjarne
anio: "2013"
editorial: Addison-Wesley Professional
edicion: "4"
volumen: 
url: 
capitulos: 
cover: The c++ Programming Language de Bjarne Stroustrup.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/coleccion/libro/capitulos", { libro: actual, capitulos: actual?.capitulos });
```


 