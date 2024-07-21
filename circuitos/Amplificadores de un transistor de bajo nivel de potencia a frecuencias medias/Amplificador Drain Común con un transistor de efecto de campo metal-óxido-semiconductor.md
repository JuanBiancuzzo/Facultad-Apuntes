---
dia: 2024-04-30
capitulo: 3
aliases:
  - Amplificador Drain Común con un MOSFET
tags:
  - circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota
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
			to[R, l^=$R_D$] ++(0, -1)
				node[flowarrow, anchor=west, rotate=-90] (vd) 
					{\rotatebox{90}{$i_D$}}
			to[short] ++(0, -0.1)
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

Donde tomamos $R_G = R_{G1} // R_{G2}$ , $R_{CA} = R_S // R_L$ $$\begin{array}{rl c|c c}
	 &&&& \text{En general} \\
	A_v =& \displaystyle \frac{g_m ~ R_{CA}}{g_m ~ R_{CA} + 1} > 0 &&& |A_v| < 1 \\\\
	R_{ig} =& R_G &&& R_i \uparrow\uparrow \\\\
	R_{os} =& \displaystyle \frac{R_D + r_{ds}}{1 + g_m ~ r_{ds}} \underset{r_{ds} \gg 1}{\approx} \frac{1}{g_m} &&& R_o \downarrow\downarrow \\\\
	C_{eq} &=   &&& \text{Velocidad media} \\\\
\end{array} $$

^84a8e4
