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
orden: 514
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


 