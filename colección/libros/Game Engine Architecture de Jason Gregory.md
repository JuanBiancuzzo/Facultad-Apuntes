---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 258
tituloObra: Game Engine Architecture
nombreAutores:
  - apellido: Gregory
    nombre: Jason
anio: 2018
editorial: CRC Press
edicion: 
volumen: .nan
url: 
capitulos: 
cover: Game Engine Architecture de Jason Gregory.png
aliases: 
tags:
  - colección/biblioteca/libro
  - nota/colección
  - referencia/libro
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


 