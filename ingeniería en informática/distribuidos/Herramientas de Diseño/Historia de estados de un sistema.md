---
dia: 2025-03-03
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una historia de un sistema esta caracterizado por un [[Proceso|proceso]] $p$ y una cantidad de eventos $k$, considerando que este es una [[Máquina de estado|máquina de estados]], mediante la secuencia de todos los eventos procesados $$ h_{p,~ k} = \left( e_0,~ e_1,~ \cdots,~ e_k \right) $$ donde $e_i$ es todo evento aceptado por $p$

