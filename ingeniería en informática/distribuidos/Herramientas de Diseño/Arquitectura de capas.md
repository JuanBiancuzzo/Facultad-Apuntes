---
dia: 2025-03-02
etapa: empezado
referencias: 
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
Esta metodología de [[Arquitectura de aplicaciones|arquitectura]] tiene como ventajas las siguientes
* Permite dividir el problema en sub-problemas
* Fomentan el uso de [[Interfaz|interfaces]]
* Permiten intercambiar componentes reutilizando conectores y [[Protocolo|protocolos]] ya definidos

Existen dos tipos de separación por capas
* [[Arquitectura por layers|Layers o capas lógicas]] 
* [[Arquitectura por tiers|Tiers o capas físicas]]
