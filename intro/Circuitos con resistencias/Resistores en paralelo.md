---
dia: 2023-08-24
tags:
  - intro/Circuitos-con-resistencias
  - nota/facultad
  - fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
---
### Definición
---
Son aquellos [[Resistor|resistores]] que comparten la misma [[Tensión]] entre los mismos [[Nodo]] ([[Elementos en paralelo]])

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 3) to[V_=$V_0$] (0, 0)
			to (2, 0)
			to[R=$R_1$] (2, 3)
			to (0, 3);
		\draw (2, 0) to[short, *-] (4, 0)
			to[R=$R_2$] (4, 3)
			to[short, -*] (2, 3);

		\draw[loosely dashed, gray, rounded corners=10pt] (1, -0.25) rectangle (4.5, 3.25);
		\path (1, -0.25) -- (4.5, -0.25)
			node[pos=0.5, below=2pt] {$R_{eq}$};
	\end{circuitikz}
\end{document}
```

Por lo que el equivalente es  (además de igual a los [[Inductores en paralelo]] y los [[Capacitores en serie]]) $$ \begin{CD} 
	R_{eq} = \left( \sum_i^N R^{-1} \right)^{-1} @>{N~=~2}>> \frac{R_1 \cdot R_2}{R_1 + R_2}
\end{CD} $$