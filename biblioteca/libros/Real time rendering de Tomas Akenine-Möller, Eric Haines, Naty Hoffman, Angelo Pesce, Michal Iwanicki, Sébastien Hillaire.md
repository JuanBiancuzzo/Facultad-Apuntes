---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 257
tituloObra: Real time rendering
nombreAutores:
  - apellido: Akenine-Möller
    nombre: Tomas
  - apellido: Haines
    nombre: Eric
  - apellido: Hoffman
    nombre: Naty
  - apellido: Pesce
    nombre: Angelo
  - apellido: Iwanicki
    nombre: Michal
  - apellido: Hillaire
    nombre: Sébastien
anio: "2018"
editorial: CRC Press
edicion: "4"
volumen: 
url: https://www.realtimerendering.com/Real-Time_Rendering_4th-TOC_Preface_Intro_Bib_Index.pdf
capitulos: 
cover: Real time rendering de Tomas Akenine-Möller, Eric Haines, Naty Hoffman, Angelo Pesce, Michal Iwanicki, Sébastien Hillaire.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 135
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 