---
dia: 2023-08-24
tags:
  - intro/Circuitos-con-resistencias
  - nota
---
### Definición
---
Son aquellos [[Resistor|resistores]] atravesados por la misma [[Corriente eléctrica|corriente]] ([[Elementos en serie]]) y comparten la misma [[Malla]]

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 5) to[V=$V_0$] (0, 0)
			to (3, 0)
			to[R=$R_2$] (3, 2.5)
			to[R=$R_1$] (3, 5)
			to (0, 5);

		\draw[loosely dashed, gray, rounded corners=10pt] (1.5, -0.25) rectangle (3.5, 5.25);
		\path (1.5, -0.25) -- (3.5, -0.25)
			node[pos=0.5, below=2pt] {$R_{eq}$};
	\end{circuitikz}
\end{document}
```

Por lo que el equivalente es (además de igual a los [[Inductores en serie]] y los [[Capacitores en paralelo]]) $$ R_{eq} = R_1 + R_2 $$