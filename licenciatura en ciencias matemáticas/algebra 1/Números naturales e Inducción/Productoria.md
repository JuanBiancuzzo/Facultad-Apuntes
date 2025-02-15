---
dia: 2024-11-04
etapa: terminado
referencias:
  - "412"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $(a_i)_{i \in \mathbb{N}} = (a_1,~ a_2,~ \cdots)$ una [[Sucesión|sucesión]] de números $a_i \in A$ que se pueden sumar en el [[Conjunto|conjunto]] $A$

Sea $n \in \mathbb{N}$. La notación $\displaystyle \prod_{i = 1}^n a_i$, que se lee la productoria para $i$ de $1$ a $n$ de $a_i$, representa el producto de los $n$ primeros términos de la sucesión $$ \prod_{i = 1}^n a_i = a_1 \cdots a_n $$ que se define formalmente por [[Recurrencia|recurrencia]], para evitar los puntos suspensivos $$ \prod_{i = 1}^1 a_i = a_1 ~~~~ \text{y} ~~~~ \prod_{i = 1}^{n + 1} a_i = \left( \prod_{i = 1}^n a_i \right) \cdot a_{n + 1}, ~~~ \forall n \in \mathbb{N} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```