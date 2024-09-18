---
dia: 2023-09-03
tags:
  - intro/Circuitos-con-resistencias
  - nota/facultad
---
# Definición
---
Una división de corriente es un [[Circuito eléctrico|circuito]] que divide la [[Corriente eléctrica|corriente]] de entrada en el circuito en otras dos diferentes y más pequeñas de salida, con [[Resistor|resistores]]

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

	\draw (0, 0) to[american, V=$V$, invert] ++(0, 3)
		to[short, v^=$I$] ++(3, 0) node (n1) {}
		to ++(3, 0) node (n2) {};

	\draw (n1.center) to[R, l^=$~R_1$, v_=$I_{R_1}$, *-*] ++(0, -3);
	\draw (n2.center) to[R, l^=$~R_2$, v_=$I_{R_2}$] ++(0, -3)
		to[short] ++(-6, 0);

	\end{circuitikz}
\end{document}
```

Entonces
$$ \begin{align} 
	I_{R_1} &= I_0 ~ \frac{R_2}{R_1 + R_2} \\
	I_{R_2} &= I_0 ~ \frac{R_1}{R_1 + R_2} \\
\end{align} $$
