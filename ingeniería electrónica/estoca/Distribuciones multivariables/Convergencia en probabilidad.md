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
Dada una [[Sucesión de variables aleatorias|sucesión]] $\set{X_n}_{n \in \mathbb{N}_0}$ decimos que $X_n$ tiene a $X$ en probabilidad si $$ \forall \varepsilon > 0, ~~ \lim_{n \to \infty} \mathbb{P}\left( | X_n - X | > \varepsilon \right) = 0 $$ esto se denota como $X_n \xrightarrow{p} X$ 

Se lo puede pensar como que el error entre la sucesión $X_n$ y la distribución $X$ sea tan chica al punto que su [[Probabilidad|probabilidad]] sea nula