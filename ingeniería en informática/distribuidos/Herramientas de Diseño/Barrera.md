---
dia: 2025-03-03
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
 busca que $n$ [[Proceso|procesos]] se ejecuten al mismo tiempo, esto lo consigue [[Estados de un proceso#Blocked|bloqueado procesos]], hasta que se tengan los $n$ procesos necesarios

![[Barrera.png]]

