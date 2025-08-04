---
dia: 2025-03-05
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Fundamentos-de-Sistemas-Distribuidos
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Fundamentos de Sistemas Distribuidos/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este patrón utiliza el [[Patrón de mensajería producer-consumer|patrón producer-consumer]], combinándolos para formar un pipeline haciendo un `push` y $n$ `pull`, para luego hacer $n$ `push` y un `pull`

![[Patrón de mensajería pipeline.png]]

## En ZeroMQ
---
Los mensajes son consumidos de forma equitativa, consiguiendo así fairness

