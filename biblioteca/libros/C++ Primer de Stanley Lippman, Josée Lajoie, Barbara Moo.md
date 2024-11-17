---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 561
tituloObra: C++ Primer
subtituloObra: 
nombreAutores:
  - apellido: Lippman
    nombre: Stanley
  - apellido: Lajoie
    nombre: Josée
  - apellido: Moo
    nombre: Barbara
anio: "2012"
editorial: Addison-Wesley Professional
edicion: "5"
volumen: 
url: 
capitulos: 
cover: C++ Primer de Stanley Lippman, Josée Lajoie, Barbara Moo.jpg
aliases: 
orden: 475
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - lenguajes-de-programación/Lenguaje-cpp
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 