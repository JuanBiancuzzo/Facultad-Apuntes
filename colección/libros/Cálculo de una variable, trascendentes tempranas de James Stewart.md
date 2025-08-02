---
dia: 2024-11-19
etapa: sin-empezar
tipoCita: Libro
numReferencia: 602
tituloObra: Cálculo de una variable
subtituloObra: Trascendentes tempranas
nombreAutores:
  - apellido: Stewart
    nombre: James
anio: "2011"
editorial: Cengage Learning
edicion: "7"
volumen: 
url: 
capitulos: 
cover: Cálculo de una variable, trascendentes tempranas de James Stewart.png
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


 