---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 273
tituloObra: Creating animated cartoons with character
nombreAutores:
  - apellido: Murray
    nombre: Joe
anio: "2010"
editorial: Watson-Guptill Publications
edicion: "1"
volumen: 
url: 
capitulos: 
cover: Creating animated cartoons with character de Joe Murray.jpg
aliases: 
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


 