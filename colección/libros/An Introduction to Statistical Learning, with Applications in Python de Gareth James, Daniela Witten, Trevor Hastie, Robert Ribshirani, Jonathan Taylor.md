---
dia: 2024-10-10
etapa: sin-empezar
tipoCita: Libro
numReferencia: 336
tituloObra: An Introduction to Statistical Learning
subtituloObra: With Applications in Python
nombreAutores:
  - apellido: James
    nombre: Gareth
  - apellido: Witten
    nombre: Daniela
  - apellido: Hastie
    nombre: Trevor
  - apellido: Ribshirani
    nombre: Robert
  - apellido: Taylor
    nombre: Jonathan
anio: "2023"
editorial: Springer
edicion: 
volumen: 
url: 
capitulos: 
cover: An Introduction to Statistical Learning, with Applications in Python de Gareth James, Daniela Witten, Trevor Hastie, Robert Ribshirani, Jonathan Taylor.jpg
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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 