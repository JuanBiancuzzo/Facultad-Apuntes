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
		\draw (0, 4) node[above=2pt] {$V_{CC}$} 
				node (vcc) {}
			to[R, l^=$R_C$, *-] ++(0, -2)
				node[flowarrow, anchor=west, rotate=-90] (vc) 
					{\rotatebox{90}{$i_C$}}
			to[short] ++(0, -0.1)
				node[npn, xscale=1.2, yscale=1.5, anchor=C] (npn) {};
		
		\draw ($ (npn.E) + (0.3, 0.2) $) to[open, v_=$v_{CE}$] 
			($ (vc.west) + (0.3, -0.5) $);
			
		\draw (npn.E) to[short] ++(0, -0.5) 
			to[R, l^=$R_E$] ++(0, -1)
			to[short] ++(0, -0.5)
				node[ground] (gr) {};

		\draw ($ (vc) + (0, 0.35) $) to[short] ++(2.5, 0)
			to[C, l^=$C$] ++(0, -1.5)
				node[ground] {};
			
		\draw (npn.E) to[open, v^=$v_{BE}$] (npn.B);

		\draw ($ (vcc) + (-2.5, 0) $) node[above=2pt] {$V_{BB}$} 
				node (vbb) {}
			to[R, l^=$R_{B1}$, *-] ($ (npn.B -| 0, 0) + (vbb |- 0, 0) $)
				node (vb) {}
			to[R, l^=$R_{B2}$, *-] ($ (gr -| 0, 0) + (vbb |- 0, 0) $)
				node[ground] (gr) {};
		
		\draw (vb) to[short, i_=$i_B$] (npn.B);

		%%% Fuente
		\draw (vb) to[C, l^=$C$, *-o] ++(-2, 0)
				node (vin) {}
			to[R, l_=$R_s$] ++(-2, 0)
			to[sV, l_=$v_s$] ++(0, -2)
				node[ground] (gr) {};
		\draw ($ (gr -| 0, 0) + (vin |- 0, 0)  + (0, -1) $)
			to[open, v^=$v_{in}$] (vin);

		%%% Carga
		\draw (npn.E) to[C, l_=$C$, *-o] ++(2, 0)
				node (vout) {}
			to[short] ++(0.5, 0)
			to[R, l_=$R_L$] ++(0, -2)
			node[ground] (gr) {};

		\draw ($ (gr) + (0.4, -0.5) $) to[open, v_=$v_{out}$] 
			($ (gr |- 0, 0) + (vout -| 0, 0) + (0.4, 0) $);
	\end{circuitikz}
\end{document}
```
^5c5e25

$$\begin{array}{r lc : c }
	 &  && \text{En general} \\
	A_v &= - g_m ~ (R_C // R_L) < 0 && |A_v| \uparrow\uparrow \\\\
	A_{vs} &= \frac{R_B // r_\pi}{R_s + R_B // r_\pi} ~ A_v  && |A_{vs}| \uparrow\uparrow \\\\
	R_i &= (R_{B1} // R_{B2} // r_\pi) && R_i \downarrow\downarrow \\\\
	R_o &= (R_C // r_{ce}) && R_o \uparrow\uparrow \\\\
	C_{eq} &=   && \text{Velocidad media}
\end{array} $$

^e8dc2c
