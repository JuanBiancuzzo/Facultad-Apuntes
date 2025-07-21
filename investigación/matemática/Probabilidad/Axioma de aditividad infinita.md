---
dia: 2025-04-06
etapa: empezado
referencias: 
tags:
  - investigación/matemática/Probabilidad
  - nota/investigacion
  - "#carrera/ingeniería-electrónica/proba/Teoría-de-probabilidades"
  - "#carrera/ingeniería-en-informática/proba/Teoría-de-probabilidades"
  - carrera/ingeniería-electrónica/estoca/Repaso
aliases:
  - Teorema sigma-aditividad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $A = \displaystyle \bigcup^{\infty}_{i = 1} A_i \in \mathscr{A}$ con los [[Evento|eventos]] $A_i$ [[Conjuntos disjuntos 2 a 2|mutuamente excluyentes 2 a 2]], entonces $$ \mathbb{P}(A) = \mathbb{P}\left( \bigcup^{\infty}_{i = 1} A_i \right) = \sum^{\infty}_{i = 1} \mathbb{P}(A_i) $$

