---
dia: 2024-10-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 400
tituloObra: Fundamentos de programación
subtituloObra: Algoritmos, estructuras de datos y objetos
nombreAutores:
  - apellido: Aguilar
    nombre: Luis Joyanes
anio: "2008"
editorial: McGraw-Hill Interamericana de España S.L
edicion: "5"
volumen: 
url: 
capitulos: 
cover: Fundamentos de programación, algoritmos, estructuras de datos y objetos de Luis Joyanes Aguilar.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 370
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


 