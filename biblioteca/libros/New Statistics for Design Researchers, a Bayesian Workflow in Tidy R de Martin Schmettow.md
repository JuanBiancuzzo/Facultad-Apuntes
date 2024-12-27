---
dia: 2024-11-24
etapa: sin-empezar
tipoCita: Libro
numReferencia: 631
tituloObra: New Statistics for Design Researchers
subtituloObra: A Bayesian Workflow in Tidy R
nombreAutores:
  - apellido: Schmettow
    nombre: Martin
anio: "2021"
editorial: Springer
edicion: 
volumen: 
url: http://dx.doi.org/10.1007/978-3-030-46380-9
capitulos: 
cover: New Statistics for Design Researchers, a Bayesian Workflow in Tidy R de Martin Schmettow.jpg
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


 