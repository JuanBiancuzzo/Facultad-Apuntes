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
Este patrón de mensajería es similar al [[Patrón de diseño observer|patrón de diseño observer]], donde la comunicación es de un productor a un consumidor. Dependiendo de la implementación se podría admitir múltiples consumidores y/o múltiples productores

![[Patrón de mensajería producer-consumer.png]]

Se utiliza los [[Socket|sockets]] `pus`/`pull` para marcar el rol de cada extremo

## Para ZeroMQ
---
Para esta garantiza fairness en la entrega de mensajes usando [[Estrategía de Round Robin|Round Robin]]