---
dia: 2024-04-30
materia: circuitos
capitulo: 3
---
### Definición
---
```tikz
\usepackage{circuitikz} 
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 0) to[short, o-] ++(1, 0) 
			to[R, l_=$R$] ++(1, 0)
			to[short, -o] ++(1, 0);
	\end{circuitikz}
\end{document}
```

^f67315

$$ \begin{matrix} 
	&&& \text{En general} \\
	A_v =  &&&  |A_v| \gg 1 \\
	A_{vs} = &&& \\
	R_i = &&& \\
	R_o = &&& \\
	C_{eq} = &&& \\
\end{matrix} $$

^837c41
