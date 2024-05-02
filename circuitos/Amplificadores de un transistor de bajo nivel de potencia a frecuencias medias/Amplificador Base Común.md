---
dia: 2024-04-30
materia: circuitos
capitulo: 3
---
### Definición
---
```tikz
\usetikzlibrary{math}
\usepackage[
	europeanvoltages,
	europeancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[scale=1.2, transform shape, thick]		
		%%% Amplificador
		\draw (0, 5) node[above=2pt] {$V_{CC}$} 
				node (vcc) {}
			to[R, l^=$R_C$, *-] ++(0, -1.5)
				node (vc) {}
			to[short] ++ (-0.65, 0)
				node[npn, xscale=1.2, yscale=-1.5, rotate=-90, anchor=C] (npn) {};
		
		\draw (npn.B) to[short] ++(0, -0.5) 
			node[ground] (gr) {};
		
		\draw (npn.E) to[open, v_=$v_{BE}$] (gr);
		\draw ($ (npn.E) + (-0.1, 0.2) $) to[open, v^=$v_{CE}$] 
			($ (npn.C) + (0.1, 0.2) $);

		\draw ($ (vcc) + (-3.15, 0) $) node[above=2pt] {$V_{BB}$} 
				node (vbb) {}
			to[R, l^=$R_B$, *-] ($ (npn.E -| 0, 0) + (vbb |- 0, 0) $)
				node (ve) {}
			to[short, i_=$i_E$] (npn.E);

		%%% Fuente
		\draw (ve) to[C, l^=$C$, *-o] ++(-2, 0)
				node (vin) {}
			to[R, l_=$R_s$] ++(-2, 0)
			to[sV, l_=$v_s$] ++(0, -2)
				node[ground] (gr) {};
		\draw ($ (gr -| 0, 0) + (vin |- 0, 0)  + (0, -1) $)
			to[open, v^=$v_{in}$] (vin);

		%%% Carga
		\draw (vc) to[C, l_=$C$, *-o] ++(2.5, 0)
				node (vout) {}
			to[short] ++(1, 0)
			to[R, l_=$R_L$] ++(0, -2)
			node[ground] (gr) {};

		\draw ($ (gr) + (0.4, -0.5) $) to[open, v_=$v_{out}$] 
			($ (gr |- 0, 0) + (vout -| 0, 0) + (0.4, 0) $);
	\end{circuitikz}
\end{document}
```

^4ae162

$$ \begin{matrix} 
	&&& \text{En general} \\
	A_v =  &&&  |A_v| \gg 1 \\
	A_{vs} = &&& \\
	R_i = &&& \\
	R_o = &&& \\
	C_{eq} = &&& \\
\end{matrix} $$

^364fd0
