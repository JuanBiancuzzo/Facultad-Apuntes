---
dia: 2024-09-23
etapa: sin-empezar
tipoCita: Libro
numReferencia: 277
tituloObra: Metasploit The penetration tester's guide
nombreAutores:
  - apellido: Kennedy
    nombre: David
  - apellido: Kearns
    nombre: Devon
  - apellido: O'Gorman
    nombre: Jim
  - apellido: Aharoni
    nombre: Mati
anio: "2011"
editorial: No Starch Press
edicion: 
volumen: 
url: 
capitulos: 
cover: Metasploit The penetration tester's guide de David Kennedy, Devon Kearns, Jim O'Gorman, Mati Aharoni.jpg
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


 