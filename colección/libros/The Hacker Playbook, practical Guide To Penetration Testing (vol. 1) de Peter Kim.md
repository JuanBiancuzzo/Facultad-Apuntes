---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 388
tituloObra: The Hacker Playbook
subtituloObra: Practical Guide To Penetration Testing
nombreAutores:
  - apellido: Kim
    nombre: Peter
anio: "2014"
editorial: CreateSpace Independent Publishing Platform
edicion: 
volumen: "1"
url: 
capitulos: 
cover: The Hacker Playbook, practical Guide To Penetration Testing (vol. 1) de Peter Kim.jpg
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


 