---
dia: 2024-04-30
aliases:
  - Amplificador Base Común
  - Amplificador Base Común con TBJ
tags:
  - circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota/facultad
---
# Definición
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
		\draw (0, 5) node[below=2pt] {$V_{CC}$}
			to[short, *-] ++(0, 0.5) 
				node (vcc) {}
			to[R, l^=$R_C$] ++(0, 2)
				node (vc) {}
			to[short] ++ (-1, 0)
				node[npn, xscale=1.5, yscale=-1.2, rotate=-90, anchor=C] (npn) {};
		
		\draw (npn.B) to[short] 
			($ (npn.B |- 0, 0) + (vcc -| 0, 0) $)
				node (vb) {};

		\draw (vcc) to[R, l^=$R_{B1}$, *-*] (vb)
			to[R, l^=$R_{B2}$] ++(0, -2)
				node[ground] (gr) {};
		
		\draw (npn.E) to[open, v_=$v_{BE}$] (vb);
		\draw ($ (npn.E) + (-0.1, 0.2) $) to[open, v^=$v_{CE}$] 
			($ (npn.C) + (0.1, 0.2) $);

		\draw ($ (npn.E -| 0, 0) + (vcc |- 0, 0) + (-4.5, 0) $)
				node (ve) {}
			to[R, l_=$R_E$, *-] ++ (0, -2)
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
^4ae162

Donde tomamos $R_B = R_{B1} // R_{B2}$ , $R_{CA} = R_C // R_L$ $$\begin{array}{rl c|c c}
	&&&& \text{En general} \\
	A_v =& \displaystyle \frac{g_m ~ R_{CA}}{\frac{R_B}{r_\pi} + 1} > 0 &&& |A_v| \uparrow\uparrow \\\\
	R_{ie} =& r_{ce} // \left( \frac{1}{g_m} + \frac{R_B}{\beta} \right) &&& R_i \downarrow\downarrow \\\\
	R_{oc} =& r_{ce} ~ \left( 1 + \frac{\beta ~ R_s}{R_s + r_\pi + R_B} \right) \xrightarrow[r_{ce} \gg 1]{} \infty &&& R_o \uparrow\uparrow \\\\
\end{array} $$
^364fd0
