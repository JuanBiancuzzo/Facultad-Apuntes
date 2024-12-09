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
anio: "2015"
editorial: Addison-Wesley Professional
edicion: "1"
volumen: 
url: 
capitulos: 
cover: The Go Programming Language de Alan Donovan, Brain Kernighan.jpg
aliases: 
orden: 593
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
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


 