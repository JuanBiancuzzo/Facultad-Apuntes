---
dia: 2025-04-15
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dada una [[Sucesión de variables aleatorias|sucesión]] $\set{X_n}_{n \in \mathbb{N}_0}$ decimos que $X_n$ tiende a $X$ en distribución si $$ \forall x \in \mathbb{R}, ~~~ \lim_{n \to \infty} F_{X_n}(x) = F_X(x) $$ esto se denota como $X_n \xrightarrow{d} X$

## Relación con otros tipos de convergencia
---
Es una de las convergencias más débiles, y es implicada por las otras convergencias

