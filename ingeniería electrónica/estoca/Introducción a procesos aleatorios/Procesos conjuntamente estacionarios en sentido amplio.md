---
dia: 2025-06-22
etapa: ampliar
referencias: []
aliases:
  - Procesos CESA
  - Procesos conjuntamente ESA
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/estoca/Introducción a procesos aleatorios/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Diremos que dos procesos $X(t)$, $Y(t)$ son conjuntamente estacionario en sentido amplio si cumplen que 
* $X$ es [[Proceso estacionario en sentido amplio|ESA]], e $Y$ es ESA considerados por separados
* La [[Correlación cruzada#Para un proceso estocástico|correlación cruzada]] depende de la diferencia de los tiempos $$ R_{X,~ Y}(t,~ t + \tau) \equiv R_{X,~ Y}(\tau) $$



