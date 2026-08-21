---
dia: 2026-08-21
etapa: empezado
referencias: []
aliases:
  - Restricción No-Holonómica
tags:
  - carrera/ingeniería-electrónica/robótica-móvil/Locomoción
  - nota/facultad
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
Las restricciones holonómicas reducen el [[ingeniería electrónica/control/Respuesta dinámica/Sistema dinámico|espacio de configuración]], por ejemplo un [[Tren|tren]] solo puede ir por las vias del tren, este esta restringido a una única dimensión a pesar que existe en $3$ dimensiones

Las restricciones no-holonómicas reduce el espacio de control a la configuración actual, por ejemplo un [[ingeniería electrónica/robótica móvil/Locomoción/Robot Ackermann|robot Car-like]] no puede moverse lateralmente aunque si podría llegar, manobreando, hasta cualquier posición del estacio
