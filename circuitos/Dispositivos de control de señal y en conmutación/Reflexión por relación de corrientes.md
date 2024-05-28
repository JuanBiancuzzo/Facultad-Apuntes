---
dia: 2024-04-23
materia: circuitos
capitulo: 2
aliases:
  - Teorema de Miller de corrientes
---
### Definición
---

```tikz
\usepackage{circuitikz}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 0) to[short, *-] ++(1.5, 0)
			to[R, l^=$R_1$, v_=$V_1$] ++(0, 3)
			to ++(1.5, 0)
			to[R, l^=$R_2$, v_=$V_2$] ++(0, 3)
			to[short, -*] ++(-3, 0);
		\draw[dashed] (3, 3) to[short, *-] ++(0, -3);
		\draw (0, 0) to[open, v^=$V_{12}$] ++(0, 6);
	\end{circuitikz}
\end{document}
```
