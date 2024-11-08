---
dia: 2023-09-19
tags:
  - ingeniería-electrónica/adc/Circuitos-en-regimen-transitorio
  - nota/facultad
  - ingeniería-en-informática/adc/Circuitos-en-regimen-transitorio
aliases:
  - Bobinas en paralelo
---
# Definición
---
Son aquellos [[Inductor|inductores]] que comparten la misma [[Tensión]] entre los mismos [[Nodo]] ([[Elementos en paralelo]])

Por lo que el equivalente es (además de igual a los [[Resistores en paralelo]] y a los [[Capacitores en serie]]) $$ \begin{CD} 
	L_{eq} = \left( \sum_i^N L^{-1} \right)^{-1} @>{N~=~2}>> \frac{L_1 \cdot L_2}{L_1 + L_2}
\end{CD} $$