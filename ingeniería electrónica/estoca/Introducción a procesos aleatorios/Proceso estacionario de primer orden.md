---
dia: 2025-04-21
etapa: ampliar
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un [[Proceso estocástico|proceso]] $X(t)$ es estacionario de primer orden si $$ F_{X(t)} = F_{X(0)} = F_X, ~~~~ \forall t \in \mathcal{T} $$
Luego, las [[Probabilidad|probabilidades]] de [[Evento|eventos]] que involucren solamente a $X(t)$ tampoco depende del tiempo $$ \begin{array}{c} 
    \mathbb{P}(X(t) \in A) = \text{cte}, && E[g(X(t))] = \text{cte}
\end{array} $$ donde $E[\cdot]$ es la [[Esperanza|esperanza]]
