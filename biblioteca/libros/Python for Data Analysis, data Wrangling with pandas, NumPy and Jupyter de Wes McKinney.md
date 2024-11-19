---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 565
tituloObra: Python for Data Analysis
subtituloObra: Data Wrangling with pandas, NumPy and Jupyter
nombreAutores:
  - apellido: McKinney
    nombre: Wes
anio: "2022"
editorial: O'Reilly Media, Inc.
edicion: "3"
volumen: 
url: 
capitulos: 
cover: Python for Data Analysis, data Wrangling with pandas, NumPy and Jupyter de Wes McKinney.jpg
aliases: 
orden: 480
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
  - lenguajes-de-programación/Lenguaje-Python/Pandas
  - lenguajes-de-programación/Lenguaje-Python/NumPy
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


 