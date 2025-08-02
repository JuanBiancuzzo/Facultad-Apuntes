---
dia: 2025-03-20
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - investigación/ciencias-de-la-computación/algoritmos
  - nota/facultad
  - nota/investigacion
aliases:
  - LCG
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Tiene la expresión $$ X_{n + 1} = \left(a \cdot X_n + c \right) \mod m $$
Los LCG genera todos los enteros posibles en $\set{0,~ 1,~ \cdots,~ m - 1}$ antes de repetirse

Algunos valores comunes ([[MINSTD|MINSTD]]) son $$ \begin{matrix} 
    a = 16807, && c = 0, && m = 2^{31} -1
\end{matrix} $$

