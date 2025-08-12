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
Se define steadiness $\sigma$ como la [[Máximo|máxima]] diferencia entre el [[Mínimo|mínimo]] y máximo [[Tiempo de transmisión|tiempo de delivery]] de cualquier mensaje recibido por un [[Proceso|proceso]] 

![[Steadiness y Tightness.png]]

