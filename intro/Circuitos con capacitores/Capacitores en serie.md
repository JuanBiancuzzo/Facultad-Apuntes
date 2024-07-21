---
dia: 2023-08-24
capitulo: 3
tags:
  - intro/Circuitos-con-capacitores
---
### Definición
---
Son aquellos [[Capacitor|capacitores]] atravesados por la misma [[Corriente eléctrica|corriente]] ([[Elementos en serie|elementos en serie]]) y comparten la misma [[Malla|malla]]

```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	inductors/scale=0.7,
	cute inductors,
}

\begin{document} 
	\begin{circuitikz}[
		voltage shift=0.5, scale=1.3, transform shape, thick,
		loops/.style={circuitikz/inductors/coils=#1}
	]
		\coordinate (centro) at (0, 0);
		\tikzmath {
			\capdist = 1.5;
		}

		\draw (centro) to[C, l^=$C_1$, o-] ++(\capdist, 0)
			to[C, l^=$C_2$] ++(\capdist, 0)
				node (espacio) {}
			to[open] ++(1.5, 0)
			to[C, l^=$C_n$, -o] ++(\capdist, 0);

		\draw[dashed] (espacio) -- ++(1.5, 0);
	
	\end{circuitikz}
\end{document}
```


Por lo que el equivalente es (además de igual a los [[Resistores en paralelo|resistores en paralelo]] y a los [[Inductores en paralelo|inductores en paralelo]]) $$ \begin{CD} 
	C_{eq} = \left( \sum_i^N C^{-1} \right)^{-1} @>{N~=~2}>> \frac{C_1 \cdot C_2}{C_1 + C_2}
\end{CD} $$