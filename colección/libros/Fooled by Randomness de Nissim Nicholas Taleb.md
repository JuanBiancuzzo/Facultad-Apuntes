---
dia: 2024-09-12
etapa: sin-empezar
tipoCita: Libro
numReferencia: 245
tituloObra: Fooled by Randomness
nombreAutores:
  - apellido: Taleb
    nombre: Nissim Nicholas
anio: "2001"
editorial: Random House
edicion: 
volumen: 
url: 
capitulos: 
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
cover: Fooled by Randomness de Nissim Nicholas Taleb.jpg
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

 