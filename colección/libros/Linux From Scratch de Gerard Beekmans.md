---
dia: 2024-10-16
etapa: sin-empezar
tipoCita: Libro
numReferencia: 360
tituloObra: Linux From Scratch
nombreAutores:
  - apellido: Beekmans
    nombre: Gerard
anio: 2024
editorial: Gerard Beekmans
edicion: 
volumen: 
url: https://www.linuxfromscratch.org/lfs/downloads/12.1/LFS-BOOK-12.1.pdf
capitulos: 
cover: Linux From Scratch de Gerard Beekmans.jpg
aliases: 
tags:
  - carrera/ingeniería-en-informática/tpp/Propuesta
  - colección/biblioteca/libro
  - nota/colección
  - nota/facultad
  - referencia/libro
vinculoFacultad:
  - "[[ingeniería en informática/tpp/Propuesta/Resumen.md]]"
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


 