---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
  - colección/data-structures/estructura
  - investigación/ciencias-de-la-computación/data-structures
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta estructura nos permite controlar el momento en el que un elemento es procesado

![[Hold-back queue.png]]

Esto lo logra usando dos [[Queue|queues]], donde la hold-back queue no libera el elemento hasta que una condición se cumpla

## Ejemplo
---
Esta estructura se puede usar para la comunicación entre [[Proceso|procesos]], donde un [[Paquete|mensaje]] no puede liberarse hasta que esté en el orden correcto
