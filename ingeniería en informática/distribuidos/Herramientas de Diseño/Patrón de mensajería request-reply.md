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
Este patrón de mensajería es similar a la [[Arquitectura cliente servidor|arquitectura cliente-servidor]] 

![[Patrón de mensajería request-reply.png]]

## Para ZeroMQ
---
Para esta modifica las primitivas, para no incluir `accept` e incluirla en el mismo `bind`, como también hace que el `send` sea no bloqueante. Esto último lo logra utilizando un [[Thread|thread]] para el manejo del [[General Purpose Input Output|I/O]], lo cual incluye la propiedad de almacenar los mensajes mientras no se pueda mandar