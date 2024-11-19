---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 258
tituloObra: Game Engine Architecture
nombreAutores:
  - apellido: Gregory
    nombre: Jason
anio: "2018"
editorial: CRC Press
edicion: 
volumen: "3"
url: 
capitulos: 
cover: Game Engine Architecture de Jason Gregory.png
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 171
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


 