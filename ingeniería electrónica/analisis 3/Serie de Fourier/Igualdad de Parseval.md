---
dia: 2022-11-29
tags:
  - carrera/ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Serie-de-Fourier
etapa: ampliar
referencias: []
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Para toda $f \in E_P$ ([[Conjunto de funciones periódicas]]) entonces $$ \sum_{n = -\infty}^\infty | c_n(f) |^2 = \frac{1}{P} \Vert f \Vert_2^2 $$
La cual es equivalente a que $f \in E_P$ entonces $\lim_{m \to \infty} \Vert f - f_m \Vert_2 = 0$
