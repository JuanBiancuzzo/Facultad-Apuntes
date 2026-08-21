---
dia: 2026-08-20
etapa: empezado
referencias: []
aliases: []
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
Este tipo de [[investigación/robótica/robótica móvil/Robótica móvil|robot]] se caracteriza por su disposición de las ruedas, especificamente $2$ [[ingeniería electrónica/robótica móvil/Locomoción/Locomoción terrestre#^fija|ruedas fijas]] y una [[ingeniería electrónica/robótica móvil/Locomoción/Locomoción terrestre#^giratoria|rueda giratoria]] 

![[ingeniería electrónica/robótica móvil/Locomoción/img/Robot diferencial.png|150]]

## Cinemática
---
Para describir el [[Cinemática|movimiento del robot]] en términos de movimiento de sus componentes, es necesario mapear el movimiento en el marco de referencia global al movimiento en el marco de referencia local del robot