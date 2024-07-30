---
dia: 2023-01-23
tags:
  - intro/Circuitos-con-resistencias
  - nota/facultad
---
### Esquematización
---
```tikz
\usepackage{circuitikz} 
\usetikzlibrary{decorations.pathreplacing}

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
	\node[seven segment bits=0000000 dot off box off] (s0) at (0, 0) {};
	\node[seven segment bits=0000000 dot off box off] (s1) at (1, 0) {};
	\node[seven segment bits=0000000 dot off box off] (s2) at (2, 0) {};
	\node[seven segment bits=0000000 dot none box off] (s3) at (3, 0) {};

	\node[seven segment bits=0000000 dot off box off] (s4) at (5, 0) {};
	\node[seven segment bits=0000000 dot off box off] (s5) at (6, 0) {};
	\node[seven segment bits=0000000 dot off box off] (s6) at (7, 0) {};
	\node[seven segment bits=0000000 dot none box off] (s7) at (8, 0) {};

	\path ($ (s0.center)!0.5!(s3.center) + (0, 0.75) + (s0.north |- 0, 0) $)
		node[above=2pt, scale=1.5] {$ 3 ~ \frac{1}{2}  $};
	
	\path ($ (s0.center)!0.5!(s3.center) + (0, 0.75) + (s4.north |- 0, 0) $)
		node[above=2pt, scale=1.5] {$ 3 ~ \frac{3}{4}  $};

	\path ($ (s0.south) + (0, -0.2) $) -- ($ (s0.south) + (0, -0.8) $)
		node[pos=0, scale=1.3] {$0$}
		node[pos=0.8, scale=1.3] {$1$};
	\draw[decorate, decoration = {brace}, ultra thick] 
		($ (s0.south) + (0.4, -1) $) -- ($ (s0.south) + (-0.4, -1) $)
		node[midway, yshift=-1em, scale=0.8] {Valores $2$}
		node[midway, yshift=-2em, scale=0.8] {Máximo $1$};
	
	\path ($ (s4.south) + (0, -0.2) $) -- ($ (s4.south) + (0, -1.6) $)
		node[pos=0, scale=1.3] {$0$}
		node[pos=0.33, scale=1.3] {$1$}
		node[pos=0.66, scale=1.3] {$2$}
		node[pos=1, scale=1.3] {$3$};
	\draw[decorate, decoration = {brace}, ultra thick] 
		($ (s4.south) + (0.4, -2) $) -- ($ (s4.south) + (-0.4, -2) $)
		node[midway, yshift=-1em, scale=0.8] {Valores $4$}
		node[midway, yshift=-2em, scale=0.8] {Máximo $3$};
	
	\foreach \s in {s1, s2, s3, s5, s6, s7} {
		\path ($ (\s.south) + (0, -0.2) $) -- ($ (\s.south) + (0, -1.2) $)
			node[pos=0, scale=1.3] {$0$}
			node[pos=0.4, scale=1.3] {$\vdots$}
			node[pos=1, scale=1.3] {$9$};
	}
	\draw[decorate, decoration = {brace}, ultra thick] 
		($ (s3.south) + (0.2, -1.6) $) -- ($ (s1.south) + (-0.2, -1.6) $)
		node[midway, yshift=-1em, scale=0.8] {$3$ dígitos}
		node[midway, yshift=-2em, scale=0.8] {completos};
	\draw[decorate, decoration = {brace}, ultra thick] 
		($ (s7.south) + (0.2, -1.6) $) -- ($ (s5.south) + (-0.2, -1.6) $)
		node[midway, yshift=-1em, scale=0.8] {$3$ dígitos}
		node[midway, yshift=-2em, scale=0.8] {completos};

	\end{circuitikz}
\end{document}
```

Esto quiere decir que:
- El primer valor (es siempre entero) corresponde a la cantidad de dígitos que van del 0 al 9 en el display del [[Multímetro]].
- El segundo valor (la fracción) corresponde al primer digito que se muestra en el display. El denominador es la cantidad de valores que tendrá (contando desde el 0) y el numerador es el máximo valor que podrá mostrar. Entonces, se entiende que estos números serán siempre consecutivos.