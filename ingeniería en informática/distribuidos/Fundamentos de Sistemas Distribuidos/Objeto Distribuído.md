---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Fundamentos-de-Sistemas-Distribuidos
  - nota/facultad
aliases:
  - Distributed Objects
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Los [[Servidor|servidores]] ya no proveen servicios sino objetos. Existe un [[Middleware|middleware]] que oculta la complejidad de referencias a [[Objeto|objeto]] remoto, invocación de acciones, errores/excepciones y la [[Recolector de basura (Garbage collector)|recolección de basura]] 

Esta forma de representar ejecución de código de forma distribuida, especialmente en oposición a [[Remote Procedure Call|RPC]], este es un [[Modelo|modelo]] con estado, representado por los objetos

