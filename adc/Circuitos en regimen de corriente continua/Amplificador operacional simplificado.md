---
dia: 2023-09-05
capitulo: 1
tags:
  - adc/Circuitos-en-regimen-de-corriente-continua
  - nota
---
### Definición
---
Podemos simplificar un [[Amplificador operacional]], con el siguiente [[Modelo]]

```tikz 
\usepackage{circuitikz} 
\begin{document} 
\begin{circuitikz}[american, voltage shift=0.5] 	
	\coordinate (O) at (0, 0);
    \coordinate (A) at (8, 0);

    \draw (O) to [sV, l_ = $v_s$] ++ (0, 3)
    to [R, l_ = $R_S$, i^ = $i_{in}$] ++ (3, 0)
    to ++ (3, 0)
    to [R, l_ = $R_{in}$] ++ (0, -3)
    to (O);

    \draw (3.5, 3) to[open, v=$v_{in}$, o-o] ++ (0, -3);

    \draw (A) to ++ (6, 0)
    to [R, l_ = $R_{L}$] ++ (0, 3)
    to ++ (-1, 0)
    to [short, i_ = $i_{out}$] ++ (-2, 0)
    to [R, l_ = $R_{out}$] ++ (-3, 0)
    to [sV, l = $A_{vo} ~ v_{in}$] (A);

    \draw (11.25, 3) to[open, v=$v_{out}$, o-o] ++ (0, -3);

    \draw [dashed, blue!50] (-1, -0.5) rectangle (3, 4);
    \node[above = 2pt] (f) at (1, 4) {Fuente};

    \draw (4.5, -0.5) rectangle (10.5, 4);
    \draw [dashed, blue!50] (4.25, -0.75) rectangle (10.75, 4.25);
    \node[above = 2pt] (f) at (7.5, 4.25) {Amplificador};
    
    \draw [dashed, blue!50] (13.25, -0.5) rectangle (15, 3.5);
    \node[above = 2pt] (f) at (14.25, 3.5) {Carga};
\end{circuitikz} 
\end{document} 
```


donde $A_{vo} ~ v_d$ es una [[Fuente de tensión|fuente controlada de tensión]], $R_i$ es la [[Resistor|resistencia]] de entrada, $R_o$ es la [[Resistor|resistencia]] de salida y $A_{vo}$ es la [[Ganancia]] de [[Lazo]] abierto, con $v_0 = A_{vo} \cdot v_d$

Esta simplificación se comporta como el [[Amplificador operacional ideal|ideal]] cuando la relación de [[Tensión]] y la ganancia, no supere en modulo la tensión de alimentación





