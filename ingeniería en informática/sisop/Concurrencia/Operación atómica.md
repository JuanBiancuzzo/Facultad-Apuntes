---
dia: 2023-11-12
tags:
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
vinculoFacultad:
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
etapa: empezado
referencias: []
aliases:
  - Instrucción atómica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Una instrucción atómica puede ejecutarse de principio a fin sin [[ingeniería en informática/sisop/Kernel/Interrupción|interrupciones]], o directamente no ejecutarse, no existe punto intermedio. Por lo que se garantiza la ejecución de la misma sin tener que intercalar ejecución