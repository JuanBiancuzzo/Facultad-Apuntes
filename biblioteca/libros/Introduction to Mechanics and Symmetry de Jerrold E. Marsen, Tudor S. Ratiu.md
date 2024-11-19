---
dia: 2024-09-22
etapa: sin-empezar
tipoCita: Libro
numReferencia: 268
tituloObra: Introduction to Mechanics and Symmetry
nombreAutores:
  - apellido: Marsen
    nombre: Jerrold E.
  - apellido: Ratiu
    nombre: Tudor S.
anio: "1994"
editorial: Springer
edicion: "2"
volumen: 
url: 
capitulos: 
cover: Introduction to Mechanics and Symmetry de Jerrold E. Marsen, Tudor S. Ratiu.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 16
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```


 