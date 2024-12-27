---
dia: 2024-12-22
etapa: ampliar
referencias: 
tags:
  - nota/investigacion
  - investigación/ciencias-de-la-computación/sistemas-operativos/File-system
  - ingeniería-en-informática/sisop/File-system
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es el mapeo entre el nombre y el [[Archivo|archivo]] subyacente, esto implica que la estructura de un file system que permite múltiples hard links ya no es de [[Árbol|árbol]] invertido. Aquellos [[Sistema operativo|sistemas operativos]] que lo permiten se cuidan de no crear ciclos asegurándose que la estructura sea un grafo dirigido acíclico
