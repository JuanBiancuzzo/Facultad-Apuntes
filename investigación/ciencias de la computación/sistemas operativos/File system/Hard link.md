---
dia: 2024-12-22
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/sisop/File-system
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/sisop/File system/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es el mapeo entre el nombre y el [[Archivo|archivo]] subyacente, esto implica que la estructura de un file system que permite múltiples hard links ya no es de [[Árbol|árbol]] invertido. Aquellos [[Sistema operativo|sistemas operativos]] que lo permiten se cuidan de no crear ciclos asegurándose que la estructura sea un grafo dirigido acíclico
