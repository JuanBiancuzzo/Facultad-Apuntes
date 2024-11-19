---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 364
tituloObra: The signal and the noise
subtituloObra: Why so many predictions fail - bus some don't
nombreAutores:
  - apellido: Silver
    nombre: Nate
anio: "2012"
editorial: The Penguin Press
edicion: 
volumen: 
url: 
capitulos: 
cover: The signal and the noise, why so many predictions fail - bus some don't de Nate Silver.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 71
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


 