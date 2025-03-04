---
dia: 2025-03-04
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Existen varias formas de procesar información en [[Paralelo|paralelo]], estaos están basados en algoritmos y no tan abstractos como los [[Patrones de diseño (Gang of four)|patrones de diseño]], sin incluir detalles de implementación y por ende agnósticos a [[Lenguaje de programación|lenguajes de programación]]. Entre ellas están
* [[Fork-join|Fork-join]]
* [[Pack|Pack]]
* [[Split|Split]]
* [[Pipeline|Pipeline]]
* [[Patrón de procesamiento map|Map]]
* [[Reduction|Reduction]]

