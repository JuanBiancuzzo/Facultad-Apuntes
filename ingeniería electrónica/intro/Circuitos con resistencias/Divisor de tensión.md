---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/intro/Circuitos-con-resistencias
  - nota/facultad
---
# Definición
---
Un divisor de tensión es un [[Circuito eléctrico|circuito]] que divide la [[Tensión|tensión]] de entrada en el circuito en otras dos diferentes y más pequeñas de salida, con [[Resistor|resistores]]

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

		\draw (0, 0) to[american, V=$V_0$, invert] ++(0, 4)
			to[short, v^=$I_0$] ++(3, 0)
			to[american, R, l_=$R_1~$, v^=$V_1$] ++(0, -2)
			to[american, R, l_=$R_2~$, v^=$V_2$] ++(0, -2)
			to[short] (0, 0);
		
	\end{circuitikz}
\end{document}
```


Entonces
$$ \begin{align} 
	V_{R_1} &= V_0  ~ \frac{R_1}{R_1 + R_2} \\
	V_{R_2} &= V_0  ~ \frac{R_2}{R_1 + R_2} \\
\end{align} $$
