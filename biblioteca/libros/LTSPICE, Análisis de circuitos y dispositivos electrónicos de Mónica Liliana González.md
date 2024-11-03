---
dia: 2024-10-08
etapa: sin-empezar
tipoCita: Libro
numReferencia: 324
tituloObra: LTSPICE, Análisis de circuitos y dispositivos electrónicos
nombreAutores:
  - apellido: González
    nombre: Mónica Liliana
anio: "2018"
editorial: Editorial de la Universidad de La Plata
edicion: "1"
volumen: 
url: 
capitulos: 
cover: LTSPICE, Análisis de circuitos y dispositivos electrónicos de Mónica Liliana González.png
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - herramientas/LTSpice
orden: 114
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---
 