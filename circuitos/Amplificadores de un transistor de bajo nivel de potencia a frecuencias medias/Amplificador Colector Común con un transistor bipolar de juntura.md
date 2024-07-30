---
dia: 2024-04-30
aliases:
  - Amplificador Colector Común
  - Amplificador Colector Común del TBJ
  - Seguidor
tags:
  - circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota/facultad
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

Donde tomamos $R_B = R_{B1} // R_{B2}$ , $R_{CA} = R_E // R_L$ $$\begin{array}{rl c|c c}
	 &&&& \text{En general} \\
	A_v =& \displaystyle \frac{g_m ~ R_{CA}}{g_m ~ R_{CA} + 1} > 0 &&& |A_v| < 1 \\\\
	R_{ib} =& \displaystyle r_\pi + \frac{R_{CA} ~(\beta ~ r_{ce} - R_C)}{R_{CA} - R_C + r_{ce}} \underset{r_{ce} \gg 1}{\approx} r_\pi + \beta ~ R_{CA} &&& R_i \uparrow\uparrow \\\\
	R_{oe} =& \displaystyle \frac{r_\pi + R_B // R_S}{\beta} &&& R_o \downarrow\downarrow \\\\
	C_{eq} &=   &&& \text{Velocidad media} \\\\
\end{array} $$

^e8dc2c
