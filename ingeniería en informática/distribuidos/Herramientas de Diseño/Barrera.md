---
dia: 2025-03-03
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
 Busca que $n$ [[Proceso|procesos]] se ejecuten al mismo tiempo, esto lo consigue [[Estados de un proceso#Blocked|bloqueado procesos]], hasta que se tengan los $n$ procesos necesarios

![[Barrera.png]]

