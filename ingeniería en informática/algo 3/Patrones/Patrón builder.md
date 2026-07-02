---
dia: 2026-07-01
etapa: empezado
referencias:
  - "1161"
aliases: []
tags:
  - carrera/ingeniería-en-informática/algo-3/Patrones
  - nota/facultad
vinculoFacultad:
  - tema: Patrones
    capitulo: 1
    materia: Algoritmos y programación 3
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este patrón se utiliza cuando se tiene el siguiente problema, cuando la complejidad del problema viene por como configurar un objeto

El patrón plantea crear otro objeto, donde se divida y simplifica la creación de objeto en partes, con un paso final que sea la construcción completa del objeto original 

![[ingeniería en informática/algo 3/Patrones/img/Patrón builder.png|500]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```