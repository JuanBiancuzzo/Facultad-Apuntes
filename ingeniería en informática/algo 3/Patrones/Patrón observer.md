---
dia: 2026-07-01
etapa: empezado
referencias:
  - "1160"
aliases: []
tags:
  - carrera/ingeniería-en-informática/algo-3/Patrones
  - carrera/ingeniería-en-informática/ingenieria-software-1/Diseño-de-software
  - nota/facultad
vinculoFacultad:
  - tema: Patrones
    capitulo: 1
    materia: Algoritmos y programación 3
    carrera: Ingeniería en informática
  - tema: Diseño de software
    capitulo: 8
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este patrón se utiliza cuando se tiene el siguiente problema, cuando una entidad quiere información (el subject) pero solo cuando necesite ser informada, y en el otro lado, la otra entidad (el publisher) quiere informar pero solo a las entidades que quieran

El patrón resuelve este problema, planteando la interfaz de publisher el cual subjects pueden suscribirse o retirarse, y a estos el publisher va a notificar

![[ingeniería en informática/algo 3/Patrones/img/Patrón observer.png|500]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```