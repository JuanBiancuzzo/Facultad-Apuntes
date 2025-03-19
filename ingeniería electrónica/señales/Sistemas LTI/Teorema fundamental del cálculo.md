---
dia: 2025-03-19
etapa: sin-empezar
referencias: 
tags:
  - carrera/ingeniería-electrónica/señales/Sistemas-LTI
  - nota/facultad
aliases:
  - Regla de Leibniz
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---

$$ \frac{d}{dt} \int_{f(t)}^{g(t)} H(t,~ \tau) ~ d\tau = H(t,~ g(t)) ~ \frac{dg}{dt}(t) - H(t,~ f(t)) ~ \frac{df}{dt}(t) + \int_{f(t)}^{g(t)} \frac{\partial}{\partial t} H(t,~ \tau) ~ d\tau $$
