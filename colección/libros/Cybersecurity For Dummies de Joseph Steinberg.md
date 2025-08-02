---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 271
tituloObra: Cybersecurity For Dummies
nombreAutores:
  - apellido: Steinberg
    nombre: Joseph
anio: "2022"
editorial: Wiley Publishing
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Cybersecurity For Dummies de Joseph Steinberg.jpg
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


 