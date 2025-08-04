---
dia: 2025-04-06
etapa: empezado
referencias: 
tags:
  - "#carrera/ingeniería-electrónica/proba/Teoría-de-probabilidades"
  - "#carrera/ingeniería-en-informática/proba/Teoría-de-probabilidades"
  - carrera/ingeniería-electrónica/estoca/Repaso
  - investigación/matemática/Probabilidad
  - nota/facultad
  - nota/investigacion
aliases:
  - Teorema sigma-aditividad
vinculoFacultad:
  - "[[ingeniería electrónica/estoca/Repaso/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $A = \displaystyle \bigcup^{\infty}_{i = 1} A_i \in \mathscr{A}$ con los [[Evento|eventos]] $A_i$ [[Conjuntos disjuntos 2 a 2|mutuamente excluyentes 2 a 2]], entonces $$ \mathbb{P}(A) = \mathbb{P}\left( \bigcup^{\infty}_{i = 1} A_i \right) = \sum^{\infty}_{i = 1} \mathbb{P}(A_i) $$

