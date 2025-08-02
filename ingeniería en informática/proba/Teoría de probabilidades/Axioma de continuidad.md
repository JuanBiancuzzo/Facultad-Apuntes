---
dia: 2024-01-13
tags:
  - carrera/ingeniería-electrónica/estoca/Repaso
  - carrera/ingeniería-electrónica/proba/Teoría-de-probabilidades
  - carrera/ingeniería-en-informática/proba/Teoría-de-probabilidades
  - nota/facultad
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Para cada [[Sucesión|sucesión]] decreciente de [[Evento|eventos]] $$ \cdots \subseteq A_n \subseteq A_{n - 1} \subseteq \cdots \subseteq A_1 $$ tal que $$ \bigcap^{\infty}_{i=1} A_i = \emptyset $$ vale que $$ \lim_{n \to \infty} \mathbb{P}(A_n) = 0 $$
## Propiedades
---
* Si $A^c$ es el [[Evento|evento]] [[Operador NOT|complementario]] de $A$, entonces $$ \mathbb{P}(A^c) = 1 - \mathbb{P}(A) $$
* Sean $A$ y $B$ eventos pertenecientes a $\Omega$, entonces $$ \mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B) $$
* Si $A_1, A_2, \cdots, A_n$ es una [[Sucesión|sucesión]] de elementos de $A$, mutuamente excluyentes $2$ a $2$ entonces $$ \mathbb{P}\left( \bigcup^{n}_{i=1} A_i \right) = \sum^{n}_{i=1} \mathbb{P}(A_i) $$