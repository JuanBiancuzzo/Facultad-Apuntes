---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 389
tituloObra: The Hacker Playbook
subtituloObra: Practical Guide To Penetration Testing
nombreAutores:
  - apellido: Kim
    nombre: Peter
anio: "2015"
editorial: " CreateSpace Independent Publishing Platform"
edicion: 
volumen: "2"
url: 
capitulos: 
cover: The Hacker Playbook, practical Guide To Penetration Testing (vol. 2) de Peter Kim.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 33
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 