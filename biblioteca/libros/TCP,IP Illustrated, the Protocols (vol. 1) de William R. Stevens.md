---
dia: 2024-11-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 577
tituloObra: TCP/IP Illustrated
subtituloObra: The Protocols
nombreAutores:
  - apellido: Stevens
    nombre: William R.
anio: "1994"
editorial: Addison-Wesley Professional
edicion: "2"
volumen: "1"
url: 
capitulos: 
cover: TCP,IP Illustrated (vol. 1) de William R. Stevens.jpg
aliases:
  - TCP/IP Illustrated, the Protocols (vol. 1) de William R. Stevens
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


 