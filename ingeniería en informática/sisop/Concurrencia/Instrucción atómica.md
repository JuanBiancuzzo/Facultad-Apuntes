---
dia: 2026-08-21
etapa: empezado
referencias: []
aliases:
  - Operación atómica
tags:
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
vinculoFacultad:
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Una instrucción atómica puede ejecutarse de principio a fin sin [[ingeniería en informática/sisop/Kernel/Interrupción|interrupciones]], o directamente no ejecutarse, no existe punto intermedio

