---
dia: 2025-03-04
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta es una clasificación de [[Sistema|sistemas]] de acuerdo a la [[Cardinalidad|cardinalidad]] de flojos de instrucciones ([[Procesador|procesadores]]) y flujos de datos ([[Memoria|memoria]])

* [[Single Instruction Single Data|Single Instruction Single Data (SISD)]]
* [[Single Instruction Multiple Data|Single Instruction Multiple Data (SIMD)]]
* [[Multiple Instruction Single Data|Multiple Instruction Single Data (MISD)]]
* [[Multiple Instruction Multiple Data|Multiple Instruction Multiple Data (MIMD)]]