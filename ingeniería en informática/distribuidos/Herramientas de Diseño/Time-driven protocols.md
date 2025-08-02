---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - investigación/protocolos/protocolo-de-internet
  - nota/facultad
  - nota/investigacion
aliases:
  - Protocolos guiado por tiempos
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este tipo de [[Protocolo de internet|protocolo]] [[Algoritmo sincrónico|sincrónico]] no puede asegurar ningún valor de [[Steadiness|steadiness]] o [[Tightness|tightness]]. Para ambos, esto es porque no se puede asegurar un tiempo de recepción del [[Paquete|mensaje]]

![[Time-driven protocols.png]]