---
dia: 2026-07-01
etapa: empezado
referencias:
  - "1159"
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
Este patrón se utiliza cuando se tiene el siguiente problema, cuando la implementación de la solución a un problema pero la forma en la cual uno tiene que inicializar y manejar correctamente las partes de esta implementación son muy complicadas

Este patrón plantea crear una interfaz entre la solución implementada y el usuario de la misma. Aislando la complejidad de su uso

![[ingeniería en informática/algo 3/Patrones/img/Patrón facade.png|500]]



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```