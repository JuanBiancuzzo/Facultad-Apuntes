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
orden: 474
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


 