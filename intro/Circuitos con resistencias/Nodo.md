---
dia: 2023-01-23
tags:
  - intro/Circuitos-con-resistencias
  - nota
---
### Definición
---
Un nodo es un punto común en el que se conectan dos o más componentes o [[Rama|ramas]].

##### Esquematización
---
```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.3, transform shape, thick]
	
	\draw (0, 0) to[battery1, l^=$V_g$, v_=$i_4$] ++(-3, -2.25);
	\draw (0, -3) to[short, v=$i_3$] (0, 0);
	\draw (3, 0) to[R, l^=$R_2$, v_=$i_2$] (0, 0);
	\draw (0, 0) to[short, v=$i_1$] ++(-2, 3);

	\filldraw (0, 0) circle (0.2);
	\path (-0.2, 0) node[font=\bfseries, left=2pt] {Nodo};

	\end{circuitikz}
\end{document}
```