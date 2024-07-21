---
dia: 2023-01-23
capitulo: 2
tags:
  - intro/Reducción-de-circuitos
  - nota
---
### Definición
---
Es aquella que genera una [[Tensión|tensión]] entre sus terminales constante e independiente de la carga.

##### Simbología
---

```tikz
\usepackage[
	americanvoltages,
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
	\begin{circuitikz}[voltage shift=0.5, scale=1.5, transform shape, thick]

		\draw (0, 0) to[V, l^=$V$, *-*] ++(0, -3);
		\draw (2, 0) to[battery1, l^=$V$, *-*] ++(0, -3);
		\draw (4, 0) to[battery, l^=$V$, *-*] ++(0, -3);

	\end{circuitikz}
\end{document}
```

