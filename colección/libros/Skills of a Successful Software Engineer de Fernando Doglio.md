---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 375
tituloObra: Skills of a Successful Software Engineer
subtituloObra: 
nombreAutores:
  - apellido: Doglio
    nombre: Fernando
anio: 2022
editorial: Manning Publications Co
edicion: 
volumen: 
url: 
capitulos: 
cover: Skills of a Successful Software Engineer de Fernando Doglio.jpg
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


 