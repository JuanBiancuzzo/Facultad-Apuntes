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
  - biblioteca/libro
  - nota/investigacion
  - cybersecurity
orden: 38
---
```dataviewjs
	let actual = dv.current();
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: actual?.etapa });
	await dv.view("_scripts/dataview/libro/mostrarCapitulos", { titulo: actual?.tituloObra, autores: actual?.nombreAutores, capitulos: actual?.capitulos });
```
# Resumen
---


 