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
	americangfsurgearrester,
]{circuitikz} 

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	tripoles/mos style/arrows,
}

\begin{document} 
	\begin{circuitikz}[scale=1.2, transform shape, thick]		
		%%% Amplificador
		\draw (0, 4) node[above=2pt] {$V_{DD}$} 
				node (vdd) {}
			to[short, *-] ++(0, -0.5)
				node (vd) {}
			to[short, i^=$i_D$] ++(0, -0.5)
				node[nigfetd, xscale=1.2, yscale=1.5, anchor=D] (nmos) {};
		
		\draw ($ (nmos.S) + (0.3, 0.2) $) to[open, v_=$v_{DS}$] 
			($ (vd.west) + (0.3, -0.5) $);
		\draw (nmos.S) to[R, l^=$R_S$] ++(0, -2) 
				node[ground] (gr) {};
		
		\draw (nmos.S) to[open, v^=$v_{GS}$] (nmos.G);

		\draw ($ (vdd) + (-2.5, 0) $) node[above=2pt] {$V_{GG}$} 
				node (vgg) {}
			to[R, l^=$R_{G1}$, *-] ($ (nmos.G -| 0, 0) + (vgg |- 0, 0) $)
				node (vg) {}
			to[short, i_=$i_G$] (nmos.G);
		\draw (vg) to[R, l^=$R_{G2}$] 
			($ (gr -| 0, 0) + (vg |- 0, 0) $)
				node[ground] {};

		%%% Fuente
		\draw (vg) to[C, l^=$C$, *-o] ++(-2, 0)
				node (vin) {}
			to[R, l_=$R_s$] ++(-2, 0)
			to[sV, l_=$v_s$] ++(0, -2)
				node[ground] (gr) {};
		\draw ($ (gr -| 0, 0) + (vin |- 0, 0)  + (0, -1) $)
			to[open, v^=$v_{in}$] (vin);

		%%% Carga
		\draw (nmos.S) to[C, l_=$C$, *-o] ++(2.5, 0)
				node (vout) {}
			to[short] ++(1, 0)
			to[R, l_=$R_L$] ++(0, -2)
			node[ground] (gr) {};

		\draw ($ (gr) + (0.4, -0.5) $) to[open, v_=$v_{out}$] 
			($ (gr |- 0, 0) + (vout -| 0, 0) + (0.4, 0) $);
	\end{circuitikz}
\end{document}
```

^6e8ccc

$$ \begin{align} 
	&&&& \text{En general} \\
	A_v &= \frac{g_m ~ (R_S // r_{ds})}{1 + g_m ~ (R_S // r_{ds})} &&&  |A_v| \gg 1 \\
	A_{vs} &= &&& \\
	R_i &= (R_{G1} // R_{G2}) &&& \\
	R_o &= \left(R_S // r_{ds} // \frac{1}{g_m}\right) &&& \\
	C_{eq} &= &&& \\
\end{align} $$

^84a8e4
