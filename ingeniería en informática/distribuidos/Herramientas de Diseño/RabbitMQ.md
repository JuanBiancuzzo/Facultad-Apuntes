---
dia: 2025-03-05
etapa: empezado
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta es una implementación de un [[Middleware|middleware]], tiene como grandes conceptos
* [[Queue|Queues]]
    * TaskQueues vs Anónimas
    * Acknowledge automática por defecto
    * Persistencia de los mensajes (para eso se tiene que definir en la cola y en cada mensaje)
* Exchanges
    * Implementa diferentes patrones para transmitir mensajes

## Patrones
---
Como se mencionó antes, este usa los siguientes patrones
* [[Patrón de mensajería publisher-subscriber#Fanout|Publisher-Subscriber]]
* [[Patrón de mensajería publisher-subscriber#Routing|Routing]]
* [[Patrón de mensajería publisher-subscriber#Topic|Topic]]