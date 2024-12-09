---
dia: 2024-10-18
etapa: sin-empezar
tipoCita: Libro
numReferencia: 382
tituloObra: Blue Team Handbook
subtituloObra: "SOC, SIEM, and Threat Hunting: A Condensed Guide for the Security Operations Team and Threat Hunter"
nombreAutores:
  - apellido: Murdoch
    nombre: Don
anio: "2019"
editorial: Don Murdoch
edicion: 
volumen: 
url: 
capitulos: 
cover: Blue Team Handbook, SOC, SIEM, and Threat Hunting, A Condensed Guide for the Security Operations Team and Threat Hunter de Don Murdoch.jpg
aliases: 
tags:
  - referencia/libro
  - biblioteca/libro
  - nota/investigacion
orden: 36
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


 