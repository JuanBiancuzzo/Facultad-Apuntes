---
dia: 2026-07-01
etapa: empezado
referencias:
  - "1163"
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
Este patrón se utiliza cuando se tiene el siguiente problema, cuando existe un objeto en particular que puede hacer una cosa especifica de varias formas diferentes

El patrón resuelve el problema, creando una interfaz que represente hacer esa acción especifica, y que cada implementación de la misma sea la forma distinta de hacerlo. Esto va muy de la mano del [[ingeniería en informática/ingenieria de software 1/Diseño de software/SOLID#Dependency inversion#Dependency inversion|dependency inversion principal]]

![[ingeniería en informática/algo 3/Patrones/img/Patrón strategy.png|500]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```