---
dia: 2024-04-30
aliases:
  - Amplificador Gate Común con un MOSFET
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
	americangfsurgearrester
]{circuitikz} 

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[scale=1.2, transform shape, thick]		
		%%% Amplificador
		\draw (0, 5) node[below=2pt] {$V_{DD}$}
			to[short, *-] ++(0, 0.5) 
				node (vcc) {}
			to[R, l^=$R_D$] ++(0, 2)
				node (vc) {}
			to[short] ++ (-1, 0)
				node[nigfetd, xscale=1.5, yscale=-1.2, rotate=-90, anchor=D] (npn) {};
		
		\draw (npn.G) to[short] 
			($ (npn.G |- 0, 0) + (vcc -| 0, 0) $)
				node (vb) {};

		\draw (vcc) to[R, l^=$R_{G1}$, *-*] (vb)
			to[R, l^=$R_{G2}$] ++(0, -2)
				node[ground] (gr) {};
		
		\draw (npn.S) to[open, v_=$v_{GS}$] (vb);
		\draw ($ (npn.S) + (-0.1, 0.2) $) to[open, v^=$v_{DS}$] 
			($ (npn.D) + (0.1, 0.2) $);

		\draw ($ (npn.S -| 0, 0) + (vcc |- 0, 0) + (-4.5, 0) $)
				node (ve) {}
			to[R, l_=$R_S$, *-] ++ (0, -2)
				node[ground] {};
		\draw (ve) to[short, i_=$i_E$] (npn.E);

		%%% Fuente
		\draw (ve) to[C, l^=$C$, *-o] ++(-2, 0)
				node (vin) {}
			to[R, l_=$R_s$] ++(-2, 0)
			to[sV, l_=$v_s$] ++(0, -2)
				node[ground] (gr) {};
		\draw ($ (gr -| 0, 0) + (vin |- 0, 0)  + (0, -1) $)
			to[open, v^=$v_{in}$] (vin);

		%%% Carga
		\draw (vc) to[C, l_=$C$, *-o] ++(2, 0)
				node (vout) {}
			to[short] ++(0.5, 0)
			to[R, l_=$R_L$] ++(0, -2)
			node[ground] (gr) {};

		\draw ($ (gr) + (0.4, -0.5) $) to[open, v_=$v_{out}$] 
			($ (gr |- 0, 0) + (vout -| 0, 0) + (0.4, 0) $);
	\end{circuitikz}
\end{document}
```

^699639

Donde tomamos $R_G = R_{G1} // R_{G2}$ , $R_{CA} = R_D // R_L$ $$\begin{array}{rl c|c c}
	 &&&& \text{En general} \\
	A_v =& g_m ~ R_{CA} > 0 &&& |A_v| \uparrow\uparrow \\\\
	R_{is} =& \displaystyle \frac{R_{CA} + r_{ds}}{1 + g_m ~ r_{ds}} \underset{r_{ds} \gg 1}{\approx} \frac{1}{g_m} &&& R_i \downarrow\downarrow \\\\
	R_{od} =& r_{ds} + (g_m ~ r_{ds} + 1) (R_S + R_s) \xrightarrow[r_{ds} \gg 1]{} \infty &&& R_o \uparrow\uparrow \\\\
	C_{eq} =&   &&& \text{Velocidad media} \\\\
\end{array} $$
^5ee09c
