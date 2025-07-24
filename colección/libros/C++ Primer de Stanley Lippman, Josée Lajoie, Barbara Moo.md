---
dia: 2024-11-17
etapa: sin-empezar
tipoCita: Libro
numReferencia: 561
tituloObra: C++ Primer
subtituloObra: 
nombreAutores:
  - apellido: Lippman
    nombre: Stanley
  - apellido: Lajoie
    nombre: Josée
  - apellido: Moo
    nombre: Barbara
anio: 2012
editorial: Addison-Wesley Professional
edicion: 2012
volumen: 
url: 
capitulos: 
cover: C++ Primer de Stanley Lippman, Josée Lajoie, Barbara Moo.jpg
aliases: 
tags:
  - referencia/libro
  - colección/biblioteca/libro
  - nota/investigacion
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


 