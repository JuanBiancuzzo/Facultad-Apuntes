---
dia: 2025-04-21
etapa: ampliar
referencias: []
aliases:
  - ESE
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un [[Proceso estocástico|proceso estocástico]] es estacionario en sentido estricto si sus [[Función de distribución|distribuciones]] son [[Sistema invariante en el tiempo|invariante en el tiempo]]. Es decir, para cualquier $n$ y cualquier $\tau$, tenemos que $$ X(t_1,~ \cdots,~ t_n) \sim X(t_1 + \tau,~ \cdots,~ t_n + \tau) $$

Si un proceso es ESE, su distribución no depende de cuándo se comienza a contar el tiempo. Un ejemplo sería el [[Ruido blanco|ruido blanco]]