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
anio: "2018"
editorial: Addison-Wesley Professional
edicion: "2"
volumen: 
url: 
capitulos: 
cover: A Tour of C++ de Bjarne Stroustrup.jpg
aliases: 
orden: 500
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - lenguajes-de-programación/Lenguaje-cpp
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


 