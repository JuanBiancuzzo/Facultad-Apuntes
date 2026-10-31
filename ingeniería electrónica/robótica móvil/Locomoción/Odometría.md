---
dia: 2026-10-31
etapa: empezado
referencias:
  - "1285"
  - "1286"
aliases:
  - Dead reckoning
tags:
  - carrera/ingeniería-electrónica/robótica-móvil/Locomoción
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Locomoción
    capitulo: 2
    materia: Robótica móvil
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La odometría es el uso de información de [[colección/componentes/sensores/Sensores|sensores]], en ruedas por ejemplo, para estimar el cambio de posición en el tiempo. Esta información, en conjunto con información previa de la posición, se la puede usar para calcular la posición actual de un [[investigación/robótica/robótica móvil/Robótica móvil|robot móvil]], y este proceso es el llamado dead reckoning 

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```