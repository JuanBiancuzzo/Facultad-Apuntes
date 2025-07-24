---
dia: 2024-12-01
etapa: sin-empezar
tipoCita: Libro
numReferencia: 688
tituloObra: The Go Programming Language
subtituloObra: 
nombreAutores:
  - apellido: Donovan
    nombre: Alan
  - apellido: Kernighan
    nombre: Brain
anio: 2015
editorial: Addison-Wesley Professional
edicion: 2015
volumen: 
url: 
capitulos: 
cover: The Go Programming Language de Alan Donovan, Brain Kernighan.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
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


 