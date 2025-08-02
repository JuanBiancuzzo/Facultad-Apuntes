---
dia: 2024-11-15
etapa: sin-empezar
tipoCita: Libro
numReferencia: 538
tituloObra: Ingeniería Electromagnética
subtituloObra: ""
nombreAutores:
  - apellido: Fano
    nombre: Walter Gustavo
  - apellido: Trainotti
    nombre: Valentino
anio: 2003
editorial: Nueva Librería
edicion: 
volumen: .nan
url: 
capitulos: 
cover: Ingeniería Electromagnética (vol. 1) de Walter Gustavo Fano, Valentino Trainotti.jpg
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


 