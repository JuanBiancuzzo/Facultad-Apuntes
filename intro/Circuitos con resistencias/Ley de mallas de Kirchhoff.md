---
dia: 2023-08-24
capitulo: 1
tags:
  - intro/Circuitos-con-resistencias
  - nota
---
### Definición
---
Al circular una [[Malla|malla]], la suma de todas las subidas de [[Tensión|tensión]] es igual a la suma de todas las caídas de tensión. Esta parte del principio de [[Conservación de la energía|conservación de la energía]].

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
	\begin{circuitikz}[voltage shift=0.5, scale=1.4, transform shape, thick]
	\tikzmath {
		\dist = 3.7;
	}

	\draw (0, \dist) to[battery1, v_=$V_1$, -*] (0, 0)
		node[below left=2pt] {$A$};
	\draw (0, \dist) 
		to[R,        l_=$R_1$, v^=$V_{R_1}$] ++(\dist, 0)
		to[R,        l_=$R_2$, v^=$V_{R_2}$] ++(0, -\dist)
		to[R,        l_=$R_3$, v^=$V_{R_3}$] ++(-\dist, 0);

	\tikzmath {
		\sep = 0.7;
		\dist = (\dist - 2* \sep);
		\med = \dist / 2;
	}
	
	\draw[red, ultra thick, rounded corners=2em, ->] 
			(\sep, {\med + \sep})
		-- ++(0, \med)
		-- ++(\med, 0);
	\draw[red, ultra thick, rounded corners=2em, ->] 
			({\med + \sep}, {\dist + \sep})
		-- ++(\med, 0)
		-- ++(0, -\med);
	\draw[red, ultra thick, rounded corners=2em, ->] 
			({\dist + \sep}, {\med + \sep})
		-- ++(0, -\med)
		-- ++(-\med, 0);
	\draw[red, ultra thick, rounded corners=2em, ->] 
			({\med + \sep}, \sep)
		-- ++(-\med, 0)
		-- ++(0, \med);

	\end{circuitikz}
\end{document}
```

Entonces $$ \sum_{i=1}^{n} v_i = 0 $$
