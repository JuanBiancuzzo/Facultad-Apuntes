---
dia: 2023-01-23
tags:
  - ingeniería-electrónica/intro/Circuitos-con-resistencias
  - nota/facultad
  - ingeniería-en-informática/fisica-2/Electrostática-en-conductores-y-dieléctricos
---
# Definición
---
[[Camino]] recorrido a través de las distintas ramas o componentes del [[Circuito eléctrico|circuito]] hasta completar un [[Lazo|lazo]] cerrado. No puede contener otros lazos

### Esquematización
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
	\begin{circuitikz}[voltage shift=0.5, scale=1.4, transform shape, thick]
	\tikzmath {
		\dist = 3.7;
	}

	\draw (0, 0) to[battery1, l^=$V_1$, invert, *-] ++(0, \dist)
		to[R, l^=$R_1$, -*] ++(\dist, 0)
		to[battery1, -*] ++(0, -\dist)
		to[R, l^=$R_4$] ++(-\dist, 0);
	
	\draw (0, 0) -- ++(0, -0.75);
	\draw (\dist, 0) -- ++(0, -0.75);
	\draw (\dist, 0) -- ++( 0.75, 0);
	\draw (\dist, \dist) -- ++( 0.75, 0);

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
	
	\path (\sep, \sep) rectangle ++(\dist, \dist)
		node[midway, font=\bfseries, scale=1.1] {Malla};

	\end{circuitikz}
\end{document}
```
