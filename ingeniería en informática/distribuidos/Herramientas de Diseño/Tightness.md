---
dia: 2025-03-03
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se define tightness $\tau$ como la [[Máximo|máxima]] diferencia entre los [[Tiempo de transmisión|tiempos de delivery]] para cualquier mensaje $m$ $$ \tau = \max_{m,~ p,~ q}\left( t_D^p(m) - t_D^q(m) \right), ~~ \forall p,~ q $$

![[Steadiness y Tightness.png]]

