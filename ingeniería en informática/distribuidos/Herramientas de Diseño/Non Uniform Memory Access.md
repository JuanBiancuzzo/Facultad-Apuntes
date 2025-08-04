---
dia: 2025-03-04
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - NUMA
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta estrategia para compartir [[Memoria|memoria]], tiene a cada [[Microprocesadores|CPU]] controlando una única [[Memoria|memoria]] local, permitiendo el acceso a su memoria con el como intermediario, esto produce un mayor [[Ancho de banda|ancho de banda]] si se respeta el acceso a memoria local

![[Non Uniform Memory Access.png]] ^representacion

Esta estrategia es mucho más escalable en comparación a [[Uniform Memory Access|UMA]], sin reducir la velocidad de acceso que mencionamos