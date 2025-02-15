---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 276
tituloObra: The web applications hacke's handbook
nombreAutores:
  - apellido: Stuttard
    nombre: Dafydd
  - apellido: Pinto
    nombre: Marcus
anio: "2011"
editorial: Wiley Publishing
edicion: "2"
volumen: 
url: 
capitulos: 
cover: The web applications hacke's handbook de Dafydd Stuttard, Marcus Pinto.jpg
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
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { libro: actual, capitulos: actual?.capitulos });
```


 