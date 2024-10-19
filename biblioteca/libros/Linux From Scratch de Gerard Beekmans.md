---
dia: 2024-10-16
etapa: sin-empezar
tipoCita: Libro
numReferencia: 360
tituloObra: Linux From Scratch
nombreAutores:
  - apellido: Beekmans
    nombre: Gerard
anio: "2024"
editorial: Gerard Beekmans
edicion: "12"
volumen: 
url: https://www.linuxfromscratch.org/lfs/downloads/12.1/LFS-BOOK-12.1.pdf
capitulos: 
cover: Linux From Scratch de Gerard Beekmans.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - sistemas-operativos
  - tpp
orden: 63
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual.tituloObra, autores: actual.nombreAutores, capitulos: actual.capitulos });
```
# Resumen
---


 