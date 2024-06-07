---
dia: 2023-08-24
materia: intro
capitulo: 3
---
### Definición
---
Son aquellos [[Capacitor|capacitores]] que comparten la misma [[Tensión|tensión]] entre los mismos [[Nodo|nodos]] ([[Elementos en paralelo]])

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

		\draw (centro) to[short, o-] ++(5, 0)
				node (espacio) {}
			to[open] ++(1.5, 0)
			to ++(1, 0)
			to[C, l^=$C_n$] ++(0, 3)
			to ++(-1, 0)
			to[open] ++(-1.5, 0)
				node (espacio2) {}
			to[short, -o] ++(-5, 0);
			
		\draw[dashed] (espacio) -- ++(1.5, 0);
		\draw[dashed] (espacio2) -- ++(1.5, 0);

		\draw ($ (centro) + (2, 0) $)
			to[C, l^=$C_1$, *-*] ++(0, 3);
		\draw ($ (centro) + (4, 0) $)
			to[C, l^=$C_2$, *-*] ++(0, 3);
			
	\end{circuitikz}
\end{document}
```

Por lo que es equivalente es (además de igual a los [[Resistores en serie|resistores en serie]] y los [[Inductores en paralelo|inductores en serie]]) $$ C_{eq} = C_1 + C_2 $$