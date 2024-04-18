```tikz
\usepackage{circuitikz} 
\usepackage{pgfplots}
\usepackage{amssymb}
\usetikzlibrary{math}

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
	\end{circuitikz}
	\begin{tikzpicture}[scale=1.5, transform shape]
		\begin{axis}[
			xmin=-0.2, ymin=-0.2,
			xmax=1.2, ymax=1.2, 
			samples=50,
			axis lines=middle,
			xtick={-0.5, 0, 0.5, 1, 1.5},
			ytick={-0.5, 0, 0.5, 1, 1.5},
			minor tick num=5,
			grid=both,
			xticklabel style={anchor={north west}},
			yticklabel style={anchor={south east}},
		]
		  \addplot[orange, ultra thick, domain=0:1] 
			  { -\x * log2(\x) - (1 - \x) * log2(1 - \x) };
		\end{axis}
	\end{tikzpicture}
\end{document}
```