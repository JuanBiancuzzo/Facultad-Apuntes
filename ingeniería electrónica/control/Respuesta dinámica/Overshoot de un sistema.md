---
dia: 2025-03-27
etapa: empezado
referencias:
  - "873"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es el valor máxima del [[Sistema|sistema]] $M_p$ que supera el punto de estabilización, y en general se expresa como un porcentaje

![[Time-Domain specifications.png]]

## Sistema de primer orden
---
Por el mismo motivo que vimos en el [[Tiempo de pico máximo de un sistema#Sistema de primer orden|tiempo de pico máximo]], no se puede tener un pico para un sistema de primer orden

## Sistema de segundo orden
---


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```