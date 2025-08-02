---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 390
tituloObra: The Hacker Playbook
subtituloObra: Practical Guide To Penetration Testing
nombreAutores:
  - apellido: Kim
    nombre: Peter
anio: 2018
editorial: CreateSpace Independent Publishing Platform
edicion: 
volumen: .nan
url: 
capitulos: 
cover: The Hacker Playbook, practical Guide To Penetration Testing (vol. 3) de Peter Kim.jpg
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


 