---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 581
tituloObra: A Tour of C++
subtituloObra: ""
nombreAutores:
  - apellido: Stroustrup
    nombre: Bjarne
anio: 2018
editorial: Addison-Wesley Professional
edicion: 2018
volumen: 
url: 
capitulos: 
cover: A Tour of C++ de Bjarne Stroustrup.jpg
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


 