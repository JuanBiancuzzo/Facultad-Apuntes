---
dia: 2024-10-08
etapa: sin-empezar
tipoCita: Libro
numReferencia: 324
tituloObra: LTSPICE, Análisis de circuitos y dispositivos electrónicos
nombreAutores:
  - apellido: González
    nombre: Mónica Liliana
anio: 2018
editorial: Editorial de la Universidad de La Plata
edicion: 
volumen: 
url: 
capitulos: 
cover: LTSPICE, Análisis de circuitos y dispositivos electrónicos de Mónica Liliana González.png
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
 