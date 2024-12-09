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
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 330
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


 