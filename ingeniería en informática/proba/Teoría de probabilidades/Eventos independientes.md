---
dia: 2024-01-13
tags:
  - carrera/ingeniería-en-informática/proba/Teoría-de-probabilidades
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Teoría-de-probabilidades
  - carrera/ingeniería-electrónica/estoca/Repaso-probabilidad
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $(\Omega, \mathscr{A}, \mathbb{P})$ un [[Espacio de probabilidad|e.p.]], $A$ y $B \in \mathscr{A}$, $A$ y $B$ serán dos [[Evento|eventos]] independientes sii $$ \mathbb{P}(A \cap B) = \mathbb{P}(A) ~ \mathbb{P}(B) $$

## Propiedades
---
* Si $A$ y $B$ son independientes, también la son $A$ y $B^c$, $A^c$ y $B$, $A^c$ y $B^c$
* $A_1, \cdots, A_n$ son independientes sii para cada [[Sucesión|sucesión]] de $k$ [[Conjunto|conjuntos]] $2 \le k \le n$, la [[Probabilidad|probabilidad]] de la intersección de los $k$ sucesos coincide con el producto de las probabilidades
* Si $\mathbb{P}(B) > 0$, cuando $A$ y $B$ son independientes, la [[Probabilidad condicional|probabilidad condicional]] se simplifica $$ \mathbb{P}(A | B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} = \frac{\mathbb{P}(A) ~ \mathbb{P}(B)}{\mathbb{P}(B)} = \mathbb{P}(A) $$